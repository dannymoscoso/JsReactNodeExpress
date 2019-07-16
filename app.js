const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const bcrypt = require("bcrypt");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);
const { query, pool } = require("./db");

const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
const saltRounds = 10;

app.use(
  session({
    store: new pgSession({
      pool: pool // Connection pool
    }),
    secret: process.env.FOO_COOKIE_SECRET || "jklsajkldauiosdajkldaho:dahkl",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1 * 24 * 60 * 60 * 1000 } // 1 days
  })
);

app.get("/logout", function(req, res) {
  if (req.session.user) {
    req.session.destroy(function(err) {
      console.log("LOGGGED OUT");
      res.redirect("/");
    });
  } else {
    res.redirect("/");
  }
});

app.post("/login", async function(req, res) {
  var text = "SELECT * FROM users WHERE username = $1";
  try {
    let { rows } = await query(text, [req.body.username]);
    if (rows.length === 1) {
      let [user] = rows;
      const match = await bcrypt.compare(
        req.body.password,
        user.hashedpassword
      );
      if (match) {
        req.session.user = req.body.username;
        console.log("Logged IN");
        res.redirect("/");
      } else {
        res.redirect("/?loginError=true");
      }
    } else {
      res.redirect("/?loginError=true");
    }
  } catch (e) {
    console.log(e);
    res.redirect("/?loginError=true");
  }
});

// Register POST request -- post request to what url? probably need some routes folder stuff

app.post("/register", async function(req, res) {
  try {
    var text =
      "INSERT INTO users(username, hashedpassword) VALUES($1, $2) RETURNING *";
    let hash = await bcrypt.hash(req.body.password, saltRounds);

    var values = [req.body.username, hash];
    let result = await query(text, values);
    res.redirect("/?message=pleaselogin");

    // res.send(workingstring + "<br> Submitted Successfully!");
  } catch (e) {
    var errormsg = "true";
    if (e.constraint === "users_username_key") {
      errormsg = "username_taken";
    }
    res.redirect("/?error=" + errormsg);
  }
});

app.use(express.static(path.resolve("react-login", "build"), { index: false }));
app.use(express.static(path.resolve("react-app", "build"), { index: false }));

// Get request at root server sends index
app.get("/*", function(req, res) {
  if (req.session.user) {
    res.sendFile(path.resolve("react-app", "build", "index.html"));
  } else {
    res.sendFile(path.resolve("react-login", "build", "index.html"));
  }
  // console.log("HIII");
});

module.exports = app;
