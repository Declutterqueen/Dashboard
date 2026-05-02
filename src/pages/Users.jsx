// src/pages/Users.jsx
import React, { useState, useEffect } from "react";
import { FiUser, FiMail, FiShield } from "react-icons/fi";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { SearchContext } from "../context/SearchContext";

function Users() {
  const { settings } = useContext(SettingsContext);

  // ✅ Load from LocalStorage
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("users");
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Completed" },
          { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Pending" },
          { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "User", status: "Completed" },
        ];
  });

  // ✅ Save to LocalStorage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("User");
  const [status, setStatus] = useState("Pending");

  // Edit
  const [editingId, setEditingId] = useState(null);

  // Search
  const search = useContext(SearchContext);

  // ❌ REMOVE THIS
// const [search, setSearch] = useState("");
  // ✅ ADD / UPDATE
  const handleAdd = () => {
    if (!name || !email) return;

    if (editingId !== null) {
      const updated = users.map((u) =>
        u.id === editingId ? { ...u, name, email, role, status } : u
      );
      setUsers(updated);
      setEditingId(null);
    } else {
      const newUser = {
        id: Date.now(),
        name,
        email,
        role,
        status,
      };
      setUsers([...users, newUser]);
    }

    setName("");
    setEmail("");
    setRole("User");
    setStatus("Pending");
  };

  // ✅ EDIT
  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setRole(user.role);
    setStatus(user.status);
    setEditingId(user.id);
  };

  // ✅ DELETE
  const handleDelete = (id) => {
    const filtered = users.filter((u) => u.id !== id);
    setUsers(filtered);
  };

  const statusColors = {
    Completed: "#22c55e",
    Pending: "#facc15",
    Failed: "#ef4444",
  };

  // ✅ SEARCH FILTER
  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  const bodyBg = "linear-gradient(180deg,rgb(15, 23, 42), rgb(15, 23, 42))";
  const cardBg = "linear-gradient(180deg,rgb(15, 23, 42), rgb(15, 23, 42))";
  const cardShadow = "0 8px 25px rgba(0,0,0,0.5)";



  return (
    <div style={{ padding: "30px", minHeight: "100vh", background: bodyBg }}>
      
      <h2 style={{ textAlign: "center", fontSize: "40px", fontWeight: "700", marginBottom: "20px",
        background: "linear-gradient(145deg, #0f172a, #111c33)",
border: "1px solid rgba(99,102,241,0.15)",
borderRadius: "18px",
padding: "22px",
boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
transition: "all 0.3s ease",
      }}>
        User Management
      </h2>


      {/* FORM */}
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
        <input style={inputStyle} placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input style={inputStyle} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <select style={selectStyle} value={role} onChange={(e) => setRole(e.target.value)}>
          <option>User</option>
          <option>Admin</option>
          <option>Editor</option>
        </select>

        <select style={selectStyle} value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Pending</option>
          <option>Completed</option>
          <option>Failed</option>
        </select>

        <button style={buttonStyle} onClick={handleAdd}>
          {editingId ? "Update User" : "Add User"}
        </button>
      </div>

      {/* USERS */}
      <div style={{ marginTop: "30px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "25px" }}>
        {filteredUsers.map((u) => (
        
           <div
  key={u.id}
  style={{
    background: "linear-gradient(145deg, #0f172a, #111c33)",
    padding: "22px",
    borderRadius: "18px",
    border: "1px solid rgba(99,102,241,0.15)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  }}

  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow = "0 15px 40px rgba(99,102,241,0.25)";
    e.currentTarget.style.border = "1px solid rgba(99,102,241,0.4)";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.45)";
    e.currentTarget.style.border = "1px solid rgba(99,102,241,0.15)";
  }}
> 
           
            <h3 style={{ color: "#fff", marginBottom: "8px", fontSize: "18px" }}>
              <FiUser /> {u.name}
            </h3>

           <p style={{ color: "#cbd5e1", margin: "6px 0" }}>
              <FiMail /> {u.email}
            </p>

            <p style={{ color: "#cbd5e1" }}>
              <FiShield /> {u.role}
            </p>

            <span style={{
    display: "inline-block",
    marginTop: "10px",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "0.5px",
    background: statusColors[u.status],
    color: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",

        }}>
              {u.status}
            </span>

            <div style={{ marginTop: "10px", display: "flex", gap: "8px" }}>
              
              <button style={{ ...btn, background: "#6366f1" }} onClick={() => handleEdit(u)}>
                Edit
              </button>

              <button style={{ ...btn, background: "#ef4444" }} onClick={() => handleDelete(u.id)}>
                Delete
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  borderRadius: "10px",
  border: "1px solid #334155",
  background: "#1e293b",
  color: "#fff",
};

const selectStyle = { ...inputStyle, cursor: "pointer" };

const buttonStyle = {
  padding: "10px 20px",
  borderRadius: "10px",
  border: "none",
  background: "linear-gradient(90deg,#6366f1,#0ea5e9)",
  color: "#fff",
  cursor: "pointer",
};


const btn = {
  padding: "7px 12px",
  borderRadius: "10px",
  border: "none",
  color: "#fff",
  cursor: "pointer",
  fontSize: "12px",
  transition: "0.3s",
};
export default Users;