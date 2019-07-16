import React from "react";
import Button from "react-bootstrap/Button";

var buttonStyle = {
  marginTop: "20px"
};

function ToggleButton(props) {
  return (
    <>
      <Button
        style={buttonStyle}
        variant="outline-primary"
        onClick={props.onToggle}
      >
        Register
      </Button>
    </>
  );
}

export default ToggleButton;
