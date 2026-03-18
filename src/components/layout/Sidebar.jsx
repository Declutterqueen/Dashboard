// src/components/layout/Sidebar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs";
import {
  FaTachometerAlt,
  FaBox,
  FaMapMarkerAlt,
  FaUserFriends,
  FaFileAlt,
  FaUsers,
  FaCog,
} from "react-icons/fa";

export default function Sidebar() {
  const [hovered, setHovered] = useState(null);

  const menuItems = [
    { title: "Dashboard", path: "/", icon: <FaTachometerAlt /> },
      { title: "Users", path: "/users", icon: <FaUsers /> },
    { title: "Products", path: "/products", icon: <FaBox /> },
    { title: "Customers", path: "/customers", icon: <FaUserFriends /> },
    { title: "Locations", path: "/locations", icon: <FaMapMarkerAlt /> },
    { title: "Proposal Type", path: "/proposal-type", icon: <FaFileAlt /> },
    { title: "Settings", path: "/settings", icon: <FaCog /> },
  ];

  return (
    <div
      style={{
        width: "240px",
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "#caccd1",
        display: "flex",
        flexDirection: "column",
        paddingTop: "30px",
        position: "sticky",
        top: 0,
        borderRight: "2px solid #374151",
        paddingLeft: "15px",
        paddingRight: "15px",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          fontSize: "31px",
          fontWeight: "800",
          marginBottom: "40px",
          background: "linear-gradient(90deg, #6366f1, #48bdec, #4715fa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "1px",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <BsGraphUp style={{ fontSize: "30px", color: "#9ce0f5" }} />
        DashFlow
      </div>

      {/* Menu Items */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {menuItems.map((item, index) => (
          <li key={item.title}>
            <NavLink
              to={item.path}
              style={({ isActive }) => ({
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 16px",
                borderRadius: "10px",
                color: "#caccd1",
                fontWeight: "500",
                textDecoration: "none",
                transition: "all 0.3s ease",
                background: isActive
                  ? "linear-gradient(90deg,#6366f1,#48bdec)"
                  : hovered === index
                  ? "#1e293b"
                  : "transparent",
                transform:
                  hovered === index ? "translateX(5px)" : "translateX(0)",
                boxShadow: isActive
                  ? "0 4px 12px rgba(99, 101, 241, 0.69)"
                  : "none",
              })}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <span style={{ fontSize: "18px" }}>{item.icon}</span>
              <span style={{ fontSize: "16px" }}>{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div
        style={{
          marginTop: "auto",
          padding: "20px 0",
          textAlign: "center",
          fontSize: "12px",
          color: "#6b7280",
        }}
      >
        &copy; 2026 MySaaS
      </div>
    </div>
  );
}