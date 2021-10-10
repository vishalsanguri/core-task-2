import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
