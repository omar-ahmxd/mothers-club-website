import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-title">
          <h2>What Mothers Say</h2>
          <p>Stories from our beautiful community</p>
        </div>

        <div className="testimonial-card">
          <div className="quote-mark">"</div>
          <p className="testimonial-text">
            You have restored my faith in humanity.
          </p>
          <div className="testimonial-author">
            <div className="author-name">Henri</div>
            <div className="author-source">Le Chat Noir</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
