import { Middleware } from "redux";
import { ACTIONS_TYPES } from "./types";

const asyncTimeout = async (fn: any, ms: number = 1000) => {
  setTimeout(() => {
    Promise.resolve(fn());
  }, ms);
};

export const asyncIncrease: Middleware = () => (next: any) => {
  return async (action: any) => {
    console.log("@@CounterMIddlewares", action);

    if (action.type === ACTIONS_TYPES.INCREASE_COUNT) {
      await asyncTimeout(() => {
        console.log("hello guys");
        next(action);
      }, 2000);
    } else {
      next(action);
    }
  };
};
