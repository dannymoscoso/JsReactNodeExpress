import React from "react";
import Button from "react-bootstrap/Button";

function LogOutButton() {
  return (
    <Button variant="primary" href="/logout">
      Logout
    </Button>
  );
}

export default LogOutButton;
