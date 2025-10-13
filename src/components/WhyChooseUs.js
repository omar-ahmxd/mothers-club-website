import React from 'react';
import './WhyChooseUs.css';
import { FaCheckCircle, FaGlobeAmericas, FaUsers, FaHeart } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaCheckCircle />,
      title: 'Evidence-Based & Personalized Care',
      description: 'Our approach combines the latest scientific research with compassionate, tailored support designed to meet your individual needs.'
    },
    {
      icon: <FaGlobeAmericas />,
      title: 'Culturally Sensitive & Inclusive',
      description: 'We celebrate every mother\'s unique background, providing respectful and inclusive care that honors diverse traditions and beliefs.'
    },
    {
      icon: <FaUsers />,
      title: 'Nurturing Community Support',
      description: 'Join a vibrant, understanding community where mothers connect, share experiences, and uplift one another in a safe and supportive space.'
    },
    {
      icon: <FaHeart />,
      title: 'Comprehensive Support: Bump to Toddler',
      description: 'From pregnancy to your child\'s toddler years, we offer continuous, holistic support at every stage of your motherhood journey.'
    }
  ];

  return (
    <section id="why-choose-us" className="why-choose-us section">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Us?</h2>
          <p>Your trusted partner in every step of your motherhood journey</p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
