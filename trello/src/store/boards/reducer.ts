import { ACTIONS_TYPES } from "./types";
import { Action } from "../types";

interface BoardsState {
  list: Array<any>;
  selected: string;
}

const INITIAL_STATE = {
  list: [],
  selected: "",
};
export default (
  state: BoardsState = INITIAL_STATE,
  { type, payload }: Action<any>
) => {
  switch (type) {
    case ACTIONS_TYPES.SET_BOARDS:
      return { ...state, list: payload };
    default:
      return state;
  }
};
