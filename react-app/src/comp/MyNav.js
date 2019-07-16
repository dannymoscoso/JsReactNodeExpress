import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import LogOutButton from "./LogOutButton";

function MyNav(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/home/">Danny JS Practice</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home/spotify/">SpotifyAPI</Nav.Link>
          <Nav.Link href="/home/bootstrap/">Bootstrap</Nav.Link>
          <Nav.Link href="/home/topics">NestedStuff</Nav.Link>
        </Nav>
        <LogOutButton />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNav;
