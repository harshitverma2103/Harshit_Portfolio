import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const StringAnimation = ({ id }) => {
  const stringRef = useRef(null);

  useEffect(() => {
    const stringElement = stringRef.current;
    const pathElement = stringElement.querySelector("path");
    const finalPath = "M 10 100 Q 500 100 990 100"; // Adjust finalPath if needed

    const handleMouseMove = (e) => {
      const dynamicPath = `M 10 100 Q ${e.clientX} ${e.clientY} 990 100`;
      gsap.to(pathElement, {
        attr: { d: dynamicPath },
        duration: 0.1,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(pathElement, {
        attr: { d: finalPath },
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      });
    };

    stringElement.addEventListener("mousemove", handleMouseMove);
    stringElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      stringElement.removeEventListener("mousemove", handleMouseMove);
      stringElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [id]); // Added id to dependencies

  return (
    <div ref={stringRef} id={`string-${id}`}>
      <svg width="1000" height="200">
        <path
          d="M 10 100 Q 500 100 990 100"
          stroke="#61dafb"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default StringAnimation;
