import React, { PureComponent } from "react";
import styles from "./HabitIconContent.module.scss";
import { ReactComponent as Checkmark } from "../assets/icons/Checkmark.svg";

export default class HabitIconContent extends PureComponent {
  static defaultProps = {
    name: "",
    size: 100,
    marked: false
  };

  classes() {
    console.log(this);
    return `${styles.item} ${this.props.marked && styles["item--marked"]}`;
  }

  itemStyles() {
    return {
      width: this.props.size,
      height: this.props.size
    };
  }

  iconStyles() {
    const scale = 0.5;
    const size = scale * this.props.size;

    return {
      width: size,
      height: size
    };
  }

  textStyles() {
    const scale = 0.5;
    const size = scale * this.props.size;

    return {
      fontSize: size
    };
  }

  abbreviation() {
    return this.props.name && this.props.name[0]
      ? this.props.name[0].toUpperCase()
      : "";
  }

  render() {
    return (
      <div className={this.classes()} style={this.itemStyles()}>
        {this.props.marked ? (
          <Checkmark className={styles.checkmark} style={this.iconStyles()} />
        ) : (
          <div className={styles.label} style={this.textStyles()}>
            {this.abbreviation()}
          </div>
        )}
      </div>
    );
  }
}
