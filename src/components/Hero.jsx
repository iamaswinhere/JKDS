import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';
import { NavHashLink } from 'react-router-hash-link';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge glass-panel">
            <Activity size={16} className="badge-icon" color="var(--accent-secondary)" />
            <span>Top SEO & Digital Marketing Agency</span>
          </div>
          
          <h1 className="hero-title">
            Grow Your Business Online With <br/>
            <span className="text-gradient">JK Digital Solutions</span>
          </h1>
          
          <p className="hero-description">
            We offer the best digital marketing services to help your business grow. 
            Get custom website design, fast web development, mobile app creation, 
            SEO services, and social media marketing to get more customers and sales.
          </p>
          
          <div className="hero-cta">
            <a href={`https://wa.me/918921809791?text=${encodeURIComponent('Hi JK Digital Solutions, I would like to book a consultation.')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg hover-scale">
              Book a Consultation <ArrowRight size={20} />
            </a>
            <NavHashLink to="/services" className="btn btn-outline btn-lg hover-scale">
              Explore Services
            </NavHashLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
