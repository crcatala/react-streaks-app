import React from "react";
import "./HabitHoldProgress.scss";

const HabitHoldProgress = () => {
  return (
    <div className="HabitHoldProgress">
      <svg className="progress" width="120" height="120" viewBox="0 0 120 120">
        <circle
          className="progress__meter"
          cx="60"
          cy="60"
          r="54"
          strokeWidth="12"
        />
        <circle
          className="progress__value"
          cx="60"
          cy="60"
          r="54"
          strokeWidth="12"
          strokeDasharray="339.292"
          strokeDashoffset="339.292"
        />
      </svg>
    </div>
  );
};

export default HabitHoldProgress;
