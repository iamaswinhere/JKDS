import React from 'react';
import { Quote, Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    company: 'PLYSTORY Interiors',
    role: 'Luxury Jewellery Showroom Design',
    quote:
      'Delivered a dark-luxury web platform with smooth project galleries and direct consultation flows that match our showroom brand.',
    rating: 5
  },
  {
    id: 2,
    company: 'FlyToWin',
    role: 'Global Recruitment Platform',
    quote:
      'Built a clean, trust-focused website that makes it effortless for candidates and employers across regions to connect with our team.',
    rating: 5
  },
  {
    id: 3,
    company: 'Fitness & SaaS Partner',
    role: 'Web & Custom Software',
    quote:
      'Fast execution, responsive communication, and practical digital solutions focused on real business inquiries rather than just looks.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">
          Client <span className="text-gradient">Testimonials</span>
        </h2>
        <p className="section-subtitle">
          What businesses and partners say about working with JK Digital Solutions.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article key={item.id} className="testimonial-card glass-panel hover-scale">
              <div className="testimonial-top">
                <div className="testimonial-quote-icon">
                  <Quote size={20} color="var(--accent-secondary)" />
                </div>
                <div className="testimonial-stars" aria-label={`${item.rating} out of 5 stars`}>
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={15}
                      fill="var(--accent-secondary)"
                      color="var(--accent-secondary)"
                    />
                  ))}
                </div>
              </div>

              <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>

              <div className="testimonial-author">
                <h3 className="testimonial-company">{item.company}</h3>
                <span className="testimonial-role">{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
