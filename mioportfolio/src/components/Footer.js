import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="App-footer">
      <p className="footer-copyright">
         © {currentYear} Matteo Borello.
      </p>
      <div className="footer-icons">
        <a href="https://github.com/Jomat22" target="_blank" rel="noopener noreferrer">
          <FaGithub className='fa' />
        </a>
        <a href="https://www.linkedin.com/in/matteo-borello-067a35245/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='fa' />
        </a>
        <a href="https://instagram.com/mattehow00" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="fa" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;