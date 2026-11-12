import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { NavHashLink } from 'react-router-hash-link';
import toast from 'react-hot-toast';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Sparkles,
  Share2,
  Check,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  Type
} from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import './BlogPage.css';

const BlogPostPage = () => {
  const { slug } = useParams();
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = currentIndex !== -1 ? blogPosts[currentIndex] : null;

  const [scrollProgress, setScrollProgress] = useState(0);
  const [fontSize, setFontSize] = useState('md'); // 'sm' | 'md' | 'lg'
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setScrollProgress(0);
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share && post) {
      try {
        await navigator.share({ title: post.title, text: post.excerpt, url });
        return;
      } catch {
        // Fall back to clipboard copy
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success('Article link copied!');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Could not copy link');
    }
  };

  if (!post) {
    return (
      <main className="blog-page">
        <div className="container" style={{ paddingTop: '4rem', textAlign: 'center' }}>
          <h2 className="section-title">Article Not Found</h2>
          <p className="section-subtitle">
            The blog post you are looking for does not exist or may have been moved.
          </p>
          <Link to="/blog" className="btn btn-primary">
            <ArrowLeft size={18} /> Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const mainParagraphs =
    post.content.length > 1 ? post.content.slice(0, -1) : post.content;
  const takeawayParagraph =
    post.content.length > 1 ? post.content[post.content.length - 1] : null;

  return (
    <main className="blog-page blog-post-page">
      <Helmet>
        <title>{post.title} | JK Digital Solutions Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      {/* Reading Progress Bar */}
      <div className="reading-progress-track" aria-hidden="true">
        <div
          className="reading-progress-fill"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <article className="blog-post-wrapper">
        <div className="container blog-post-container">
          {/* Top Utility Bar */}
          <div className="blog-post-topbar">
            <Link to="/blog" className="blog-back-link">
              <ArrowLeft size={18} /> Back to All Articles
            </Link>

            <div className="blog-reader-controls">
              <div className="font-size-switcher" role="group" aria-label="Text size">
                <Type size={15} className="font-size-icon" />
                {['sm', 'md', 'lg'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`font-size-btn ${fontSize === size ? 'active' : ''}`}
                    onClick={() => setFontSize(size)}
                  >
                    {size === 'sm' ? 'A-' : size === 'md' ? 'A' : 'A+'}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="blog-share-btn"
                onClick={handleShare}
                aria-label="Share article"
              >
                {copied ? <Check size={16} /> : <Share2 size={16} />}
                <span>{copied ? 'Copied' : 'Share'}</span>
              </button>
            </div>
          </div>

          {/* Editorial Header */}
          <header className="blog-post-header glass-panel">
            <div className="blog-header-glow" aria-hidden="true" />
            <div className="blog-meta">
              <span className="blog-category-pill">
                {post.subCategory || post.category}
              </span>
              <span className="blog-meta-item">
                <Calendar size={14} /> {post.date}
              </span>
              <span className="blog-meta-item">
                <Clock size={14} /> {post.readTime}
              </span>
            </div>

            <h1 className="blog-post-title">{post.title}</h1>

            <blockquote className="blog-post-lead">{post.excerpt}</blockquote>
          </header>

          {/* Comfortable Reading Surface */}
          <div className={`blog-post-body glass-panel reading-size-${fontSize}`}>
            <div className="blog-reading-column">
              {mainParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`blog-post-paragraph ${index === 0 ? 'first-paragraph' : ''}`}
                >
                  {paragraph}
                </p>
              ))}

              {takeawayParagraph && (
                <aside className="blog-takeaway-box">
                  <div className="blog-takeaway-label">
                    <Lightbulb size={18} /> Key Takeaway &amp; Next Step
                  </div>
                  <p className="blog-takeaway-text">{takeawayParagraph}</p>
                </aside>
              )}

              <div className="blog-post-cta-box">
                <div className="blog-featured-badge" style={{ marginBottom: '0.5rem' }}>
                  <Sparkles size={14} /> JK Digital Solutions
                </div>
                <h3 className="blog-post-cta-title">
                  Need help applying this to your business?
                </h3>
                <p className="blog-post-cta-desc">
                  Websites, mobile apps, content creation, AI workflows, and SEO—let&apos;s build a growth system tailored for your brand.
                </p>
                <NavHashLink to="/#contact" smooth={true} className="btn btn-primary hover-scale">
                  Talk to Our Team <ArrowRight size={18} />
                </NavHashLink>
              </div>
            </div>
          </div>

          {/* Previous / Next Article Navigation */}
          {(prevPost || nextPost) && (
            <nav className="blog-prev-next" aria-label="Article navigation">
              {prevPost ? (
                <Link to={`/blog/${prevPost.slug}`} className="blog-nav-card glass-panel">
                  <span className="blog-nav-dir">
                    <ChevronLeft size={16} /> Previous Article
                  </span>
                  <span className="blog-nav-title">{prevPost.title}</span>
                </Link>
              ) : (
                <div />
              )}

              {nextPost && (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="blog-nav-card glass-panel blog-nav-card-next"
                >
                  <span className="blog-nav-dir">
                    Next Article <ChevronRight size={16} />
                  </span>
                  <span className="blog-nav-title">{nextPost.title}</span>
                </Link>
              )}
            </nav>
          )}

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <section className="blog-related-section">
              <h2 className="blog-related-heading">
                More in <span className="text-gradient">{post.category}</span>
              </h2>
              <div className="blog-grid">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    to={`/blog/${related.slug}`}
                    className="blog-card glass-panel"
                  >
                    <div className="blog-meta">
                      <span className="blog-category-pill">
                        {related.subCategory || related.category}
                      </span>
                      <span className="blog-meta-item">
                        <Clock size={14} /> {related.readTime}
                      </span>
                    </div>
                    <h3 className="blog-card-title">{related.title}</h3>
                    <p className="blog-card-excerpt">{related.excerpt}</p>
                    <div className="blog-card-footer">
                      <span className="blog-meta-item">
                        <Calendar size={14} /> {related.date}
                      </span>
                      <span className="blog-read-more">
                        Read <ArrowRight size={16} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </main>
  );
};

export default BlogPostPage;
