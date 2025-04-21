import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Login.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login/insert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email: formData.email,
          Password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login successful!');
        navigate('/all-doctors');
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-image">
          <img src="/login_logo.png" alt="Login Icon" />
        </div>
        <h1 className="login-title">Login Page</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className="login-input"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            className="login-input"
            required
          />
          <div className="login-buttons">
            <button type="submit" className="login-button">
              Log In
            </button>
            <button type="button" className="signup-button" onClick={() => navigate('/signup')}>
              Sign Up
            </button>
          </div>
        </form>
        <p className="login-footer">
          This is only for Admin{' '}
          <a href="/admin-login" className="login-link">
            Admin Panel
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
