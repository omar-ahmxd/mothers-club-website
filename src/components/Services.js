import React from 'react';
import './Services.css';
import { FaHeartbeat, FaBabyCarriage, FaHeart, FaSpa, FaUsers, FaGraduationCap } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaHeartbeat />,
      title: 'Prenatal Care',
      desc: 'Comprehensive support during pregnancy with expert guidance and personalized care plans.'
    },
    {
      icon: <FaBabyCarriage />,
      title: 'Postnatal Support',
      desc: 'Recovery guidance and newborn care essentials for new mothers and families.'
    },
    {
      icon: <FaHeart />,
      title: 'Lactation Consulting',
      desc: 'Professional breastfeeding support and troubleshooting for a successful nursing journey.'
    },
    {
      icon: <FaSpa />,
      title: 'Wellness & Self-Care',
      desc: 'Mental health support and self-care strategies for maternal wellbeing.'
    },
    {
      icon: <FaUsers />,
      title: 'Family Planning',
      desc: 'Guidance on family planning decisions and preparing for your growing family.'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Education & Training',
      desc: 'Workshops and classes for expectant and new parents on various parenting topics.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <span className="section-badge">Our Services</span>
          <h2>Comprehensive Care for Every Stage</h2>
          <p>Expert support tailored to your unique journey through motherhood</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="learn-more">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
