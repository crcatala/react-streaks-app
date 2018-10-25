import React from "react";
import "./HabitHoldProgress.scss";

const HabitHoldProgress = ({ size = 100, strokeWidth = 8 }) => {
  const outerRadius = 60;
  const viewBoxSize = outerRadius * 2;
  const innerRadius = outerRadius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;

  return (
    <div className="HabitHoldProgress">
      <svg
        className="progress"
        width={size}
        height={size}
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      >
        <circle
          className="progress__meter"
          cx={outerRadius}
          cy={outerRadius}
          r={innerRadius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="progress__value"
          cx={outerRadius}
          cy={outerRadius}
          r={innerRadius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
        />
      </svg>
    </div>
  );
};

export default HabitHoldProgress;
