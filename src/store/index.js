import { observable, action, decorate } from "mobx";
import { themeCollections, themes } from "./themes";

class RootStore {
  settingsControlsVisible = false;
  habits = [{ id: 1, name: "Walk Dog" }, { id: 2, name: "Brew Coffee" }];
  themeCollections = themeCollections;
  themes = themes;

  settingsControlsToggle() {
    this.settingsControlsVisible = !this.settingsControlsVisible;
  }

  addHabit(value) {
    const id = this.habits[this.habits.length - 1].id + 1;
    this.habits.push({ id, name: value });
  }

  setTheme({ name = "orange--standard" } = {}) {
    const theme = this.themes.find(x => x.name === name);
    if (theme) {
      if (theme.selected) return;

      // TODO: optimize since this isn't batched like Vue (?)
      this.themes.forEach(x => {
        x.selected = false;
      });

      theme.selected = true;

      this.themeCollections.forEach(x => {
        x.selected = false;
      });

      const themeCollection = this.themeCollections.find(
        x => x.name === theme.collection
      );
      themeCollection.selected = true;
      console.log("themeCollection", themeCollection);

      const themeMap = theme.variables;
      Object.keys(themeMap).forEach(x => {
        const property = x;
        const value = themeMap[x];
        const root = document.documentElement;
        root.style.setProperty(property, value);
      });
    }
  }

  selectNextTheme({ collection = "orange" } = {}) {
    // TODO: computed
    const currentTheme = this.themes.find(x => x.selected);
    if (currentTheme) {
      if (currentTheme.collection === collection) {
        const currentThemeCollection = currentTheme.collection;
        const themesHavingSameCollection = this.themes.filter(
          x => x.collection === currentThemeCollection
        );
        const indexOfCurrentTheme = themesHavingSameCollection.findIndex(
          x => x.selected
        );
        const indexOfNextTheme =
          themesHavingSameCollection.length === indexOfCurrentTheme + 1
            ? 0
            : indexOfCurrentTheme + 1;
        this.setTheme({
          name: themesHavingSameCollection[indexOfNextTheme].name
        });
      } else {
        const firstThemeHavingCollection = this.themes.find(
          x => x.collection === collection
        );
        if (firstThemeHavingCollection) {
          this.setTheme({ name: firstThemeHavingCollection.name });
        }
      }
    } else {
      this.setTheme({ name: this.themes[0].name });
    }
  }
}

decorate(RootStore, {
  settingsControlsVisible: observable,
  habits: observable,
  themes: observable,
  themeCollections: observable,
  settingsControlsToggle: action,
  addHabit: action,
  setTheme: action
});

const rootStore = new RootStore();

rootStore.selectNextTheme({ collection: "orange" });

export { rootStore };
