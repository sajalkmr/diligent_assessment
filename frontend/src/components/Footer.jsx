import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/">Shop</a></li>
            <li><a href="/">Categories</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">Customer Support</h3>
          <ul className="footer-links">
            <li><a href="/">Help Center</a></li>
            <li><a href="/">Track Order</a></li>
            <li><a href="/">Returns</a></li>
            <li><a href="/">Shipping Info</a></li>
            <li><a href="/">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">Newsletter</h3>
          <p className="footer-text">Subscribe to get special offers and updates</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>© 2024 Diligent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

