import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import astro_dev from "../../assets/astrodev.png";
import FlipButton from "../Common/Button";
import "./styles.css";

const Hero = () => {
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    gsap.to(imageElement, {
      y: -15,
      duration: 0.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      delay: 0.5,
    });

    return () => {
      gsap.killTweensOf(imageElement);
    };
  }, []);

  useEffect(() => {
    const buttonElement = buttonRef.current;

    const handleMouseEnter = () => {
      gsap.to(buttonElement, { scale: 1.1, duration: 0.3, ease: "power1.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(buttonElement, { scale: 1, duration: 0.3, ease: "power1.out" });
    };

    buttonElement.addEventListener("mouseenter", handleMouseEnter);
    buttonElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      buttonElement.removeEventListener("mouseenter", handleMouseEnter);
      buttonElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>I&apos;m Harshit Verma</h1>
        <p>
          Passionate Front-End Developer and Software QA Engineer with expertise
          in React and automated testing, dedicated to creating high-quality,
          user-friendly applications.
        </p>
        <FlipButton
          ref={buttonRef}
          fileUrl="https://drive.google.com/uc?export=download&id=1NvaIZ05L5erZIzYvvzevqkS2EliPl16C"
          fileName="Resume.pdf"
        />
      </div>
      <div className="hero-image">
        <img
          ref={imageRef}
          src={astro_dev}
          alt="Illustration of Harshit Verma, Front-End Developer"
          height="500"
          width="500"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
