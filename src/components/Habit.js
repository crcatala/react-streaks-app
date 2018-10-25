// import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import styles from "./Habit.module.scss";
import HabitHoldProgress from "./HabitHoldProgress";
import { Power1, TimelineMax } from "gsap/TweenMax";

const FRAMES_PER_SECOND = 60;

class Habit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      timerId: null,
      counter: 0,
      holdTime: 0,
      marked: false,
      isHolding: false,
      thresholdReached: false
    };
    this.tl = new TimelineMax();
  }

  static defaultProps = {
    pressHoldDurationInSeconds: 0.75
  };

  // TODO memoize or use mobx computed
  pressHoldDurationInFrames() {
    return this.props.pressHoldDurationInSeconds * FRAMES_PER_SECOND;
  }

  timer = () => {
    console.log("animation frame", this.state.counter);
    if (this.state.counter < this.pressHoldDurationInFrames()) {
      this.setState({ timerId: requestAnimationFrame(this.timer) });
      this.setState(state => ({ counter: state.counter + 1 }));
    } else {
      this.setState({ thresholdReached: true });
      console.log("Press threshold reached!");
    }
  };

  pressingDown = e => {
    e.preventDefault();
    this.setState({ isHolding: true });

    if (this.state.thresholdReached) {
      return;
    }
    this.tl.play();
    requestAnimationFrame(this.timer);
  };

  notPressingDown = e => {
    this.setState({
      isHolding: false
    });
    if (this.state.thresholdReached) {
      return;
    } else {
      // this.tl.kill();
      this.tl.reverse();
      cancelAnimationFrame(this.state.timerId);
      this.setState({
        counter: 0
      });
    }
  };

  setupAnimation() {
    this.tl.add("markedProgress", 0);
    this.tl.to(
      ".progress__value",
      this.props.pressHoldDurationInSeconds,
      {
        strokeDashoffset: "0",
        ease: Power1.easeOut,
        onComplete: () => {
          console.log("callback direct");
          this.setState({
            thresholdReached: true
          });
        }
      },
      "markedProgress"
    );
    this.tl.pause();
  }

  // startAnimationForUnmarked() {
  //   this.tl.add("unmarkedProgress", 0);
  //   this.tl.to(
  //     ".progress__value",
  //     this.props.pressHoldDurationInSeconds,
  //     {
  //       strokeDashoffset: "0",
  //       ease: Power1.easeOut,
  //       onComplete: () => {
  //         console.log("callback direct");
  //         this.setState({
  //           thresholdReached: true
  //         });
  //       }
  //     },
  //     "unmarkedProgress"
  //   );
  // }

  // componentDidMount() {

  // }

  componentDidMount() {
    this.setupAnimation();
  }

  componentWillUnmount() {
    this.tl.kill();
    this.tl = null;
  }

  render() {
    return (
      <div className="Habit">
        <HabitHoldProgress />
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
        <div className={styles.name}>
          {this.props.name}
          {this.state.thresholdReached ? "Done" : ""}
        </div>
        <div>isHolding: {`${this.state.isHolding}`}</div>
      </div>
    );
  }
}

export default Habit;
