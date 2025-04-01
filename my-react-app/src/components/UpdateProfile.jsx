// src/components/UpdateProfile.jsx
import React, { useState } from 'react';
import '../assets/user/user_update.css';
import profileImg from '../assets/user/welcome.jpg';

const UpdateProfile = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <div className="user-update-container">
      <div className="header">
        <h2>Update Your Profile</h2>
        <p>Keep your information up to date for better communication and security.</p>
      </div>

      <div className="user-update-info">
        <div className="user-profile">
          <img src={profileImg} alt="User Profile Picture" className="profile-img" />
          <div className="upload-overlay">
            <i className="fas fa-camera"></i>
            <span>Change Photo</span>
          </div>
        </div>

        <form className="update-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" defaultValue="John Doe" required />
          </div>

          <div className="form-group">
            <label htmlFor="contact">Mobile Number</label>
            <input type="text" id="contact" name="contact" defaultValue="+91 9876543210" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" defaultValue="johndoe@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="address">Permanent Address</label>
            <textarea id="address" name="address" required>1234 Elm Street, City, State, ZIP</textarea>
          </div>

          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <div className="password-input">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Enter new password"
                required
              />
              <i className={`fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`} onClick={() => setPasswordVisible(!passwordVisible)}></i>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="password-input">
              <input
                type={confirmPasswordVisible ? 'text' : 'password'}
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm new password"
                required
              />
              <i className={`fas ${confirmPasswordVisible ? 'fa-eye-slash' : 'fa-eye'}`} onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}></i>
            </div>
          </div>

          <button type="submit" className="save-btn">
            <i className="fas fa-save"></i> Save Changes
          </button>
        </form>
      </div>

      <button className="back-btn" onClick={() => window.history.back()}>
        <i className="fas fa-arrow-left"></i> Back
      </button>
    </div>
  );
};

export default UpdateProfile;
