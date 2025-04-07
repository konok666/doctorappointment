import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../Style/SignUp.css";

function SignUp() {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Here, perform your signup logic (e.g., API call)
    console.log("Signup process completed!");

    // Redirect to the login page after signup is successful
    navigate("/login");
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        {/* Image Section */}
        <div className="signup-image">
          <img src="signup_logo.png" alt="Signup Illustration" />
        </div>

        {/* Title */}
        <h1 className="signup-title">Sign-Up Page</h1>

        {/* Form */}
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            className="signup-input"
            required
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="signup-input"
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="signup-input"
            required
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="signup-footer">
          Already have an account?{" "}
          <a href="/login" className="signup-link">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
