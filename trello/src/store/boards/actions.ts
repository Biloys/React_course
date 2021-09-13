import { ACTIONS_TYPES } from "./types";

export const fetchBoards = () => ({
  type: ACTIONS_TYPES.FETCH,
});

export const setBoard = (data: Array<any>) => ({
  type: ACTIONS_TYPES.SET_BOARDS,
  payload: data,
});
