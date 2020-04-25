import React from "react";
import { Route } from "react-router-dom";

import { CreateAccount } from "./create-account";
import { VerifyEmail } from "./verify-email";

export const Routes = () => (
  <>
    <Route exact path="/">
      Home Route
    </Route>
    <Route path="/create-account">
      <CreateAccount />
    </Route>

    <Route path="/verify-email">
      <VerifyEmail />
    </Route>

    <Route path="/login">Login Route</Route>
  </>
);
