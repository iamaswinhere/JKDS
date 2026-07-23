import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaFacebook, FaWhatsapp, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const { name, email, service, message } = formData;
    const text = `Hi JK Digital Solutions!\n\nName: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/918921809791?text=${encodedText}`;
    
    toast.success('Redirecting to WhatsApp...');
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Let's Build Something <span className="text-gradient">Amazing</span>
            </h2>
            <p className="contact-description">
              Ready to take your brand to the next level? Reach out to us today and let's discuss how JK Digital Solutions can help you achieve your goals.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon-wrap glass-panel">
                  <Mail color="var(--accent-primary)" />
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>jkdigitalsolutions26@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon-wrap glass-panel">
                  <Phone color="var(--accent-secondary)" />
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 8921809791</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon-wrap glass-panel">
                  <MapPin color="var(--text-primary)" />
                </div>
                <div>
                  <h4>Visit Us</h4>
                  <p>Digital Hub, Tech Park, India</p>
                </div>
              </div>
            </div>

            <div className="contact-socials" style={{ marginTop: '3rem' }}>
              <h4 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Connect With Us</h4>
              <div className="social-links-contact" style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <a href="https://www.facebook.com/share/14iUykxWBQx/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="social-link hover-scale"><FaFacebook size={20} /></a>
                <a href="https://wa.me/918921809791" target="_blank" rel="noreferrer" className="social-link hover-scale"><FaWhatsapp size={20} /></a>
                <a href="https://www.instagram.com/digitalsolution.jk/" target="_blank" rel="noreferrer" className="social-link hover-scale"><FaInstagram size={20} /></a>
                <a href="mailto:jkdigitalsolutions26@gmail.com" className="social-link hover-scale"><FaEnvelope size={18} /></a>
                <a href="tel:+918921809791" className="social-link hover-scale"><FaPhoneAlt size={20} /></a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper glass-panel">
            <form className="contact-form" onSubmit={handleWhatsAppSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" className="form-input" value={formData.name} onChange={handleChange} required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" className="form-input" value={formData.email} onChange={handleChange} required />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Service of Interest</label>
                <select id="service" className="form-input" value={formData.service} onChange={handleChange} required>
                  <option value="">Select a service</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Social Media Handling">Social Media Handling</option>
                  <option value="SEO">SEO</option>
                  <option value="GymOS Inquiry">GymOS Inquiry</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" rows="4" placeholder="Tell us about your project..." className="form-input" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full hover-scale">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
