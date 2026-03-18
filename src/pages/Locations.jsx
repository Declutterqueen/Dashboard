
// src/pages/Locations.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon issue with React Leaflet + Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const locationsData = [
  {
    id: 1,
    name: "New York Warehouse",
    city: "New York",
    country: "USA",
    capacity: "5000 units",
    coords: [40.7128, -74.006],
  },
  {
    id: 2,
    name: "Berlin Storage",
    city: "Berlin",
    country: "Germany",
    capacity: "3500 units",
    coords: [52.52, 13.405],
  },
  {
    id: 3,
    name: "Tokyo Hub",
    city: "Tokyo",
    country: "Japan",
    capacity: "4000 units",
    coords: [35.6762, 139.6503],
  },
  {
    id: 4,
    name: "Sydney Depot",
    city: "Sydney",
    country: "Australia",
    capacity: "2500 units",
    coords: [-33.8688, 151.2093],
  },
];

export default function Locations() {
  return (
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        background: "linear-gradient(180deg,rgb(15, 23, 42)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* Title */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "38px",
          fontWeight: "700",
          marginBottom: "35px",
          background: "linear-gradient(90deg, #6366f1, #48bdec, #4715fa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Locations
      </h2>

      {/* Map */}
      <div
        style={{
          height: "450px",
          marginBottom: "35px",
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
        }}
      >
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          />
          {locationsData.map((loc) => (
            <Marker key={loc.id} position={loc.coords}>
              <Popup>
                <strong>{loc.name}</strong>
                <br />
                {loc.city}, {loc.country}
                <br />
                Capacity: {loc.capacity}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Styled Table */}
      <div
        style={{
          overflowX: "auto",
          borderRadius: "16px",
          background:
            "linear-gradient(180deg,rgb(15, 23, 42)",
          padding: "20px",
          boxShadow: "0 8px 25px rgba(33, 48, 49, 0.3)",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: "0 12px",
            color: "#caccd1",
          }}
        >
          <thead>
            <tr style={{ textAlign: "left" }}>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>City</th>
              <th style={thStyle}>Country</th>
              <th style={thStyle}>Capacity</th>
            </tr>
          </thead>
          <tbody>
            {locationsData.map((l) => (
              <tr
                key={l.id}
                style={{
                  background: "#172138",
                  borderRadius: "12px",
                  marginBottom: "10px",
                }}
              >
                <td style={tdStyle}>{l.id}</td>
                <td style={tdStyle}>{l.name}</td>
                <td style={tdStyle}>{l.city}</td>
                <td style={tdStyle}>{l.country}</td>
                <td
                  style={{
                    ...tdStyle,
                    fontWeight: "bold",
                    color: "#46c5e5",
                  }}
                >
                  {l.capacity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const thStyle = {
  padding: "14px 18px",
  color: "#fff",
};

const tdStyle = {
  padding: "14px 18px",
};