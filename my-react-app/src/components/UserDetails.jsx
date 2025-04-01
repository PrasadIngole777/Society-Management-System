import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/user/details.css';
import profileImg from '../assets/user/welcome.jpg';

const UserDetails = () => {
  return (
    <div className="user-details-container">
      <div className="user-info">
        <div className="user-profile">
          <img src={profileImg} alt="User Profile Picture" className="profile-img" />
        </div>
        <div className="user-details">
          <h2 className="user-name">John Doe</h2>
          <p><strong>Permanent Address:</strong> 1234 Elm Street, City, State, ZIP</p>
          <p><strong>Mobile Number:</strong> +91 9876543210</p>
          <p><strong>Email:</strong> johndoe@example.com</p>
          <p><strong>Members Living:</strong> 4 Members</p>
        </div>
      </div>

      <div className="maintenance-section">
        <h3>Maintenance Details</h3>
        <label htmlFor="month-select">Select Month</label>
        <select id="month-select">
          <option value="jan">January</option>
          <option value="feb">February</option>
        </select>

        <div className="maintenance-info">
          <p><strong>Status:</strong> Paid</p>
          <p><strong>Amount:</strong> ₹ 2,000</p>
          <p><strong>Pending Amount:</strong> ₹ 500</p>
          <p><strong>Charge:</strong> ₹ 0</p>
        </div>
      </div>
      <button className="back-btn" onClick={() => window.history.back()}>Back</button>
      <Link to="/update-profile" className="update-btn">Update Profile</Link>
    </div>
  );
};

export default UserDetails;

