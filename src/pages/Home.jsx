import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Founder from '../components/Founder';
import Product from '../components/Product';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Founder />
      <Product />
      <Contact />
    </main>
  );
};

export default Home;
