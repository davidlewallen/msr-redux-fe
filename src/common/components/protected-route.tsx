import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { useAuth } from "../hooks/use-auth";

interface IProps extends RouteProps {
  isProtected?: boolean;
}

export const ProtectedRoute = ({
  children,
  path = "",
  exact = false,
  isProtected = true,
}: IProps) => {
  useAuth();
  const isAuth = true;
  return (
    <Route exact={exact} path={path}>
      {isProtected && isAuth ? children : <Redirect to="/login" />}
    </Route>
  );
};
