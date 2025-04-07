import React from 'react';
import "../Style/About.css";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-content">
        <img 
          src="about_image-MG9zrc7b.png" 
          alt="Healthcare illustration" 
          className="about-image" 
        />
        <div className="text-content">
          <h1>ABOUT <span>US</span></h1>
          <p>
            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
            <br />
            <br />
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you’re booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <h2>Our Vision</h2>
          <p>
            Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </section>

      <section className="choose-us">
        <h2>WHY <span>CHOOSE US</span></h2>
        <div className="features">
          <div className="feature">
            <h3>EFFICIENCY</h3>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className="feature">
            <h3>CONVENIENCE</h3>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div className="feature">
            <h3>PERSONALIZATION</h3>
            <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
