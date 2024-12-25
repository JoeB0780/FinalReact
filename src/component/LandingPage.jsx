import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const animateBackground = () => {
      setTime((prev) => prev + 0.005);
      requestAnimationFrame(animateBackground);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const animation = requestAnimationFrame(animateBackground);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animation);
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: "0 10px", // Adjusted padding
        fontFamily: "'Poppins', sans-serif",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        background: "#1a2f4c",
      }}
    >
      {/* Animated Background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.4,
          background: `
            linear-gradient(
              ${Math.sin(time) * 360}deg,
              #1a2f4c 0%,
              #234567 50%,
              #1a2f4c 100%
            )
          `,
          transition: "background 0.5s ease",
        }}
      />

      {/* Animated Wave Patterns */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.15,
            transform: `scale(${1 + i * 0.2}) rotate(${time * 30 + i * 30}deg)`,
            background: `
              repeating-linear-gradient(
                ${45 + i * 30}deg,
                transparent,
                transparent 100px,
                rgba(0, 128, 128, 0.1) 100px,
                rgba(0, 128, 128, 0.1) 200px
              )
            `,
          }}
        />
      ))}

      {/* Interactive Glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(
              circle at ${mousePos.x}% ${mousePos.y}%,
              rgba(0, 128, 128, 0.15) 0%,
              transparent 50%
            )
          `,
          zIndex: 1,
        }}
      />

      {/* Main Content Container */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "1000px", // Reduced max width
          width: "100%",
          padding: "30px", // Adjusted padding
          zIndex: 2,
          position: "relative",
        }}
      >
        {/* Premium Badge */}
        <div
          style={{
            display: "inline-block",
            padding: "8px 20px", // Reduced padding
            background: "linear-gradient(135deg, rgba(0, 128, 128, 0.1), rgba(0, 128, 128, 0.05))",
            borderRadius: "30px",
            marginBottom: "20px", // Adjusted margin
            border: "1px solid rgba(0, 128, 128, 0.2)",
            fontSize: "0.9rem", // Smaller font size
            color: "#00CED1",
            letterSpacing: "1px",
          }}
        >
          🌐 GLOBAL EVENT EXCELLENCE 🌐
        </div>

        {/* New Writing Style for Heading */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif", // New font family for elegance
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)", // Larger dynamic font size
            fontWeight: "700",
            letterSpacing: "3px",
            marginBottom: "20px", // Adjusted margin
            textTransform: "uppercase",
            color: "#ffffff",
            textShadow: "0 4px 10px rgba(0, 128, 128, 0.2)", // Softer shadow effect
            position: "relative",
            animation: "fadeInUp 1.5s ease-out", // Animation for smooth entry
          }}
        >
          Step into a New Era of Event Innovation
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 1.8vw, 1.2rem)", // Smaller font size
            marginBottom: "20px", // Adjusted margin
            lineHeight: "1.7",
            color: "#e5e5e5",
            maxWidth: "700px", // Adjusted width
            margin: "0 auto 20px auto", // Adjusted margin
            fontWeight: "300",
          }}
        >
          Experience seamless organization, management, and execution of your
          events like never before. With cutting-edge tools and effortless
          functionality, every event becomes a masterpiece.
        </p>

        <p
          style={{
            fontSize: "clamp(1rem, 1.6vw, 1.1rem)", // Smaller font size
            marginBottom: "30px", // Adjusted margin
            color: "#00CED1",
            fontWeight: "400",
            letterSpacing: "1px",
          }}
        >
          ⚜️ Elevate Your Events to New Heights ⚜️
        </p>

        {/* Sophisticated Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px", // Adjusted gap
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/signup"
            style={{
              textDecoration: "none",
              padding: "12px 24px", // Reduced padding
              fontSize: "0.9rem", // Smaller font size
              borderRadius: "4px",
              background: "linear-gradient(135deg, #00CED1 0%, #008B8B 100%)",
              color: "#ffffff",
              fontWeight: "600",
              letterSpacing: "1px",
              boxShadow: "0 4px 10px rgba(0, 128, 128, 0.2)",
              transition: "all 0.3s ease",
              border: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 128, 128, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 128, 128, 0.2)";
            }}
          >
            Begin Your Journey
          </Link>

          <Link
            to="/signin"
            style={{
              textDecoration: "none",
              padding: "12px 24px", // Reduced padding
              fontSize: "0.9rem", // Smaller font size
              borderRadius: "4px",
              background: "transparent",
              color: "#00CED1",
              fontWeight: "600",
              letterSpacing: "1px",
              transition: "all 0.3s ease",
              border: "1px solid rgba(0, 128, 128, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.borderColor = "rgba(0, 128, 128, 0.5)";
              e.currentTarget.style.background = "rgba(0, 128, 128, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(0, 128, 128, 0.3)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Return to Portal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
