import {
  getFromLocalStorages,
  setToLocalStorages,
  subscribe,
} from "../../utils";
import { request } from "../http";
import { Action } from "../types";
import { setToken } from "./actions";
import { ACTION_TYPES } from "./types";
import { push } from "connected-react-router";
import { ROUTES_URLS } from "../../components/App";
import { navigate } from "../router";

const APP_TOKEN = "TREELLO_CUSTOM_APP_TOKEN";

const setTokenWorker = ({ action, next, dispatch }: any) => {
  setToLocalStorages(APP_TOKEN, action.payload);
  dispatch(navigate(ROUTES_URLS.DASHBOARD));
  next(action);
};

const readTokenWorker = ({ action, next, dispatch }: any) => {
  const token = getFromLocalStorages(APP_TOKEN);
  if (token) {
    dispatch(setToken(token));
  }
  next(action);
};

const readTokenMiddleware =
  ({ dispatch }: any) =>
  (next: any) =>
    subscribe(ACTION_TYPES.READ_TOKEN, readTokenWorker)(next, dispatch);

const setTokenMiddleware =
  ({ dispatch }: any) =>
  (next: any) =>
    subscribe(ACTION_TYPES.SET_TOKEN, setTokenWorker)(next, dispatch);

export const authMiddlewares = [setTokenMiddleware, readTokenMiddleware];
