import React from 'react';
import './Founder.css';
import { Award, Briefcase, Code, Terminal } from 'lucide-react';

const Founder = () => {
  return (
    <section id="founder" className="founder-section">
      <div className="container">
        <h2 className="section-title">
          Meet the <span className="text-gradient">Founder</span>
        </h2>
        <p className="section-subtitle">
          Meet the founder of our top digital marketing agency, helping you grow your business online.
        </p>
        
        <div className="founder-container glass-panel">
          <div className="founder-image-wrapper">
            <div className="founder-image-glow"></div>
            <img src="/AI.png" alt="Aswin Raj - Founder" className="founder-image" />
          </div>
          
          <div className="founder-details">
            <h3 className="founder-name">Aswin Raj</h3>
            <p className="founder-role text-gradient">CEO & Lead Developer</p>
            
            <p className="founder-bio">
              Aswin Raj is an expert web developer and the founder of JK Digital Solutions. With years of experience as a top SEO specialist and mobile app developer, Aswin started this digital marketing agency to help small and large businesses succeed online.
            </p>
            
            <p className="founder-bio">
              More than just SEO marketing, Aswin builds custom software solutions and high-performance platforms like GymOS. His goal is to create fast, beautiful, and easy-to-use websites and apps that get you more customers and sales.
            </p>
            
            <a href="https://aswinraj.co.in" target="_blank" rel="noopener noreferrer" className="btn btn-outline hover-scale" style={{ marginTop: '2rem' }}>
              Visit Personal Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
