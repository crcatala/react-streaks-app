import { PureComponent } from "react";

class AppTheme extends PureComponent {
  static defaultProps = {
    backgroundColor: "#FD7152"
  };

  componentDidMount() {
    document.body.style.backgroundColor = "#FD7152";
  }

  render() {
    return null;
  }
}

export default AppTheme;
