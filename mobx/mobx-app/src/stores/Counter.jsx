import { makeAutoObservable } from "mobx";

class Counter {
  count = 0;
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

export default new Counter();
