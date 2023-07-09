import React from "react";

// Style
import "./QustionImage.css";

const QustionImage = ({ src }) => {
  return <img className={`question_image`} src={src} />;
};

export default QustionImage;
