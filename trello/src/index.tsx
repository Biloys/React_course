import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store";
import { Provider } from "react-redux";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
