import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./style/Dashboard.css";

const Dashboard = () => {
  const { currentUser, signOut } = useAuth();
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  // Load events from localStorage
  useEffect(() => {
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
        <h1>
          <span role="img" aria-label="sparkles">
            ✨
          </span>{" "}
          Dashboard Portal{" "}
          <span role="img" aria-label="sparkles">
            ✨
          </span>
        </h1>
        <p>
          Welcome back,{" "}
          <span className="user-highlight">{currentUser.fullName}</span>!
        </p>
      </header>

      <div className="dashboard-grid">
        {/* Event Management Section */}
        <section className="event-management-section">
          <h2>Your Events</h2>
          {events.length > 0 ? (
            <ul className="event-list">
              {events.map((event, index) => (
                <li key={index} className="event-item">
                  <h3>{event.name}</h3>
                  <p>
                    <strong>Date:</strong> {event.date}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-events">No upcoming events. Create one now!</p>
          )}
          <button
            onClick={() => navigate("/create-event")}
            className="create-event-button"
          >
            + Create Event
          </button>
        </section>

        {/* Admin Tools Section */}
        {currentUser.role === "admin" && (
          <section className="admin-actions">
            <h2>Admin Tools</h2>
            <button
              onClick={() => navigate("/admin/users")}
              className="action-button"
            >
              Manage Users
            </button>
            <button
              onClick={() => navigate("/manage-events")}
              className="action-button"
            >
              Manage Events
            </button>
          </section>
        )}
      </div>

      {/* Footer with Logout Button */}
      <footer className="dashboard-footer">
        <button onClick={handleLogout} className="logout-button">
          Logout{" "}
          <span role="img" aria-label="door">
            🚪
          </span>
        </button>
      </footer>
    </div>
  );
};

export default Dashboard;
