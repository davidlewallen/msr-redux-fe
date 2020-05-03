import React from "react";
import { Switch, Route } from "react-router-dom";

import { CreateAccount } from "./create-account";
import { Login } from "./login";
import { VerifyEmail } from "./verify-email";
import { Dashboard } from "./dashboard";
import { ProtectedRoute } from "../common/components/protected-route";

export const Routes = () => (
  <Switch>
    <Route exact path="/">
      Home Route
    </Route>
    <Route path="/create-account">
      <CreateAccount />
    </Route>

    <Route path="/login">
      <Login />
    </Route>

    <Route path="/verify-email">
      <VerifyEmail />
    </Route>

    <ProtectedRoute path="/dashboard">
      <Dashboard />
    </ProtectedRoute>
  </Switch>
);
