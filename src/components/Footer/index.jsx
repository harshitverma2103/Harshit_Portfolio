import React from "react";
import { Link } from "react-scroll";
import SocialMedia from "../SocialMedia";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer-modern">
      <div className="footer-container">
        <div className="footer-col footer-brand">
          <img src="/vite.svg" alt="Logo" className="footer-logo" />
          <h2 className="footer-title">Harshit Verma</h2>
          <p className="footer-tagline">Crafting beautiful web experiences.</p>
        </div>
        <div className="footer-col footer-links-col">
          <h3>Navigate</h3>
          <ul className="footer-links-list">
            <li>
              <Link to="about-us-container" smooth={true} offset={-220} duration={1000} className="footer-link">About</Link>
            </li>
            <li>
              <Link to="skills_section" smooth={true} offset={-160} duration={1000} className="footer-link">Skills</Link>
            </li>
            <li>
              <Link to="project-container" smooth={true} offset={-160} duration={1000} className="footer-link">Projects</Link>
            </li>
            <li>
              <Link to="contact-section" smooth={true} offset={-160} duration={1000} className="footer-link">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-contact-col">
          <h3>Contact</h3>
          <ul className="footer-contact-list">
            <li>
              <a href="mailto:harshitverma2103@gmail.com" className="footer-contact-link">harshitverma2103@gmail.com</a>
            </li>
            <li>
              <a href="tel:+919876543210" className="footer-contact-link">+91 98765 43210</a>
            </li>
            <li>
              <span className="footer-contact-link">India</span>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-social-col">
          <h3>Follow</h3>
          <SocialMedia />
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Harshit Verma. All rights reserved.</span>
        <button
          className="footer-backtotop"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
