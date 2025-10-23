import React from 'react';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Booking from '../components/Booking';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Booking />
      <Contact />
    </>
  );
};

export default HomePage;
