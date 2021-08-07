import {
  getFromLocalStorages,
  setToLocalStorages,
  subscribe,
} from "../../utils";
import { request } from "../http";
import { Action } from "../types";
import { setToken } from "./actions";
import { ACTION_TYPES } from "./types";

const APP_TOKEN = "TREELLO_CUSTOM_APP_TOKEN";

const authMiddleware =
  ({ dispatch }: any) =>
  (next: any) =>
  (action: Action<ACTION_TYPES>) => {
    if (action.type === ACTION_TYPES.SET_TOKEN) {
      console.log("TOKEN SET!");
      setToLocalStorages(APP_TOKEN, action.payload);
      // dispatch(
      //   request({
      //     path: "https://jsonplaceholder.typicode.com/posts/",
      //     onSuccess: (data) => {
      //       console.log("SUCCESS get Data -> ", data);
      //     },
      //   })
      // );
    }
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
export const authMiddlewares = [authMiddleware, readTokenMiddleware];
