


import React, { useState } from "react";

import { FaSearch, FaBell, FaUserCircle, FaCog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../styles/dashboard.css";

function Navbar({ onSearch }) {
 
 const [search, setSearch] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  // const notifications = [
  //   "New user signed up",
  //   "Product added to inventory",
  //   "Order #1234 completed",
  //   "Password changed",
  // ];
const [notifications, setNotifications] = useState([
  { text: "New user signed up", time: "2m ago", read: false },
  { text: "Product added to inventory", time: "10m ago", read: false },
  { text: "Order #1234 completed", time: "1h ago", read: true },
  { text: "Password changed", time: "Yesterday", read: true },
]);
   const handleSearch = (e) => {
     setSearch(e.target.value);
    if (onSearch) onSearch(e.target.value);
   };


  const iconStyle = {
    cursor: "pointer",
    color: "#63b1f1",
    fontSize: "20px",
    transition: "all 0.3s ease",
  };

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
const handleLogin = () => {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("username", "Mehreen");

  setShowLogin(false);
  setShowSuccess(true); // 👈 show success card

  setTimeout(() => {
    setShowSuccess(false);
    navigate("/");
  }, 1500); // 1.5 sec baad redirect
};
const markAllAsRead = () => {
  const updated = notifications.map((n) => ({
    ...n,
    read: true,
  }));
  setNotifications(updated);
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

{/* <input
  type="text"
  placeholder="Search products, customers..."
 onChange={handleSearch => setSearch(e.target.value)}  
   value={search}
  style={{
    width: "400px",
    padding: "8px 35px 8px 35px",
    borderRadius: "10px",
    border: "1px solid #334155",
    backgroundColor: "#1e293b",
    color: "#e2e8f0",
    outline: "none",
  }}
/> */}
<input
  type="text"
  placeholder="Search products, customers..."
  value={search}
  onChange={handleSearch}
  style={{
    width: "400px",
    padding: "8px 35px 8px 35px",
    borderRadius: "10px",
    border: "1px solid #334155",
    backgroundColor: "#1e293b",
    color: "#e2e8f0",
    outline: "none",
  }}
/>
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

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {/* <div style={{ position: "relative" }}>
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
              <h4 style={{ color: "#e2e8f0", marginBottom: "10px" }}>
                Notifications
              </h4>
              {notifications.map((note, index) => (
                <div
                  key={index}
                  style={{
                    padding: "6px 8px",
                    borderBottom:
                      index !== notifications.length - 1
                        ? "1px solid #334155"
                        : "none",
                    color: "#e2e8f0",
                    fontSize: "14px",
                  }}
                >
                  {note}
                </div>
              ))} 
            </div>
          )}*/}
          <div style={{ position: "relative" }}>
  <FaBell
    style={iconStyle}
    onMouseEnter={handleHover}
    onMouseLeave={handleLeave}
    onClick={() => setShowNotifications(!showNotifications)}
  />

  {/* red dot */}
  {notifications.some(n => !n.read) && (
    <span
      style={{
        position: "absolute",
        top: "0px",
        right: "0px",
        width: "8px",
        height: "8px",
        background: "red",
        borderRadius: "50%",
      }}
    />
  )}
        </div>
{showNotifications && (
  <div
    style={{
      position: "absolute",
      top: "45px",
      right: 0,
      width: "300px",
      background: "#0f172a",
      border: "1px solid #334155",
      borderRadius: "14px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
      overflow: "hidden",
      zIndex: 100,
      animation: "fadeIn 0.2s ease-in-out",
    }}
  >
    {/* header */}
    <div
      style={{
        padding: "12px",
        borderBottom: "1px solid #334155",
        fontWeight: "600",
        color: "#e2e8f0",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      Notifications
      <span style={{ fontSize: "12px", color: "#94a3b8" }}>
        {notifications.filter(n => !n.read).length} new
      </span>
    </div>

    {/* list */}
    <div style={{ maxHeight: "250px", overflowY: "auto" }}>
      {notifications.map((note, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 12px",
            borderBottom: "1px solid #1e293b",
            background: note.read ? "#0f172a" : "#111c33",
            cursor: "pointer",
          }}
        >
          <div>
            <div style={{ color: "#e2e8f0", fontSize: "14px" }}>
              {note.text}
            </div>
            <div style={{ fontSize: "11px", color: "#64748b" }}>
              {note.time}
            </div>
          </div>

          {!note.read && (
            <span
              style={{
                width: "8px",
                height: "8px",
                background: "#6366f1",
                borderRadius: "50%",
                marginTop: "6px",
              }}
            />
          )}
        </div>
      ))}
    </div>

    {/* footer */}
<div
  onClick={markAllAsRead}
  style={{
    padding: "10px",
    textAlign: "center",
    fontSize: "12px",
    color: "#94a3b8",
    borderTop: "1px solid #334155",
    cursor: "pointer",
  }}
>
  Mark all as read
</div>
  </div>
)}
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
              <h4 style={{ color: "#e2e8f0", marginBottom: "10px" }}>
                Login
              </h4>

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

              {/* <button
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
              </button> */}
              <button  style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#6366f1",
                  color: "#fff",
                  cursor: "pointer", 
              }}
              onClick={handleLogin}>Login</button>
            </div>
          )}
        </div>
{showSuccess && (
  <div className="login-success-card">
    ✅ Login Successful
  </div>
)}
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

