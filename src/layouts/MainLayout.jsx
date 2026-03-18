import React from "react";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div style={{ display: "flex" }}>
      
      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div style={{ flex: 1, padding: "15px 20px" }}>
        
        {/* Sticky Navbar */}
        <Navbar />

        {/* Page Content */}
        <div style={{ marginTop: "15px" }}>
          <Outlet />
        </div>

      </div>
    </div>
  );
}