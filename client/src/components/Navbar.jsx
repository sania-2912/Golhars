import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cartCount = 0 }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Golhars Logo" />
      </div>

      <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/paintings" onClick={closeMenu}>Paintings</Link>
        <Link to="/faq" onClick={closeMenu}>FAQ</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <Link to="/cart" onClick={closeMenu}>Cart ({cartCount})</Link>
        <Link to="/login" onClick={closeMenu}>Login</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* ☰ */}
      </div>
    </nav>
  );
};

export default Navbar;
