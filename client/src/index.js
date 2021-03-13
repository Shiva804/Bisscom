import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import App from "./App";
import CustomerDetails from "./pages/customerDetails";
import { ProtectedRoute } from "./protectedRoute";

const Routing = (
  <Router>
    <div id="routing-container">
      <Switch>
        <Route path="/" exact component={App}></Route>
        <ProtectedRoute
          path="/dashboard"
          exact
          component={Dashboard}
        ></ProtectedRoute>

        <ProtectedRoute
          path="/customerDetails"
          exact
          component={CustomerDetails}
        ></ProtectedRoute>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(Routing, document.getElementById("root"));
