// import { uuid } from "uuidv4";
import { ACTION_TYPES } from "./types";
import { Worker, subscribe } from "../../utils";
import { gettoken } from "../auth";

const requestWorker: Worker<any> = async ({ action, next, getState }) => {
  // const requestId = uuid();
  const { REACT_APP_API_DOMAIN, REACT_APP_API_KEY } = process.env;
  const makeUrl = (path: string, authRequired: boolean, token: string) => {
    let url = REACT_APP_API_DOMAIN + path + `?key=${REACT_APP_API_KEY}`;
    if (authRequired && token) {
      url = url + `&token=${token}`;
    }
    return url;
  };

  const { path, onSuccess, method = "GET", authRequired } = action;
  const appState = getState!();
  const token = gettoken(appState);

  const options: any = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(makeUrl(path, authRequired, token), options);

  if (response.status >= 400) {
    console.log("Error");
  }

  const data = await response.json();
  onSuccess(data);
};

const requestMiddleware =
  ({ dispatch, getState }: any) =>
  (next: (action: any) => void) =>
    subscribe(ACTION_TYPES.REQUEST, requestWorker)(next, dispatch, getState);

export const httpMiddlewares = [requestMiddleware];
