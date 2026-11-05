import React from 'react';
import './Workshops.css';
import birthingMethodImage from '../assets/images/birthing-method-workshop.jpg';
import employeeWellness1 from '../assets/images/employee-wellness-1.jpg';
import employeeWellness2 from '../assets/images/employee-wellness-2.jpg';
import doulaMentorshipImage from '../assets/images/new-workshop.jpg';

const Workshops = () => {
  const [selectedWorkshop, setSelectedWorkshop] = React.useState(null);

  const openModal = (workshop) => {
    setSelectedWorkshop(workshop);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedWorkshop(null);
    document.body.style.overflow = 'unset';
  };

  const workshops = [
    {
      id: 1,
      title: 'The Birthing Method',
      subtitle: 'Because birth isn\'t just about getting through labour — it\'s about awakening your strength.',
      image: birthingMethodImage,
      dates: 'November 15 & 16, 2025 (Saturday & Sunday)',
      time: '2:00 PM – 5:00 PM IST',
      description: 'A transformative 2-day workshop designed to empower you on your birth journey.',
      benefits: [
        'Turn fear into confidence',
        'Learn powerful mind-body techniques',
        'Prepare together with your partner',
        'Make informed decisions',
        'Step into motherhood with ease'
      ],
      targetAudience: 'Perfect for expecting mothers or those planning their birth journey soon.',
      registrationLink: 'https://rzp.io/rzp/5i0Tfrp',
      instructor: 'Ayisha Chandni'
    },
    {
      id: 2,
      title: 'Hospital Lactation Care Training',
      subtitle: 'Elevate your hospital\'s lactation care with specialized nurse training.',
      image: employeeWellness1,
      dates: 'Custom Schedule',
      time: 'Flexible Timing',
      description: 'Specialized nurse training by The Mother\'s Club to enhance your hospital\'s lactation care and breastfeeding support services.',
      benefits: [
        'Preparation for BFHI Accreditation',
        'Increased patient trust and satisfaction',
        'Elevate your hospital\'s lactation care',
        'Enhance mother-baby bonding through skilled guidance',
        'Improve exclusive breastfeeding rates in your facility',
        'Reduce feeding-related readmissions and complications'
      ],
      targetAudience: 'Training conducted at your hospital or online. Includes physiology of lactation, positioning, latch support, managing breastfeeding challenges, counseling, and supporting preterm and high-risk infants.',
      registrationLink: 'https://wa.me/919884011146',
      instructor: 'Ayisha Chandni - MS, ACLP, IBCD, IYCF, CIM, AMANI',
      isProgram: true
    },
    {
      id: 3,
      title: 'Employee Maternity Wellness Program',
      subtitle: 'Supporting mothers, empowering workplaces.',
      image: employeeWellness2,
      dates: 'Custom Schedule',
      time: 'Flexible Timing',
      description: 'Specialized support by The Mother\'s Club to create a family-friendly environment where mothers thrive and employees feel valued.',
      benefits: [
        'Childbirth education and birth support',
        'Breastfeeding support including smooth transition to returning to work',
        'Workplace guidance for breastfeeding-friendly policies',
        'Healthier, happier employees',
        'Smooth return-to-work for new mothers',
        'Reduced absenteeism and stress',
        'Enhanced employee loyalty and retention',
        'A family-friendly workplace culture'
      ],
      targetAudience: 'Empower your employees during life\'s biggest transition. When mothers and families are supported, workplaces thrive.',
      registrationLink: 'https://wa.me/919884011146',
      instructor: 'Ayisha Chandni - Childbirth Educator, Lactation Professional, Parenting Coach, Birth Doula',
      isProgram: true
    },
    {
      id: 4,
      title: 'Doula Mentorship Program',
      subtitle: 'Empowering aspiring and new doulas to gain certification, start their practice, approach birth professionals, and confidently support their first clients.',
      image: doulaMentorshipImage,
      dates: 'Ongoing',
      time: 'Online LIVE Sessions',
      description: 'A comprehensive mentorship program to help aspiring and new doulas build confidence, establish their practice, and provide exceptional support to their clients.',
      benefits: [
        'Guidance on choosing and completing certification programs',
        'Setting up your doula practice, contracts, and fees',
        'Networking with doctors and birth professionals',
        'Practical tips for managing first births and client interactions',
        'Personalized mentorship to address challenges and build confidence',
        'Clear certification pathway',
        'Skills to launch and grow a doula practice',
        'Confidence to support clients and collaborate with healthcare professionals'
      ],
      targetAudience: 'Perfect for aspiring and new doulas who want to build a successful practice. Fee: Rs 1,000 per month.',
      registrationLink: 'https://wa.me/919884011146',
      instructor: 'Ayisha Chandni',
      isProgram: true
    }
  ];

  return (
    <section id="workshops" className="workshops section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Upcoming Events</span>
          <h2>Workshops & Courses</h2>
          <p>Join our transformative programs designed to empower and support you through your motherhood journey</p>
        </div>

        <div className="workshops-grid">
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
              className="workshop-box"
              onClick={() => openModal(workshop)}
            >
              <div className="workshop-box-image">
                <img src={workshop.image} alt={workshop.title} />
                <div className="workshop-box-overlay">
                  <span className="view-details">View Details</span>
                </div>
              </div>
              <div className="workshop-box-content">
                <h3>{workshop.title}</h3>
                <p>{workshop.dates}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedWorkshop && (
        <div className="workshop-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>

            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedWorkshop.image} alt={selectedWorkshop.title} />
                {!selectedWorkshop.isProgram && (
                  <div className="modal-badge">Featured Workshop</div>
                )}
              </div>

              <div className="modal-details">
                <h2>{selectedWorkshop.title}</h2>
                <p className="modal-subtitle">{selectedWorkshop.subtitle}</p>

                <div className="modal-info-grid">
                  <div className="info-item">
                    <div className="info-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="info-label">Date</span>
                      <span className="info-value">{selectedWorkshop.dates}</span>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="info-label">Time</span>
                      <span className="info-value">{selectedWorkshop.time}</span>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="info-label">Instructor</span>
                      <span className="info-value">{selectedWorkshop.instructor}</span>
                    </div>
                  </div>
                </div>

                <div className="modal-section">
                  <h3>What You'll Learn</h3>
                  <ul className="modal-benefits-list">
                    {selectedWorkshop.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-audience">
                  <p>{selectedWorkshop.targetAudience}</p>
                </div>

                <a
                  href={selectedWorkshop.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary modal-register-btn"
                >
                  {selectedWorkshop.isProgram ? 'Contact Us' : 'Register Now'}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Workshops;
