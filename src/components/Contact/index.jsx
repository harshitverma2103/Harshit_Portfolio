import React, { useRef, useEffect, useState } from "react";
import "./styles.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

const WEB3FORMS_ACCESS_KEY = "1f816557-8ba9-4651-ae0b-184e5dad20ef"; // Web3Forms public access key

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
    }
  }, [inView, controls]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    const formData = new FormData(formRef.current);
    formData.set("access_key", WEB3FORMS_ACCESS_KEY);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        setStatus("SUCCESS");
        formRef.current.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className="contact-dark-bg"
    >
      <div className="contact-animated-bg" />
      <div className="contact-dark-2col">
        <div className="contact-dark-left">
          <h2 className="contact-dark-heading">We'd Love to Hear From You</h2>
          <p className="contact-dark-desc">Whether it's feedback, ideas, or just a hello, I'm here.</p>
          <div className="contact-dark-info-list">
            <div className="contact-dark-info-item">
              <span className="contact-dark-info-icon" role="img" aria-label="email">✉️</span>
              <span>harshitverma2103@gmail.com</span>
            </div>
            <div className="contact-dark-info-item">
              <span className="contact-dark-info-icon" role="img" aria-label="phone">📞</span>
              <span>+91 8445260212</span>
            </div>
            <div className="contact-dark-info-item">
              <span className="contact-dark-info-icon" role="img" aria-label="location">📍</span>
              <span>India</span>
            </div>
          </div>
        </div>
        <div className="contact-dark-right">
          <form className="contact-dark-form" ref={formRef} onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              className="contact-dark-input"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              className="contact-dark-input"
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="contact-dark-input contact-dark-textarea"
              required
              rows={5}
            />
            {/* Honeypot for spam protection */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />
            <button type="submit" className="contact-dark-btn">Send Message</button>
            {status === "SUCCESS" && (
              <div className="contact-dark-success">Thank you for reaching out! I'll be in touch soon.</div>
            )}
            {status === "ERROR" && (
              <div className="contact-dark-error">Something went wrong. Please try again later.</div>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact; 