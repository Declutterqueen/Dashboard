import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import "../../styles/dashboard.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="profile">
        <FaBell size={20} />
        <FaUserCircle size={28} />
      </div>
    </div>
  );
}

export default Navbar;
