import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { NavHashLink } from 'react-router-hash-link';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import './BlogPage.css';

const categories = ['All', 'Instagram & Content', 'Web & SEO', 'AI, Tech & Careers'];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPost = filteredPosts.find((post) => post.featured) || filteredPosts[0];
  const gridPosts = filteredPosts.filter((post) => post.id !== featuredPost?.id);

  return (
    <main className="blog-page">
      <Helmet>
        <title>Blog | Digital Marketing, SEO &amp; Web Design Tips — JK Digital Solutions Palakkad</title>
        <meta
          name="description"
          content="Practical insights in English & Malayalam on Instagram growth, AI content creation, web design, and local SEO for businesses in Alathur, Palakkad, and Kerala."
        />
      </Helmet>

      <section className="blog-hero">
        <div className="container">
          <h2 className="section-title">
            Our <span className="text-gradient">Blog</span>
          </h2>
          <p className="section-subtitle">
            Instagram growth, web development, local SEO, AI, and career tips—practical guides in a simple English–Malayalam mix.
          </p>

          <div className="blog-categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`blog-filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-content-section">
        <div className="container">
          {featuredPost && (
            <Link to={`/blog/${featuredPost.slug}`} className="blog-featured-card glass-panel">
              <div className="blog-featured-badge">
                <Sparkles size={14} /> Featured Article
              </div>
              <div className="blog-meta">
                <span className="blog-category-pill">
                  {featuredPost.subCategory || featuredPost.category}
                </span>
                <span className="blog-meta-item">
                  <Calendar size={14} /> {featuredPost.date}
                </span>
                <span className="blog-meta-item">
                  <Clock size={14} /> {featuredPost.readTime}
                </span>
              </div>
              <h3 className="blog-featured-title">{featuredPost.title}</h3>
              <p className="blog-featured-excerpt">{featuredPost.excerpt}</p>
              <span className="blog-read-more">
                Read Article <ArrowRight size={18} />
              </span>
            </Link>
          )}

          {gridPosts.length > 0 && (
            <div className="blog-grid">
              {gridPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="blog-card glass-panel">
                  <div className="blog-meta">
                    <span className="blog-category-pill">{post.subCategory || post.category}</span>
                    <span className="blog-meta-item">
                      <Clock size={14} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <span className="blog-meta-item">
                      <Calendar size={14} /> {post.date}
                    </span>
                    <span className="blog-read-more">
                      Read <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="blog-cta glass-panel">
            <h3 className="blog-cta-title">
              Ready to <span className="text-gradient">Scale Your Brand</span>?
            </h3>
            <p className="blog-cta-desc">
              Have a project in mind or want help implementing these strategies for your business? Let&apos;s talk.
            </p>
            <NavHashLink to="/#contact" smooth={true} className="btn btn-primary hover-scale">
              Get in Touch <ArrowRight size={18} />
            </NavHashLink>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
