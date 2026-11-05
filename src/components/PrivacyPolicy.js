import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <section id="privacy-policy" className="privacy-policy section">
      <div className="container">
        <div className="policy-content">
          <h1>Privacy Policy</h1>
          <p className="policy-date">Last Updated: November 5, 2025</p>

          <p className="policy-intro">
            At The Mother's Club, your privacy matters to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website, register for workshops, or use our services.
          </p>

          <div className="policy-section">
            <h2>Information We Collect</h2>
            <p>We may collect your:</p>
            <ul>
              <li>Name, email, phone number, and payment details when you register for our programs.</li>
              <li>Optional personal or health-related details shared during consultations.</li>
              <li>Basic website usage data (like browser type and pages visited) to improve user experience.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>How We Use Your Information</h2>
            <p>Your information is used to:</p>
            <ul>
              <li>Register you for workshops or consultations</li>
              <li>Process payments securely</li>
              <li>Communicate important updates and reminders</li>
              <li>Improve our content and services</li>
            </ul>
            <p>We do not sell or share your personal information for marketing purposes.</p>
          </div>

          <div className="policy-section">
            <h2>Data Security</h2>
            <p>
              We use secure systems to protect your personal data. However, no online platform can guarantee complete security, and you share information at your own discretion.
            </p>
          </div>

          <div className="policy-section">
            <h2>Cookies</h2>
            <p>
              We may use cookies and analytics tools to personalize your browsing experience. You can disable cookies anytime in your browser settings.
            </p>
          </div>

          <div className="policy-section">
            <h2>Your Rights</h2>
            <p>You may contact us anytime to:</p>
            <ul>
              <li>Access or correct your personal data</li>
              <li>Withdraw consent for communication</li>
              <li>Request data deletion (where legally applicable)</li>
            </ul>
            <p>
              📧 Email: <a href="mailto:ayisha@themothersclub.in">ayisha@themothersclub.in</a>
            </p>
          </div>

          <div className="policy-section">
            <h2>Policy Updates</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
