import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import astro_dev from "../../assets/astrodev.png";
import "./styles.css";

const Hero = () => {
  const imageRef = useRef(null);

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

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>I&apos;m Harshit Verma</h1>
        <p>
          Passionate Front-End Developer and Software QA Engineer with expertise
          in React and automated testing, dedicated to creating high-quality,
          user-friendly applications.
        </p>
        <button>Resume</button>
      </div>
      <div className="hero-image">
        <img ref={imageRef} src={astro_dev} alt="Description of the image" />
      </div>
    </section>
  );
};

export default Hero;
