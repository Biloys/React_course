import { makeAutoObservable } from "mobx";

export class NotificationsStore {
  _notifications: Array<{ message: string; id: string }> = [];
  constructor() {
    makeAutoObservable(this);
  }
  get notifications() {
    return this._notifications;
  }

  show(message: string) {
    this._notifications.push({ message, id: "" + Date.now() });
  }
}
