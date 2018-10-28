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
        "--text-primary": "#fefefe",
        "--bg-secondary": "#fefefe",
        "--text-secondary": "#000000",
        "--accent-primary": "#6f453c",
        "--accent-secondary": "#fefefe"
      }
    },
    {
      name: "orange--light",
      collection: "orange",
      selected: false,
      variables: {
        "--bg-primary": "#fefefe",
        "--bg-secondary": "#fd7152",
        "--text-primary": "#fd7152",
        "--text-secondary": "#fefefe",
        "--accent-primary": "#C9C9C9",
        "--accent-secondary": "#fd7152"
      }
    },
    {
      name: "orange--dark",
      collection: "orange",
      selected: false,
      variables: {
        "--bg-primary": "#000000",
        "--bg-secondary": "#fd7152",
        "--text-primary": "#fefefe",
        "--text-secondary": "#fefefe",
        "--accent-primary": "#4D4D4D",
        "--accent-secondary": "#fd7152"
      }
    },
    {
      name: "green--standard",
      collection: "green",
      selected: false,
      variables: {
        "--bg-primary": "#C0D27F",
        "--text-primary": "#fefefe",
        "--bg-secondary": "#fefefe",
        "--text-secondary": "#000000",
        "--accent-primary": "#5D6349",
        "--accent-secondary": "#fefefe"
      }
    },
    {
      name: "green--light",
      collection: "green",
      selected: false,
      variables: {
        "--bg-primary": "#fefefe",
        "--bg-secondary": "#C0D27F",
        "--text-primary": "#C0D27F",
        "--text-secondary": "#fefefe",
        "--accent-primary": "#C9C9C9",
        "--accent-secondary": "#C0D27F"
      }
    },
    {
      name: "green--dark",
      collection: "green",
      selected: false,
      variables: {
        "--bg-primary": "#000000",
        "--bg-secondary": "#C0D27F",
        "--text-primary": "#fefefe",
        "--text-secondary": "#fefefe",
        "--accent-primary": "#4D4D4D",
        "--accent-secondary": "#C0D27F"
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
