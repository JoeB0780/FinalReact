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
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-title">Event Master Sign Up</h2>
        {error && <p className="error-message">{error}</p>}

        <input
          className="form-input"
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          className="form-input"
          type="text"
          placeholder="Full Name"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        />
        <input
          className="form-input"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="form-input"
          type="date"
          placeholder="Date of Birth"
          value={form.dob}
          onChange={(e) => setForm({ ...form, dob: e.target.value })}
        />
        <select
          className="form-select"
          value={form.idType}
          onChange={(e) => setForm({ ...form, idType: e.target.value })}
        >
          <option value="NationalID">National ID</option>
          <option value="Passport">Passport</option>
        </select>
        <input
          className="form-input"
          type="text"
          placeholder="ID Number"
          value={form.idNumber}
          onChange={(e) => setForm({ ...form, idNumber: e.target.value })}
        />
        <input
          className="form-input"
          type="text"
          placeholder="Phone Number"
          value={form.phoneNumber}
          onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
        />
        <input
          className="form-input"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <input
          className="form-input"
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
        />
        <select
          className="form-select"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button className="signup-button" type="submit">
          Create Account
        </button>
        <p className="signin-link">
          Already registered? <Link to="/signin">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
