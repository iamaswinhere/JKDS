import React from 'react';
import { CheckCircle, ArrowRight, Smartphone, Zap, Activity } from 'lucide-react';
import toast from 'react-hot-toast';
import './Product.css';

const Product = () => {
  const features = [
    'Automated Member Management',
    'Integrated Billing & Payments',
    'Real-time Analytics Dashboard',
    'Access Control Integration'
  ];

  const handleDownload = () => {
    toast.success('Downloading GymOS Proposal...');
    const link = document.createElement('a');
    link.href = '/Proposal - GYMOS.pdf';
    link.download = 'GYMOS-Proposal.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="product" className="product-section">
      <div className="container">
        <div className="product-card glass-panel" style={{ padding: '3rem' }}>
          <div className="product-grid">
            <div className="product-info">
              <div className="product-badge">
                <Zap size={14} /> Our Flagship Product
              </div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
                Meet <span className="text-gradient">GymOS</span>
              </h2>
              <p className="product-description">
                The ultimate gym management software designed to streamline your fitness center's operations.
                From member check-ins to financial reporting, GymOS handles it all in one sleek platform.
              </p>

              <ul className="feature-list">
                {features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <CheckCircle size={20} color="var(--accent-secondary)" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="product-cta">
                <a href={`https://wa.me/918921809791?text=${encodeURIComponent('Hi JK Digital Solutions, I would like to make an enquiry about GymOS.')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary hover-scale">
                  Enquiry <ArrowRight size={20} />
                </a>
                <button onClick={handleDownload} className="btn btn-outline hover-scale">
                  Download Proposal
                </button>
              </div>
            </div>

            <div className="product-visual">
              {/* CSS-based mockup of the GymOS dashboard */}
              <div className="mockup-container glass-panel">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <div className="mockup-title">GymOS Dashboard</div>
                </div>
                <div className="mockup-body">
                  <div className="mockup-sidebar">
                    <div className="mock-menu-item active"></div>
                    <div className="mock-menu-item"></div>
                    <div className="mock-menu-item"></div>
                    <div className="mock-menu-item"></div>
                  </div>
                  <div className="mockup-content">
                    <div className="mock-stats-row">
                      <div className="mock-stat-card">
                        <div className="mock-stat-title">Active Members</div>
                        <div className="mock-stat-value">1,248</div>
                        <div className="mock-stat-chart chart-purple"></div>
                      </div>
                      <div className="mock-stat-card">
                        <div className="mock-stat-title">Monthly Revenue</div>
                        <div className="mock-stat-value">$42,500</div>
                        <div className="mock-stat-chart chart-cyan"></div>
                      </div>
                    </div>
                    <div className="mock-main-chart">
                      <div className="mock-chart-bar b1"></div>
                      <div className="mock-chart-bar b2"></div>
                      <div className="mock-chart-bar b3"></div>
                      <div className="mock-chart-bar b4"></div>
                      <div className="mock-chart-bar b5"></div>
                      <div className="mock-chart-bar b6"></div>
                      <div className="mock-chart-bar b7"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decoration */}
              <div className="mockup-glow"></div>
            </div>
            {/* Subtle background glow for the card itself */}
            <div className="card-bg-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
