import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import UserDashboard from './components/UserDashboard';
import UserDetails from './components/UserDetails';
import EventPage from './components/EventPage';
import UpdateProfile from './components/UpdateProfile';
import PaymentPage from './components/PaymentPage';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/details" element={<UserDetails />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;