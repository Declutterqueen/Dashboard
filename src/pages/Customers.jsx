<<<<<<< HEAD

// src/pages/Customers.jsx
import React, { useState } from "react";
import { FiUser, FiMail, FiMapPin, FiBriefcase } from "react-icons/fi";

const customersData = [
  { id: 1, name: "Liam Johnson", company: "Acme Corp", email: "liam@acme.com", city: "New York", subscription: "Premium", status: "Active" },
  { id: 2, name: "Olivia Brown", company: "Globex Ltd", email: "olivia@globex.com", city: "London", subscription: "Standard", status: "Inactive" },
  { id: 3, name: "Noah Smith", company: "Initech", email: "noah@initech.com", city: "Berlin", subscription: "Premium", status: "Active" },
  { id: 4, name: "Emma Wilson", company: "Umbrella Inc", email: "emma@umbrella.com", city: "Tokyo", subscription: "Trial", status: "Pending" },
];

export default function Customers() {
  const [filter, setFilter] = useState("All");

  const statusColors = {
    Active: "#22c55e",
    Inactive: "#ef4444",
    Pending: "#facc15"
  };

  const filteredCustomers =
    filter === "All"
      ? customersData
      : customersData.filter(c => c.status === filter);

  return (
    <div style={{
      padding: "30px",
      minHeight: "100vh",
      background: "linear-gradient(180deg,rgb(15, 23, 42), rgb(15, 23, 42))",
      fontFamily: "Segoe UI, sans-serif"
    }}>

      {/* Title */}
      <h2 style={{
        textAlign: "center",
        fontSize: "38px",
        fontWeight: "700",
        marginBottom: "30px",
        background: "linear-gradient(90deg, #6366f1, #48bdec, #4715fa)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}>
        Customer Directory
      </h2>

      {/* Filters */}
      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        {["All", "Active", "Inactive", "Pending"].map(status => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            style={{
              padding: "8px 18px",
              margin: "0 10px 10px 0",
              borderRadius: "25px",
              border: "1px solid #334155",
              background: filter === status
                ? statusColors[status] || "#6366f1"
                : "transparent",
              color: filter === status ? "#fff" : "#cbd5e1",
              cursor: "pointer",
              transition: "0.3s"
            }}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
        gap: "25px"
      }}>
        {filteredCustomers.map(c => (
          <div key={c.id}
            style={{
              background: "linear-gradient(180deg,rgb(15, 23, 42), rgb(15, 23, 42))",
              borderRadius: "18px",
              padding: "20px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
              border: "1px solid #1f2937",
              transition: "0.3s",
              cursor: "pointer"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-8px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            <h3 style={{ color: "#fff", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
              <FiUser /> {c.name}
            </h3>

            <p style={{ color: "#cbd5e1", fontSize: "14px" }}>
              <FiBriefcase /> {c.company}
            </p>
            <p style={{ color: "#cbd5e1", fontSize: "14px" }}>
              <FiMail /> {c.email}
            </p>
            <p style={{ color: "#cbd5e1", fontSize: "14px" }}>
              <FiMapPin /> {c.city}
            </p>

            <p style={{
              marginTop: "10px",
              fontWeight: "600",
              color:
                c.subscription === "Premium"
                  ? "#6366f1"
                  : c.subscription === "Standard"
                  ? "#0ea5e9"
                  : "#facc15"
            }}>
              {c.subscription} Plan
            </p>

            <span style={{
              display: "inline-block",
              marginTop: "8px",
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "bold",
              backgroundColor: statusColors[c.status],
              color: "#fff"
            }}>
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
=======

// src/pages/Customers.jsx
import React, { useState } from "react";
import { FiUser, FiMail, FiMapPin, FiBriefcase } from "react-icons/fi";

const customersData = [
  { id: 1, name: "Liam Johnson", company: "Acme Corp", email: "liam@acme.com", city: "New York", subscription: "Premium", status: "Active" },
  { id: 2, name: "Olivia Brown", company: "Globex Ltd", email: "olivia@globex.com", city: "London", subscription: "Standard", status: "Inactive" },
  { id: 3, name: "Noah Smith", company: "Initech", email: "noah@initech.com", city: "Berlin", subscription: "Premium", status: "Active" },
  { id: 4, name: "Emma Wilson", company: "Umbrella Inc", email: "emma@umbrella.com", city: "Tokyo", subscription: "Trial", status: "Pending" },
];

export default function Customers() {
  const [filter, setFilter] = useState("All");

  const statusColors = {
    Active: "#22c55e",
    Inactive: "#ef4444",
    Pending: "#facc15"
  };

  const filteredCustomers =
    filter === "All"
      ? customersData
      : customersData.filter(c => c.status === filter);

  return (
    <div style={{
      padding: "30px",
      minHeight: "100vh",
      background: "linear-gradient(180deg,rgb(15, 23, 42), rgb(15, 23, 42))",
      fontFamily: "Segoe UI, sans-serif"
    }}>

      {/* Title */}
      <h2 style={{
        textAlign: "center",
        fontSize: "38px",
        fontWeight: "700",
        marginBottom: "30px",
        background: "linear-gradient(90deg, #6366f1, #48bdec, #4715fa)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}>
        Customer Directory
      </h2>

      {/* Filters */}
      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        {["All", "Active", "Inactive", "Pending"].map(status => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            style={{
              padding: "8px 18px",
              margin: "0 10px 10px 0",
              borderRadius: "25px",
              border: "1px solid #334155",
              background: filter === status
                ? statusColors[status] || "#6366f1"
                : "transparent",
              color: filter === status ? "#fff" : "#cbd5e1",
              cursor: "pointer",
              transition: "0.3s"
            }}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
        gap: "25px"
      }}>
        {filteredCustomers.map(c => (
          <div key={c.id}
            style={{
              background: "linear-gradient(180deg,rgb(15, 23, 42), rgb(15, 23, 42))",
              borderRadius: "18px",
              padding: "20px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
              border: "1px solid #1f2937",
              transition: "0.3s",
              cursor: "pointer"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-8px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            <h3 style={{ color: "#fff", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
              <FiUser /> {c.name}
            </h3>

            <p style={{ color: "#cbd5e1", fontSize: "14px" }}>
              <FiBriefcase /> {c.company}
            </p>
            <p style={{ color: "#cbd5e1", fontSize: "14px" }}>
              <FiMail /> {c.email}
            </p>
            <p style={{ color: "#cbd5e1", fontSize: "14px" }}>
              <FiMapPin /> {c.city}
            </p>

            <p style={{
              marginTop: "10px",
              fontWeight: "600",
              color:
                c.subscription === "Premium"
                  ? "#6366f1"
                  : c.subscription === "Standard"
                  ? "#0ea5e9"
                  : "#facc15"
            }}>
              {c.subscription} Plan
            </p>

            <span style={{
              display: "inline-block",
              marginTop: "8px",
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "bold",
              backgroundColor: statusColors[c.status],
              color: "#fff"
            }}>
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
>>>>>>> d41df5b306612acc83a1c46b7b8706d731875a34
}