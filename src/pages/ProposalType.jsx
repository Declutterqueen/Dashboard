<<<<<<< HEAD

// src/pages/ProposalType.jsx
import React, { useState } from "react";
import { FiUser, FiCalendar, FiFileText } from "react-icons/fi";

const proposalData = [
  { id: 1, type: "Enterprise Website Revamp", priority: "High", status: "Active", owner: "John Doe", lastUpdate: "2026-02-10" },
  { id: 2, type: "Q2 Digital Growth Strategy", priority: "Medium", status: "Pending", owner: "Sarah Lee", lastUpdate: "2026-02-08" },
  { id: 3, type: "AI SaaS Product Launch", priority: "High", status: "Completed", owner: "Michael Smith", lastUpdate: "2026-01-28" },
  { id: 4, type: "Client Automation Workflow", priority: "Low", status: "Active", owner: "Emily Davis", lastUpdate: "2026-02-12" },
  { id: 5, type: "Vendor Partnership Proposal", priority: "Medium", status: "Pending", owner: "Alex Johnson", lastUpdate: "2026-02-05" },
  { id: 6, type: "Advanced SEO Blueprint", priority: "High", status: "Active", owner: "Liam Brown", lastUpdate: "2026-02-14" },
  { id: 7, type: "Annual Financial Projection", priority: "Medium", status: "Completed", owner: "Sophia Lee", lastUpdate: "2026-01-30" },
];

export default function ProposalType() {
  const [filter, setFilter] = useState("All");

  const statusColors = {
    Active: "#22c55e",
    Pending: "#facc15",
    Completed: "#64748b",
  };

  const priorityColors = {
    High: "#ef4444",
    Medium: "#facc15",
    Low: "#22c55e",
  };

  const filteredProposals =
    filter === "All"
      ? proposalData
      : proposalData.filter((p) => p.status === filter);

  return (
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        background: "linear-gradient(180deg,rgb(15, 23, 42)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "35px" }}>
        <h2
          style={{
            fontSize: "38px",
            fontWeight: "700",
            background: "linear-gradient(90deg, #6366f1, #48bdec, #4715fa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Strategic Proposal Hub
        </h2>
        <p style={{ color: "#94a3b8", marginTop: "8px" }}>
          Manage and track all business proposals efficiently
        </p>
      </div>

      {/* Filters */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        {["All", "Active", "Pending", "Completed"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            style={{
              padding: "9px 18px",
              margin: "0 10px 10px 0",
              borderRadius: "25px",
              border: "1px solid #334155",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "14px",
              background:
                filter === status
                  ? statusColors[status] || "#4f46e5"
                  : "transparent",
              color: filter === status ? "#fff" : "#cbd5e1",
              transition: "all 0.3s ease",
            }}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "25px",
        }}
      >
        {filteredProposals.map((p) => (
          <div
            key={p.id}
            style={{
              background: "linear-gradient(180deg,rgb(15, 23, 42)",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              border: "1px solid #1f2937",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-8px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            <h3
              style={{
                marginBottom: "12px",
                fontSize: "20px",
                color: "#e2e8f0",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FiFileText /> {p.type}
            </h3>

            <p style={{ color: "#94a3b8", fontSize: "14px" }}>
              <FiUser style={{ marginRight: "6px" }} />
              {p.owner}
            </p>

            <p style={{ color: "#94a3b8", fontSize: "14px" }}>
              <FiCalendar style={{ marginRight: "6px" }} />
              {p.lastUpdate}
            </p>

            <div
              style={{
                marginTop: "15px",
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#fff",
                  backgroundColor: priorityColors[p.priority],
                }}
              >
                {p.priority} Priority
              </span>

              <span
                style={{
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#fff",
                  backgroundColor: statusColors[p.status],
                }}
              >
                {p.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
=======

// src/pages/ProposalType.jsx
import React, { useState } from "react";
import { FiUser, FiCalendar, FiFileText } from "react-icons/fi";

const proposalData = [
  { id: 1, type: "Enterprise Website Revamp", priority: "High", status: "Active", owner: "John Doe", lastUpdate: "2026-02-10" },
  { id: 2, type: "Q2 Digital Growth Strategy", priority: "Medium", status: "Pending", owner: "Sarah Lee", lastUpdate: "2026-02-08" },
  { id: 3, type: "AI SaaS Product Launch", priority: "High", status: "Completed", owner: "Michael Smith", lastUpdate: "2026-01-28" },
  { id: 4, type: "Client Automation Workflow", priority: "Low", status: "Active", owner: "Emily Davis", lastUpdate: "2026-02-12" },
  { id: 5, type: "Vendor Partnership Proposal", priority: "Medium", status: "Pending", owner: "Alex Johnson", lastUpdate: "2026-02-05" },
  { id: 6, type: "Advanced SEO Blueprint", priority: "High", status: "Active", owner: "Liam Brown", lastUpdate: "2026-02-14" },
  { id: 7, type: "Annual Financial Projection", priority: "Medium", status: "Completed", owner: "Sophia Lee", lastUpdate: "2026-01-30" },
];

export default function ProposalType() {
  const [filter, setFilter] = useState("All");

  const statusColors = {
    Active: "#22c55e",
    Pending: "#facc15",
    Completed: "#64748b",
  };

  const priorityColors = {
    High: "#ef4444",
    Medium: "#facc15",
    Low: "#22c55e",
  };

  const filteredProposals =
    filter === "All"
      ? proposalData
      : proposalData.filter((p) => p.status === filter);

  return (
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        background: "linear-gradient(180deg,rgb(15, 23, 42)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "35px" }}>
        <h2
          style={{
            fontSize: "38px",
            fontWeight: "700",
            background: "linear-gradient(90deg, #6366f1, #48bdec, #4715fa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Strategic Proposal Hub
        </h2>
        <p style={{ color: "#94a3b8", marginTop: "8px" }}>
          Manage and track all business proposals efficiently
        </p>
      </div>

      {/* Filters */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        {["All", "Active", "Pending", "Completed"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            style={{
              padding: "9px 18px",
              margin: "0 10px 10px 0",
              borderRadius: "25px",
              border: "1px solid #334155",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "14px",
              background:
                filter === status
                  ? statusColors[status] || "#4f46e5"
                  : "transparent",
              color: filter === status ? "#fff" : "#cbd5e1",
              transition: "all 0.3s ease",
            }}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "25px",
        }}
      >
        {filteredProposals.map((p) => (
          <div
            key={p.id}
            style={{
              background: "linear-gradient(180deg,rgb(15, 23, 42)",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              border: "1px solid #1f2937",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-8px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            <h3
              style={{
                marginBottom: "12px",
                fontSize: "20px",
                color: "#e2e8f0",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FiFileText /> {p.type}
            </h3>

            <p style={{ color: "#94a3b8", fontSize: "14px" }}>
              <FiUser style={{ marginRight: "6px" }} />
              {p.owner}
            </p>

            <p style={{ color: "#94a3b8", fontSize: "14px" }}>
              <FiCalendar style={{ marginRight: "6px" }} />
              {p.lastUpdate}
            </p>

            <div
              style={{
                marginTop: "15px",
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#fff",
                  backgroundColor: priorityColors[p.priority],
                }}
              >
                {p.priority} Priority
              </span>

              <span
                style={{
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#fff",
                  backgroundColor: statusColors[p.status],
                }}
              >
                {p.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
>>>>>>> d41df5b306612acc83a1c46b7b8706d731875a34
}