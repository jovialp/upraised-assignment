import React from "react";

// Style
import "./TopBanner.css";

const TopBanner = ({ src }) => {
  return (
    <div>
      <img src={src} alt="top banner" className="top_banner" />
    </div>
  );
};

export default TopBanner;
