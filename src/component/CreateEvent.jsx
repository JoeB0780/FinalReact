// src/component/CreateEvent.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/CreateEvent.css"; // Add relevant styles here

const CreateEvent = () => {
  const navigate = useNavigate();
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");

  const handleCreateEvent = () => {
    if (!eventName || !eventDate) {
      alert("Please fill in all fields!");
      return;
    }

    const existingEvents = JSON.parse(localStorage.getItem("events")) || [];
    const newEvent = {
      name: eventName,
      date: eventDate,
      id: existingEvents.length + 1, // Simple ID generation
    };

    localStorage.setItem("events", JSON.stringify([...existingEvents, newEvent]));
    alert("Event created successfully!");
    navigate("/dashboard"); // Redirect to the dashboard after creating an event
  };

  return (
    <div className="create-event-container">
      <h1>Create New Event</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateEvent();
        }}
      >
        <div className="form-group">
          <label htmlFor="event-name">Event Name</label>
          <input
            id="event-name"
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Enter event name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="event-date">Event Date</label>
          <input
            id="event-date"
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">
          Create Event
        </button>
      </form>
      <button onClick={() => navigate("/dashboard")} className="back-button">
        Back to Dashboard
      </button>
    </div>
  );
};

export default CreateEvent;
