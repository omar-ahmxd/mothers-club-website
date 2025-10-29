import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will be in touch soon');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact section">
      <div className="contact-bg-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>

      <div className="container">
        <div className="contact-header">
          <span className="contact-badge">Get in Touch</span>
          <h2>Let's Start Your Journey Together</h2>
          <p>We're here to support you every step of the way on your motherhood journey</p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <div className="info-intro">
              <h3>Reach Out to Us</h3>
              <p>Whether you have questions about our services or want to book a consultation, we'd love to hear from you.</p>
            </div>

            <div className="contact-methods">
              <div className="contact-card phone-card">
                <div className="card-icon-wrapper">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                </div>
                <div className="contact-details">
                  <span className="contact-label">Phone Number</span>
                  <a href="tel:+919840277088" className="contact-value">+91 9840277088</a>
                  <p className="contact-desc">Call or WhatsApp us anytime</p>
                </div>
              </div>

              <div className="contact-card email-card">
                <div className="card-icon-wrapper">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                </div>
                <div className="contact-details">
                  <span className="contact-label">Email Address</span>
                  <a href="mailto:ayisha@themothersclub.in" className="contact-value">ayisha@themothersclub.in</a>
                  <p className="contact-desc">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="contact-card social-card">
                <div className="card-icon-wrapper">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </div>
                <div className="contact-details">
                  <span className="contact-label">Social Media</span>
                  <a href="https://www.instagram.com/themothersclub.tmc?igsh=MThqNDUzZnA2YW5wZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="contact-value">@themothersclub.tmc</a>
                  <p className="contact-desc">Follow us for tips & updates</p>
                </div>
              </div>
            </div>

            <div className="contact-cta">
              <div className="cta-content">
                <h4>Prefer to talk directly?</h4>
                <p>Book a free 15-minute consultation call with our experts</p>
                <a href="tel:+919840277088" className="cta-button">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="form-header">
              <h3>Send Us a Message</h3>
              <p>Fill out the form below and we'll get back to you as soon as possible</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  placeholder="Tell us how we can help you..."
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <span>Send Message</span>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
