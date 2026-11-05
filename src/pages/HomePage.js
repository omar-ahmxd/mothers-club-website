import React from 'react';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Workshops from '../components/Workshops';
import Testimonials from '../components/Testimonials';
import Associations from '../components/Associations';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <About />
      <Services />
      <Workshops />
      <WhyChooseUs />
      <Testimonials />
      <Associations />
      <Contact />
    </>
  );
};

export default HomePage;
