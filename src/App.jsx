import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app-container">
          <Helmet>
            <title>JK Digital Solutions | Web, App & Social Media Agency</title>
            <meta name="description" content="JK Digital Solutions helps brands dominate their online presence with cutting-edge website development, mobile apps, social media growth, and SEO." />
            <meta name="keywords" content="JK Digital Solutions, web development, mobile app development, social media handling, SEO, GymOS" />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="JK Digital Solutions | Grow Your Digital Presence" />
            <meta property="og:description" content="Transform your brand with expert website development, mobile apps, social media strategies, and our flagship product GymOS." />
            
            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="JK Digital Solutions" />
            <meta name="twitter:description" content="Transform your brand with expert digital solutions." />
            
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
          </Routes>
          
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
