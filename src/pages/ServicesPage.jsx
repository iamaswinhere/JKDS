import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Services from '../components/Services';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <main className="services-page" style={{ paddingTop: '6rem', paddingBottom: '4rem', minHeight: '100vh' }}>
      <Helmet>
        <title>Services &amp; Pricing | Web Design &amp; Digital Marketing in Alathur, Palakkad — JK Digital Solutions</title>
        <meta name="description" content="Explore web design, website development, mobile apps, local SEO, content creation, AI content creation, custom software, and digital marketing packages in Alathur, Palakkad." />
      </Helmet>

      <Services />

      <section className="pricing-section">
        <div className="container">
          <h2 className="section-title">Transparent <span className="text-gradient">Pricing</span> Packages</h2>
          <p className="section-subtitle" style={{ marginBottom: '4rem' }}>
            Choose the perfect plan tailored for your business growth. No hidden fees.
          </p>

          {/* 0 to 1M Blueprint Category */}
          <div className="pricing-category" style={{ marginBottom: '5rem' }}>
            <div className="pricing-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '1000px', margin: '0 auto' }}>
              <div className="pricing-card glass-panel featured" style={{ transform: 'none', border: '1px solid rgba(47, 217, 209, 0.3)', boxShadow: '0 0 40px rgba(16, 63, 120, 0.4)' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  <div style={{ color: 'var(--accent-secondary)', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.875rem' }}>Ultimate Growth Package</div>
                  <h4 className="pricing-tier" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>0 to 1M Digital Blueprint</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>The complete, end-to-end setup to scale your business from zero to 1 Million digitally.</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                  <ul className="pricing-features">
                    <li className="pricing-feature" style={{ alignItems: 'flex-start' }}>
                      <CheckCircle size={24} color="var(--accent-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} /> 
                      <div>
                        <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Premium Web Development</strong>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Custom, high-converting architecture</span>
                      </div>
                    </li>
                    <li className="pricing-feature" style={{ alignItems: 'flex-start' }}>
                      <CheckCircle size={24} color="var(--accent-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} /> 
                      <div>
                        <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Mobile App Development</strong>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Native & Cross-platform apps</span>
                      </div>
                    </li>
                    <li className="pricing-feature" style={{ alignItems: 'flex-start' }}>
                      <CheckCircle size={24} color="var(--accent-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} /> 
                      <div>
                        <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Advanced SEO</strong>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Dominate organic search rankings</span>
                      </div>
                    </li>
                    <li className="pricing-feature" style={{ alignItems: 'flex-start' }}>
                      <CheckCircle size={24} color="var(--accent-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} /> 
                      <div>
                        <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>AI Video Generation</strong>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>High-quality synthetic media</span>
                      </div>
                    </li>
                  </ul>
                  <ul className="pricing-features">
                    <li className="pricing-feature" style={{ alignItems: 'flex-start' }}>
                      <CheckCircle size={24} color="var(--accent-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} /> 
                      <div>
                        <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Social Media Marketing</strong>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Viral strategies & brand growth</span>
                      </div>
                    </li>
                    <li className="pricing-feature" style={{ alignItems: 'flex-start' }}>
                      <CheckCircle size={24} color="var(--accent-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} /> 
                      <div>
                        <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Meta Ads (FB/IG)</strong>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>High-ROI targeted social campaigns</span>
                      </div>
                    </li>
                    <li className="pricing-feature" style={{ alignItems: 'flex-start' }}>
                      <CheckCircle size={24} color="var(--accent-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} /> 
                      <div>
                        <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Google Ads Management</strong>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Capture high-intent search traffic</span>
                      </div>
                    </li>
                    <li className="pricing-feature" style={{ alignItems: 'flex-start' }}>
                      <CheckCircle size={24} color="var(--accent-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} /> 
                      <div>
                        <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Professional Video Editing</strong>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Engaging reels & promotional cuts</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div style={{ textAlign: 'center' }}>
                  <div className="pricing-price" style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Custom Quote</div>
                  <a href={`https://wa.me/918921809791?text=${encodeURIComponent('Hi JK Digital Solutions, I want to scale my business! I am interested in the 0 to 1M Digital Blueprint (End-to-End Package).')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary pricing-btn hover-scale" style={{ fontSize: '1.1rem', padding: '1rem 3rem', width: 'auto' }}>Get the Blueprint</a>
                </div>
              </div>
            </div>
          </div>

          {/* Web Development Category */}
          <div className="pricing-category">
            <h3 className="pricing-category-title">Web Development</h3>
            <div className="pricing-grid">

              <div className="pricing-card glass-panel">
                <h4 className="pricing-tier">Landing Page</h4>
                <div className="pricing-price">₹4,999<span> + domain</span></div>
                <ul className="pricing-features">
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-secondary)" style={{ flexShrink: 0 }} /> <span>HTML/CSS/JS or Modern Framework</span></li>
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-secondary)" style={{ flexShrink: 0 }} /> <span>Fully Responsive Design</span></li>
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-secondary)" style={{ flexShrink: 0 }} /> <span>Basic SEO Setup</span></li>
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-secondary)" style={{ flexShrink: 0 }} /> <span>Contact Form Integration</span></li>
                </ul>
                <a href={`https://wa.me/918921809791?text=${encodeURIComponent('Hi JK Digital Solutions, I am interested in the Web Development - Landing Page package.')}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline pricing-btn hover-scale">Get Started</a>
              </div>

              <div className="pricing-card glass-panel featured">
                <h4 className="pricing-tier">Business / Premium</h4>
                <div className="pricing-price">₹10,000<span> + domain</span></div>
                <ul className="pricing-features">
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-primary)" style={{ flexShrink: 0 }} /> <span>3-4 Pages Custom Design</span></li>
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-primary)" style={{ flexShrink: 0 }} /> <span>Fully Responsive & Interactive</span></li>
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-primary)" style={{ flexShrink: 0 }} /> <span>Advanced SEO</span></li>
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-primary)" style={{ flexShrink: 0 }} /> <span>Improved Scalability & Architecture</span></li>
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-primary)" style={{ flexShrink: 0 }} /> <span>Speed Optimization</span></li>
                </ul>
                <a href={`https://wa.me/918921809791?text=${encodeURIComponent('Hi JK Digital Solutions, I am interested in the Web Development - Business / Premium package.')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary pricing-btn hover-scale">Get Started</a>
              </div>

              <div className="pricing-card glass-panel">
                <h4 className="pricing-tier">Website Maintenance</h4>
                <div className="pricing-price" style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>Custom Quote</div>
                <ul className="pricing-features">
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-secondary)" style={{ flexShrink: 0 }} /> <span>Regular Updates & Backups</span></li>
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-secondary)" style={{ flexShrink: 0 }} /> <span>Security Monitoring</span></li>
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-secondary)" style={{ flexShrink: 0 }} /> <span>Performance Optimization</span></li>
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-secondary)" style={{ flexShrink: 0 }} /> <span>Content & Asset Updates</span></li>
                </ul>
                <a href={`https://wa.me/918921809791?text=${encodeURIComponent('Hi JK Digital Solutions, I am interested in the Web Development - Website Maintenance package.')}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline pricing-btn hover-scale">Get Started</a>
              </div>

            </div>
          </div>

          {/* Mobile App Development Category */}
          <div className="pricing-category">
            <h3 className="pricing-category-title">Mobile App Development</h3>
            <div className="pricing-grid">

              <div className="pricing-card glass-panel">
                <h4 className="pricing-tier">iOS Native</h4>
                <div className="pricing-price" style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>Custom Quote</div>
                <ul className="pricing-features">
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-secondary)" style={{ flexShrink: 0 }} /> <span>Swift / SwiftUI Native Development</span></li>
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-secondary)" style={{ flexShrink: 0 }} /> <span>Premium Apple UI/UX Guidelines</span></li>
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-secondary)" style={{ flexShrink: 0 }} /> <span>App Store Submission</span></li>
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-secondary)" style={{ flexShrink: 0 }} /> <span>High Performance & Security</span></li>
                </ul>
                <a href={`https://wa.me/918921809791?text=${encodeURIComponent('Hi JK Digital Solutions, I am interested in Mobile App Development for iOS.')}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline pricing-btn hover-scale">Get Started</a>
              </div>

              <div className="pricing-card glass-panel">
                <h4 className="pricing-tier">Android Native</h4>
                <div className="pricing-price" style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>Custom Quote</div>
                <ul className="pricing-features">
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-secondary)" style={{ flexShrink: 0 }} /> <span>Kotlin Native Development</span></li>
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-secondary)" style={{ flexShrink: 0 }} /> <span>Material Design UI/UX</span></li>
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-secondary)" style={{ flexShrink: 0 }} /> <span>Google Play Store Submission</span></li>
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-secondary)" style={{ flexShrink: 0 }} /> <span>Broad Device Compatibility</span></li>
                </ul>
                <a href={`https://wa.me/918921809791?text=${encodeURIComponent('Hi JK Digital Solutions, I am interested in Mobile App Development for Android.')}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline pricing-btn hover-scale">Get Started</a>
              </div>

              <div className="pricing-card glass-panel featured">
                <h4 className="pricing-tier">Android / iOS (Cross-Platform)</h4>
                <div className="pricing-price" style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>Custom Quote</div>
                <ul className="pricing-features">
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-primary)" style={{ flexShrink: 0 }} /> <span>React Native / Flutter Development</span></li>
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-primary)" style={{ flexShrink: 0 }} /> <span>Single Codebase for Both Stores</span></li>
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-primary)" style={{ flexShrink: 0 }} /> <span>Faster Time to Market</span></li>
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-primary)" style={{ flexShrink: 0 }} /> <span>Highly Cost Effective</span></li>
                </ul>
                <a href={`https://wa.me/918921809791?text=${encodeURIComponent('Hi JK Digital Solutions, I am interested in Cross-Platform Mobile App Development (Android/iOS).')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary pricing-btn hover-scale">Get Started</a>
              </div>

            </div>
          </div>

          {/* Social Media Management Category */}
          <div className="pricing-category">
            <h3 className="pricing-category-title">Social Media</h3>
            <div className="pricing-grid">

              <div className="pricing-card glass-panel">
                <h4 className="pricing-tier">Basic</h4>
                <div className="pricing-price">₹5,000<span> / month</span></div>
                <ul className="pricing-features">
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-secondary)" style={{ flexShrink: 0 }} /> <span>3 Posts / Week</span></li>
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-secondary)" style={{ flexShrink: 0 }} /> <span>Description with Meta-SEO</span></li>
                  <li className="pricing-feature"><CheckCircle size={20} color="var(--accent-secondary)" style={{ flexShrink: 0 }} /> <span>Strategic Hashtag Selection</span></li>
                </ul>
                <a href={`https://wa.me/918921809791?text=${encodeURIComponent('Hi JK Digital Solutions, I am interested in the Social Media Management - Basic package.')}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline pricing-btn hover-scale">Get Started</a>
              </div>

              <div className="pricing-card glass-panel featured">
                <h4 className="pricing-tier">Premium</h4>
                <div className="pricing-price">₹10,000<span> / month</span></div>
                <ul className="pricing-features">
                  <li className="pricing-feature" style={{ alignItems: 'flex-start' }}>
                    <CheckCircle size={20} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '4px' }} /> 
                    <div style={{ lineHeight: '1.4' }}>
                      <strong style={{ display: 'block', color: 'var(--text-primary)' }}>Social Media Management</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>2 platforms, 8 graphic posts & 2 short-form edits</span>
                    </div>
                  </li>
                  <li className="pricing-feature" style={{ alignItems: 'flex-start' }}>
                    <CheckCircle size={20} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '4px' }} /> 
                    <div style={{ lineHeight: '1.4' }}>
                      <strong style={{ display: 'block', color: 'var(--text-primary)' }}>Paid Ads Management</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Meta or Google Ads (ad spend handled by client)</span>
                    </div>
                  </li>
                  <li className="pricing-feature" style={{ alignItems: 'flex-start' }}>
                    <CheckCircle size={20} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '4px' }} /> 
                    <div style={{ lineHeight: '1.4' }}>
                      <strong style={{ display: 'block', color: 'var(--text-primary)' }}>Local SEO</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Google Business Profile & local keyword integration</span>
                    </div>
                  </li>
                  <li className="pricing-feature" style={{ alignItems: 'flex-start' }}>
                    <CheckCircle size={20} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '4px' }} /> 
                    <div style={{ lineHeight: '1.4' }}>
                      <strong style={{ display: 'block', color: 'var(--text-primary)' }}>Monthly Review</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Dashboard reporting on reach and engagement metrics</span>
                    </div>
                  </li>
                </ul>
                <a href={`https://wa.me/918921809791?text=${encodeURIComponent('Hi JK Digital Solutions, I am interested in the Social Media Management - Premium package.')}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary pricing-btn hover-scale">Get Started</a>
              </div>

              <div className="pricing-card glass-panel">
                <h4 className="pricing-tier">Ultra-Premium</h4>
                <div className="pricing-price">₹20,000<span> / month</span></div>
                <ul className="pricing-features">
                  <li className="pricing-feature" style={{ alignItems: 'flex-start' }}>
                    <CheckCircle size={20} color="var(--accent-secondary)" style={{ flexShrink: 0, marginTop: '4px' }} /> 
                    <div style={{ lineHeight: '1.4' }}>
                      <strong style={{ display: 'block', color: 'var(--text-primary)' }}>Targeted Creative</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>2 high-impact promotional video ad campaigns / month</span>
                    </div>
                  </li>
                  <li className="pricing-feature" style={{ alignItems: 'flex-start' }}>
                    <CheckCircle size={20} color="var(--accent-secondary)" style={{ flexShrink: 0, marginTop: '4px' }} /> 
                    <div style={{ lineHeight: '1.4' }}>
                      <strong style={{ display: 'block', color: 'var(--text-primary)' }}>Storefront Optimization</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Conversion tweaks for platforms like Shopify</span>
                    </div>
                  </li>
                  <li className="pricing-feature" style={{ alignItems: 'flex-start' }}>
                    <CheckCircle size={20} color="var(--accent-secondary)" style={{ flexShrink: 0, marginTop: '4px' }} /> 
                    <div style={{ lineHeight: '1.4' }}>
                      <strong style={{ display: 'block', color: 'var(--text-primary)' }}>Performant Web Assets</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Fast NextJS landing pages for peak ad conversion</span>
                    </div>
                  </li>
                  <li className="pricing-feature" style={{ alignItems: 'flex-start' }}>
                    <CheckCircle size={20} color="var(--accent-secondary)" style={{ flexShrink: 0, marginTop: '4px' }} /> 
                    <div style={{ lineHeight: '1.4' }}>
                      <strong style={{ display: 'block', color: 'var(--text-primary)' }}>Paid Ads & Growth</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Meta/Google Ads management & in-depth growth strategies</span>
                    </div>
                  </li>
                  <li className="pricing-feature" style={{ alignItems: 'flex-start' }}>
                    <CheckCircle size={20} color="var(--accent-secondary)" style={{ flexShrink: 0, marginTop: '4px' }} /> 
                    <div style={{ lineHeight: '1.4' }}>
                      <strong style={{ display: 'block', color: 'var(--text-primary)' }}>SEO & Analytics</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Advanced SEO, campaign optimization & detailed reporting</span>
                    </div>
                  </li>
                </ul>
                <a href={`https://wa.me/918921809791?text=${encodeURIComponent('Hi JK Digital Solutions, I am interested in the Social Media Management - Ultra-Premium package.')}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline pricing-btn hover-scale">Get Started</a>
              </div>

            </div>
          </div>

          {/* End of categories */}

        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
