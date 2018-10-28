import { PureComponent } from "react";
// import { rootStore } from "../store";

class AppTheme extends PureComponent {
  static defaultProps = {
    backgroundColor: "#FD7152"
  };

  compponentWillMount() {
    // import AppTheme from "../components/AppTheme";
    // rootStore.setDefaultTheme();
  }
  componentDidMount() {
    // setTheme();
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
