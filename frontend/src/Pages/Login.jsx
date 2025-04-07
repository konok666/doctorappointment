import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login process completed!");
    navigate("/all-doctors");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-image">
          <img src="/login_logo.png" alt="Login Icon" />
        </div>
        <h1 className="login-title">Login Page</h1>
          <form className="login-form" onSubmit={handleLogin}>
            <input type="email" placeholder="Enter Email" className="login-input" required />
            <input type="password" placeholder="Enter Password" className="login-input" required />

            <div className="login-buttons">
              <button type="submit" className="login-button">Log In</button>
              <button type="button" className="signup-button" onClick={() => navigate("/signup")}>Sign Up</button>
            </div>
          </form>

        {/* Updated Admin Panel Link */}
        <p className="login-footer">
          This is only for Admin{" "}
          <a href="/admin-login" className="login-link">
            Admin Panel
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
