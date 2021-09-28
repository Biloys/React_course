import { ACTION_TYPES } from "./types";
import { Worker, subscribe } from "../../utils";
import { gettoken } from "../auth";
import { makeUrl } from "../../utils/makeUrls";

const requestWorker: Worker<any> = async ({ action, next, getState }) => {
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
