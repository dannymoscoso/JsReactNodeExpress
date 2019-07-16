import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MyNav from "./comp/MyNav";
import Login from "./comp/Login";
import ToggleButton from "./comp/ToggleButton";
import Register from "./comp/Register";

var goodstyle = {
  color: "green",
  textAlign: "center"
};

var badstyle = {
  color: "red",
  textAlign: "center"
};

function App() {
  var loginParam = new URLSearchParams(window.location.search);

  let registerMessage = loginParam.has("message")
    ? loginParam.get("message")
    : null;

  let registerErrorMessage = loginParam.has("error")
    ? loginParam.get("error")
    : null;

  let loginErrorMessage = loginParam.has("loginError")
    ? loginParam.get("loginError")
    : null;

  console.log(loginParam);

  // startup state = "login" stored inside the page variable
  var [page, setPage] = useState("login");

  // function executes a setPage function that changes the page variable accordingly
  // if u are on the login page ? (change the page variable to register) : (if not keep it login)
  // This function is called when the user clicks the REGISTER toggle button

  var handleOnToggle = () => {
    setPage(page === "login" ? "register" : "login");
  };

  // function executes a setPage function that changes the page variable accordingly
  // if u are on the login page ? (change the page variable to register) : (if not keep it login)
  // This function is called when the user clicks the BACK toggle button
  var handleRegToggle = () => {
    setPage(page === "login" ? "register" : "login");
  };

  // App js returns rendered react bootstrap

  return (
    <>
      {/* render a nav bar on top of everything */}
      <MyNav />
      {/* Container & Row for Bootstrap layout*/}
      <Container>
        <Row>
          <Col />

          {/* middle column takes up 7/12
          As soon as the page renders it checks the page state, which by default is login
          If it is login, render the login component and the register toggle button function
          : if its not in login state render Register component with the go back property using the function */}
          <Col xs={7}>
            {page === "login" ? (
              <>
                {registerMessage && (
                  <h5 style={goodstyle}>Please Login Now!</h5>
                )}
                {registerErrorMessage ? (
                  <h5 style={badstyle}>Username Taken</h5>
                ) : (
                  <div />
                )}
                {loginErrorMessage ? (
                  <h5 style={badstyle}>Login Error</h5>
                ) : (
                  <div />
                )}
                <Login /> <ToggleButton onToggle={handleOnToggle} />
              </>
            ) : (
              <>
                <Register goBack={handleRegToggle} />
              </>
            )}
          </Col>
          <Col />
        </Row>
      </Container>
    </>
  );
}

export default App;
