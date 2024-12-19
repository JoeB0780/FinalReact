import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./style/SignIn.css";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = signIn(username, password);
    if (!user) {
      setError("Invalid username or password. Please try again.");
      return;
    }
    navigate("/dashboard");
  };

  return (
    <div className="signin-page full-page">
      <h1 className="signin-title">Welcome to Event Master</h1>
      <p className="signin-subtitle">
        Seamlessly orchestrate extraordinary experiences with precision and elegance.
      </p>
      {error && <div className="signin-error">{error}</div>}
      <form onSubmit={handleSubmit} className="signin-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="signin-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signin-input"
        />
        <button type="submit" className="signin-button">
          Sign In
        </button>
      </form>
      <div className="signin-footer">
        <Link to="/signup" className="signin-link">
          Don’t have an account? Sign Up
        </Link>
        <br />
        <Link to="/forgot-password" className="signin-link">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};



export default SignIn;
