import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">My App</div>
      <div className="navbar__links">
        <a href="/" className="navbar__link">
          Home
        </a>
        <a href="/about" className="navbar__link">
          About
        </a>
        <a href="/contact" className="navbar__link">
          Contact
        </a>
        <a href="/login" className="navbar__link">
          Login
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
