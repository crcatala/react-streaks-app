const themeCollections = [
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

const themes = [
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
  },
  {
    name: "blue--standard",
    collection: "blue",
    selected: false,
    variables: {
      "--bg-primary": "#49ADE1",
      "--text-primary": "#fefefe",
      "--bg-secondary": "#fefefe",
      "--text-secondary": "#000000",
      "--accent-primary": "#385666",
      "--accent-secondary": "#fefefe"
    }
  },
  {
    name: "blue--light",
    collection: "blue",
    selected: false,
    variables: {
      "--bg-primary": "#fefefe",
      "--bg-secondary": "#49ADE1",
      "--text-primary": "#49ADE1",
      "--text-secondary": "#fefefe",
      "--accent-primary": "#C9C9C9",
      "--accent-secondary": "#49ADE1"
    }
  },
  {
    name: "blue--dark",
    collection: "blue",
    selected: false,
    variables: {
      "--bg-primary": "#000000",
      "--bg-secondary": "#49ADE1",
      "--text-primary": "#fefefe",
      "--text-secondary": "#fefefe",
      "--accent-primary": "#4D4D4D",
      "--accent-secondary": "#49ADE1"
    }
  },
  {
    name: "red--standard",
    collection: "red",
    selected: false,
    variables: {
      "--bg-primary": "#CC4D4F",
      "--text-primary": "#fefefe",
      "--bg-secondary": "#fefefe",
      "--text-secondary": "#000000",
      "--accent-primary": "#603B3C",
      "--accent-secondary": "#fefefe"
    }
  },
  {
    name: "red--light",
    collection: "red",
    selected: false,
    variables: {
      "--bg-primary": "#fefefe",
      "--bg-secondary": "#CC4D4F",
      "--text-primary": "#CC4D4F",
      "--text-secondary": "#fefefe",
      "--accent-primary": "#C9C9C9",
      "--accent-secondary": "#CC4D4F"
    }
  },
  {
    name: "red--dark",
    collection: "red",
    selected: false,
    variables: {
      "--bg-primary": "#000000",
      "--bg-secondary": "#CC4D4F",
      "--text-primary": "#fefefe",
      "--text-secondary": "#fefefe",
      "--accent-primary": "#4D4D4D",
      "--accent-secondary": "#CC4D4F"
    }
  },
  {
    name: "purple--standard",
    collection: "purple",
    selected: false,
    variables: {
      "--bg-primary": "#D27AB8",
      "--text-primary": "#fefefe",
      "--bg-secondary": "#fefefe",
      "--text-secondary": "#000000",
      "--accent-primary": "#60485A",
      "--accent-secondary": "#fefefe"
    }
  },
  {
    name: "purple--light",
    collection: "purple",
    selected: false,
    variables: {
      "--bg-primary": "#fefefe",
      "--bg-secondary": "#D27AB8",
      "--text-primary": "#D27AB8",
      "--text-secondary": "#fefefe",
      "--accent-primary": "#C9C9C9",
      "--accent-secondary": "#D27AB8"
    }
  },
  {
    name: "purple--dark",
    collection: "purple",
    selected: false,
    variables: {
      "--bg-primary": "#000000",
      "--bg-secondary": "#D27AB8",
      "--text-primary": "#fefefe",
      "--text-secondary": "#fefefe",
      "--accent-primary": "#4D4D4D",
      "--accent-secondary": "#D27AB8"
    }
  },
  {
    name: "gold--standard",
    collection: "gold",
    selected: false,
    variables: {
      "--bg-primary": "#F7A929",
      "--text-primary": "#fefefe",
      "--bg-secondary": "#fefefe",
      "--text-secondary": "#000000",
      "--accent-primary": "#6D5728",
      "--accent-secondary": "#fefefe"
    }
  },
  {
    name: "gold--light",
    collection: "gold",
    selected: false,
    variables: {
      "--bg-primary": "#fefefe",
      "--bg-secondary": "#F7A929",
      "--text-primary": "#F7A929",
      "--text-secondary": "#fefefe",
      "--accent-primary": "#C9C9C9",
      "--accent-secondary": "#F7A929"
    }
  },
  {
    name: "gold--dark",
    collection: "gold",
    selected: false,
    variables: {
      "--bg-primary": "#000000",
      "--bg-secondary": "#F7A929",
      "--text-primary": "#fefefe",
      "--text-secondary": "#fefefe",
      "--accent-primary": "#4D4D4D",
      "--accent-secondary": "#F7A929"
    }
  },
  {
    name: "teal--standard",
    collection: "teal",
    selected: false,
    variables: {
      "--bg-primary": "#39B3AA",
      "--text-primary": "#fefefe",
      "--bg-secondary": "#fefefe",
      "--text-secondary": "#000000",
      "--accent-primary": "#325755",
      "--accent-secondary": "#fefefe"
    }
  },
  {
    name: "teal--light",
    collection: "teal",
    selected: false,
    variables: {
      "--bg-primary": "#fefefe",
      "--bg-secondary": "#39B3AA",
      "--text-primary": "#39B3AA",
      "--text-secondary": "#fefefe",
      "--accent-primary": "#C9C9C9",
      "--accent-secondary": "#39B3AA"
    }
  },
  {
    name: "teal--dark",
    collection: "teal",
    selected: false,
    variables: {
      "--bg-primary": "#000000",
      "--bg-secondary": "#39B3AA",
      "--text-primary": "#fefefe",
      "--text-secondary": "#fefefe",
      "--accent-primary": "#4D4D4D",
      "--accent-secondary": "#39B3AA"
    }
  }
];

export { themeCollections, themes };
