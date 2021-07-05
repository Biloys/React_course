import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import counter, { CounterState } from "./counter";
import auth, { AuthState, authMiddlewares } from "./auth";
export interface AppState {
  counter: CounterState;
  auth: AuthState;
}

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? //@ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export default function configureStore() {
  const rootReducer = combineReducers<AppState>({
    counter,
    auth,
  });

  return createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(...authMiddlewares))
  );
}

export * from "./counter";
export * from "./auth";
