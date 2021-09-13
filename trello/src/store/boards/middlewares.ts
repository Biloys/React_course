import { subscribe } from "../../utils";
import { request } from "../http";
import { ACTIONS_TYPES } from "./types";
import { setBoard } from "./actions";

const fetchBoardsWorker = ({ action, next, dispatch }: any) => {
  console.log("fetched");
  dispatch(
    request({
      path: "/1/members/me/boards",
      authRequired: true,
      onSuccess: (data) => {
        console.log(data);
        dispatch(setBoard(data));
      },
      onError: (error) => {
        console.log(error);
      },
    })
  );
};

const fetchMiddleware =
  ({ dispatch }: any) =>
  (next: any) =>
    subscribe(ACTIONS_TYPES.FETCH, fetchBoardsWorker)(next, dispatch);

export const boardsMiddleware = [fetchMiddleware];
