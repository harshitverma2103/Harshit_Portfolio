import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { FaEye, FaGithub, FaTag } from 'react-icons/fa';
import './styles.css';

const ProjectCard = ({ imageUrl, title, liveLink, sourceCode, tags = [] }) => {
  const footerRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(footerRef.current, { duration: 0.5, opacity: 1, visibility: 'visible' });
  };

  const handleMouseLeave = () => {
    gsap.to(footerRef.current, { duration: 0.5, opacity: 0, visibility: 'hidden' });
  };

  return (
    <div
      className="hover-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
      </div>
      <div className="card-footer" ref={footerRef}>
        <div className="footer-icons">
          <a href={liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live Website">
            <FaEye />
          </a>
          <a href={sourceCode} target="_blank" rel="noopener noreferrer" aria-label="Source Code">
            <FaGithub />
          </a>
        </div>
        <div className="tags">
          {tags.length > 0 ? (
            tags.map((tag) => (
              <div className="tag" key={tag}>
                <FaTag style={{ marginRight: '5px' }} />
                {tag}
              </div>
            ))
          ) : (
            <span>No tags available</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
