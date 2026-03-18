import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const customerData = [
  { week: "Week 1", customers: 50 },
  { week: "Week 2", customers: 80 },
  { week: "Week 3", customers: 65 },
  { week: "Week 4", customers: 90 },
];

function CustomerChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={customerData}>
        <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
        <XAxis dataKey="week" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip contentStyle={{ backgroundColor: "#0f172a", border: "none", color: "#fff" }} />
        <Line type="monotone" dataKey="customers" stroke="#22c55e" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default CustomerChart;
