import React, { useState } from "react";
import { FaSearch, FaBell, FaUserCircle, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../styles/dashboard.css";

function Navbar({ onSearch }) {
  const [search, setSearch] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false); // bell dropdown
  const navigate = useNavigate();

  const notifications = [
    "New user signed up",
    "Product added to inventory",
    "Order #1234 completed",
    "Password changed",
  ];

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  // Icon default style
  const iconStyle = {
    cursor: "pointer",
    color: "#63b1f1",
    fontSize: "20px",
    transition: "all 0.3s ease",
  };

  // Hover effect
  const handleHover = (e) => {
    e.currentTarget.style.transform = "scale(1.2)";
    e.currentTarget.style.color = "#a3dcf3";
    e.currentTarget.style.filter = "drop-shadow(0 0 6px #8263f1)";
  };
  const handleLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.color = "#63b1f1";
    e.currentTarget.style.filter = "none";
  };

  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
        padding: "10px 20px",
        backgroundColor: "#0f172a",
        borderRadius: "16px",
        color: "#e2e8f0",
        position: "relative",
      }}
    >
<div style={{ position: "relative" }}>
  {/* Search Icon */}
  <FaSearch
    style={{
      position: "absolute",
      top: "50%",
      left: "12px",
      transform: "translateY(-50%)",
      color: "#94a3b8",
      fontSize: "14px",
    }}
  />

  {/* Input */}
  <input
    type="text"
    placeholder="Search products, customers..."
    value={search}
    onChange={handleSearch}
    style={{
      width: "400px",
      padding: "8px 35px 8px 35px", // left for icon, right for shortcut
      borderRadius: "10px",
      border: "1px solid #334155",
      backgroundColor: "#1e293b",
      color: "#e2e8f0",
      outline: "none",
    }}
  />

  {/* Shortcut label */}
  <span
    style={{
      position: "absolute",
      right: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "#334155",
      padding: "2px 6px",
      borderRadius: "6px",
      fontSize: "12px",
      color: "#caccd1",
      fontWeight: "500",
      pointerEvents: "none",
    }}
  >
    +F
  </span>
</div>

      {/* Right icons */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px", fontSize: "20px" }}>
        {/* Bell icon with notifications */}
        <div style={{ position: "relative" }}>
          <FaBell
            style={iconStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            onClick={() => setShowNotifications(!showNotifications)}
          />
          {showNotifications && (
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: 0,
                backgroundColor: "#1e293b",
                padding: "10px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                zIndex: 10,
                width: "250px",
              }}
            >
              <h4 style={{ color: "#e2e8f0", marginBottom: "10px" }}>Notifications</h4>
              {notifications.map((note, index) => (
                <div
                  key={index}
                  style={{
                    padding: "6px 8px",
                    borderBottom: index !== notifications.length - 1 ? "1px solid #334155" : "none",
                    color: "#e2e8f0",
                    fontSize: "14px",
                  }}
                >
                  {note}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Login icon */}
        <div style={{ position: "relative" }}>
          <FaUserCircle
            style={iconStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            onClick={() => setShowLogin(!showLogin)}
          />
          {showLogin && (
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: 0,
                backgroundColor: "#1e293b",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                zIndex: 10,
                width: "250px",
              }}
            >
              <h4 style={{ color: "#e2e8f0", marginBottom: "10px" }}>Login</h4>
              <input
                type="text"
                placeholder="User ID"
                style={{
                  width: "89%",
                  marginBottom: "10px",
                  padding: "8px",
                  borderRadius: "8px",
                  border: "1px solid #334155",
                  backgroundColor: "#0f172a",
                  color: "#e2e8f0",
                }}
              />
              <input
                type="text"
                placeholder="Username"
                style={{
                  width: "89%",
                  marginBottom: "10px",
                  padding: "8px",
                  borderRadius: "8px",
                  border: "1px solid #334155",
                  backgroundColor: "#0f172a",
                  color: "#e2e8f0",
                }}
              />
              <input
                type="password"
                placeholder="Password"
                style={{
                  width: "89%",
                  marginBottom: "10px",
                  padding: "8px",
                  borderRadius: "8px",
                  border: "1px solid #334155",
                  backgroundColor: "#0f172a",
                  color: "#e2e8f0",
                }}
              />
              <button
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#6366f1",
                  color: "#fff",
                  cursor: "pointer",
                }}
                onClick={() => alert("Login functionality here")}
              >
                Login
              </button>
            </div>
          )}
        </div>

        {/* Settings icon */}
        <FaCog
          style={iconStyle}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          onClick={() => navigate("/settings")}
        />
      </div>
    </div>
  );
}

export default Navbar;