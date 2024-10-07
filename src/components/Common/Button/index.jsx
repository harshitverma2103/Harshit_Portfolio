import React, { forwardRef } from "react";
import "./styles.css";

const FlipButton = forwardRef(({ fileUrl, fileName, children }, ref) => {
  return (
    <div className="button-container">
      <a
        href={fileUrl}
        download={fileName}
        className="btn-flip"
        data-front="Resume"
        data-back="Download"
        ref={ref}
      >
        {children}
      </a>
    </div>
  );
});

export default FlipButton;
