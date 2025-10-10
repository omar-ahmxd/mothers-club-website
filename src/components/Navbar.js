import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={'navbar ' + (scrolled ? 'scrolled' : '')}>
      <div className="navbar-container">
        <div className="logo">
          <img src={require('../assets/images/logo-icon.png')} alt="Logo" className="logo-icon" />
          <div className="logo-text">
            <span className="logo-brand">The Mother's Club</span>
          </div>
        </div>

        <div className={'nav-menu ' + (menuOpen ? 'active' : '')}>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="nav-link active">Home</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="nav-link">Services</a>
          <a href="#appointment" onClick={(e) => { e.preventDefault(); scrollToSection('appointment'); }} className="nav-link">Appointment</a>
          <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }} className="nav-link">Testimonials</a>
          <a href="#doctor" onClick={(e) => { e.preventDefault(); scrollToSection('doctor'); }} className="nav-link">Doctor</a>
          <a href="#news" onClick={(e) => { e.preventDefault(); scrollToSection('news'); }} className="nav-link">News</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="nav-link">Contact</a>
          <button className="search-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className={'hamburger ' + (menuOpen ? 'active' : '')} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
