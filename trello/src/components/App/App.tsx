import * as React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { setToLocalStorages, getFromLocalStorages } from "../utils";
import { RouteChildrenProps, RouteComponentProps } from "react-router";
import { OAuth } from "../OAuth";
import { ProtectedRoute } from "../ProtectedRoute";

import { AppRoute, routes, ROUTES_URLS } from "./Routes";
import { Header } from "../Header";

import styles from "./app.module.scss";

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

interface CustomToken {
  token?: string;
  emptyToken?: string;
}

const INITIAL_STATE = { token: "", userProfile: undefined, boards: [] };
const emptyToken = "";

interface AppProps extends RouteComponentProps {}

class App extends React.Component<AppProps, AppState> {
  public state = INITIAL_STATE;

  componentDidMount() {
    this.getToken();
  }

  private async getToken() {
    if (this.state.token) {
      return;
    }
    const { token } = getFromLocalStorages<CustomToken>(TOKEN_STORAGE_KEY);
    if (!token) {
      return this.navigationToLogin;
    }

    const url = `https://api.trello.com/1/members/me/?key=${REACT_APP_API_KEY}&token=${token}`;

    const response = await fetch(url);

    if (response.status === 200 && response.ok === true) {
      const userProfile = response.json();
      this.setProfile(userProfile);
      this.setToken(token);
      return this.navigationToDashboard();
    }

    return this.navigationToLogin;
  }

  private setProfile(userProfile: any) {
    this.setState({ userProfile });
  }

  private navigationToDashboard() {
    this.props.history.push(ROUTES_URLS.DASHBOARD);
  }

  private navigationToLogin() {
    this.props.history.push(ROUTES_URLS.LOGIN);
  }

  private setToken = (token: any) => {
    this.setState({ token });
    setToLocalStorages<CustomToken>(TOKEN_STORAGE_KEY, {
      token,
    });
  };

  private get isLoggedIn() {
    return !!this.state.token;
  }

  private renderHeader() {
    return <Header logOut={this.logOut} />;
  }

  private logOut = () => {
    this.setState(INITIAL_STATE);
    this.navigationToLogin();
    setToLocalStorages<CustomToken>(TOKEN_STORAGE_KEY, { emptyToken });
  };

  private renderContent() {
    return (
      <main className={styles.content}>
        <Switch>
          {routes.map(this.renderRoute)}
          <Route
            path={ROUTES_URLS.OAUTH}
            render={(props: RouteChildrenProps) => (
              <OAuth {...props} onSetToken={this.setToken} />
            )}
          />
          <Redirect to={ROUTES_URLS.NOT_FOUND} />
        </Switch>
      </main>
    );
  }

  private renderRoute = (route: AppRoute, i: number) => {
    if (route.isProtected) {
      return <ProtectedRoute {...route} key={i} isAuth={this.isLoggedIn} />;
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
        {this.renderHeader()}
        {this.renderContent()}
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);

export { AppWithRouter as App };
