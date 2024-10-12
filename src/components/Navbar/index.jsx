import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "./styles.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const links = [
    { to: "about-us-container", label: "About Me", offset: -220 },
    { to: "skills_section", label: "Skills", offset: -160 },
    { to: "project-container", label: "Projects", offset: -160 },
    { to: "contact_section", label: "Contact Me", offset: -160 },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="code-symbol">&lt; Harshit /&gt;</span>
      </div>

      <div className="navbar-menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
        <ul>
          {links.map(({ to, label, offset }) => (
            <li key={to}>
              <Link
                className="link"
                to={to}
                smooth={true}
                offset={offset}
                duration={1000}
                onClick={toggleMenu}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
