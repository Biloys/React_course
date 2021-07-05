import { ACTIONS_TYPES } from "./types";

//action creator
export const increaseCount = () => ({
  //action
  type: ACTIONS_TYPES.INCREASE_COUNT,
});

export const decreaseCount = () => ({
  //action
  type: ACTIONS_TYPES.DECREASE_COUNT,
});
