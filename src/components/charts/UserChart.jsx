<<<<<<< HEAD

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 300 },
  { month: "Mar", users: 500 },
  { month: "Apr", users: 700 },
  { month: "May", users: 600 },
  { month: "Jun", users: 800 },
];

function UserChart() {
  return (
    <div
      style={{
        width: "98%",
        height: "300px",
        backgroundColor: "#112036",
        padding: "20px",
        borderRadius: "16px",
      }}
    >
      <h4 style={{ color: "#94a3b8", marginBottom: "10px" }}>
        Users Growth
      </h4>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.7} />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity={0.2} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "none",
              color: "#fff",
            }}
          />

          <Bar dataKey="users" fill="url(#barGradient)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserChart;
=======

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 300 },
  { month: "Mar", users: 500 },
  { month: "Apr", users: 700 },
  { month: "May", users: 600 },
  { month: "Jun", users: 800 },
];

function UserChart() {
  return (
    <div
      style={{
        width: "98%",
        height: "300px",
        backgroundColor: "#112036",
        padding: "20px",
        borderRadius: "16px",
      }}
    >
      <h4 style={{ color: "#94a3b8", marginBottom: "10px" }}>
        Users Growth
      </h4>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.7} />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity={0.2} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "none",
              color: "#fff",
            }}
          />

          <Bar dataKey="users" fill="url(#barGradient)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserChart;
>>>>>>> d41df5b306612acc83a1c46b7b8706d731875a34
