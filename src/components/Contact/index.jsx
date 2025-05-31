import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
    }
  }, [inView, controls]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
              <span>+91 98765 43210</span>
            </div>
            <div className="contact-dark-info-item">
              <span className="contact-dark-info-icon" role="img" aria-label="location">📍</span>
              <span>India</span>
            </div>
          </div>
        </div>
        <div className="contact-dark-right">
          <form className="contact-dark-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              className="contact-dark-input"
              value={form.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              className="contact-dark-input"
              value={form.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="contact-dark-input contact-dark-textarea"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
            />
            <button type="submit" className="contact-dark-btn">Send Message</button>
            {submitted && <div className="contact-dark-success">Thank you for reaching out! I'll be in touch soon.</div>}
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact; 