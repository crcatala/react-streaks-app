import { observable, action, decorate } from "mobx";

class RootStore {
  settingsControlsVisible = false;
  habits = [
    { id: 1, name: "Gratitude" },
    { id: 2, name: "Meditate" },
    { id: 3, name: "Vision Board" },
    { id: 4, name: "Brew Coffee" },
    { id: 5, name: "Walk" }
  ];

  settingsControlsToggle() {
    this.settingsControlsVisible = !this.settingsControlsVisible;
  }
}
decorate(RootStore, {
  settingsControlsVisible: observable,
  habits: observable,
  settingsControlsToggle: action
});

const rootStore = new RootStore();

export { rootStore };
