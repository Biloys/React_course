import { Middleware } from "redux";
import { ACTIONS_TYPES } from "./types";

export const asyncIncrease: Middleware = () => (next: any) => {
  return async (action: any) => {
    if (action.type === ACTIONS_TYPES.INCREASE_COUNT) {
      console.log("timer");
      next(action);
    } else {
      next(action);
    }
  };
};
