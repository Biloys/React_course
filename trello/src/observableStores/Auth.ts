import { observable } from "mobx";
import { APP_TOKEN } from "../constants";
import { getFromLocalStorages } from "../utils";

export class AuthStore {
  @observable token: any = "";

  constructor() {
    this.readToken();
  }

  private readToken() {
    const token = getFromLocalStorages(APP_TOKEN);
    if (token) {
      this.token = token;
    }
  }
}
