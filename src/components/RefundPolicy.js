import React from 'react';
import './RefundPolicy.css';

const RefundPolicy = () => {
  return (
    <section id="refund-policy" className="refund-policy section">
      <div className="container">
        <div className="policy-content">
          <h1>Refund Policy</h1>

          <p className="policy-intro">
            At The Mother's Club, we strive to provide meaningful, high-quality learning and support experiences for mothers and families. We understand plans can change, so our refund policy is designed to be clear and fair.
          </p>

          <div className="policy-section">
            <h2>1. Workshops & Events</h2>
            <ul>
              <li>Refunds are available up to 48 hours before the scheduled workshop or event.</li>
              <li>Requests made within 48 hours of the event are not eligible for a refund, but participants may request to transfer their registration to another upcoming session (if available).</li>
              <li>If an event is cancelled or rescheduled by The Mother's Club, participants will receive a full refund or may opt for a credit toward a future event.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>2. Consultations & Services</h2>
            <ul>
              <li>For one-on-one sessions, cancellations made at least 24 hours in advance are eligible for a full refund or rescheduling.</li>
              <li>No-shows or same-day cancellations are non-refundable.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>3. Online Courses & Digital Products</h2>
            <ul>
              <li>Due to the nature of digital content, refunds are not provided once access to materials or recordings has been granted.</li>
              <li>If you face technical issues or access problems, please contact us at <a href="mailto:ayisha@themothersclub.in">ayisha@themothersclub.in</a> for assistance.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>4. How to Request a Refund</h2>
            <p>
              All refund or reschedule requests must be sent via email to <a href="mailto:ayisha@themothersclub.in">ayisha@themothersclub.in</a> with your name, payment details, and reason for the request. Refunds (if applicable) will be processed to the original payment method within 7–10 business days.
            </p>
          </div>

          <div className="policy-section">
            <h2>5. Special Considerations</h2>
            <p>
              In exceptional cases (medical emergencies, unforeseen circumstances), The Mother's Club may consider refund requests on a case-by-case basis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
