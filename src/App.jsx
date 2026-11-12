import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ProductPage from './pages/ProductPage';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app-container">
          <Helmet>
            <title>JK Digital Solutions | Web Design &amp; Digital Marketing Agency in Alathur, Palakkad</title>
            <meta name="description" content="JK Digital Solutions is a leading digital marketing, SEO, web design, mobile app, and AI content creation agency in Alathur, Palakkad, Kerala." />
            <meta name="keywords" content="digital marketing agency in Palakkad, web design company in Alathur, web development Palakkad, SEO agency Palakkad, social media marketing Alathur, custom software Kerala, GymOS, JK Digital Solutions" />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en_IN" />
            <meta property="og:title" content="JK Digital Solutions | Web Design &amp; Digital Marketing in Alathur, Palakkad" />
            <meta property="og:description" content="Helping businesses in Alathur, Palakkad, and across Kerala grow with high-converting websites, mobile apps, local SEO, and AI content." />
            
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="JK Digital Solutions | Alathur, Palakkad" />
            <meta name="twitter:description" content="Web design, app development, local SEO, and digital marketing agency in Alathur, Palakkad." />
            
            <link rel="canonical" href="https://jkdigitalsolutions.com" />
          </Helmet>
          
          <Toaster 
            position="bottom-right" 
            toastOptions={{
              style: {
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }
            }} 
          />

          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Routes>
          
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
