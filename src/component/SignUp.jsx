import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./style/SignUp.css";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    fullName: "",
    email: "",
    dob: "",
    idType: "NationalID",
    idNumber: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.username ||
      !form.fullName ||
      !form.email ||
      !form.dob ||
      !form.idNumber ||
      !form.phoneNumber ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("All fields are required");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    signUp(form);
    navigate("/signin");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Event Master Sign Up</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}

          <div className="form-container">
            <div className="left-column">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  className="form-input"
                  type="text"
                  placeholder="Enter your username"
                  value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="form-input"
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  className="form-input"
                  type="text"
                  placeholder="Enter your full name"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  id="dob"
                  className="form-input"
                  type="date"
                  value={form.dob}
                  onChange={(e) => setForm({ ...form, dob: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  id="phoneNumber"
                  className="form-input"
                  type="text"
                  placeholder="Enter your phone number"
                  value={form.phoneNumber}
                  onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                />
              </div>
            </div>

            <div className="right-column">
              <div className="form-group">
                <label htmlFor="idType">ID Type</label>
                <select
                  id="idType"
                  className="form-select"
                  value={form.idType}
                  onChange={(e) => setForm({ ...form, idType: e.target.value })}
                >
                  <option value="NationalID">National ID</option>
                  <option value="Passport">Passport</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="idNumber">ID Number</label>
                <input
                  id="idNumber"
                  className="form-input"
                  type="text"
                  placeholder="Enter your ID number"
                  value={form.idNumber}
                  onChange={(e) => setForm({ ...form, idNumber: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  className="form-input"
                  type="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  className="form-input"
                  type="password"
                  placeholder="Confirm your password"
                  value={form.confirmPassword}
                  onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="role">Role</label>
                <select
                  id="role"
                  className="form-select"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
          </div>

          <button className="signup-button" type="submit">
            Create Account
          </button>

          <p className="signin-link">
            Already registered? <Link to="/signin">Sign In</Link>
          </p>
        </form>

        {/* Button to navigate to the landing page */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Link to="/" className="signup-button" style={{ padding: "10px 20px", backgroundColor: "#00CED1", color: "#fff", borderRadius: "5px", textDecoration: "none", fontWeight: "bold" }}>
            Back to Landing Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
