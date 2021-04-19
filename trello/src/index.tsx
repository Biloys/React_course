import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, compose } from "redux";
import { App } from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { mainReducer } from "./store";
import { Provider } from "react-redux";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? //@ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(mainReducer, undefined, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
