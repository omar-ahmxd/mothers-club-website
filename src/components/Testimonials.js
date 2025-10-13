import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Ayisha is truly exceptional! Her kindness, unconditional care, and support are unparalleled. During pregnancy and postpartum, when vulnerability peaks, she's a rock you can count on. Her expertise shines through in her advice, rooted in genuine concern. Beyond professional associations, Ayisha goes above and beyond, responding and guiding whenever needed. Her dedication is unconditional providing reassurance that parents often desperately need. I highly recommend Ayisha – she's a valuable asset in this field of work.",
      author: "Kaavya",
      location: "Bangalore",
      context: "First-time mom"
    },
    {
      text: "Assalam wa alaikum wa rahmatullahi wa barakatuhu. Alhamdulillah we are blessed with a baby boy. Please keep us in your precious prayers. Alhamdulillah it was a normal delivery by the grace of Almighty Allah. @Ayisha Chandni Jazakallahu khair for all the guidance. Your words were just echoing in my mind. Forever grateful to you. May Allah bless you immensely.",
      author: "Sumaiya",
      location: "Spain",
      context: "First Time Mom"
    },
    {
      text: "Alhamdulillah blessed with a baby girl through normal delivery few hours ago!! Alhamdulillah we are fine.. your words were only echoing throughout labour",
      author: "Haseena",
      location: "Chennai",
      context: "In Labour for 2 days, VBAC Mom"
    },
    {
      text: "Assalamu Alaikum Wa rahmatullahi Wa barakatuhu... This is my heartfelt message from my deep heart to you. As I was crying what to do for my baby having heavy fever. your messaged made me so happy and I did to my baby. he is getting some sleep now Alhamdulillah. May Allah make your efforts easy, and May Allah bless your life with full of happiness and joys in the correct way of Islam. Love you for the sake of Allah...",
      author: "Farhana",
      location: "TMC Community",
      context: ""
    },
    {
      text: "Alhamdulillah, the session on mindful motherhood was very beneficial. The practical tips shared were incredibly helpful, especially the suggestion to write down specific goals for each child. This approach felt both practical and empowering, Alhamdulillah. Jazakillah khayr sister. Subhanallah u covered all the points so well sis. Every girl should listen to this session b4 marriage itself. To prepare oneself for this big responsibility. Every Muslim girl after puberty should be trained mentally like this to be ready for motherhood. Excellent, great job sis. Barakallahu feek.",
      author: "Naadia",
      location: "UAE",
      context: "Mother of three"
    },
    {
      text: "You've been an amazing and genuine soul ma'am, always there to help us in difficult times. Thank you for inspiring us with your strength and dedication. You've helped us with many challenging situations with ease, and words cannot fully express our gratitude for this unforgettable breastfeeding journey.",
      author: "Krithika",
      location: "Chennai",
      context: "Mom of 2 boys"
    }
  ];

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-title">
          <h2>What Mothers Say</h2>
          <p>Stories from our beautiful community</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-name">
                  {testimonial.author} {testimonial.location && `(${testimonial.location})`}
                </div>
                {testimonial.context && (
                  <div className="author-context">{testimonial.context}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
