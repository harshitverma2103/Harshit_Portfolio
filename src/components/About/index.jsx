import React from "react";
import "./styles.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const AboutUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className="about-us-container"
    >
      <p>
        👋 Hi there! I&apos;m Harshit Verma, a Frontend Developer passionate about
        crafting beautiful web experiences. 🌐 I have expertise in JavaScript,
        React, HTML, and CSS, and I love bringing ideas to life through code! 💻✨
        I also have experience in automation testing using Selenium, ensuring
        quality in every project. ✅ My journey began with a Bachelor&apos;s
        degree in Mathematics, giving me a solid analytical foundation. 📚 I enjoy
        exploring UI design concepts and staying updated on the latest tech
        trends. 🎨 I believe in the power of collaboration and always welcome new
        connections! 🤝
      </p>
    </motion.div>
  );
};

export default AboutUs;
