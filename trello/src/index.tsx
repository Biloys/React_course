import * as React from "react";
import * as ReactDOM from "react-dom";

import { createBrowserHistory } from "history";
import { App } from "./components/App";

import configureStore from "./store";
import { Provider } from "react-redux";
import { init } from "./store/initialization";
import { ConnectedRouter } from "connected-react-router";

const history = createBrowserHistory();
const store = configureStore(history);
store.dispatch(init());

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.querySelector("#root")
);
