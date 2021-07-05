import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
} from "react-router-dom";
import { AppState, isAuthenticated } from "../../store";
import { ROUTES_URLS } from "../App/Routes";

interface ProtectedRouteProps extends RouteProps {
  isAuth?: boolean;
}

const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({
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

const mapStateToProps = (state: AppState) => {
  return {
    isAuth: isAuthenticated(state),
  };
};

const ConnectedRoute = connect(mapStateToProps)(ProtectedRoute);

export { ConnectedRoute as ProtectedRoute };
