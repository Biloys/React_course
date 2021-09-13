import * as React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { setToLocalStorages, getFromLocalStorages } from "../../utils";
import { RouteChildrenProps, RouteComponentProps } from "react-router";
import { OAuth } from "../OAuth";
import { ProtectedRoute } from "../ProtectedRoute";

import { AppRoute, routes, ROUTES_URLS } from "./Routes";
import { Header } from "../Header";

import styles from "./app.module.scss";
import { init } from "../../store/initialization";
import { connect } from "react-redux";

const TOKEN_STORAGE_KEY = "TOKEN";
const { REACT_APP_API_KEY } = process.env;
interface Board {
  id: string;
  name: string;
  pinned: boolean;
  desc?: string;
}

interface AppState {
  token: string;
  boards: Array<Board>;
  userProfile: any;
}

const INITIAL_STATE = { token: "", userProfile: undefined, boards: [] };
const emptyToken = "";

interface AppProps {}

class App extends React.Component<AppProps, AppState> {
  public state = INITIAL_STATE;

  private renderContent() {
    return (
      <main className={styles.content}>
        <Switch>
          {routes.map(this.renderRoute)}
          <Route
            path={ROUTES_URLS.OAUTH}
            render={(props: RouteChildrenProps) => <OAuth {...props} />}
          />
          <Redirect to={ROUTES_URLS.NOT_FOUND} />
        </Switch>
      </main>
    );
  }

  private renderRoute = (route: AppRoute, i: number) => {
    if (route.isProtected) {
      return <ProtectedRoute {...route} key={i} />;
    } else {
      return (
        <Route
          key={i}
          path={route.path}
          exact
          render={(props) => route.render({ ...props })}
        />
      );
    }
  };

  public render() {
    return (
      <div>
        <Header logOut={() => console.log("log-out")} />
        {this.renderContent()}
      </div>
    );
  }
}

export { App };
