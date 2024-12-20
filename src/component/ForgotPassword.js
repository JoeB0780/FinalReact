import React, { useState } from 'react';
import axios from 'axios';
import './style/ForgotPassword.css';  // Custom styles for better design

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    const resetLink = `http://localhost:3000/reset-password?token=123456`; // This token should be dynamic in real scenarios

    try {
      const response = await axios.post('http://localhost:5000/send-reset-email', {
        email,
        resetLink,
      });
      setMessage(response.data);
    } catch (err) {
      setError(err.response?.data || 'Error sending reset email');
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Event Master - Forgot Password</h2>
      <p className="instruction-text">Enter your email to receive a password reset link.</p>
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Your Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="Enter your email address"
            required
          />
        </div>
        <button type="submit" className="submit-button">Send Reset Link</button>
      </form>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ForgotPassword;
