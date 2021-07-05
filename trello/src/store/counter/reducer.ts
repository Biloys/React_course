import { ACTIONS_TYPES } from "./types";

export interface CounterState {
  count: number;
}

export const INITIAL_STATE = {
  count: 0,
};

export default (state: CounterState = INITIAL_STATE, { type }: any) => {
  switch (type) {
    case ACTIONS_TYPES.INCREASE_COUNT:
      return { ...state, count: state.count + 1 };
    case ACTIONS_TYPES.DECREASE_COUNT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
