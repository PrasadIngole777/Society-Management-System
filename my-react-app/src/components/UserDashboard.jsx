import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/user/user.css';
import welcomeImg from '../assets/user/welcome.jpg';
import { Chart } from 'chart.js/auto';

const UserDashboard = () => {
  const navigate = useNavigate();
  const maintenanceChartRef = useRef(null);
  const chartInstance = useRef(null);
  const [maintenanceData, setMaintenanceData] = useState({
    totalAvailable: '₹ 500,000',
    totalPending: '₹ 50,000',
    totalUsed: '₹ 450,000',
    userStatus: 'Paid',
    userPending: 500,
    charge: '₹ 0'
  });

  const updateMaintenanceDetails = (month) => {
    const data = {
      jan: { totalAvailable: '₹ 500,000', totalPending: '₹ 50,000', totalUsed: '₹ 450,000', userStatus: 'Paid', userPending: 500 },
      feb: { totalAvailable: '₹ 520,000', totalPending: '₹ 45,000', totalUsed: '₹ 475,000', userStatus: 'Not Paid', userPending: 600 },
      mar: { totalAvailable: '₹ 480,000', totalPending: '₹ 60,000', totalUsed: '₹ 420,000', userStatus: 'Paid', userPending: 0 },
      // Add other months...
    };
    setMaintenanceData(data[month]);
  };

  useEffect(() => {
    // Cleanup function to destroy the chart when component unmounts or re-renders
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const ctx = maintenanceChartRef.current.getContext('2d');

    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Maintenance Requests',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Cleanup function for this effect
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <nav className="navbar">
        <div className="logo">SocietyApp</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#maintenance_contener">Maintenance</a></li>
          <li><a href="/events">Events</a></li>
        </ul>
        <button id="dark-mode-toggle"><i className="fas fa-moon"></i></button>
      </nav>

      <section id="home" className="section">
        <h1>Hey Prasad Ingole<br />Management System</h1>
        <img src={welcomeImg} alt="Society" />
      </section>

      <div className="maintenance_contener" id="maintenance_contener">
        <label htmlFor="month-select">Select Month</label>
        <select id="month-select" onChange={(e) => updateMaintenanceDetails(e.target.value)}>
          <option value="jan">January</option>
          <option value="feb">February</option>
          <option value="mar">March</option>
        </select>

        <div className="society_maintenance_contener">
          <h1>Maintenance Details of Whole Society</h1>
          <div className="total_available"><p>Total Available Funds</p><span>{maintenanceData.totalAvailable}</span></div>
          <div className="total_pending"><p>Total Pending Dues</p><span>{maintenanceData.totalPending}</span></div>
          <div className="total_used"><p>Total Used Funds</p><span>{maintenanceData.totalUsed}</span></div>
        </div>

        <div className="user_maintenance_contener">
          <h1>Maintenance Details of your Flat</h1>
          <div className="user_status"><p>Status: {maintenanceData.userStatus}</p><span>₹ 2,000</span></div>
          <div className="user_pending"><p>Pending Amount</p><span>₹ {maintenanceData.userPending}</span></div>
          <div className="charge"><p>Charge</p><span>{maintenanceData.charge}</span></div>
        </div>
        <button className="open-details-btn" onClick={() => navigate('/details')}>Open Details</button>
        <button className="payment-btn" onClick={() => navigate('/payment')}>Proceed to Payment</button>
      </div>

      <div className="chart-container">
        <h2>Maintenance Requests Overview</h2>
        <canvas ref={maintenanceChartRef} id="maintenanceChart"></canvas>
      </div>
    </div>
  );
};

export default UserDashboard;
