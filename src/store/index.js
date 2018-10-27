import { observable, action, decorate } from "mobx";

class RootStore {
  settingsControlsVisible = false;
  habits = [{ id: 1, name: "Walk Dog" }, { id: 2, name: "Brew Coffee" }];

  settingsControlsToggle() {
    this.settingsControlsVisible = !this.settingsControlsVisible;
  }

  addHabit(value) {
    const id = this.habits.length + 1;
    this.habits.push({ id, name: value });
  }
}
decorate(RootStore, {
  settingsControlsVisible: observable,
  habits: observable,
  settingsControlsToggle: action,
  addHabit: action
});

const rootStore = new RootStore();

export { rootStore };
