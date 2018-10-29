import { observable, computed, action, decorate } from "mobx";
import { themeCollections, themes } from "./themes";
import get from "lodash/get";

class RootStore {
  settingsControlsVisible = false;
  habits = [{ id: 1, name: "Walk Dog" }, { id: 2, name: "Brew Coffee" }];
  themeCollections = themeCollections;
  themes = themes;

  get currentTheme() {
    return this.themes.find(x => x.selected);
  }

  get currentThemeCollection() {
    return get(this.currentTheme, "collection");
  }

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

      const themeMap = theme.variables;
      Object.keys(themeMap).forEach(x => {
        const property = x;
        const value = themeMap[x];
        const root = document.documentElement;
        root.style.setProperty(property, value);
      });
    }
  }

  selectNextThemeWithinSameCollection({ collection } = {}) {
    const themesHavingSameCollection = this.themes.filter(
      x => x.collection === collection
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
  }

  selectFirstThemeInCollection({ collection } = {}) {
    const firstThemeHavingCollection = this.themes.find(
      x => x.collection === collection
    );
    if (firstThemeHavingCollection) {
      this.setTheme({ name: firstThemeHavingCollection.name });
    }
  }

  selectNextTheme({ collection = "orange" } = {}) {
    if (this.currentTheme) {
      if (this.currentTheme.collection === collection) {
        this.selectNextThemeWithinSameCollection({
          collection: this.currentThemeCollection
        });
      } else {
        this.selectFirstThemeInCollection({ collection });
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
  currentTheme: computed,
  currentThemeCollection: computed,
  settingsControlsToggle: action,
  addHabit: action,
  setTheme: action
});

const rootStore = new RootStore();

rootStore.selectNextTheme({ collection: "orange" });

export { rootStore };
