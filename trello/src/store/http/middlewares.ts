// import { uuid } from "uuidv4";
import { ActionHttp, ACTION_TYPES } from "./types";
import { Worker, subscribe } from "../../utils";

const requestWorker: Worker<any> = async ({ action }) => {
  // const requestId = uuid();

  const { path, onSuccess, method = "GET" } = action;

  const options: any = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(path, options);

  if (response.status >= 400) {
    console.log("Error");
  }

  const data = await response.json();
  onSuccess(data);
};

const requestMiddleware =
  ({ dispatch, getState }: any) =>
  (next: (action: any) => void) =>
    subscribe(
      ACTION_TYPES.REQUEST,
      requestWorker
    )(next, dispatch, getState );

export const httpMiddlewares = [requestMiddleware];
