// src/components/Login.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/login/login.css';
import img1 from '../assets/login/img1.jpg';
import img2 from '../assets/login/img2.jpg';
import img3 from '../assets/login/img3.jpg';
import logo from '../assets/login/logo.png';

const Login = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);
  const [captchaInput, setCaptchaInput] = useState('');
  const [notification, setNotification] = useState({ message: '', type: '' });

  const carouselImages = [img1, img2, img3];
  const intervalRef = useRef(null);

  useEffect(() => {
    showSlide(0);
    intervalRef.current = setInterval(() => showSlide(activeSlide + 1), 5000);
    return () => clearInterval(intervalRef.current);
  }, [activeSlide]);

  const showSlide = (index) => {
    setActiveSlide((index + carouselImages.length) % carouselImages.length);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isAdmin && captchaInput.trim() !== '8') {
      return showNotification('Incorrect CAPTCHA answer. Please try again.', 'error');
    }
    showNotification('Login successful! Redirecting...', 'success');
    setTimeout(() => {
      if (isAdmin) {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    }, 1500);
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: '', type: '' }), 3000);
  };

  const togglePassword = (e) => {
    const input = e.target.previousElementSibling;
    input.type = input.type === 'password' ? 'text' : 'password';
    e.target.classList.toggle('fa-eye');
    e.target.classList.toggle('fa-eye-slash');
  };

  return (
    <>
      <div className="container">
        {/* Carousel Section */}
        <div className="image_section">
          <div className="carousel">
            {carouselImages.map((img, i) => (
              <img key={i} src={img} alt={`Slide ${i}`} className={i === activeSlide ? 'active' : ''} />
            ))}
          </div>
          <div className="carousel-controls">
            {carouselImages.map((_, i) => (
              <span key={i} className={`dot ${i === activeSlide ? 'active' : ''}`} onClick={() => showSlide(i)}></span>
            ))}
          </div>
        </div>

        {/* Login Section */}
        <div className="login_section">
          <div className="header">
            <img src={logo} alt="Society Logo" className="logo" />
            <h1>Welcome to Smart Society</h1>
          </div>

          <div className="toggle-buttons">
            <button className={!isAdmin ? 'active' : ''} onClick={() => setIsAdmin(false)}>
              <i className="fas fa-user"></i> Resident Login
            </button>
            <button className={isAdmin ? 'active' : ''} onClick={() => setIsAdmin(true)}>
              <i className="fas fa-lock"></i> Admin Login
            </button>
          </div>

          {/* User Form */}
          {!isAdmin && (
            <form className="form-container active" onSubmit={handleLogin}>
              <div className="input-group">
                <input type="email" required placeholder=" " />
                <label>Email Address</label>
                <i className="fas fa-envelope"></i>
              </div>
              <div className="input-group">
                <input type="password" required placeholder=" " />
                <label>Password</label>
                <i className="fas fa-eye-slash toggle-password" onClick={togglePassword}></i>
              </div>

              <div className="additional-options">
                <label className="remember-me">
                  <input type="checkbox" /> Remember me
                </label>
                <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
              </div>

              <button type="submit" className="submit-btn">
                <span className="btn-text">Login</span>
                <div className="loader"></div>
              </button>
            </form>
          )}

          {/* Admin Form */}
          {isAdmin && (
            <form className="form-container active" onSubmit={handleLogin}>
              <div className="input-group">
                <input type="text" required placeholder=" " />
                <label>Admin ID</label>
                <i className="fas fa-id-card"></i>
              </div>
              <div className="input-group">
                <input type="password" required placeholder=" " />
                <label>Password</label>
                <i className="fas fa-eye-slash toggle-password" onClick={togglePassword}></i>
              </div>
              <div className="captcha">
                <span>3 + 5 = </span>
                <input type="text" placeholder="Answer" value={captchaInput} onChange={(e) => setCaptchaInput(e.target.value)} />
              </div>
              <button type="submit" className="submit-btn">
                <span className="btn-text">Admin Login</span>
                <div className="loader"></div>
              </button>
            </form>
          )}

          <div className="register-link">
            New to our society? <a href="/register">Create Account</a>
          </div>
        </div>
      </div>

      {notification.message && (
        <div className={`notification ${notification.type}`}>{notification.message}</div>
      )}
    </>
  );
};

export default Login;
