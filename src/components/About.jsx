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
              At JK Digital Solutions, we are an expert digital marketing company dedicated to growing your business. 
              We are not just a web design company; we create powerful websites and SEO strategies that bring you more customers and sales.
            </p>
            <p className="about-text">
              As a top SEO agency and website development team, we provide all the digital services you need in one place. 
              From building a custom mobile app to running a successful social media marketing campaign, our digital marketing experts will help you succeed online.
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
