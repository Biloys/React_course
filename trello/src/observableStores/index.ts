import { BoardsApi } from "../apis/BoardsApi";
import { Counter } from "./Counter";
import { AuthStore } from "./Auth";
import { BoardsStore } from "./Boards";
import { MyCoolStore } from "./MyCoolStore";
import { NotificationsStore } from "./Notification";
import { UiStore } from "./UiStore";

export enum STORE_IDS {
  UI = "ui",
  CollStore = "myCollStore",
  AUTH = "auth",
  BOARDS = "boards",
  NOTIFICATION = "notifications",
  COUNTER = "counter",
}

const apis = {
  [STORE_IDS.BOARDS]: new BoardsApi(),
};

const auth = new AuthStore();
const notifications = new NotificationsStore();

const stores = {
  [STORE_IDS.CollStore]: new MyCoolStore(),
  [STORE_IDS.UI]: new UiStore(),
  [STORE_IDS.AUTH]: auth,
  [STORE_IDS.NOTIFICATION]: notifications,
  [STORE_IDS.BOARDS]: new BoardsStore(
    auth,
    apis[STORE_IDS.BOARDS],
    notifications
  ),
  [STORE_IDS.COUNTER]: new Counter(),
};

export { stores };
