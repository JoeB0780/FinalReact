import React, { useState } from "react";
import "./style/ManageEvents.css";

const ManageEvents = () => {
  const [events, setEvents] = useState([
    { id: 1, name: "Tech Conference 2024", date: "2024-12-31", location: "New York" },
    { id: 2, name: "Design Workshop", date: "2024-11-15", location: "San Francisco" },
    { id: 3, name: "AI Summit", date: "2024-10-10", location: "Los Angeles" },
  ]);

  const handleDelete = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
  };

  const handleEdit = (id) => {
    alert(`Editing event with ID: ${id}`);
    // You can implement detailed editing logic here
  };

  const handleCreate = () => {
    alert("Redirecting to event creation page...");
    // Redirect to event creation page logic
  };

  return (
    <div className="manage-events-container">
      <header className="manage-events-header">
        <h1>Manage Events</h1>
        <p>Control your events with ease.</p>
      </header>

      <div className="events-list-container">
        <h2>Current Events</h2>
        {events.length > 0 ? (
          <table className="events-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Event Name</th>
                <th>Date</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={event.id}>
                  <td>{index + 1}</td>
                  <td>{event.name}</td>
                  <td>{event.date}</td>
                  <td>{event.location}</td>
                  <td>
                    <button
                      className="edit-button"
                      onClick={() => handleEdit(event.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(event.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No events available. Create a new one!</p>
        )}
      </div>

      <footer className="manage-events-footer">
        <button onClick={handleCreate} className="create-event-button">
          + Create Event
        </button>
      </footer>
    </div>
  );
};

export default ManageEvents;
