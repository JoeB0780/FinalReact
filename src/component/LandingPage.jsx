import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column", // Stack elements vertically
        justifyContent: "center", // Vertically center the content
        alignItems: "center", // Horizontally center the content
        margin: 0,
        padding: 0,
        fontFamily: "'Poppins', sans-serif",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #2a2a2a, #5c5c5c, #1c1c1c)", // Dark gradient background
      }}
    >
      {/* Content */}
      <div
        style={{
          textAlign: "center",
          padding: "30px",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "900",
            marginBottom: "20px",
            textTransform: "uppercase",
            letterSpacing: "3px",
            textShadow: "0px 4px 8px rgba(0, 0, 0, 0.6), 0 0 10px #ff6347",
          }}
        >
          ✨ Welcome to the Future of Event Planning ✨
        </h1>
        <p
          style={{
            fontSize: "1.6rem",
            marginBottom: "20px",
            lineHeight: "1.8",
            color: "#d1d1d1",
            textShadow: "0px 2px 6px rgba(0, 0, 0, 0.8)",
          }}
        >
          Experience seamless organization, management, and execution of your
          events like never before. With cutting-edge tools and effortless
          functionality, every event becomes a masterpiece.
        </p>
        <p
          style={{
            fontSize: "1.3rem",
            marginBottom: "40px",
            color: "#ff6347", // Light red-orange color for contrast
            textShadow: "0px 2px 4px rgba(0, 0, 0, 0.6)",
          }}
        >
          Ready to turn your ideas into unforgettable events? Let's get started!
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <Link
            to="/signup"
            style={{
              textDecoration: "none",
              padding: "15px 30px",
              fontSize: "1.2rem",
              borderRadius: "50px",
              background:
                "linear-gradient(90deg, #ff6a00 0%, #ff9e00 100%)", // Gradient button
              color: "#fff",
              fontWeight: "600",
              boxShadow: "0px 5px 15px rgba(255, 106, 0, 0.6)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
          >
            Get Started
          </Link>
          <Link
            to="/signin"
            style={{
              textDecoration: "none",
              padding: "15px 30px",
              fontSize: "1.2rem",
              borderRadius: "50px",
              background:
                "linear-gradient(90deg, #34e89e 0%, #0f3443 100%)", // Cool gradient for sign-in
              color: "#fff",
              fontWeight: "600",
              boxShadow: "0px 5px 15px rgba(52, 232, 158, 0.6)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
