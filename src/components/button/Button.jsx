import React from 'react';

// Style
import './Button.css';

const Button = ({ text, action, className, icon }) => {
  return (
    <button className={`button_primary ${className}`} onClick={action}>
      {text}
      {icon && (
        <span>
          <img src={icon} alt={`button-icon`} className="button_icon" />
        </span>
      )}
    </button>
  );
};

export default Button;
