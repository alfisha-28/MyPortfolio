import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <Link to="/" className="logo-link">Alfisha</Link>
      </h1>

      <ul className="nav-links">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">About Me</Link></li>
        <li><Link to="/Skills">My Skills</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/Contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
