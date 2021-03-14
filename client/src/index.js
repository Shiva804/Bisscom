import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./pages/home";
import { UserDetail } from "./pages/UserDetail";
import App from "./App";
import CustomerDetails from "./pages/customerDetails";

import { ProtectedRoute } from "./protectedRoute";
import Community from "./pages/community";

const Routing = (
  <Router>
    <div id="routing-container">
      <Switch>
        <Route path="/" exact component={App}></Route>
        <ProtectedRoute
          path="/dashboard"
          exact
          component={Home}
        ></ProtectedRoute>

        <ProtectedRoute
          path="/customerDetails"
          exact
          component={CustomerDetails}
        ></ProtectedRoute>

        <ProtectedRoute
          path="/community"
          exact
          component={Community}
        ></ProtectedRoute>
        <ProtectedRoute
          path="/userDetail"
          exact
          component={UserDetail}
        ></ProtectedRoute>
        <Route path="*" component={() => "404 NOT FOUND"}></Route>
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(Routing, document.getElementById("root"));
