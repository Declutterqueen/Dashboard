<<<<<<< HEAD
// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "../components/layout/Sidebar.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import DataTable from "../components/table/DataTable.jsx";
import RevenueChart from "../components/charts/RevenueChart.jsx";
import UserChart from "../components/charts/UserChart.jsx";
import Users from "./Users.jsx";
import Settings from "./Settings.jsx";
import { ResponsiveContainer, LineChart, Line } from "recharts";
import { FiDollarSign, FiUsers, FiShoppingCart, FiBarChart2, FiTrendingUp } from "react-icons/fi";
import "../styles/dashboard.css";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";



// ---------------- Mini Chart Data ----------------
const miniChartData = [
  { value: 20 },
  { value: 35 },
  { value: 28 },
  { value: 45 },
  { value: 38 },
  { value: 60 },
  { value: 55 },
];



function SummaryCard({ title, value, icon }) {
  return (
    <div
      className="summary-card"
      style={{
        width: "200px",
        height: "100px",
        background: "#112036",
        borderRadius: "12px",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "6px",
      }}
    >
      {/* Top Row: Icon + Title */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",      // 👈 icon & text ke beech gap
          color: "#94a3b8",
          fontSize: "14px",
          fontWeight: "500",
        }}
      >
        <span>{icon}</span>
        <span>{title}</span>
      </div>

      {/* Value */}
      <div
        style={{
          color: "#fff",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >

        {value}
        <ResponsiveContainer width="100%" height={40}>
          <LineChart data={miniChartData}>
            <Line type="monotone" dataKey="value" stroke="#3bafcc" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
// ---------------- Big Circular Progress ----------------
function CircularTimerCard({ totalSeconds = 155 }) {
  const [time, setTime] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(false);

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const progress = (time / totalSeconds) * circumference;

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => setTime(prev => (prev > 0 ? prev - 1 : 0)), 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  const togglePlay = () => setIsRunning(!isRunning);
  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <div className="carbon-card circular-card">
      <span className="card-title">Work Session Progress</span>
      <div className="circle-wrapper">

        <svg width="160" height="160">
          <defs>
            <linearGradient id="circleGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#48bdec" />
              <stop offset="100%" stopColor="#4715fa" />
            </linearGradient>
          </defs>

          {/* Background Circle */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#262626"
            strokeWidth="12"
            fill="none"
          />

          {/* Progress Circle with Gradient */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="url(#circleGradient)"   // 👈 Gradient applied
            strokeWidth="12"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
            style={{ transition: "0.5s ease" }}
          />
        </svg>
        <div className="circle-content">
          {minutes}:{seconds}
          <br />
          <button
            onClick={togglePlay}
            style={{
              marginTop: "6px",
              padding: "4px 14px",
              fontSize: "11px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              background: "linear-gradient(90deg,#ec4899,#facc15,#6366f1)",
              color: "white",
            }}
          >
            {isRunning ? "Pause" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------- Main Dashboard ----------------
function Dashboard() {
  const [currentPage, setCurrentPage] = useState("Dashboard");

   const { settings } = useContext(SettingsContext);
  const summaryData = [
    { title: "Total Sales", value: "$58,000", icon: <FiDollarSign /> },
    { title: "Total Visitors", value: "12,500", icon: <FiUsers /> },
    { title: "Total Customers", value: "1,250", icon: <FiShoppingCart /> },
    { title: "Growth Rate", value: "32%", icon: <FiBarChart2 /> },
    { title: "Trends", value: "15%", icon: <FiTrendingUp /> },
  ];

  return (

    <div className="main-content-wrapper">
      <div className="main-content">

        {currentPage === "Dashboard" && (
          <>
            {/* Top row cards */}
            <div className="summary-cards-row flex flex-wrap gap-2">
              {summaryData.map((card) => (
                <SummaryCard key={card.title} title={card.title} value={card.value} icon={card.icon} />
              ))}
            </div>

            {/* Charts Section */}
            <div className="charts-section mt-4 flex gap-4 flex-wrap">
              <div className="charts-card carbon-card" style={{ flex: 1, width: "90%" }}>
                <RevenueChart />
              </div>

            </div>


            <div className="usergrowth-progress-row">

              {/* 70% Chart */}
              <div className="usergrowth-chart">
                <UserChart />
              </div>

              {/* 30% Circular */}
              <div className="usergrowth-circular">
                <CircularTimerCard totalSeconds={155} />
              </div>

            </div>
          </>
        )}

        {currentPage === "Users" && <Users />}
        {currentPage === "Settings" && <Settings />}
      </div>
    </div>
    //  </div>
  );
}

=======
// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "../components/layout/Sidebar.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import DataTable from "../components/table/DataTable.jsx";
import RevenueChart from "../components/charts/RevenueChart.jsx";
import UserChart from "../components/charts/UserChart.jsx";
import Users from "./Users.jsx";
import Settings from "./Settings.jsx";
import { ResponsiveContainer, LineChart, Line } from "recharts";
import { FiDollarSign, FiUsers, FiShoppingCart, FiBarChart2, FiTrendingUp } from "react-icons/fi";
import "../styles/dashboard.css";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";



// ---------------- Mini Chart Data ----------------
const miniChartData = [
  { value: 20 },
  { value: 35 },
  { value: 28 },
  { value: 45 },
  { value: 38 },
  { value: 60 },
  { value: 55 },
];



function SummaryCard({ title, value, icon }) {
  return (
    <div
      className="summary-card"
      style={{
        width: "200px",
        height: "100px",
        background: "#112036",
        borderRadius: "12px",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "6px",
      }}
    >
      {/* Top Row: Icon + Title */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",      // 👈 icon & text ke beech gap
          color: "#94a3b8",
          fontSize: "14px",
          fontWeight: "500",
        }}
      >
        <span>{icon}</span>
        <span>{title}</span>
      </div>

      {/* Value */}
      <div
        style={{
          color: "#fff",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >

        {value}
        <ResponsiveContainer width="100%" height={40}>
          <LineChart data={miniChartData}>
            <Line type="monotone" dataKey="value" stroke="#3bafcc" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
// ---------------- Big Circular Progress ----------------
function CircularTimerCard({ totalSeconds = 155 }) {
  const [time, setTime] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(false);

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const progress = (time / totalSeconds) * circumference;

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => setTime(prev => (prev > 0 ? prev - 1 : 0)), 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  const togglePlay = () => setIsRunning(!isRunning);
  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <div className="carbon-card circular-card">
      <span className="card-title">Work Session Progress</span>
      <div className="circle-wrapper">

        <svg width="160" height="160">
          <defs>
            <linearGradient id="circleGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#48bdec" />
              <stop offset="100%" stopColor="#4715fa" />
            </linearGradient>
          </defs>

          {/* Background Circle */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#262626"
            strokeWidth="12"
            fill="none"
          />

          {/* Progress Circle with Gradient */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="url(#circleGradient)"   // 👈 Gradient applied
            strokeWidth="12"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
            style={{ transition: "0.5s ease" }}
          />
        </svg>
        <div className="circle-content">
          {minutes}:{seconds}
          <br />
          <button
            onClick={togglePlay}
            style={{
              marginTop: "6px",
              padding: "4px 14px",
              fontSize: "11px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              background: "linear-gradient(90deg,#ec4899,#facc15,#6366f1)",
              color: "white",
            }}
          >
            {isRunning ? "Pause" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------- Main Dashboard ----------------
function Dashboard() {
  const [currentPage, setCurrentPage] = useState("Dashboard");

   const { settings } = useContext(SettingsContext);
  const summaryData = [
    { title: "Total Sales", value: "$58,000", icon: <FiDollarSign /> },
    { title: "Total Visitors", value: "12,500", icon: <FiUsers /> },
    { title: "Total Customers", value: "1,250", icon: <FiShoppingCart /> },
    { title: "Growth Rate", value: "32%", icon: <FiBarChart2 /> },
    { title: "Trends", value: "15%", icon: <FiTrendingUp /> },
  ];

  return (

    <div className="main-content-wrapper">
      <div className="main-content">

        {currentPage === "Dashboard" && (
          <>
            {/* Top row cards */}
            <div className="summary-cards-row flex flex-wrap gap-2">
              {summaryData.map((card) => (
                <SummaryCard key={card.title} title={card.title} value={card.value} icon={card.icon} />
              ))}
            </div>

            {/* Charts Section */}
            <div className="charts-section mt-4 flex gap-4 flex-wrap">
              <div className="charts-card carbon-card" style={{ flex: 1, width: "90%" }}>
                <RevenueChart />
              </div>

            </div>


            <div className="usergrowth-progress-row">

              {/* 70% Chart */}
              <div className="usergrowth-chart">
                <UserChart />
              </div>

              {/* 30% Circular */}
              <div className="usergrowth-circular">
                <CircularTimerCard totalSeconds={155} />
              </div>

            </div>
          </>
        )}

        {currentPage === "Users" && <Users />}
        {currentPage === "Settings" && <Settings />}
      </div>
    </div>
    //  </div>
  );
}

>>>>>>> d41df5b306612acc83a1c46b7b8706d731875a34
export default Dashboard;