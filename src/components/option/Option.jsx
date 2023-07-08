import React, { useState, useEffect } from 'react';

// Style
import './Option.css';

// Assets
import { questionTopBanner } from '../../assets';

const Option = ({ id, text, selected, onSelectAction }) => {
  return (
    <div
      className={`option_wrap ${selected ? 'option_wrap_selected' : ''}`}
      onClick={() => {
        onSelectAction(id);
      }}
    >
      
      <div className={'option_text'}>{text}</div>
    </div>
  );
};

export default Option;
