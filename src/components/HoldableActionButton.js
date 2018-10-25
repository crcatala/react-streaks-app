import React, { PureComponent } from "react";
import styles from "./HoldableActionButton.module.scss";
import HabitHoldProgress from "./HabitHoldProgress";
import HabitIconContent from "./HabitIconContent";
// import { Power1, TimelineMax } from "gsap/TweenMax";
import { Power1, TimelineMax } from "gsap/src/uncompressed/TweenMax";

const FRAMES_PER_SECOND = 60;

class HoldableActionButton extends PureComponent {
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
    titleSlot: <span>Default Title</span>,
    markedSlot: <span>Just Completed</span>,
    completeSlot: <span>Completed</span>,
    incompleteSlot: <span>Incomplete</span>,
    size: 200
  };

  // TODO memoize or use mobx computed
  pressHoldDurationInFrames() {
    return this.props.pressHoldDurationInSeconds * FRAMES_PER_SECOND;
  }

  timer = () => {
    // console.log("animation frame", this.state.counter);
    if (this.state.counter < this.pressHoldDurationInFrames()) {
      this.setState({ timerId: requestAnimationFrame(this.timer) });
      this.setState(state => ({ counter: state.counter + 1 }));
    } else {
      this.setState({ thresholdReached: true });
      // console.log("Press threshold reached!");
    }
  };

  pressingDown = e => {
    e.preventDefault();
    this.setState({ isHolding: true });

    if (this.state.thresholdReached) {
      return;
    }
    // this.tl.play();
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
      this.tl.reverse();
      cancelAnimationFrame(this.state.timerId);
      this.setState({
        counter: 0
      });
    }
  };

  setupAnimation() {
    // console.log(this.progressRef);
    // console.log(this.progressRef.current);
    const progressValueNode = this.progressRef.current.valueRef.current;
    this.tl.add("progress", 0);
    this.tl.to(
      progressValueNode,
      this.props.pressHoldDurationInSeconds,
      {
        strokeDashoffset: "0",
        ease: Power1.easeOut,
        onComplete: () => {
          this.setState({ thresholdReached: true, isJustCompleted: true });
          setTimeout(() => {
            this.setState({ isJustCompleted: false });
          }, 1000);
        }
      },
      "progress"
    );
    this.tl.pause();
  }

  getStatus() {
    if (this.state.thresholdReached && this.state.isJustCompleted) {
      return "marked";
    } else if (this.state.thresholdReached && !this.state.isJustCompleted) {
      return "complete";
    } else {
      return "incomplete";
    }
  }

  widthStyles() {
    return {
      width: this.props.size
    };
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
      fontSize: size
    };
  }

  labelStyles() {
    const scale = 0.5;
    const size = scale * this.props.size;

    return {
      width: size,
      height: size
    };
  }

  getContentFragment() {
    switch (this.getStatus()) {
      case "marked":
        return <div className={styles.markedSlot}>{this.props.markedSlot}</div>;
      case "complete":
        return (
          <div className={styles.completeSlot}>{this.props.completeSlot}</div>
        );
      default:
        return (
          <div className={styles.incompleteSlot}>
            {this.props.incompleteSlot}
          </div>
        );
    }
  }

  componentDidMount() {
    this.setupAnimation();
  }

  componentWillUnmount() {
    this.tl.kill();
    this.tl = null;
  }

  render() {
    return (
      <div className="HoldableActionButton" style={this.widthStyles()}>
        <div
          style={this.itemStyles()}
          onMouseDown={this.pressingDown}
          onMouseUp={this.notPressingDown}
          onMouseLeave={this.notPressingDown}
          onTouchStart={this.pressingDown}
          onTouchEnd={this.notPressingDown}
        >
          <div className={styles.content} style={this.itemStyles()}>
            {this.getContentFragment()}
          </div>
          <div className={styles.progressContainer}>
            <HabitHoldProgress size={this.props.size} ref={this.progressRef} />
          </div>
        </div>
        <div className={styles.titleSlot}>{this.props.titleSlot}</div>
      </div>
    );
  }
}

export default HoldableActionButton;
