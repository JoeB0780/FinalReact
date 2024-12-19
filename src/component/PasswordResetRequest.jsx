import React, { useState } from "react";
import "./PasswordResetRequest.css"; // Importing CSS for custom styling
import { useAuth } from "./AuthProvider";

const PasswordResetRequest = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { resetPassword } = useAuth();

  const handlePasswordReset = (e) => {
    e.preventDefault();

    const success = resetPassword(email, "new-default-password"); // Replace "new-default-password" with actual reset logic.
    if (success) {
      setMessage("Success! Check your email for the password reset link.");
    } else {
      setMessage("Error: We couldn't find an account with that email.");
    }
  };

  return (
    <div className="password-reset-container">
      <h2 className="password-reset-title">EventMaster - Reset Your Password</h2>
      <p className="password-reset-description">
        Forgot your password? No worries! Enter your registered email address, and we’ll help you get back into your account.
      </p>

      <form onSubmit={handlePasswordReset} className="password-reset-form">
        <input
          type="email"
          className="password-reset-input"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="password-reset-button">
          Send Reset Link
        </button>
      </form>

      {message && <p className="password-reset-message">{message}</p>}
    </div>
  );
};

export default PasswordResetRequest;
