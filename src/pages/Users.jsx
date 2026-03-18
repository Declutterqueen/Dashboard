
// src/pages/Users.jsx
import React, { useState } from "react";
import { FiUser, FiMail, FiShield } from "react-icons/fi";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";


function Users() {
  const { settings } = useContext(SettingsContext);
  const [users, setUsers] = useState([
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Completed" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Pending" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "User", status: "Completed" },
    { id: 4, name: "David Lee", email: "david@example.com", role: "User", status: "Failed" },
    { id: 5, name: "Eva Green", email: "eva@example.com", role: "Editor", status: "Pending" },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("User");
  const [status, setStatus] = useState("Pending");

  const handleAdd = () => {
    if (!name || !email) return;
    const newUser = { id: users.length + 1, name, email, role, status };
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
    setRole("User");
    setStatus("Pending");
  };

  const statusColors = {
    Completed: "#22c55e",
    Pending: "#facc15",
    Failed: "#ef4444",
  };

  const bodyBg = "linear-gradient(180deg,rgb(15, 23, 42), rgb(15, 23, 42))";
  const cardBg = "linear-gradient(180deg,rgb(15, 23, 42), rgb(15, 23, 42))";
  const cardShadow = "0 8px 25px rgba(0,0,0,0.5)";

  return (
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        background: bodyBg,
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* Title */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "700",
          marginBottom: "35px",
          background: "linear-gradient(90deg, #6366f1, #48bdec, #4715fa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        User Management
      </h2>

      {/* Add User Form */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "35px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={selectStyle}
        >
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="User">User</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={selectStyle}
        >
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>

        <button
          onClick={handleAdd}
          style={buttonStyle}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        >
          Add User
        </button>
      </div>

      {/* User Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {users.map((u) => (
          <div
            key={u.id}
            style={{
              background: cardBg,
              borderRadius: "18px",
              boxShadow: cardShadow,
              padding: "22px",
              border: "1px solid #1f2937",
              transition: "0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-8px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <h3
              style={{
                marginBottom: "12px",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FiUser /> {u.name}
            </h3>

            <p style={{ color: "#cbd5e1", fontSize: "14px" }}>
              <FiMail style={{ marginRight: "6px" }} />
              {u.email}
            </p>

            <p style={{ color: "#cbd5e1", fontSize: "14px" }}>
              <FiShield style={{ marginRight: "6px" }} />
              {u.role}
            </p>

            <span
              style={{
                display: "inline-block",
                marginTop: "12px",
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "bold",
                color: "#fff",
                backgroundColor: statusColors[u.status],
              }}
            >
              {u.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  borderRadius: "12px",
  border: "1px solid #334155",
  background: "#1e293b",
  color: "#fff",
  minWidth: "170px",
};

const selectStyle = {
  padding: "10px",
  borderRadius: "12px",
  border: "1px solid #334155",
  background: "#1e293b",
  color: "#fff",
  minWidth: "150px",
  cursor: "pointer",
};

const buttonStyle = {
  padding: "10px 22px",
  borderRadius: "12px",
  border: "none",
  background: "linear-gradient(90deg,#6366f1,#0ea5e9)",
  color: "#fff",
  fontWeight: "600",
  cursor: "pointer",
  transition: "0.3s",
};

export default Users;