import React from 'react';
import './Hero.css';
import heroBackground from '../assets/images/mom.jpg';
import heroLogo from '../assets/images/hero-logo.png';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/919884011146', '_blank');
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img src={heroBackground} alt="Mother and child" />
      </div>

      <div className="hero-logo-container">
        <img src={heroLogo} alt="The Mother's Club" className="hero-logo" />
      </div>

      <div className="hero-cta">
        <button className="btn btn-secondary hero-cta-btn" onClick={openWhatsApp}>
          Book Consultation
        </button>
        <button className="btn btn-secondary hero-cta-btn" onClick={() => scrollToSection('services')}>
          Learn More
        </button>
      </div>

      <div className="hero-curve">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="var(--bg-pink-light)"
            d="M0,64L1440,96L1440,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
