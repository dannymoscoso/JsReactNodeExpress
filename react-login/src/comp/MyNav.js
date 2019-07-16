import React from "react";
import Navbar from "react-bootstrap/Navbar";
import taco from "../images/taco.svg";

function MyNav() {
  return (
    <div>
      <Navbar bg="light">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={taco}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        Danny Moscoso
      </Navbar>
    </div>
  );
}

export default MyNav;
