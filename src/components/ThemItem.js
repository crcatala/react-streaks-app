import React, { PureComponent } from "react";
import styles from "./ThemItem.module.scss";

export default class ThemeItem extends PureComponent {
  static defaultProps = {
    primaryColor: "#FD7152"
  };

  getStyles() {
    return {
      background: this.props.primaryColor
    };
  }

  render() {
    return <div className={styles.ThemeItem} style={this.getStyles()} />;
  }
}
