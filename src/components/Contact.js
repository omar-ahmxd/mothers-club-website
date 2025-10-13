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
      <div className="container">
        <div className="contact-simple">
          <div className="contact-info-simple">
            <h2>If you would like to book a consult, reach out to us!</h2>
            <p>We're here to support you on your motherhood journey</p>
            <div className="contact-methods">
              <div className="method">
                <strong>Connect by Phone</strong>
                <p>Call or WhatsApp at <a href="tel:+919840277088">+91 9840277088</a> for immediate support.</p>
              </div>
              <div className="method">
                <strong>Send an Email</strong>
                <p>For detailed inquiries, reach us at <a href="mailto:ayisha@themothersclub.in">ayisha@themothersclub.in</a></p>
              </div>
              <div className="method">
                <strong>Follow on Instagram</strong>
                <p>Join our vibrant community on Instagram</p>
              </div>
            </div>
          </div>

          <form className="contact-form-simple" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
