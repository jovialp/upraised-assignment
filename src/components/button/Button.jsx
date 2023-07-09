import React from "react";

// Style
import "./Button.css";

const Button = ({ text, action, className, icon, disabled }) => {
  return (
    <button
      className={`button_primary ${className}`}
      onClick={action}
      disabled={disabled}
    >
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
