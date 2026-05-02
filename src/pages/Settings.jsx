

import React, { useState, useContext, useEffect } from "react";
import { SettingsContext } from "../context/SettingsContext";
// import { Cursor } from "recharts/types/component/Cursor";

export default function Settings() {
  const { settings, setSettings } = useContext(SettingsContext);

  // ✅ Load from LocalStorage
  const [localSettings, setLocalSettings] = useState(() => {
    const saved = localStorage.getItem("settings");
    return saved
      ? JSON.parse(saved)
      : {
          notifications: false,
          emailUpdates: true,
          language: "Urdu",
          privacy: "Public",
          accountVisibility: "Everyone",
          timezone: "GMT+5",
        };
  });

  // ✅ Sync to localStorage
  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(localSettings));
    if (setSettings) {
      setSettings(localSettings);
    }
  }, [localSettings]);

  const bodyBgColor =
    "linear-gradient(180deg,rgb(15, 23, 42), linear-gradient(180deg,rgb(15, 23, 42))";
  const cardBgColor =
    "linear-gradient(180deg,rgb(15, 23, 42), linear-gradient(180deg,rgb(15, 23, 42))";
  const cardShadow = "rgb(56 53 98 / 30%) 0px 8px 20px";

  // ✅ Save button
  const handleSave = () => {
    localStorage.setItem("settings", JSON.stringify(localSettings));
    console.log("Saved:", localSettings);
  };

  //return (
    // <div style={{ minHeight: "100vh", padding: "30px", background: bodyBgColor }}>
    //   <h2 style={{ textAlign: "center", fontSize: "36px", color: "#3b82f6" }}>
    //     Settings
    //   </h2>

    //   <div
    //     style={{
    //       maxWidth: "700px",
    //       margin: "0 auto",
    //       background: cardBgColor,
    //       borderRadius: "16px",
    //       padding: "30px",
    //       boxShadow: cardShadow,
    //     }}
    //   >
    return (
  <div
    style={{
      minHeight: "100vh",
      padding: "40px",
      background: "linear-gradient(180deg, #0f172a, #0b1220)",
      fontFamily: "Segoe UI, sans-serif",
    }}
  >
    {/* TITLE */}
    <h2
      style={{
        textAlign: "center",
        fontSize: "40px",
        fontWeight: "700",
        marginBottom: "30px",
        background: "linear-gradient(90deg, #6366f1, #48bdec, #4715fa)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Settings
    </h2>

    {/* CARD */}
    <div
      style={{
        maxWidth: "750px",
        margin: "0 auto",
        background: "linear-gradient(145deg, #0f172a, #111c33)",
        borderRadius: "20px",
        padding: "30px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        border: "1px solid rgba(99,102,241,0.15)",
      }}
    >
      <h3 style={{ color: "#fff", marginBottom: "15px" }}>
  🔔 Notifications
</h3>
        {/* Notifications */}
        <div style={toggleStyle}>
          <span>App Notifications</span>
          <label style={switchStyle}>
            <input
              type="checkbox"
              checked={localSettings.notifications}
              onChange={() =>
                setLocalSettings((prev) => ({
                  ...prev,
                  notifications: !prev.notifications,
                }))
              }
              style={{ opacity: 0 }}
            />
            <span
              style={{
                ...sliderBg,
                backgroundColor: localSettings.notifications ? "#3b82f6" : "#ccc",
              }}
            />
            <span
              style={{
                ...circle,
                transform: localSettings.notifications
                  ? "translateX(22px)"
                  : "translateX(0)",
              }}
            />
          </label>
        </div>

        {/* Email Updates */}
        <div style={toggleStyle}>
          <span>Email Updates</span>
          <label style={switchStyle}>
            <input
              type="checkbox"
              checked={localSettings.emailUpdates}
              onChange={() =>
                setLocalSettings((prev) => ({
                  ...prev,
                  emailUpdates: !prev.emailUpdates,
                }))
              }
              style={{ opacity: 0 }}
            />
            <span
              style={{
                ...sliderBg,
                backgroundColor: localSettings.emailUpdates ? "#3b82f6" : "#ccc",
              }}
            />
            <span
              style={{
                ...circle,
                transform: localSettings.emailUpdates
                  ? "translateX(22px)"
                  : "translateX(0)",
              }}
            />
          </label>
        </div>

        {/* Dropdowns */}
        <SelectField
          label="Language"
          value={localSettings.language}
          onChange={(val) =>
            setLocalSettings((prev) => ({ ...prev, language: val }))
          }
          options={["English", "Spanish", "French", "Urdu"]}
        />

        <SelectField
          label="Profile Privacy"
          value={localSettings.privacy}
          onChange={(val) =>
            setLocalSettings((prev) => ({ ...prev, privacy: val }))
          }
          options={["Public", "Friends Only", "Private"]}
        />

        <SelectField
          label="Account Visibility"
          value={localSettings.accountVisibility}
          onChange={(val) =>
            setLocalSettings((prev) => ({ ...prev, accountVisibility: val }))
          }
          options={["Everyone", "Followers Only", "Only Me"]}
        />

        <SelectField
          label="Timezone"
          value={localSettings.timezone}
          onChange={(val) =>
            setLocalSettings((prev) => ({ ...prev, timezone: val }))
          }
          options={["GMT-12", "GMT-8", "GMT+0", "GMT+5", "GMT+8"]}
        />

        {/* Save */}
        <button style={saveBtn} onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
}

/* ===== Reusable Components ===== */

function SelectField({ label, value, onChange, options }) {
  return (
    <div style={{ marginBottom: "25px", color: "#caccd1" }}>
      <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={selectStyle}
      >
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

/* ===== Styles (UNCHANGED) ===== */

// const toggleStyle = {
//   marginBottom: "25px",
//   display: "flex",
//   justifyContent: "space-between",
//   color: "#caccd1",
//   fontWeight: "bold",
// };
const toggleStyle = {
  marginBottom: "18px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 15px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.05)",
  color: "#caccd1",
  fontWeight: "500",
};
const switchStyle = {
  position: "relative",
  width: "50px",
  height: "28px",
};

const sliderBg = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: "34px",
  transition: "0.4s",
};

const circle = {
  position: "absolute",
  height: "22px",
  width: "22px",
  left: "3px",
  bottom: "3px",
  backgroundColor: "white",
  borderRadius: "50%",
  transition: "0.4s",
   cursor: "pointer",
};

// const selectStyle = {
//   width: "100%",
//   padding: "10px",
//   borderRadius: "8px",
//   border: "1px solid #514770",
//   background: "rgb(15, 23, 42)",
//   color: "#caccd1",
// };
const selectStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.1)",
  background: "#0f172a",
  color: "#fff",
  marginBottom: "18px",
};
// const saveBtn = {
//   padding: "10px 20px",
//   borderRadius: "12px",
//   border: "none",
//   background: "linear-gradient(90deg, #6366f1, #0ea5e9)",
//   color: "#fff",
//   fontWeight: "bold",
//   cursor: "pointer",
//   width: "100%",
// };
const saveBtn = {
  padding: "12px",
  borderRadius: "12px",
  border: "none",
  background: "linear-gradient(90deg,#6366f1,#0ea5e9)",
  color: "#fff",
  fontWeight: "600",
  cursor: "pointer",
  width: "100%",
  marginTop: "10px",
  boxShadow: "0 10px 25px rgba(99,102,241,0.3)",
};