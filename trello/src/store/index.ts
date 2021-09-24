import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import { History } from "history";
import counter, { CounterState } from "./counter";
import auth, { AuthState, authMiddlewares } from "./auth";
import http, { httpMiddlewares, HTTPState } from "./http";
import { initMiddleware } from "./initialization";
import connectRouter from "./router";
import thunk from "redux-thunk";

import boards, { boardsMiddleware } from "./boards";
export interface AppState {
  counter: CounterState;
  auth: AuthState;
  http: HTTPState;
  router?: any;
  boards?: any;
}

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? //@ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export default function configureStore(history: History) {
  const rootReducer = combineReducers<AppState>({
    router: connectRouter(history),
    boards,
    counter,
    auth,
    http,
  });

  return createStore(
    rootReducer,
    undefined,
    composeEnhancers(
      applyMiddleware(
        thunk,
        ...authMiddlewares,
        ...httpMiddlewares,
        ...initMiddleware,
        ...boardsMiddleware
      )
    )
  );
}

export * from "./counter";
export * from "./auth";
