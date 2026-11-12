import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Zap, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import './Hero.css';

const kineticWords = [
  'Websites.',
  'Mobile Apps.',
  'AI Content.',
  'Custom Software.',
  'Brand Growth.'
];

const Hero = () => {
  const sectionRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % kineticWords.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  // Smooth parallax scroll depth tracking
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    const updateScroll = () => {
      if (sectionRef.current) {
        const scrollY = Math.min(window.scrollY, window.innerHeight * 1.2);
        sectionRef.current.style.setProperty('--scroll-y', `${scrollY}`);
        const fade = Math.max(0, 1 - scrollY / (window.innerHeight * 0.75));
        sectionRef.current.style.setProperty('--scroll-fade', `${fade}`);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    updateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="hero-section">
      {/* Multi-plane parallax background layers */}
      <div className="hero-bg-ambient hero-depth-bg" aria-hidden="true" />
      <div className="hero-cinematic-beams hero-depth-beams" aria-hidden="true" />
      <div className="hero-depth-orb hero-depth-orb-left" aria-hidden="true" />
      <div className="hero-depth-orb hero-depth-orb-right" aria-hidden="true" />
      <div className="hero-subtle-grid hero-depth-grid" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-pill hero-reveal" style={{ '--delay': '0ms' }}>
            <Sparkles size={14} className="hero-pill-icon" />
            <span>JK Digital Solutions · Alathur, Palakkad</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-line hero-reveal" style={{ '--delay': '90ms' }}>
              We craft high-impact
            </span>
            <span className="hero-line hero-kinetic-wrap hero-reveal" style={{ '--delay': '180ms' }}>
              <span key={wordIndex} className="hero-kinetic-word text-gradient">
                {kineticWords[wordIndex]}
              </span>
            </span>
            <span className="hero-line hero-line-sub hero-reveal" style={{ '--delay': '270ms' }}>
              built to convert.
            </span>
          </h1>

          <p className="hero-description hero-reveal" style={{ '--delay': '360ms' }}>
            A creative web design and digital marketing agency in Alathur, Palakkad—combining
            minimal engineering, AI content, and local SEO to turn visitors into customers.
          </p>

          <div className="hero-cta hero-reveal" style={{ '--delay': '450ms' }}>
            <a
              href={`https://wa.me/918921809791?text=${encodeURIComponent(
                'Hi JK Digital Solutions, I would like to book a consultation.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg hero-primary-btn"
            >
              Book a Consultation <ArrowRight size={19} />
            </a>
            <Link to="/portfolio" className="btn btn-outline btn-lg hero-secondary-btn">
              View Our Work
            </Link>
          </div>

          <div className="hero-trust-bar hero-reveal hero-depth-layer-4" style={{ '--delay': '540ms' }}>
            <div className="hero-trust-item">
              <MapPin size={16} color="var(--accent-secondary)" />
              <span>Alathur, Palakkad &amp; Across Kerala</span>
            </div>
            <span className="hero-trust-dot" aria-hidden="true" />
            <div className="hero-trust-item">
              <Zap size={16} color="var(--accent-secondary)" />
              <span>Performance-First Engineering</span>
            </div>
            <span className="hero-trust-dot" aria-hidden="true" />
            <div className="hero-trust-item">
              <ShieldCheck size={16} color="var(--accent-secondary)" />
              <span>End-to-End Digital Growth</span>
            </div>
          </div>
        </div>
      </div>

      {/* Side-docked vertical scroll trigger */}
      <NavHashLink
        to="/#about"
        smooth={true}
        className="hero-side-scroll hero-reveal"
        style={{ '--delay': '680ms' }}
        aria-label="Scroll to Who We Are"
      >
        <span className="hero-side-scroll-label">Scroll</span>
        <span className="hero-side-scroll-track" aria-hidden="true">
          <span className="hero-side-scroll-pulse" />
        </span>
        <span className="hero-side-scroll-dot" aria-hidden="true" />
      </NavHashLink>
    </section>
  );
};

export default Hero;
