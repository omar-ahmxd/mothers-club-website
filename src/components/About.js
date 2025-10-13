import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-simple">
          <div className="about-image">
            <img src={require('../assets/images/Gemini_Generated_Image_cnvqthcnvqthcnvq.png')} alt="Ayisha Chandni" />
          </div>

          <div className="about-info">
            <span className="label">Meet Your Guide</span>
            <h2>Ayisha Chandni</h2>
            <p className="title-badge">BA, ACLP, AMANI, CVD, CIM, ICBD, IYCF</p>

            <p className="bio">
              Hi! I'm Ayisha Chandni – your go-to person for all things motherhood. For over 5 years, I've empowered 3000+ women, helping them turn worries into confidence and exhaustion into empowerment.
            </p>

            <p className="bio">
              My journey began when I realised mothers needed more than medical care – they needed <em>connection, reassurance, and someone in their corner</em>. That led me to train in <strong>birth doula support, lactation consulting, childbirth education, postpartum recovery, mindful motherhood, and more</strong>.
            </p>
          </div>
        </div>

        {/* Credentials Section */}
        <div className="credentials-section">
          <div className="section-title-elegant">
            <span className="section-subtitle">Professional Excellence</span>
            <h2>Certifications & Specialized Training</h2>
            <p className="section-description">
              Internationally recognized credentials ensuring evidence-based, expert care
            </p>
          </div>

          <div className="credentials-layout">
            <div className="cert-category-block maternal-block">
              <div className="cert-category-header">
                <div className="cert-category-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Maternal Education</h3>
              </div>
              <ul className="cert-list">
                <li>
                  <span className="cert-check">✓</span>
                  <div className="cert-details">
                    <strong>Diploma in Applied Nutrition</strong>
                    <span>Food Sciences and Dietetics</span>
                  </div>
                </li>
                <li>
                  <span className="cert-check">✓</span>
                  <div className="cert-details">
                    <strong>Certified Infant Massage Educator</strong>
                  </div>
                </li>
                <li>
                  <span className="cert-check">✓</span>
                  <div className="cert-details">
                    <strong>Internationally Certified Parenting Coach</strong>
                  </div>
                </li>
                <li>
                  <span className="cert-check">✓</span>
                  <div className="cert-details">
                    <strong>Certified in Neuroscience for Parents</strong>
                  </div>
                </li>
              </ul>
            </div>

            <div className="cert-category-block lactation-block">
              <div className="cert-category-header">
                <div className="cert-category-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Lactation Support</h3>
              </div>
              <ul className="cert-list">
                <li>
                  <span className="cert-check">✓</span>
                  <div className="cert-details">
                    <strong>Advanced Certified Lactation Professional</strong>
                  </div>
                </li>
                <li>
                  <span className="cert-check">✓</span>
                  <div className="cert-details">
                    <strong>Certified HTTP Trainer</strong>
                    <span>Hospital Team Training Programme</span>
                  </div>
                </li>
                <li>
                  <span className="cert-check">✓</span>
                  <div className="cert-details">
                    <strong>Certified in Infant Feeding</strong>
                  </div>
                </li>
                <li>
                  <span className="cert-check">✓</span>
                  <div className="cert-details">
                    <strong>Certified in Dunstan Baby Language</strong>
                  </div>
                </li>
              </ul>
            </div>

            <div className="cert-category-block doula-block">
              <div className="cert-category-header">
                <div className="cert-category-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>Childbirth Education & Doula Support</h3>
              </div>
              <ul className="cert-list">
                <li>
                  <span className="cert-check">✓</span>
                  <div className="cert-details">
                    <strong>Advanced AMANI Birth Certified Educator and Doula</strong>
                  </div>
                </li>
                <li>
                  <span className="cert-check">✓</span>
                  <div className="cert-details">
                    <strong>Advanced Certified VBAC Doula</strong>
                  </div>
                </li>
                <li>
                  <span className="cert-check">✓</span>
                  <div className="cert-details">
                    <strong>Certified Body Ready Method Pro</strong>
                  </div>
                </li>
                <li>
                  <span className="cert-check">✓</span>
                  <div className="cert-details">
                    <strong>Certified Silent Birthkeeper</strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="achievements-section">
          <div className="section-title-elegant">
            <span className="section-subtitle">Global Recognition</span>
            <h2>International Speaking Engagements</h2>
            <p className="section-description">
              Sharing expertise and insights at prestigious international conferences
            </p>
          </div>

          <div className="achievements-timeline">
            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <div className="achievement-card">
                  <div className="achievement-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="achievement-details">
                    <h4>International Breastfeeding Conference</h4>
                    <p className="achievement-topic">Topic: Clubfeet and Exclusive Breastfeeding</p>
                    <span className="achievement-badge">Speaker</span>
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="achievement-details">
                    <h4>ILCA Conference</h4>
                    <p className="achievement-topic">Topic: Clubfeet and Exclusive Breastfeeding</p>
                    <span className="achievement-badge">Speaker</span>
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="achievement-details">
                    <h4>Coimbatore Birth Convention</h4>
                    <p className="achievement-topic">Topic: Mothering the Postpartum Mother</p>
                    <span className="achievement-badge">Speaker</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <div className="achievement-card">
                  <div className="achievement-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="achievement-details">
                    <h4>iLactation Conference</h4>
                    <p className="achievement-topic">Topic: Clubfeet and Exclusive Breastfeeding</p>
                    <span className="achievement-badge">Speaker</span>
                  </div>
                </div>
                <div className="achievement-card">
                  <div className="achievement-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="achievement-details">
                    <h4>India's Online Lactation Conference</h4>
                    <p className="achievement-topic">Topic: Birth Team Supporting Breastfeeding Outcomes</p>
                    <span className="achievement-badge">Speaker</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">
                <div className="achievement-card">
                  <div className="achievement-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="achievement-details">
                    <h4>I-OLC Conference</h4>
                    <p className="achievement-topic">Topic: Breastfeeding Challenges across Cultures</p>
                    <span className="achievement-badge">Speaker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Associations Section */}
        <div className="associations-section">
          <div className="section-title-elegant">
            <h2>Professional Associations</h2>
            <div className="title-line"></div>
          </div>
          <div className="associations-grid-luxury">
            <div className="association-card">
              <img src={require('../assets/images/WhatsApp Image 2022-09-22 at 01.49.46 (1).jpeg')} alt="ICEA" />
            </div>
            <div className="association-card">
              <img src={require('../assets/images/WhatsApp Image 2022-09-22 at 01.49.06 (1).jpeg')} alt="BPNI" />
            </div>
            <div className="association-card">
              <img src={require('../assets/images/WhatsApp Image 2022-09-22 at 01.49.11 (1).jpeg')} alt="GOLD" />
            </div>
            <div className="association-card">
              <img src={require('../assets/images/WhatsApp Image 2022-09-22 at 01.46.40 (1).jpeg')} alt="ILCA" />
            </div>
            <div className="association-card">
              <img src={require('../assets/images/WhatsApp Image 2022-09-22 at 01.46.39 (1).jpeg')} alt="ALPI" />
            </div>
            {/* Duplicate for seamless loop */}
            <div className="association-card">
              <img src={require('../assets/images/WhatsApp Image 2022-09-22 at 01.49.46 (1).jpeg')} alt="ICEA" />
            </div>
            <div className="association-card">
              <img src={require('../assets/images/WhatsApp Image 2022-09-22 at 01.49.06 (1).jpeg')} alt="BPNI" />
            </div>
            <div className="association-card">
              <img src={require('../assets/images/WhatsApp Image 2022-09-22 at 01.49.11 (1).jpeg')} alt="GOLD" />
            </div>
            <div className="association-card">
              <img src={require('../assets/images/WhatsApp Image 2022-09-22 at 01.46.40 (1).jpeg')} alt="ILCA" />
            </div>
            <div className="association-card">
              <img src={require('../assets/images/WhatsApp Image 2022-09-22 at 01.46.39 (1).jpeg')} alt="ALPI" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
