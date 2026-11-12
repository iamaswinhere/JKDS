import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { NavHashLink } from 'react-router-hash-link';
import { ArrowRight, ExternalLink, Code2 } from 'lucide-react';
import { projects } from '../data/projects';
import './PortfolioPage.css';

const categories = ['All', 'Web Development', 'Mobile Apps', 'SaaS & Software', 'Content & AI'];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems =
    selectedCategory === 'All'
      ? projects
      : projects.filter((item) => item.category === selectedCategory);

  return (
    <main className="portfolio-page">
      <Helmet>
        <title>Portfolio | Web Design &amp; Software Projects in Palakkad — JK Digital Solutions</title>
        <meta
          name="description"
          content="Explore websites, mobile apps, custom software, and digital marketing projects built by JK Digital Solutions in Alathur, Palakkad, Kerala."
        />
      </Helmet>

      <section className="portfolio-hero">
        <div className="container">
          <h2 className="section-title">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="section-subtitle">
            Projects we&apos;ve designed and developed across web, mobile, and custom software.
          </p>

          <div className="portfolio-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`portfolio-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-grid-section">
        <div className="container">
          <div className="portfolio-grid">
            {filteredItems.map((project) => (
              <article key={project.id} className="portfolio-card glass-panel">
                {project.image && (
                  <div className="featured-project-image-wrap">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="featured-project-image"
                    />
                  </div>
                )}

                <div className="portfolio-card-top">
                  <span className="portfolio-category-pill">{project.category}</span>
                  {project.liveUrl &&
                    (project.isInternalRoute ? (
                      <Link
                        to={project.liveUrl}
                        className="featured-project-ext"
                        aria-label={`Open ${project.title}`}
                      >
                        <ExternalLink size={18} />
                      </Link>
                    ) : (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="featured-project-ext"
                        aria-label={`Visit ${project.title}`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    ))}
                </div>

                <h3 className="portfolio-card-title">{project.title}</h3>
                <p className="portfolio-card-summary">{project.description}</p>

                <div className="portfolio-tags">
                  {project.techStack.map((tag, idx) => (
                    <span key={idx} className="portfolio-tag">
                      <Code2 size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                      {tag}
                    </span>
                  ))}
                </div>

                {project.liveUrl &&
                  (project.isInternalRoute ? (
                    <Link to={project.liveUrl} className="portfolio-card-link">
                      View Project <ArrowRight size={16} />
                    </Link>
                  ) : (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-card-link"
                    >
                      Visit Live Site <ArrowRight size={16} />
                    </a>
                  ))}
              </article>
            ))}
          </div>

          <div className="portfolio-cta glass-panel">
            <h3 className="portfolio-cta-title">
              Have a Project <span className="text-gradient">in Mind</span>?
            </h3>
            <p className="portfolio-cta-desc">
              Let&apos;s build your next website, mobile app, or custom software platform.
            </p>
            <NavHashLink to="/#contact" smooth={true} className="btn btn-primary hover-scale">
              Start Your Project <ArrowRight size={18} />
            </NavHashLink>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;
