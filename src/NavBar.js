/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Image/Logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location from React Router

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close the menu when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          {/* <p className="navbar-logo">PRADEEP</p> */}
          <img
            className="Logo h-10 hover:invert"
            src={Logo}
            alt="<LOGO HERE>"
          />
        </a>
        <div
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links hover:text-[#ff0000]">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links hover:text-[#ff0000]">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links hover:text-[#ff0000]">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/activity" className="nav-links hover:text-[#ff0000]">
              Activity
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
