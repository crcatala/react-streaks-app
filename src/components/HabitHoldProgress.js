import React, { PureComponent } from "react";
import "./HabitHoldProgress.scss";

class HabitHoldProgress extends PureComponent {
  constructor(props) {
    super(props);
    this.outerRadius = 60;
    this.viewBoxSize = this.outerRadius * 2;
    this.innerRadius = this.outerRadius - this.props.strokeWidth / 2;
    this.circumference = 2 * Math.PI * this.innerRadius;
    this.valueRef = React.createRef();
  }

  static defaultProps = {
    size: 100,
    strokeWidth: 8
  };

  render() {
    return (
      <div className="HabitHoldProgress">
        <svg
          className="progress"
          width={this.props.size}
          height={this.props.size}
          viewBox={`0 0 ${this.viewBoxSize} ${this.viewBoxSize}`}
        >
          <circle
            className="progress__meter"
            cx={this.outerRadius}
            cy={this.outerRadius}
            r={this.innerRadius}
            strokeWidth={this.props.strokeWidth}
          />
          <circle
            className="progress__value"
            ref={this.valueRef}
            cx={this.outerRadius}
            cy={this.outerRadius}
            r={this.innerRadius}
            strokeWidth={this.props.strokeWidth}
            strokeDasharray={this.circumference}
            strokeDashoffset={this.circumference}
          />
        </svg>
      </div>
    );
  }
}

export default HabitHoldProgress;
