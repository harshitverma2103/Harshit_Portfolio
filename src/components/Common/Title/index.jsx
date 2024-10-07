import React from "react";
import StringAnimation from "../svg";
import "./styles.css";

const Title = ({ text1, text2, id }) => {
  return (
    <div className="title-container">
      <p className="text">
        {text1}
        <span className="highlighted-text">{text2}</span>
      </p>
      <div className="divider">
        <StringAnimation id={id} />
      </div>
    </div>
  );
};

export default Title;
