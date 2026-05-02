import React, { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import { Outlet } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";

export default function MainLayout() {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={search}>
      <div style={{ display: "flex" }}>
        
        <Sidebar />

        <div style={{ flex: 1, padding: "15px 20px" }}>
          
          {/* 🔥 THIS IS IMPORTANT */}
          <Navbar onSearch={setSearch} />

          <div style={{ marginTop: "15px" }}>
            <Outlet />
          </div>

        </div>
      </div>
    </SearchContext.Provider>
  );
}