import React, { useState } from 'react';
import './count.css';

const StepCount = ({ current, total }) => {
  return (
    <div className="step_count_wrap">
      <div className="step_count_inner">
        <div className="step_count_counter">
          <p className="step_count_current_step">
            {current}
            <span>{'/' + total}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepCount;
