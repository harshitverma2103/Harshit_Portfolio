import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">
          <span className="code-symbol">&lt; Harshit /&gt;</span>
        </a>
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
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
