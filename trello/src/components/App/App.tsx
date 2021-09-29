import * as React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { RouteChildrenProps } from "react-router";
import { OAuth } from "../OAuth";
import { ProtectedRoute } from "../ProtectedRoute";

import { AppRoute, routes, ROUTES_URLS } from "./Routes";
import { Header } from "../Header";

import styles from "./app.module.scss";
import { inject } from "mobx-react";
import { STORE_IDS } from "../../observableStores";
import { UiStore } from "../../observableStores/UiStore";
import { observer } from "mobx-react";
import { Board } from "../../types";
import { Notifications } from "../Notifications";

interface AppState {}

const INITIAL_STATE = { token: "", userProfile: undefined, boards: [] };

interface AppProps {
  [STORE_IDS.UI]?: UiStore;
}

@inject(STORE_IDS.UI)
@observer
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
        <Notifications />
        {this.renderContent()}
      </div>
    );
  }
}

export { App };
