import React from 'react';
import './Booking.css';
import bookingBg from '../assets/images/booking-bg.png';

const Booking = () => {
  return (
    <section id="booking" className="booking section">
      <div className="booking-background">
        <img src={bookingBg} alt="Motherhood" />
        <div className="booking-overlay"></div>
      </div>
      <div className="booking-content">
        <div className="booking-text">
          <h2>Start Your Journey</h2>
          <p>Book a free 15-minute discovery call</p>
          <div className="booking-details-simple">
            Transform your motherhood experience with personalized support and expert guidance. We're here to help you every step of the way.
          </div>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </section>
  );
};

export default Booking;
