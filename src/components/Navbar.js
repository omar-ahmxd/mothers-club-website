import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToSection('home');
    }
    setMenuOpen(false);
  };

  const handleServicesClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToSection('services');
    } else {
      window.location.href = '/#services';
    }
    setMenuOpen(false);
  };

  const handleContactClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToSection('contact');
    } else {
      window.location.href = '/#contact';
    }
    setMenuOpen(false);
  };

  return (
    <nav className={'navbar ' + (scrolled ? 'scrolled' : '')}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={require('../assets/images/logo-icon.png')} alt="Logo" className="logo-icon" />
          <div className="logo-text">
            <span className="logo-brand">The Mother's Club</span>
          </div>
        </Link>

        <div className={'nav-menu ' + (menuOpen ? 'active' : '')}>
          <Link to="/" onClick={handleHomeClick} className="nav-link">Home</Link>
          <a href="#services" onClick={handleServicesClick} className="nav-link">Services</a>
          <Link to="/blogs" onClick={() => setMenuOpen(false)} className="nav-link">Blogs</Link>
          <a href="#contact" onClick={handleContactClick} className="nav-link">Contact</a>
          <a href="https://courses.themothersclub.in/web/" className="login-btn" onClick={() => setMenuOpen(false)}>Login</a>
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
