import { gettoken } from "../auth";
import { ACTIONS_TYPES } from "./types";
const { REACT_APP_API_DOMAIN, REACT_APP_API_KEY } = process.env;

const makeUrl = (path: string, authRequired: boolean, token: string) => {
  let url = REACT_APP_API_DOMAIN + path + `?key=${REACT_APP_API_KEY}`;
  if (authRequired && token) {
    url = url + `&token=${token}`;
  }
  return url;
};

export const fetchBoards = () => async (dispatch: any, getState: any) => {
  const appState = getState!();
  const token = gettoken(appState);

  const options: any = {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(
    makeUrl("/1/members/me/boards", true, token),
    options
  );
  const data = await response.json();
  dispatch(setBoard(data));
};

export const setBoard = (data: Array<any>) => ({
  type: ACTIONS_TYPES.SET_BOARDS,
  payload: data,
});
