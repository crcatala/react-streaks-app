import React, { PureComponent } from "react";
import styles from "./ThemItem.module.scss";
import { ReactComponent as More } from "../assets/icons/More.svg";

export default class ThemeItem extends PureComponent {
  static defaultProps = {
    primaryColor: "#FD7152",
    selected: false,
    onClick: function() {}
  };

  getStyles() {
    return {
      background: this.props.primaryColor
    };
  }

  render() {
    return (
      <div
        className={styles.ThemeItem}
        style={this.getStyles()}
        onClick={this.props.onClick}
      >
        {this.props.selected ? <More className={styles.selected} /> : null}
      </div>
    );
  }
}
