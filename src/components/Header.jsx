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
    { name: 'Product', to: '/#product' },
    { name: 'Contact', to: '/#contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <NavHashLink to="/#hero" smooth={true} className="logo-text">
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
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu glass-panel">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavHashLink
                  to={link.to}
                  smooth={true}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </NavHashLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
