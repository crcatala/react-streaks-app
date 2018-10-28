import React, { PureComponent } from "react";
import styles from "./Habit.module.scss";
import classNames from "classnames";
import HoldableActionButton from "./HoldableActionButton";
import { ReactComponent as Checkmark } from "../assets/icons/Checkmark.svg";
import { ReactComponent as More } from "../assets/icons/More.svg";
import TransitionFromBottom from "../components/transitions/TransitionFromBottom";

class Habit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    };
  }

  static defaultProps = {
    editing: false,
    name: "",
    size: 100
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
      height: size
    };
  }

  baseClassNames = () => {
    return classNames({
      [styles.Habit]: true,
      [styles["Habit--completed"]]: this.state.completed
    });
  };

  onComplete = () => {
    this.setState({
      completed: true
    });
  };

  render() {
    const { editing, name, size } = this.props;
    const baseClassNames = classNames({
      btn: true,
      [styles.Habit]: true,
      [styles["Habit--completed"]]: this.state.completed
    });
    const completedClass = this.state.completed ? styles.completed : "";
    const titleClass = classNames({
      [styles.title]: true
    });
    const contentClass = classNames({
      [styles.content]: true,
      [styles["content--completed"]]: this.state.completed
    });

    return (
      <div className={baseClassNames}>
        <HoldableActionButton
          onComplete={this.onComplete}
          disabled={editing}
          itemContainerClass={completedClass}
          titleSlot={<div className={titleClass}>{name}</div>}
          incompleteSlot={
            <div className={contentClass}>{this.abbreviation()}</div>
          }
          markedSlot={
            <Checkmark className={styles.checkmark} style={this.iconStyles()} />
          }
          completeSlot={
            <div className={contentClass}>{this.abbreviation()}</div>
          }
          size={size}
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
