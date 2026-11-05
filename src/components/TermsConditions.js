import React from 'react';
import './TermsConditions.css';

const TermsConditions = () => {
  return (
    <section id="terms-conditions" className="terms-conditions section">
      <div className="container">
        <div className="policy-content">
          <h1>Terms & Conditions</h1>

          <p className="policy-intro">
            Welcome to The Mother's Club website. By accessing or using our website, workshops, online courses, or any of our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before proceeding.
          </p>

          <div className="policy-section">
            <h2>1. General Information</h2>
            <ul>
              <li>The Mother's Club ("we," "our," "us") provides educational, wellness, and support services for mothers and families.</li>
              <li>By using our website or registering for our offerings, you confirm that you are at least 18 years old and capable of entering into a binding agreement.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>2. Use of Website</h2>
            <ul>
              <li>All content on this website, including text, images, videos, graphics, and resources, is the intellectual property of The Mother's Club.</li>
              <li>You may not copy, reproduce, distribute, or use any content without written permission.</li>
              <li>You agree not to use the website for any unlawful or harmful purpose.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>3. Registration & Payments</h2>
            <ul>
              <li>When registering for workshops, consultations, or courses, you agree to provide accurate and complete information.</li>
              <li>Payments must be completed before access to any service or material is granted.</li>
              <li>All payments are processed securely through trusted payment gateways (such as Razorpay).</li>
              <li>By making a payment, you agree to our Refund Policy.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>4. Cancellations & Refunds</h2>
            <ul>
              <li>Refunds and cancellations are governed by our Refund Policy, available on this website.</li>
              <li>Please review it before making a purchase or booking a service.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>5. Disclaimer</h2>
            <ul>
              <li>The information shared through our website, workshops, or consultations is for educational and informational purposes only.</li>
              <li>It is not a substitute for medical advice, diagnosis, or treatment.</li>
              <li>Always consult a qualified healthcare professional for any medical concerns related to pregnancy, birth, lactation, or postpartum care.</li>
              <li>The Mother's Club is not responsible for any outcomes or consequences arising from the use of our information or services.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, The Mother's Club, its facilitators, and affiliates shall not be held liable for any direct, indirect, incidental, or consequential damages arising from your use of our website or services.
            </p>
          </div>

          <div className="policy-section">
            <h2>7. Privacy</h2>
            <ul>
              <li>We respect your privacy.</li>
              <li>Your personal information will be used only to provide and improve our services and will never be shared with third parties without your consent, except as required by law.</li>
              <li>Please review our Privacy Policy for more details.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>8. Modifications to Terms</h2>
            <ul>
              <li>The Mother's Club reserves the right to update or modify these Terms & Conditions at any time without prior notice.</li>
              <li>Any changes will take effect immediately upon being posted on this page.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at:<br />
              <a href="mailto:ayisha@themothersclub.in">📧 ayisha@themothersclub.in</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;
