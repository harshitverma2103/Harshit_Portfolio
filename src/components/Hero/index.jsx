import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import astro_dev from "../../assets/astrodev.png";
import FlipButton from "../Common/Button";
import "./styles.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

const Hero = () => {
  const imageRef = useRef(null);
  const buttonRef = useRef(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

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

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className="hero"
    >
      <div className="hero-text">
        <h1>I&apos;m Harshit Verma</h1>
        <p>
          Passionate Front-End Developer and Software QA Engineer with expertise
          in React and automated testing, dedicated to creating high-quality,
          user-friendly applications.
        </p>
        <FlipButton
          ref={buttonRef}
          fileUrl="https://drive.google.com/file/d/1xuoKuSauhPwQadV5-ONDGU78jDazyp1w/view?usp=sharing"
          fileName="Harshit_Resume.pdf"
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
    </motion.section>
  );
};

export default Hero;
