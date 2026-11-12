import React, { useState, useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/#hero' },
    { name: 'About', to: '/#about' },
    { name: 'Services', to: '/services' },
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'Blog', to: '/blog' },
    { name: 'Product', to: '/product' },
    { name: 'Contact', to: '/#contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <NavHashLink
            to="/#hero"
            smooth={true}
            className="logo-text"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img src="/logo.svg" alt="JK Digital Solutions" className="logo-img" />
            <h1 className="text-gradient logo-title">JK Digital Solutions</h1>
          </NavHashLink>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavHashLink
                  to={link.to}
                  smooth={true}
                  className="nav-link"
                >
                  {link.name}
                </NavHashLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          type="button"
          className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span className="mobile-toggle-icon">
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </span>
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <div
        className={`mobile-menu glass-panel ${mobileMenuOpen ? 'is-open' : 'is-closed'}`}
        aria-hidden={!mobileMenuOpen}
      >
        <ul className="mobile-nav-list">
          {navLinks.map((link, index) => (
            <li
              key={link.name}
              className="mobile-nav-item"
              style={{ '--item-index': index }}
            >
              <NavHashLink
                to={link.to}
                smooth={true}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
                tabIndex={mobileMenuOpen ? 0 : -1}
              >
                {link.name}
              </NavHashLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
