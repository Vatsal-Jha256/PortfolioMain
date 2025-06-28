import React from 'react';
import { FaHeart, FaCode } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>
              Built with <FaHeart className="heart-icon" /> and <FaCode className="code-icon" /> by{' '}
              <span className="gradient-text">Vatsal Jha</span>
            </p>
            <p className="copyright">
              © {new Date().getFullYear()} Vatsal Jha. All rights reserved.
            </p>
          </div>
          
          <div className="footer-links">
            <a href="#home" className="footer-link">Back to Top</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 