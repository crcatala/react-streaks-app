import { PureComponent } from "react";

export function setTheme(themeMap = {}) {
  Object.keys(themeMap).forEach(x => {
    console.log(x, themeMap[x]);
    const property = x;
    const value = themeMap[x];
    const root = document.documentElement;
    root.style.setProperty(property, value);
  });
}
class AppTheme extends PureComponent {
  static defaultProps = {
    backgroundColor: "#FD7152"
  };

  componentDidMount() {
    // document.body.style.backgroundColor = "#FD7152";
    // setTimeout(() => {
    //  const root = document.documentElement;
    //   root.style.setProperty("--bg-primary", "#000000");
    // }, 2000);
  }

  render() {
    return null;
  }
}

export default AppTheme;
