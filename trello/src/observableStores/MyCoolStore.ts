import { makeAutoObservable } from "mobx";

class MyCoolStore {
  private _value: number = 0;

  constructor() {
    makeAutoObservable(this);
  }
  public increase = () => {
    this._value = this._value + 1;
  };

  public get value() {
    return this._value;
  }
}

export { MyCoolStore };
