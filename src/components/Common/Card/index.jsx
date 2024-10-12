import React, { useRef } from "react";
import { gsap } from "gsap";
import { FaEye, FaGithub, FaTag } from "react-icons/fa";
import "./styles.css";

const ProjectCard = ({ imageUrl, title, liveLink, sourceCode, tags = [] }) => {
  const footerRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(footerRef.current, { opacity: 1, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(footerRef.current, { opacity: 0, duration: 0.3 });
  };

  return (
    <div
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageUrl} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <div className="card-footer" ref={footerRef} style={{ opacity: 0 }}>
        <div className="footer-icons">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live Website"
          >
            <FaEye />
          </a>
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Source Code"
          >
            <FaGithub />
          </a>
        </div>
        {tags.length > 0 && (
          <div className="tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                <FaTag style={{ marginRight: "5px" }} />
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
