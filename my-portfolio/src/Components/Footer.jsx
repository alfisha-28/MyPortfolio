import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Alfisha. All rights reserved.</p>
      <div className="footer-links">
        <Link to="/Home">Home</Link>
        <Link to="/About">About Me</Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Contact">Contact Me</Link>
      </div>
    </footer>
  );
}

export default Footer;
