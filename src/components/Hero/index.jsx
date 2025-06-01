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
        Dedicated Manual and Automation Test Engineer with expertise in automated testing tools and methodologies. Skilled in ensuring high-quality, user-friendly applications through thorough test planning, execution, and defect tracking. 
        </p>
        <FlipButton
          ref={buttonRef}
          fileUrl="https://drive.google.com/file/d/1Hp90mEssZXqs5DO5MWLVLedBT85Fbcvy/view?usp=sharing"
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
