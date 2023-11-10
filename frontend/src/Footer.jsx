import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>&copy; {new Date().getFullYear()} Murphey Osmundson. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
