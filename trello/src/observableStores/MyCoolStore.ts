import { action, computed, observable } from "mobx";

class MyCoolStore {
  @observable private _value: number = 0;

  @action
  public increase = () => {
    this._value = this._value + 1;
  };

  @computed
  public get value() {
    return this._value;
  }
}

export { MyCoolStore };
