import React from 'react';
import './Services.css';
import { FaHeartbeat, FaBabyCarriage, FaHeart, FaSpa, FaUsers, FaGraduationCap } from 'react-icons/fa';

const Services = () => {
  const workshops = [
    {
      icon: <FaHeartbeat />,
      title: 'Childbirth Education',
      topics: [
        'Physiology of Birth',
        'Stages of Labour',
        'Pain Relief Options',
        'Birthing Positions',
        'Comfort Measures',
        'Interventions',
        'Birth Plan',
        'Golden Hour'
      ]
    },
    {
      icon: <FaBabyCarriage />,
      title: 'Antenatal Breastfeeding',
      topics: [
        'Breast Anatomy',
        'Milk Production',
        'Golden Hour and Skin to Skin',
        'Latch and Positioning',
        'Feeding Patterns and Sleep',
        'Pumping and Storage',
        'Nutrition and Self Care',
        'Feeding after C section'
      ]
    },
    {
      icon: <FaHeart />,
      title: 'VBAC (Vaginal Birth after C-section)',
      topics: [
        'Benefits, risks and success rates',
        'Birth History and VBAC',
        'Safe Pregnancy Planning',
        'Signs of Labour and when to go to the hospital for VBAC',
        'Natural Ways to encourage labour',
        'Monitoring during labour',
        'Emotional Preparation'
      ]
    },
    {
      icon: <FaSpa />,
      title: 'Infant Massage',
      topics: [
        'Benefits of Infant Massage',
        'Ideal oils for baby\'s skin',
        'Best time and environment for massage',
        'Step by Step demo of massage strokes',
        'Massage for common concerns',
        'Hands On practise'
      ]
    },
    {
      icon: <FaUsers />,
      title: 'Holistic Women\'s Health',
      topics: [
        'Nutrition Essentials',
        'Sleep Cycles and its Impact',
        'Stress Management Techniques',
        'Exercise and Alignment Correction',
        'Gut Health and its role',
        'Sustainable Self Care Plan',
        'Setting Boundaries'
      ]
    },
    {
      icon: <FaGraduationCap />,
      title: 'Mindful Motherhood',
      topics: [
        'Emotional Awareness & Resilience',
        'Balanced Parenting Approach',
        'Creating Moments of Connection',
        'Mindful Communication',
        'Breathwork and Grounding Practices',
        'Mom Guilt & Perfectionism',
        'Tools to stay present'
      ]
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <span className="section-badge">Workshops Offered</span>
          <h2>Comprehensive Education for Every Stage</h2>
          <p>Expert-led workshops designed to empower your motherhood journey</p>
        </div>

        <div className="services-grid">
          {workshops.map((workshop, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{workshop.icon}</div>
              <h3>{workshop.title}</h3>
              <ul className="workshop-topics">
                {workshop.topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
