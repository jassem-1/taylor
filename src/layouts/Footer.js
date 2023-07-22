import React from 'react';
import './Footer.css'; // You can create a separate CSS file for styling if needed

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-section">
        <p>© 2023 Taylor Nation, LLC</p>
      </div>
      <div className="right-section">
        <a href="/terms">Terms</a>
        <span>|</span>
        <a href="/privacy">Privacy</a>
        <span>|</span>
        <a href="/accessibility">Accessibility</a>
        <span>|</span>
        <a href="/do-not-sell">Do Not Sell Or Share My Personal Information</a>
      </div>
    </div>
  );
};

export default Footer;
