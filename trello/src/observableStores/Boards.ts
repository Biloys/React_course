import { makeAutoObservable, observable } from "mobx";
import { BoardsApi } from "../apis/BoardsApi";
import { BoardsCollection } from "../types";
import { AuthStore } from "./Auth";
import { NotificationsStore } from "./Notification";

export class BoardsStore {
  @observable private _list: BoardsCollection = [];

  constructor(
    private _auth: AuthStore,
    private _api: BoardsApi,
    private _notifications: NotificationsStore
  ) {
    makeAutoObservable(this);
  }

  public get list() {
    return this._list;
  }

  public async fetchBoards() {
    try {
      const { token } = this._auth;
      const list = await this._api.fetch(token);
      this._list = list;
    } catch (e) {
      this._notifications.show("Something went wrong");
    }
  }
}
