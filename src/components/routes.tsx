import React from "react";
import { Route } from "react-router-dom";

import { CreateAccount } from "./create-account";
import { Login } from "./login";

export const Routes = () => (
  <>
    <Route exact path="/">
      Home Route
    </Route>
    <Route path="/create-account">
      <CreateAccount />
    </Route>

    <Route path="/login">
      <Login />
    </Route>
  </>
);
