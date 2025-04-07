import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1>MEDICAL</h1>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="navbar-actions">
        {isLoggedIn ? (
          <div className="profile-container">
            <Link to="/profile" className="profile-link">
              <img
                src="profile_pic.png"
                alt="Profile"
                className="profile-pic"
              />
            </Link>
            <button className="logout-button" onClick={onLogout}>
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/profile">
              <button className="profile-button">Profile</button>
            </Link>
            <Link to="/login">
              <button className="login-button">Login</button>
            </Link>
            <Link to="/signup">
              <button className="signup-button">Signup</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
