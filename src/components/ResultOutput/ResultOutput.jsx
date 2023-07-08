import React from 'react';

// Style
import './ResultOutput.css';

const ResultOutput = ({ count, isTrue }) => {
  return <div className={`question_title ${isTrue ? '' : ''}`}>{count}</div>;
};

export default ResultOutput;
