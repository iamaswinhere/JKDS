import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Code2 } from 'lucide-react';
import { projects } from '../data/projects';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  const featuredList = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section id="projects" className="featured-projects-section">
      <div className="container">
        <div className="featured-projects-header">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0.75rem' }}>
              Our <span className="text-gradient">Work</span>
            </h2>
            <p className="featured-projects-subtitle">
              A look at some of the websites, apps, and software platforms we&apos;ve built.
            </p>
          </div>
          <Link to="/portfolio" className="btn btn-outline hover-scale">
            View Full Portfolio <ArrowRight size={18} />
          </Link>
        </div>

        <div className="featured-projects-grid">
          {featuredList.map((project) => (
            <article key={project.id} className="featured-project-card glass-panel hover-scale">
              {project.image && (
                <div className="featured-project-image-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="featured-project-image"
                  />
                </div>
              )}

              <div className="featured-project-top">
                <span className="featured-project-category">{project.category}</span>
                {project.liveUrl &&
                  (project.isInternalRoute ? (
                    <Link
                      to={project.liveUrl}
                      className="featured-project-ext"
                      aria-label={`Open ${project.title}`}
                    >
                      <ExternalLink size={17} />
                    </Link>
                  ) : (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="featured-project-ext"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ExternalLink size={17} />
                    </a>
                  ))}
              </div>

              <h3 className="featured-project-title">{project.title}</h3>
              <p className="featured-project-desc">{project.description}</p>

              <div className="featured-project-tags">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="featured-project-tag">
                    <Code2 size={12} /> {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
