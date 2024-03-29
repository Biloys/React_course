import { ACTION_TYPES } from "./types";

export const setToken = (token: any) => ({
  type: ACTION_TYPES.SET_TOKEN,
  payload: token,
});

export const readToken = () => ({
  type: ACTION_TYPES.READ_TOKEN,
});
