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
            <p className="title-badge">ICBD, ACLP, IYCF</p>

            <p className="bio">
              I am a mom of two lovely boys who changed my world upside down and made me feel like I can conquer the world. Contrary to popular belief, motherhood does empower you. It gives you the zest that even the impossible is achievable if you set your heart out in the desired direction.
            </p>

            <p className="bio">
              After 5 years of embracing and loving every bit of motherhood, I felt the need to help out other women as they venture into motherhood. There is great wisdom from our ancestors when it comes to motherhood, but sadly its bundled together with myths which is hard to segregate without evidence to back it up. So here I am to provide you just that, the filtered version of our ancient wisdom backed with research and evidence to help you make informed decisions which puts you in the driver seat of your motherhood.
            </p>
          </div>
        </div>

        {/* Credentials Section */}
        <div className="credentials-section">
          <div className="section-title-elegant">
            <h2>Professional Credentials</h2>
            <div className="title-line"></div>
          </div>
          <div className="credentials-grid-luxury">
            <div className="credential-card">
              <h4>Certified in Maternal & Child Nutrition</h4>
            </div>
            <div className="credential-card">
              <h4>ICEA Certified Birth Doula</h4>
            </div>
            <div className="credential-card">
              <h4>Advanced Certified Lactation Professional</h4>
            </div>
            <div className="credential-card">
              <h4>Certified DBL Educator</h4>
            </div>
            <div className="credential-card">
              <h4>Infant & Young Child Feeding (UNICEF)</h4>
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
