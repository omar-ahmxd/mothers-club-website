import React from 'react';
import './About.css';

const Associations = () => {
  return (
    <section className="associations-section">
      <div className="container">
        <div className="section-title-elegant">
          <h2>Professional Associations</h2>
          <div className="title-line"></div>
        </div>
        <div className="associations-grid-luxury">
          <div className="association-card">
            <img src={require('../assets/images/WhatsApp Image 2022-09-22 at 01.49.46 (1).jpeg')} alt="ICEA" />
          </div>
          <div className="association-card">
            <img src={require('../assets/images/WhatsApp Image 2025-11-28 at 05.45.27_694deeb8.jpg')} alt="Association 1" />
          </div>
          <div className="association-card">
            <img src={require('../assets/images/WhatsApp Image 2025-11-28 at 05.53.33_8501cbae.jpg')} alt="Association 2" />
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
            <img src={require('../assets/images/WhatsApp Image 2025-11-28 at 05.45.27_694deeb8.jpg')} alt="Association 1" />
          </div>
          <div className="association-card">
            <img src={require('../assets/images/WhatsApp Image 2025-11-28 at 05.53.33_8501cbae.jpg')} alt="Association 2" />
          </div>
          <div className="association-card">
            <img src={require('../assets/images/WhatsApp Image 2022-09-22 at 01.46.40 (1).jpeg')} alt="ILCA" />
          </div>
          <div className="association-card">
            <img src={require('../assets/images/WhatsApp Image 2022-09-22 at 01.46.39 (1).jpeg')} alt="ALPI" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Associations;
