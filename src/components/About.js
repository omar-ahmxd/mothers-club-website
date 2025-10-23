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
            <div className="cert-category-block doula-block">
              <div className="cert-category-header">
                <div className="cert-category-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>Childbirth Education & Birth Support</h3>
              </div>
              <ul className="cert-list">
                <li>
                  <span className="cert-check">✓</span>
                  <div className="cert-details">
                    <strong>AMANI Birth – Advanced Childbirth Educators & Advanced Labour & Birth Doula</strong>
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
                    <strong>ICEA Certified Birth Doula</strong>
                  </div>
                </li>
                <li>
                  <span className="cert-check">✓</span>
                  <div className="cert-details">
                    <strong>Certified VBAC Doula</strong>
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

            <div className="cert-category-block lactation-block">
              <div className="cert-category-header">
                <div className="cert-category-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Lactation & Infant Care</h3>
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
                    <strong>Certified HTP Trainer</strong>
                    <span>Hospital Team Training Program</span>
                  </div>
                </li>
                <li>
                  <span className="cert-check">✓</span>
                  <div className="cert-details">
                    <strong>Certified Infant Massage Trainer</strong>
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

            <div className="cert-category-block maternal-block">
              <div className="cert-category-header">
                <div className="cert-category-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Maternal Health & Support</h3>
              </div>
              <ul className="cert-list">
                <li>
                  <span className="cert-check">✓</span>
                  <div className="cert-details">
                    <strong>Certified Parenting Coach</strong>
                  </div>
                </li>
                <li>
                  <span className="cert-check">✓</span>
                  <div className="cert-details">
                    <strong>Certified in Maternal, Infant, Young Child and Adolescent Nutrition</strong>
                  </div>
                </li>
                <li>
                  <span className="cert-check">✓</span>
                  <div className="cert-details">
                    <strong>Certified in Neuroscience for Parents</strong>
                  </div>
                </li>
                <li>
                  <span className="cert-check">✓</span>
                  <div className="cert-details">
                    <strong>Internationally Accredited Diploma in Nutrition and Gut Health</strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="gallery-section">
          <div className="section-title-elegant">
            <span className="section-subtitle">Moments</span>
            <h2>Gallery</h2>
            <p className="section-description">
              Capturing beautiful moments and memories
            </p>
          </div>

          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=400&fit=crop" alt="Gallery 1" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1578496781197-b85385c7f0b3?w=600&h=400&fit=crop" alt="Gallery 2" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop" alt="Gallery 3" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1614789924411-b50a1c0e06fa?w=600&h=400&fit=crop" alt="Gallery 4" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop" alt="Gallery 5" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=600&h=400&fit=crop" alt="Gallery 6" />
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
