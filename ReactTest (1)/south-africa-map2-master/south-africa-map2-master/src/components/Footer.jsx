import React from 'react';
import { FaHome, FaMapMarkerAlt, FaClipboardList, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import '../CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul className="footer-nav__list">
          <li className="footer-nav__item">
            <a href="/" className="footer-nav__link">
              <FaHome className="footer-nav__icon" />
              Home
            </a>
          </li>
          <li className="footer-nav__item">
            <a href="/map" className="footer-nav__link">
              <FaMapMarkerAlt className="footer-nav__icon" />
              SA Map Stats
            </a>
          </li>
          <li className="footer-nav__item">
            <a href="/data-table" className="footer-nav__link">
              <FaClipboardList className="footer-nav__icon" />
              Health Report
            </a>
          </li>
        </ul>
      </nav>
      <div className="footer-social">
        <a href="https://www.facebook.com" className="footer-social__link">
          <FaFacebookF className="footer-social__icon" />
        </a>
        <a href="https://www.twitter.com" className="footer-social__link">
          <FaTwitter className="footer-social__icon" />
        </a>
        <a href="https://www.linkedin.com" className="footer-social__link">
          <FaLinkedinIn className="footer-social__icon" />
        </a>
      </div>
      <div className="footer-text">
        <p>Supply Chain Network Pty LTD</p>
      </div>
    </footer>
  );
};

export default Footer;
