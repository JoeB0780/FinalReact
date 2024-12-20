import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./style/Settings.css"; // We'll add some custom CSS to improve the design.

const Settings = () => {
  const { currentUser, updateUser } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    username: currentUser.username,
    fullName: currentUser.fullName,
    email: currentUser.email,
    profilePicture: currentUser.profilePicture || "",
  });

  useEffect(() => {
    setProfile({
      ...profile,
      profilePicture: currentUser.profilePicture || "",
    });
  }, [currentUser]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfile({ ...profile, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(profile);
    navigate("/dashboard"); // Redirect to Dashboard after saving
  };

  const handleCancel = () => {
    navigate("/dashboard"); // Redirect to Dashboard without saving
  };

  return (
    <div className="settings-container">
      <h2 className="settings-title">EventMaster Settings</h2>
      <form className="settings-form" onSubmit={handleSubmit}>
        <div className="profile-picture-section">
          <label className="label">Profile Picture:</label>
          <input
            className="file-input"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          {profile.profilePicture && (
            <div className="profile-picture-preview">
              <img
                src={profile.profilePicture}
                alt="Profile"
                className="profile-picture-img"
              />
            </div>
          )}
        </div>

        <div className="input-section">
          <label className="label">Username:</label>
          <input className="input-field" type="text" value={profile.username} readOnly />
        </div>

        <div className="input-section">
          <label className="label">Full Name:</label>
          <input
            className="input-field"
            type="text"
            value={profile.fullName}
            readOnly
          />
        </div>

        <div className="input-section">
          <label className="label">Email:</label>
          <input className="input-field" type="email" value={profile.email} readOnly />
        </div>

        <div className="button-container">
          <button className="btn-save" type="submit">
            Save Changes
          </button>
          <button
            className="btn-cancel"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
