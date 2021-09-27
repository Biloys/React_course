import * as React from "react";
import * as ReactDOM from "react-dom";

import { createBrowserHistory } from "history";
import { App } from "./components/App";

import configureStore from "./store";
import { Provider as ReduxProvider } from "react-redux";
import { Provider } from "mobx-react";
import { init } from "./store/initialization";
import { ConnectedRouter } from "connected-react-router";
import { MyCoolStore } from "./observables/MyCoolStore";

const history = createBrowserHistory();
const store = configureStore(history);
store.dispatch(init());

const mobxStore = new MyCoolStore();

setInterval(() => mobxStore.increase(), 1000);

ReactDOM.render(
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <Provider myCoolStore={mobxStore}>
        <App />
      </Provider>
    </ConnectedRouter>
  </ReduxProvider>,
  document.querySelector("#root")
);
