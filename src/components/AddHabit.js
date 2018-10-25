import React, { PureComponent } from "react";
import styles from "./Habit.module.scss";
import HabitHoldProgress from "./HabitHoldProgress";
import HabitIconContent from "./HabitIconContent";
// import { Power1, TimelineMax } from "gsap/TweenMax";
import { Power1, TimelineMax } from "gsap/src/uncompressed/TweenMax";

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
      isJustCompleted: false,
      thresholdReached: false
    };
    this.tl = new TimelineMax();
    this.progressRef = React.createRef();
  }

  static defaultProps = {
    pressHoldDurationInSeconds: 0.75,
    size: 200
  };

  render() {
    return <div>sup</div>;
  }
}
