import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import socialMediaLinks from "./socialMediaLinks";
import "./styles.css";

const iconMap = {
  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter,
};

const SocialMedia = () => {
  return (
    <div className="social-media">
      {socialMediaLinks.map(({ href, icon }, index) => (
        <a key={index} href={href} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={iconMap[icon]} className="social-icon" />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
