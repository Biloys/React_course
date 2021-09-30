import { makeAutoObservable } from "mobx";

export class Counter {
  count = 5;
  constructor() {
    makeAutoObservable(this);
  }

  inc() {
    this.count = this.count + 1;
    console.log(this.count);
  }
  dec() {
    this.count = this.count - 1;
    console.log(this.count);
  }
}
