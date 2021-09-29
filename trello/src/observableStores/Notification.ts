import { observable } from "mobx";
import { stringify } from "querystring";

export class NotificationsStore {
  @observable _notifications: Array<{ message: string; id: string }> = [];

  get notifications() {
    return this._notifications;
  }

  show(message: string) {
    this._notifications.push({ message, id: "" + Date.now() });
  }
}
