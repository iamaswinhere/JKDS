import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { FaFacebook, FaWhatsapp, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="text-gradient">JK Digital Solutions</h2>
            <p className="footer-desc">
              Your partner in digital transformation. We build beautiful, high-performance web applications and grow your brand on social media.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/share/14iUykxWBQx/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="social-link"><FaFacebook size={20} /></a>
              <a href="https://wa.me/918921809791" target="_blank" rel="noreferrer" className="social-link"><FaWhatsapp size={20} /></a>
              <a href="https://www.instagram.com/digitalsolution.jk/" target="_blank" rel="noreferrer" className="social-link"><FaInstagram size={20} /></a>
              <a href="mailto:jkdigitalsolutions26@gmail.com" className="social-link"><FaEnvelope size={18} /></a>
              <a href="tel:+918921809791" className="social-link"><FaPhoneAlt size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links-group">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li><NavHashLink to="/#hero" smooth={true} className="f-link">Home</NavHashLink></li>
              <li><NavHashLink to="/#about" smooth={true} className="f-link">About Us</NavHashLink></li>
              <li><NavHashLink to="/services" smooth={true} className="f-link">Our Services</NavHashLink></li>
              <li><NavHashLink to="/#contact" smooth={true} className="f-link">Contact</NavHashLink></li>
            </ul>
          </div>
          
          <div className="footer-links-group">
            <h3 className="footer-title">Products</h3>
            <ul className="footer-links">
              <li><NavHashLink to="/#product" smooth={true} className="f-link">GymOS</NavHashLink></li>
              <li><NavHashLink to="/services" smooth={true} className="f-link">Pricing</NavHashLink></li>
            </ul>
          </div>
          
          <div className="footer-links-group">
            <h3 className="footer-title">Legal</h3>
            <ul className="footer-links">
              <li><a href="#" className="f-link">Terms of Service</a></li>
              <li><a href="#" className="f-link">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} JK Digital Solutions. All rights reserved.</p>
          <p>
            Designed & Developed by{' '}
            <a href="https://aswinraj.co.in" target="_blank" rel="noopener noreferrer" className="founder-link">
              aswinraj.co.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
