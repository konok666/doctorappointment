import React from "react";
import "../Style/Home.css"; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      {/* Top Section */}
      <div className="top-section">
        {/* Text Section */}
        <div className="text-content">
          <h1>Book appointments with trusted doctors</h1>
        </div>
        {/* Image Section */}
        <div className="image-content">
          <img src="header_img.png" alt="Doctor" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        {/* Text Content (Left Bottom Side) */}
        <div className="text-details">
          <h2>Welcome to Bishal Medical – Your Trusted Healthcare Partner.</h2>
          <p>
            Book doctor appointments quickly and conveniently with our
            easy-to-use platform. Whether you need a general checkup,
            specialist consultation, or emergency care, we connect you with top
            healthcare professionals near you. Browse doctors, check
            availability, and schedule visits in just a few clicks. Stay
            informed with medical insights and manage your health effortlessly.
            Your well-being is our priority – book your appointment today!
          </p>
        </div>

        {/* Sidebar (Right Bottom Side) */}
        <div className="sidebar">
          <div>
            <h3>Company</h3>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h3>Get In Touch</h3>
            <ul>
              <li>+1-212-456-7890</li>
              <li>AaBli45@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
