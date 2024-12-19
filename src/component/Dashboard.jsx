import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./style/Dashboard.css"; // Ensure this file has the updated styles

const Dashboard = () => {
  const { currentUser, signOut } = useAuth();
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulating event fetch from localStorage or API
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  if (!currentUser) return <p>Loading...</p>;

  const handleLogout = () => {
    signOut();
    navigate("/signin");
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Event Master Dashboard</h1>
        <p>Welcome back, {currentUser.fullName}!</p>
      </header>

      <section className="profile-section">
        {currentUser.profilePicture && (
          <img
            src={currentUser.profilePicture}
            alt="Profile"
            className="profile-picture"
          />
        )}
        <div className="user-details">
          <p><strong>Role:</strong> {currentUser.role}</p>
          <p><strong>Email:</strong> {currentUser.email}</p>
        </div>
      </section>

      <section className="event-management-section">
        <h2>Your Events</h2>
        {events.length > 0 ? (
          <ul className="event-list">
            {events.map((event, index) => (
              <li key={index} className="event-item">
                <h3>{event.name}</h3>
                <p><strong>Date:</strong> {event.date}</p>
                <button onClick={() => navigate(`/events/${event.id}`)}>
                  View Details
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No events available. Create your first event!</p>
        )}
        <button
          onClick={() => navigate("/create-event")}
          className="create-event-button"
        >
          + Create New Event
        </button>
      </section>

      <section className="admin-actions">
        {currentUser.role === "admin" && (
          <>
            <h2>Admin Panel</h2>
            <button onClick={() => navigate("/admin/users")}>
              Manage Users
            </button>
            <button onClick={() => navigate("/admin/events")}>
              Manage Events
            </button>
          </>
        )}
      </section>

      <footer>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </footer>
    </div>
  );
};

export default Dashboard;
