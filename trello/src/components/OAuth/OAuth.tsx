import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Redirect, RouteChildrenProps } from "react-router";
import { setToken } from "../../store/auth";
import { ROUTES_URLS } from "../App/Routes";

interface OAuthProps extends RouteChildrenProps {
  onSetToken?: (token: string) => void;
}

const OAuth: FunctionComponent<OAuthProps> = ({
  location: { hash },
  onSetToken,
}: OAuthProps) => {
  const token = hash.split("=")[1];
  onSetToken && onSetToken(token);
  return <Redirect to={ROUTES_URLS.DASHBOARD} />;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSetToken: (token: string) => dispatch(setToken(token)),
  };
};

const ConnectedOAuth = connect(undefined, mapDispatchToProps)(OAuth);

export { ConnectedOAuth as OAuth };
