import React, { PureComponent } from "react";
import styles from "./Habit.module.scss";
import HoldableActionButton from "./HoldableActionButton";
import { ReactComponent as Checkmark } from "../assets/icons/Checkmark.svg";

class Habit extends PureComponent {
  static defaultProps = {
    name: "",
    size: 200,
    primaryColor: "#fefefe",
    secondaryColor: "#582E27"
  };

  abbreviation() {
    return this.props.name && this.props.name[0]
      ? this.props.name[0].toUpperCase()
      : "";
  }

  iconStyles() {
    const scale = 0.5;
    const size = scale * this.props.size;

    return {
      width: size,
      height: size,
      fill: this.props.secondaryColor
    };
  }

  render() {
    return (
      <HoldableActionButton
        titleSlot={<div className={styles.title}>{this.props.name}</div>}
        incompleteSlot={
          <div className={styles.content}>{this.abbreviation()}</div>
        }
        markedSlot={
          <Checkmark className={styles.checkmark} style={this.iconStyles()} />
        }
        completeSlot={
          <div className={styles.content}>{this.abbreviation()}</div>
        }
        primaryColor={this.props.primaryColor}
        secondaryColor={this.props.secondaryColor}
      />
    );
  }
}

export default Habit;
