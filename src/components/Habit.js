import React, { PureComponent } from "react";
import styles from "./Habit.module.scss";
import HoldableActionButton from "./HoldableActionButton";
import { ReactComponent as Checkmark } from "../assets/icons/Checkmark.svg";
import { ReactComponent as More } from "../assets/icons/More.svg";
import TransitionFromBottom from "../components/transitions/TransitionFromBottom";

class Habit extends PureComponent {
  static defaultProps = {
    editing: false,
    name: "",
    size: 100,
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
    const { editing, name, size, primaryColor, secondaryColor } = this.props;

    return (
      <div className={styles.Habit}>
        <HoldableActionButton
          disabled={editing}
          titleSlot={<div className={styles.title}>{name}</div>}
          incompleteSlot={
            <div className={styles.content}>{this.abbreviation()}</div>
          }
          markedSlot={
            <Checkmark className={styles.checkmark} style={this.iconStyles()} />
          }
          completeSlot={
            <div className={styles.content}>{this.abbreviation()}</div>
          }
          size={size}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
        <TransitionFromBottom in={editing}>
          <div className={styles.editing}>
            <More className={styles.editingIcon} />
          </div>
        </TransitionFromBottom>
      </div>
    );
  }
}

export default Habit;
