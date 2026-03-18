// src/pages/Products.jsx
import React from "react";

const productsData = [
  { id: 1, name: "Smartphone X1", category: "Electronics", price: "$799", stock: 120, img: "https://images.unsplash.com/photo-1656758211329-5e142274bb59?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Laptop Pro 15", category: "Computers", price: "$1,299", stock: 45, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=60" },
  { id: 3, name: "Wireless Earbuds", category: "Accessories", price: "$199", stock: 300, img: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "Smartwatch Z5", category: "Wearables", price: "$249", stock: 150, img: "https://images.unsplash.com/photo-1566231396917-84d1e08d84d4?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, name: "Gaming Console Y", category: "Gaming", price: "$499", stock: 70, img: "https://images.unsplash.com/photo-1610987022118-5d82eee6ff08?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, name: "Tablet M10", category: "Computers", price: "$399", stock: 90, img: "https://images.unsplash.com/flagged/photo-1574507926668-26e97fb1041f?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 7, name: "VR Headset V2", category: "Gaming", price: "$299", stock: 40, img: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=813&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 8, name: "Bluetooth Speaker", category: "Accessories", price: "$99", stock: 180, img: "https://plus.unsplash.com/premium_photo-1760531849884-bf17f1d379bf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 9, name: "Fitness Tracker F1", category: "Wearables", price: "$149", stock: 120, img: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 10, name: "4K Monitor 27\"", category: "Computers", price: "$349", stock: 60, img: "https://plus.unsplash.com/premium_photo-1669380425564-6e1a281a4d30?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 11, name: "Mechanical Keyboard", category: "Accessories", price: "$129", stock: 75, img: "https://images.unsplash.com/photo-1626958390898-162d3577f293?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 12, name: "Gaming Mouse", category: "Accessories", price: "$69", stock: 200, img: "https://images.unsplash.com/photo-1613141412501-9012977f1969?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 13, name: "Noise Cancelling Headphones", category: "Accessories", price: "$249", stock: 90, img: "https://images.unsplash.com/photo-1612478120679-5b7412e15f84?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 14, name: "Smart Home Hub", category: "Electronics", price: "$179", stock: 130, img: "https://images.unsplash.com/photo-1728971825338-be9230fd4029?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 15, name: "Drone A1", category: "Electronics", price: "$599", stock: 55, img: "https://images.unsplash.com/photo-1661936955098-b991c99fd023?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Laptop Pro 15", category: "Computers", price: "$1,299", stock: 45, img: "https://images.unsplash.com/photo-1629741422216-082c748f33b5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
];

export default function Products() {
  const bodyBg = "linear-gradient(180deg,rgb(15, 23, 42) ,rgb(15, 23, 42) )";
  const cardBg = "linear-gradient(180deg, rgb(15, 23, 42), rgb(15, 23, 42))";
  // const cardShadow = "0 8px 20px rgba(0,0,0,0.3)";
  const cardShadow= "rgb(56 53 98 / 30%) 0px 8px 20px"

  return (
    <div style={{ padding: "20px", minHeight: "100vh", background: bodyBg, fontFamily: "Arial, sans-serif" }}>
      
      {/* Page Title */}
      <h2 style={{
        textAlign: "center",
        fontSize: "38px",
        fontWeight: "700",
        marginBottom: "30px",
        background: "linear-gradient(90deg, #6366f1, #48bdec, #4715fa)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}>
        Products 
      </h2>

      {/* Product Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "20px"
      }}>
        {productsData.map(p => (
          <div key={p.id} style={{
            background: cardBg,
            borderRadius: "16px",
            boxShadow: cardShadow,
            padding: "16px",
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "pointer"
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.5)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = cardShadow;
            }}
          >
            {/* Product Image */}
            <img src={p.img} alt={p.name} style={{ width: "100%", borderRadius: "12px", marginBottom: "10px" }} />

            {/* Product Details */}
            <h3 style={{ margin: "0 0 6px 0", color: "#fff", fontSize: "20px" }}>{p.name}</h3>
            <p style={{ margin: "4px 0", color: "#caccd1", fontSize: "14px" }}><strong>Category:</strong> {p.category}</p>
            <p style={{ margin: "4px 0", color: "#caccd1", fontSize: "14px" }}><strong>Price:</strong> {p.price}</p>

            {/* Stock Badge */}
            <span style={{
              display: "inline-block",
              padding: "6px 12px",
              borderRadius: "24px",
              fontSize: "12px",
              fontWeight: "bold",
              color: "#fff",
              backgroundColor: p.stock > 100 ? "#22c55e" : p.stock > 50 ? "#facc15" : "#ef4444",
              marginTop: "10px"
            }}>
              Stock: {p.stock}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}