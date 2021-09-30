import { makeAutoObservable } from "mobx";
import { APP_TOKEN } from "../constants";
import { getFromLocalStorages } from "../utils";

export class AuthStore {
  token: any = "";

  constructor() {
    this.readToken();
    makeAutoObservable(this);
  }

  private readToken() {
    const token = getFromLocalStorages(APP_TOKEN);
    if (token) {
      this.token = token;
    }
  }
}
