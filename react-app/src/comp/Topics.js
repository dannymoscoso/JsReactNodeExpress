import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Topic({ match }) {
  return (
    <h3>
      Requested Param: {match.params.id}
      <br />
      {match.url}
    </h3>
  );
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

export default Topics;
