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
      👋 Hi there! I'm Harshit Verma, a Software QA Engineer passionate about delivering high-quality web experiences. ✅ I specialize in manual and automation testing using tools like Selenium, ensuring robust and reliable applications. 🧪 With a background in Frontend Development (JavaScript, React, HTML, CSS), I understand both user experience and technical quality. 🌐
  📚 I hold a Bachelor's degree in Mathematics, which has sharpened my analytical and problem-solving skills. I enjoy exploring UI/UX concepts and keeping up with the latest tech trends. 🎨 Always open to learning and collaboration—let’s connect! 🤝
      </p>
    </motion.div>
  );
};

export default AboutUs;
