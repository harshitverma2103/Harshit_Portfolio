import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./styles.css";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <a
        href="https://github.com/harshitverma2103"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className="social-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/harshit2103/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
      </a>
      <a
        href="https://www.instagram.com/harshitv.here/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
      </a>
      <a
        href="https://x.com/Harshit56879251"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
      </a>
    </div>
  );
};

export default SocialMedia;
