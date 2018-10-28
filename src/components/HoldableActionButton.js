import React, { PureComponent } from "react";
import styles from "./HoldableActionButton.module.scss";
import classNames from "classnames";
import HoldActionProgress from "./HoldActionProgress";
import { Power1, TimelineMax } from "gsap/src/uncompressed/TweenMax";

const FRAMES_PER_SECOND = 60;

const getInitialState = function() {
  return {
    timerId: null,
    counter: 0,
    holdTime: 0,
    marked: false,
    isHolding: false,
    isJustCompleted: false,
    thresholdReached: false
  };
};

class HoldableActionButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = getInitialState();
    this.tl = new TimelineMax();
    this.progressRef = React.createRef();
  }

  static defaultProps = {
    size: 200,
    disabled: false,
    pressHoldDurationInSeconds: 0.75,
    onComplete: function() {},
    itemContainerClass: "doge",
    resetOnComplete: false,
    titleSlot: <span>Default Title</span>,
    incompleteSlot: <span>Incomplete</span>,
    markedSlot: <span>Just Completed</span>,
    completeSlot: <span>Completed</span>
  };

  // TODO memoize or use mobx computed
  pressHoldDurationInFrames() {
    return this.props.pressHoldDurationInSeconds * FRAMES_PER_SECOND;
  }

  timer = () => {
    if (this.state.counter < this.pressHoldDurationInFrames()) {
      this.setState({ timerId: requestAnimationFrame(this.timer) });
      this.setState(state => ({ counter: state.counter + 1 }));
    } else {
      this.setState({ thresholdReached: true });
    }
  };

  pressingDown = e => {
    e.preventDefault();
    if (this.props.disabled) return;

    this.setState({ isHolding: true });

    if (this.state.thresholdReached) {
      return;
    }
    this.tl.play();
    requestAnimationFrame(this.timer);
  };

  notPressingDown = e => {
    e.preventDefault();
    if (this.props.disabled) return;

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

  reset = () => {
    this.setState({
      ...getInitialState()
    });
  };

  setupAnimation() {
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
          if (this.props.resetOnComplete) {
            this.reset();
          }
          this.props.onComplete();
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

  contentStyles() {
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
        return this.props.markedSlot;
      case "complete":
        return this.props.completeSlot;
      default:
        return this.props.incompleteSlot;
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
    const itemContainerClass = classNames({
      [styles.itemContainer]: true,
      [this.props.itemContainerClass]: true
    });
    return (
      <div
        className={styles.HoldableActionButton}
        style={this.widthStyles()}
        disabled={this.props.disabled}
      >
        <div
          className={itemContainerClass}
          style={this.itemStyles()}
          onMouseDown={this.pressingDown}
          onMouseUp={this.notPressingDown}
          onMouseLeave={this.notPressingDown}
          onTouchStart={this.pressingDown}
          onTouchEnd={this.notPressingDown}
        >
          <div className={styles.content} style={this.contentStyles()}>
            {this.getContentFragment()}
          </div>
          <div className={styles.progressContainer}>
            <HoldActionProgress size={this.props.size} ref={this.progressRef} />
          </div>
        </div>
        <div className={styles.titleSlot}>{this.props.titleSlot}</div>
      </div>
    );
  }
}

export default HoldableActionButton;
