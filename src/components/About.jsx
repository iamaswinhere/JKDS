import React from 'react';
import { Target, Users, Zap } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Who We <span className="text-gradient">Are</span>
            </h2>
            <p className="about-text">
              Based in Alathur, Palakkad, JK Digital Solutions is a results-driven web design and digital marketing agency dedicated to growing your business. 
              We craft fast, conversion-focused websites and local SEO strategies that help businesses across Palakkad and Kerala attract more customers and sales.
            </p>
            <p className="about-text">
              From custom website development and mobile apps to AI content creation and social media marketing, our team provides end-to-end digital solutions in one place so your brand stands out online.
            </p>
            
            <div className="founder-card glass-panel hover-scale">
              <div className="founder-info">
                <h3>Built with vision</h3>
                <p>
                  Discover more about our roots and founder at{' '}
                  <a href="https://aswinraj.co.in" target="_blank" rel="noopener noreferrer" className="text-gradient hover-link">
                    aswinraj.co.in
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="about-features">
            <div className="feature-card glass-panel hover-scale">
              <div className="feature-icon-wrapper">
                <Target color="var(--accent-primary)" size={24} />
              </div>
              <h3>Data-Driven SEO</h3>
              <p>We use real data and market research to get the best SEO results.</p>
            </div>
            
            <div className="feature-card glass-panel hover-scale">
              <div className="feature-icon-wrapper">
                <Zap color="var(--accent-secondary)" size={24} />
              </div>
              <h3>Fast Web Design</h3>
              <p>We build your website quickly without losing top quality and design.</p>
            </div>
            
            <div className="feature-card glass-panel hover-scale">
              <div className="feature-icon-wrapper">
                <Users color="var(--text-primary)" size={24} />
              </div>
              <h3>Focus on Growth</h3>
              <p>Your business growth and sales are our top priority as your marketing agency.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
