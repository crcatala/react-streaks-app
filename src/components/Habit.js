// import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import styles from "./Habit.module.scss";

class Habit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      timerId: null,
      counter: 0,
      holdTime: 0,
      thresholdReached: false
    };
  }

  static defaultProps = {
    // Unit is frames, and is at 60fps. So his is then 1 second
    pressHoldDuration: 60
  };

  timer = () => {
    console.log("Timer tick!");

    if (this.state.counter < this.props.pressHoldDuration) {
      this.setState({
        timerId: requestAnimationFrame(this.timer)
      });
      this.setState(state => ({
        counter: state.counter + 1
      }));
    } else {
      this.setState({
        thresholdReached: true
      });
      console.log("Press threshold reached!");
    }
  };

  pressingDown = e => {
    e.preventDefault();
    if (this.state.thresholdReached) {
      return;
    }
    requestAnimationFrame(this.timer);
  };

  notPressingDown = e => {
    console.log("cancelling");
    cancelAnimationFrame(this.state.timerId);
    this.setState({
      counter: 0
    });
  };

  render() {
    return (
      <div className="Habit">
        <div
          className={styles.item}
          onMouseDown={this.pressingDown}
          onMouseUp={this.notPressingDown}
          onMouseLeave={this.notPressingDown}
          onTouchStart={this.pressingDown}
          onTouchEnd={this.notPressingDown}
        >
          Circle
        </div>
        <div className={styles.name}>{this.props.name}</div>
      </div>
    );
  }
}

export default Habit;
