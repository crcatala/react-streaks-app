import { observable, computed, action, decorate } from "mobx";

class RootStore {
  settingsControlsVisible = false;
  themeControlsVisible = false;

  // get elapsedTime() {
  //   return this.current - this.start + "milliseconds";
  // }

  settingsControlsToggle() {
    console.log("settingsControlsToggle");
    this.settingsControlsVisible = !this.settingsControlsVisible;
  }
}
decorate(RootStore, {
  settingsControlsVisible: observable,
  themeControlsVisible: observable,
  settingsControlsToggle: action
});

const rootStore = new RootStore();

export { rootStore };
