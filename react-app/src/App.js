import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Site from "./comp/Site";
import MyNav from "./comp/MyNav";
import LandingPage from "./comp/LandingPage";
import SpotifyPage from "./comp/SpotifyPage";
import Topics from "./comp/Topics";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <MyNav />
        <Container>
          <Row>
            <Col>
              <Switch>
                <Route path="/home/spotify/" component={SpotifyPage} />
                <Route path="/home/bootstrap/" component={Site} />
                <Route path="/home/topics" component={Topics} />
                <Route path="/home/" component={LandingPage} />
                <Route component={LandingPage} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
