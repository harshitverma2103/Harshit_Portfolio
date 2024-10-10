import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "./styles.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="code-symbol">&lt; Harshit /&gt;</span>
      </div>

      <div className="navbar-menu-icon" onClick={toggleMenu}>
        {isOpen ? (
          <FaTimes style={{ color: "#ffffff", fontSize: "1.8rem" }} />
        ) : (
          <FaBars style={{ color: "#ffffff", fontSize: "1.8rem" }} />
        )}
      </div>

      <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              className="link"
              to="about-us-container"
              smooth={true}
              offset={-260}
              duration={1000}
              onClick={toggleMenu}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="skills_section"
              smooth={true}
              offset={-160}
              duration={1000}
              onClick={toggleMenu}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="projects_section"
              smooth={true}
              offset={-160}
              duration={1000}
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="experience_section"
              smooth={true}
              offset={-160}
              duration={1000}
              onClick={toggleMenu}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="contact_section"
              smooth={true}
              offset={-160}
              duration={1000}
              onClick={toggleMenu}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
