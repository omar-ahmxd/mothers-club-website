import React from 'react';
import './Welcome.css';

const Welcome = () => {
  return (
    <section id="welcome" className="welcome section">
      <div className="container">
        <div className="welcome-content">
          <h1>Welcome to The Mother's Club</h1>
          <p className="welcome-text">
            Whether you're expecting your first child, navigating breastfeeding challenges, or seeking guidance in your motherhood journey, you've found your sanctuary.
          </p>
          <p className="welcome-text">
            At The Mother's Club, we believe every mother deserves evidence-based care, compassionate support, and a community that truly understands. Since 2020, we've empowered over 3,000 women with internationally recognized expertise in maternal health, lactation support, and holistic mother and child development.
          </p>
          <p className="welcome-message">
            Welcome home, beautiful mama. Your empowered journey starts here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
