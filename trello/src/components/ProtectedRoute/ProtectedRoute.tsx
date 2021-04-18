import React, { FunctionComponent } from "react";
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
} from "react-router-dom";
import { ROUTES_URLS } from "../App/Routes";

interface ProtectedRouteProps extends RouteProps {
  isAuth: boolean;
}

export const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({
  render,
  isAuth,
  ...rest
}: ProtectedRouteProps) => {
  return (
    <Route
      {...rest}
      render={(routeCompProps: RouteComponentProps) =>
        isAuth ? (
          render!(routeCompProps)
        ) : (
          <Redirect
            to={{
              pathname: ROUTES_URLS.LOGIN,
              state: { from: routeCompProps.location },
            }}
          />
        )
      }
    />
  );
};
