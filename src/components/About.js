import React, { useState } from 'react';
import './About.css';
import gallery2 from '../assets/images/gallery/IMG-20250406-WA0036.jpg';
import gallery3 from '../assets/images/gallery/IMG-20250406-WA0056.jpg';
import gallery4 from '../assets/images/gallery/IMG-20250412-WA0062.jpg';
import gallery5 from '../assets/images/gallery/IMG-20250413-WA0149.jpg';
import gallery6 from '../assets/images/gallery/IMG-20250423-WA0042.jpg';
import gallery7 from '../assets/images/gallery/TMC LinkedIn Article Template.png.PNG';
import gallery8 from '../assets/images/gallery/1000106697_4949b1c7540b02ade8aac5e5553ff1d3-8_8_2023, 12_33_10 AM.jpg.JPG';
import gallery9 from '../assets/images/gallery/1000106703_4949b1c7540b02ade8aac5e5553ff1d3-8_8_2023, 12_38_26 AM.jpg.JPG';
import gallery10 from '../assets/images/gallery/1000106706_e563e886ed76c3e7d10410e3c956e397-8_8_2023, 12_58_46 AM.jpg.JPG';
import gallery11 from '../assets/images/gallery/1000106715_7d71d4d95ef06e9a4daa74845f22fe90-8_8_2023, 12_27_25 AM.jpg.JPG';
import gallery12 from '../assets/images/gallery/1000106727_4949b1c7540b02ade8aac5e5553ff1d3-8_8_2023, 12_32_04 AM.jpg.JPG';
import gallery13 from '../assets/images/gallery/1000106782_bd0c5937343d0e5f40590b3d0d0c31e1-8_8_2023, 12_54_35 AM.jpg.JPG';

const About = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const galleryImages = [
    { src: gallery2, alt: "Workshop Session" },
    { src: gallery3, alt: "Community Support" },
    { src: gallery4, alt: "Maternal Care" },
    { src: gallery5, alt: "Educational Session" },
    { src: gallery6, alt: "Mother and Baby Care" },
    { src: gallery8, alt: "The Mother's Club Workshop" },
    { src: gallery7, alt: "TMC LinkedIn Article" },
    { src: gallery9, alt: "Community Gathering" },
    { src: gallery10, alt: "Educational Event" },
    { src: gallery11, alt: "Mother Support Session" },
    { src: gallery12, alt: "Workshop Activity" },
    { src: gallery13, alt: "TMC Event" }
  ];

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'unset';
  };

  const goToNext = () => {
    setSelectedImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrev = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;

      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

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
                    <strong>Certified HTTP Trainer</strong>
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
            {galleryImages.slice(0, 6).map((image, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImageIndex !== null && (
          <div className="gallery-lightbox" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>×</button>
              <button className="lightbox-arrow lightbox-prev" onClick={goToPrev}>‹</button>
              <button className="lightbox-arrow lightbox-next" onClick={goToNext}>›</button>
              <img src={galleryImages[selectedImageIndex].src} alt={galleryImages[selectedImageIndex].alt} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
