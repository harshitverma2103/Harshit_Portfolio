import React from "react";
import { Link } from "react-scroll";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr className="custom-hr" />
      <h1>Thanks for visiting</h1>

      <p className="contact-info">
        Contact me at:{" "}
        <a href="mailto:harshitverma2103@gmail.com">
          harshitverma2103@gmail.com
        </a>
      </p>

      <div className="footer-links">
        <Link
          to="about-us-container"
          smooth={true}
          offset={-220}
          duration={1000}
        >
          About Me
        </Link>
        <Link to="skills_section" smooth={true} offset={-160} duration={1000}>
          Skills
        </Link>
        <Link
          to="project-container"
          smooth={true}
          offset={-160}
          duration={1000}
        >
          Projects
        </Link>
      </div>

      <button
        className="footer-button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to Top
      </button>
    </div>
  );
};

export default Footer;
