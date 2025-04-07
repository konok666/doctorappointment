import React from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Perform admin login logic (e.g., API call to validate credentials)
    console.log("Admin login successful!");

    // ✅ Redirect to Admin Panel
    navigate("/admin-panel");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-image">
          <img src="/login_logo.png" alt="Admin Login Icon" />
        </div>

        <h1 className="login-title">Admin Login Page</h1>

        <form className="login-form" onSubmit={handleLogin}>
          <input type="email" placeholder="Enter Admin Email" className="login-input" required />
          <input type="password" placeholder="Enter Password" className="login-input" required />

          <div className="login-buttons">
            <button type="submit" className="login-button">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
