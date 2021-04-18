import React, { FunctionComponent } from "react";
import { Redirect, RouteChildrenProps } from "react-router";
import { ROUTES_URLS } from "../App/Routes";

interface OAuthProps extends RouteChildrenProps {
  onSetToken: (token: string) => void;
}

export const OAuth: FunctionComponent<OAuthProps> = ({
  location: { hash },
  onSetToken,
}: OAuthProps) => {
  const token = hash.split("=")[1];
  onSetToken(token);
  return <Redirect to={ROUTES_URLS.DASHBOARD} />;
};
