import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import Founder from '../components/Founder';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>JK Digital Solutions | Best Digital Marketing &amp; Web Design Agency in Alathur, Palakkad</title>
        <meta
          name="description"
          content="Looking for the best digital marketing and web design agency in Alathur or Palakkad? JK Digital Solutions builds high-converting websites, mobile apps, local SEO, and AI content."
        />
        <link rel="canonical" href="https://jkdigitalsolutions.com/" />
      </Helmet>
      <Hero />
      <About />
      <FeaturedProjects />
      <Testimonials />
      <Founder />
      <Contact />
    </main>
  );
};

export default Home;
