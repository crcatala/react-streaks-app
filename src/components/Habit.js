import React, { PureComponent } from "react";
import styles from "./Habit.module.scss";
import HoldableActionButton from "./HoldableActionButton";
import { ReactComponent as Checkmark } from "../assets/icons/Checkmark.svg";

class Habit extends PureComponent {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    name: "",
    // pressHoldDurationInSeconds: 0.75,
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
        titleSlot={<div>{this.props.name}</div>}
        incompleteSlot={<div>{this.abbreviation()}</div>}
        completeSlot={
          <Checkmark className={styles.checkmark} style={this.iconStyles()} />
        }
      />
    );
  }
}

export default Habit;
