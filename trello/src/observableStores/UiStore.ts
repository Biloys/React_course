import { computed, makeAutoObservable, observable } from "mobx";

interface ScreenDimansions {
  w: number;
  h: number;
}

export class UiStore {
  private _isModalOpen: boolean = false;

  private _screenDemansions: ScreenDimansions = { w: 0, h: 0 };

  constructor() {
    this.subscribeToScreenResize();
    makeAutoObservable(this);
  }
  @computed
  public get isModalOpen() {
    return this._isModalOpen;
  }
  @computed
  public get screen(): ScreenDimansions {
    return this._screenDemansions;
  }

  private onScreenChange(w: number, h: number) {
    this._screenDemansions = { w, h };
  }

  private subscribeToScreenResize() {
    window.onresize = (e: any) => {
      console.log(window.innerWidth, window.innerHeight);
      this.onScreenChange(window.innerWidth, window.innerHeight);
    };
  }
}
