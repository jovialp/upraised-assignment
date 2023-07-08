import React, { useState } from 'react';
import './ProgressCircle.css';

const ProgressCircle = ({ current, total }) => {
  const circleWidth = 120,
    radius = 60;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * ((current * 100) / total)) / 100;
  return (
    <svg
      width={circleWidth}
      height={circleWidth}
      viewBox={'0 0 ${circleWidth} ${circleWidth}'}
    >
      <circle
        cx={circleWidth / 2}
        cy={circleWidth / 2}
        strokeWidth="15px"
        r={radius}
        className="circle-background"
      />
      <circle
        cx={circleWidth / 2}
        cy={circleWidth / 2}
        strokeWidth="15px"
        r={radius}
        className="circle-progress"
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
        transform={` rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
      />
      <text
        x="40%"
        y="50%"
        dy="0.3em"
        textAnchor="middle"
        className="step_count_current_step"
      >
        {current}
      </text>

      <text
        x="60%"
        y="57%"
        dy="0.3em"
        textAnchor="middle"
        className="step_count_counter"
      >
        {'/' + total}
      </text>
    </svg>
  );
};

export default ProgressCircle;
