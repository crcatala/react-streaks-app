import { observable, action, decorate } from "mobx";

class RootStore {
  settingsControlsVisible = false;
  habits = [{ id: 1, name: "Walk Dog" }, { id: 2, name: "Brew Coffee" }];
  themeCollections = [
    {
      name: "orange",
      primaryColor: "#fd7152",
      selected: true
    },
    {
      name: "green",
      primaryColor: "#C0D27F",
      selected: false
    },
    {
      name: "blue",
      primaryColor: "#49ADE1",
      selected: false
    },
    {
      name: "red",
      primaryColor: "#CC4D4F",
      selected: false
    },
    {
      name: "purple",
      primaryColor: "#D27AB8",
      selected: false
    },
    {
      name: "gold",
      primaryColor: "#F7A929",
      selected: false
    },
    {
      name: "teal",
      primaryColor: "#39B2AA",
      selected: false
    }
  ];

  themes = [
    {
      name: "orange--standard",
      collection: "orange",
      selected: false,
      variables: {
        "--bg-primary": "#fd7152",
        "--bg-secondary": "#fefefe",
        "--text-primary": "#000000",
        "--text-secondary": "#6f453c"
      }
    },
    {
      name: "orange--light",
      collection: "orange",
      selected: false,
      variables: {
        "--bg-primary": "#fefefe",
        "--bg-secondary": "#fd7152",
        "--text-primary": "#fefefe",
        "--text-secondary": "#C9C9C9"
      }
    },
    {
      name: "orange--dark",
      collection: "orange",
      selected: false,
      variables: {
        "--bg-primary": "#fefefe",
        "--bg-secondary": "#fd7152",
        "--text-primary": "#fefefe",
        "--text-secondary": "#C9C9C9"
      }
    }
  ];

  settingsControlsToggle() {
    this.settingsControlsVisible = !this.settingsControlsVisible;
  }

  addHabit(value) {
    const id = this.habits.length + 1;
    this.habits.push({ id, name: value });
  }

  setTheme({ name = "orange--standard" } = {}) {
    const theme = this.themes.find(x => x.name === name);
    if (theme) {
      if (theme.selected) return;

      this.themes.forEach(x => {
        // TODO: optimize since this isn't batched like Vue (?)
        x.selected = false;
      });

      theme.selected = true;

      const themeMap = theme.variables;
      Object.keys(themeMap).forEach(x => {
        console.log(x, themeMap[x]);
        const property = x;
        const value = themeMap[x];
        const root = document.documentElement;
        root.style.setProperty(property, value);
      });
    }
  }

  selectNextTheme({ collection = "orange" } = {}) {
    console.log("selectNextTheme", collection);
    // TODO: computed
    const currentTheme = this.themes.find(x => x.selected);
    if (currentTheme) {
      const currentThemeCollction = currentTheme.collection;
      const themesHavingSameCollection = this.themes.filter(
        x => x.collection === currentThemeCollction
      );
      const indexOfCurrentTheme = themesHavingSameCollection.findIndex(
        x => x.selected
      );
      console.log("indexOfCurrentTheme", indexOfCurrentTheme);
      const indexOfNextTheme =
        themesHavingSameCollection.length === indexOfCurrentTheme + 1
          ? 0
          : indexOfCurrentTheme + 1;
      this.setTheme({
        name: themesHavingSameCollection[indexOfNextTheme].name
      });
    } else {
      this.setTheme({ name: this.themes[0].name });
    }
  }
}
decorate(RootStore, {
  settingsControlsVisible: observable,
  habits: observable,
  settingsControlsToggle: action,
  addHabit: action,
  setTheme: action
});

const rootStore = new RootStore();
// rootStore.setTheme({ name: "orange--standard" });
rootStore.selectNextTheme({ collection: "orange" });

export { rootStore };
