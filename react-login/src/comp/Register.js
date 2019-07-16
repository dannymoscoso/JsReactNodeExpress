import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

// just makes some space around a button
var buttonStyle = {
  marginTop: "20px"
};

var buttonStyle1 = {
  fontSize: 12,
  margin: 4
};

var buttonalign = {
  textAlign: "center"
};

var regexlletter = RegExp("[a-z]");
var regexuletter = RegExp("[A-Z]");
var regexnum = RegExp("[0-9]");
var regexspec = RegExp("[!@#$&]");
var regexeight = RegExp(".{8,}");

const badBadgeState = { variant: "light" };
const goodBadgeState = { variant: "success" };

// function gets props from App.js ( <Register goBack={handleRegToggle} /> )
function Register(props) {
  var errorParam = new URLSearchParams(window.location.search).get("error");

  console.log(errorParam);

  var [password, setPassword] = useState("");
  var [password1, setPassword1] = useState("");
  console.log("Rerender!");
  console.log(password, password1);
  // As soon as the register component is rendered it sets disabled state to true (the post button is disabled)

  //var [isButtonClickable, setButtonClickable] = useState(false);

  //  it also sets the current state password to empty string

  const handleOnChangepass0 = e => {
    setPassword(e.target.value);
  };
  // if state password is the same as password1 set disabled state to false (making the post button clickable)
  const handleOnChangepass1 = e => {
    setPassword1(e.target.value);
  };

  let uppercaseBadgeOK = regexuletter.test(password);
  let lowercaseBadgeOK = regexlletter.test(password);
  let numberBadgeOK = regexnum.test(password);
  let specialBadgeOK = regexspec.test(password);
  let eightBadgeOK = regexeight.test(password);

  let isButtonClickable =
    uppercaseBadgeOK &&
    lowercaseBadgeOK &&
    numberBadgeOK &&
    specialBadgeOK &&
    eightBadgeOK &&
    password === password1;

  return (
    <>
      {/* Render a bootstrap Form */}

      <Form action="/register" method="post">
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter Username"
            required
            name="username"
          />
          <Form.Text className="text-muted">
            We'll never share your username with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasipasswordword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            name="password"
            onChange={handleOnChangepass0}
          />
        </Form.Group>

        <div style={buttonalign}>
          <Badge
            size="sm"
            style={buttonStyle1}
            {...(uppercaseBadgeOK ? goodBadgeState : badBadgeState)}
          >
            Upper Case
          </Badge>
          <Badge
            size="sm"
            style={buttonStyle1}
            {...(lowercaseBadgeOK ? goodBadgeState : badBadgeState)}
          >
            Lower Case
          </Badge>
          <Badge
            size="sm"
            style={buttonStyle1}
            {...(numberBadgeOK ? goodBadgeState : badBadgeState)}
          >
            Numbers
          </Badge>
          <Badge
            size="sm"
            style={buttonStyle1}
            {...(specialBadgeOK ? goodBadgeState : badBadgeState)}
          >
            Special Characters
          </Badge>
          <Badge
            size="sm"
            style={buttonStyle1}
            {...(eightBadgeOK ? goodBadgeState : badBadgeState)}
          >
            8 Characters
          </Badge>
        </div>

        <Form.Group controlId="formBasipasswordword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            name="password1"
            onChange={handleOnChangepass1}
          />
          <Form.Text className="text-muted">Enter Your Pass Again</Form.Text>
        </Form.Group>
        {/* button that lets u post if disabledstate = false  */}
        <Button variant="primary" type="submit" disabled={!isButtonClickable}>
          Make An Account
        </Button>
      </Form>
      {/* goBack passes up (<Register goBack={handleRegToggle} /> in App.js)
      so basically onClick executes handleregtoggle on App.js */}
      <Button
        variant="secondary"
        type="submit"
        onClick={props.goBack}
        style={buttonStyle}
      >
        {`<-`}
      </Button>
    </>
  );
}

export default Register;
