// src/pages/Settings.jsx
/*import React, { useState,  useContext } from "react";

import { SettingsContext } from "../context/SettingsContext";






export default function Settings() {
  // Custom theme colors
  const bodyBgColor = " linear-gradient(180deg,rgb(15, 23, 42), linear-gradient(180deg,rgb(15, 23, 42))";   
  const cardBgColor = " linear-gradient(180deg,rgb(15, 23, 42), linear-gradient(180deg,rgb(15, 23, 42)";   
  const cardShadow = "rgb(56 53 98 / 30%) 0px 8px 20px";
  
  // Settings state
  // const [notifications, setNotifications] = useState(true);
  const { settings, setSettings } = useContext(SettingsContext);
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [language, setLanguage] = useState("English");
  const [privacy, setPrivacy] = useState("Public");
  const [accountVisibility, setAccountVisibility] = useState("Everyone");
  const [timezone, setTimezone] = useState("GMT+5");

  // Handle Save button (functional)
  const handleSave = () => {
    const savedSettings = {
      notifications,
      emailUpdates,
      language,
      privacy,
      accountVisibility,
      timezone
    };
    // Here you can send settings to API if needed
    console.log("Settings saved:", savedSettings);
  };

  return (
    <div style={{ minHeight: "100vh", padding: "30px", background: bodyBgColor, fontFamily: "Arial, sans-serif" }}>
      <h2 style={{
        textAlign: "center",
        fontSize: "36px",
        fontWeight: "700",
        marginBottom: "40px",
        color: "#3b82f6",
        letterSpacing: "1px",
        textShadow: "0 2px 6px rgba(0,0,0,0.2)"
      }}>
        Settings
      </h2>

      <div style={{
        maxWidth: "700px",
        margin: "0 auto",
        background: cardBgColor,
        borderRadius: "16px",
        padding: "30px",
        boxShadow: cardShadow
      }}>

   
        <div style={{ marginBottom: "25px", display: "flex", alignItems: "center", justifyContent: "space-between", color: "#caccd1", fontWeight: "bold" }}>
          <span>App Notifications</span>
          <label style={{ position: "relative", display: "inline-block", width: "50px", height: "28px" }}>
            
           
            <input
  type="checkbox"
  checked={settings.notifications}
  onChange={() =>
    setSettings({
      ...settings,
      notifications: !settings.notifications,
    })
  }
  style={{ opacity: 0, width: 0, height: 0 }}
/>
            <span style={{
              position: "absolute",
              cursor: "pointer",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: notifications ? "#3b82f6" : "#ccc",
              borderRadius: "34px",
              transition: "0.4s"
            }}></span>
            <span style={{
              position: "absolute",
              height: "22px",
              width: "22px",
              left: "3px",
              bottom: "3px",
              backgroundColor: "white",
              borderRadius: "50%",
              transition: "0.4s",
              transform: notifications ? "translateX(22px)" : "translateX(0)"
            }}></span>
          </label>
        </div>

        <div style={{ marginBottom: "25px", display: "flex", alignItems: "center", justifyContent: "space-between", color: "#caccd1", fontWeight: "bold" }}>
          <span>Email Updates</span>
          <label style={{ position: "relative", display: "inline-block", width: "50px", height: "28px" }}>
            <input
              type="checkbox"
              checked={emailUpdates}
              onChange={() => setEmailUpdates(!emailUpdates)}
              style={{ opacity: 0, width: 0, height: 0 }}
            />
            <span style={{
              position: "absolute",
              cursor: "pointer",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: emailUpdates ? "#3b82f6" : "#ccc",
              borderRadius: "34px",
              transition: "0.4s"
            }}></span>
            <span style={{
              position: "absolute",
              height: "22px",
              width: "22px",
              left: "3px",
              bottom: "3px",
              backgroundColor: "white",
              borderRadius: "50%",
              transition: "0.4s",
              transform: emailUpdates ? "translateX(22px)" : "translateX(0)"
            }}></span>
          </label>
        </div>

  
        <div style={{ marginBottom: "25px", color: "#caccd1" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>Language</label>
          <select
            value={language}
            onChange={e => setLanguage(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #514770",
              fontSize: "16px",
              background: "linear-gradient(180deg,rgb(15, 23, 42)",
              color: "#caccd1"
            }}
          >
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>English</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>Spanish</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>French</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>Urdu</option>
          </select>
        </div>

      
        <div style={{ marginBottom: "25px", color: "#caccd1" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>Profile Privacy</label>
          <select
            value={privacy}
            onChange={e => setPrivacy(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #514770",
              fontSize: "16px",
              background: "linear-gradient(180deg,rgb(15, 23, 42)",
              color: "#caccd1"
            }}
          >
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>Public</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>Friends Only</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>Private</option>
          </select>
        </div>

      
        <div style={{ marginBottom: "25px", color: "#caccd1" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>Account Visibility</label>
          <select
            value={accountVisibility}
            onChange={e => setAccountVisibility(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #514770",
              fontSize: "16px",
              background: "linear-gradient(180deg,rgb(15, 23, 42)",
              color: "#caccd1"
            }}
          >
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>Everyone</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>Followers Only</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>Only Me</option>
          </select>
        </div>

       
        <div style={{ marginBottom: "25px", color: "#caccd1" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>Timezone</label>
          <select
            value={timezone}
            onChange={e => setTimezone(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #514770",
              fontSize: "16px",
              background: " linear-gradient(180deg,rgb(15, 23, 42)",
              color: "#caccd1"
            }}
          >
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>GMT-12</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>GMT-8</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>GMT+0</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>GMT+5</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>GMT+8</option>
          </select>
        </div>

        <button
          onClick={handleSave}
      style={{
          padding: "10px 20px", borderRadius: "12px", border: "none",
          background: "linear-gradient(90deg, #6366f1, #0ea5e9)",
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "all 0.3s",
          width: "100%",    
          
        }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "#554fbd"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = "#6366f1"}
        >
          Save Changes
        </button>
      </div>
    </div>
    
  );
}

*/

   // src/pages/Settings.jsx
/*import React, { useState, useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

export default function Settings() {

  const bodyBgColor =
    "linear-gradient(180deg,rgb(15, 23, 42), linear-gradient(180deg,rgb(15, 23, 42))";
  const cardBgColor =
    "linear-gradient(180deg,rgb(15, 23, 42), linear-gradient(180deg,rgb(15, 23, 42)";
  const cardShadow = "rgb(56 53 98 / 30%) 0px 8px 20px";

  // Settings state
  const { settings, setSettings } = useContext(SettingsContext) || {};
  const currentSettings = settings || { notifications: false };

  const [emailUpdates, setEmailUpdates] = useState(true);
  const [language, setLanguage] = useState("Urdu"); // Default to Urdu
  const [privacy, setPrivacy] = useState("Public");
  const [accountVisibility, setAccountVisibility] = useState("Everyone");
  const [timezone, setTimezone] = useState("GMT+5");

 
  const handleSave = () => {
    const savedSettings = {
      notifications: currentSettings.notifications,
      emailUpdates,
      language,
      privacy,
      accountVisibility,
      timezone,
    };
    console.log("Settings saved:", savedSettings);
  };

 
  const ToggleSwitch = ({ value, onChange }) => (
    <label
      style={{
        position: "relative",
        display: "inline-block",
        width: "50px",
        height: "28px",
      }}
    >
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
        style={{ opacity: 0, width: 0, height: 0 }}
      />
      <span
        style={{
          position: "absolute",
          cursor: "pointer",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: value ? "#3b82f6" : "#ccc",
          borderRadius: "34px",
          transition: "0.4s",
        }}
      ></span>
      <span
        style={{
          position: "absolute",
          height: "22px",
          width: "22px",
          left: "3px",
          bottom: "3px",
          backgroundColor: "white",
          borderRadius: "50%",
          transition: "0.4s",
          transform: value ? "translateX(22px)" : "translateX(0)",
        }}
      ></span>
    </label>
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        background: bodyBgColor,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          fontWeight: "700",
          marginBottom: "40px",
          color: "#3b82f6",
          letterSpacing: "1px",
          textShadow: "0 2px 6px rgba(0,0,0,0.2)",
        }}
      >
        Settings
      </h2>

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: cardBgColor,
          borderRadius: "16px",
          padding: "30px",
          boxShadow: cardShadow,
        }}
      >
 
  <div style={{ padding: "20px", maxWidth: "400px" }}>
    
      <div
        style={{
          marginBottom: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#caccd1",
          fontWeight: "bold",
        }}
      >
        <span>App Notifications</span>
        <ToggleSwitch
          value={appNotifications}
          onChange={() => setAppNotifications(!appNotifications)}
        />
      </div>

    
      <div
        style={{
          marginBottom: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#caccd1",
          fontWeight: "bold",
        }}
      >
        <span>Email Updates</span>
        <ToggleSwitch
          value={emailUpdates}
          onChange={() => setEmailUpdates(!emailUpdates)}
        />
      </div>
    </div>

        <div
          style={{
            marginBottom: "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#caccd1",
            fontWeight: "bold",
          }}
        >
          <span>Email Updates</span>
          <ToggleSwitch
            value={emailUpdates}
            onChange={() => setEmailUpdates(!emailUpdates)}
          />
        </div> 

     
        <div style={{ marginBottom: "25px", color: "#caccd1" }}>
          <label
            style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
          >
            Language
          </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #514770",
              fontSize: "16px",
              background: "linear-gradient(180deg,rgb(15, 23, 42))",
              color: "#caccd1",
            }}
          >
               <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>English</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>Spanish</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>French</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>Urdu</option>
          </select>
        </div>

       
        <div style={{ marginBottom: "25px", color: "#caccd1" }}>
          <label
            style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
          >
            Profile Privacy
          </label>
          <select
            value={privacy}
            onChange={(e) => setPrivacy(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #514770",
              fontSize: "16px",
              background: "linear-gradient(180deg,rgb(15, 23, 42))",
              color: "#caccd1",
            }}
          >
             <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>Public</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>Friends Only</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>Private</option>
          </select>
        </div>

     
        <div style={{ marginBottom: "25px", color: "#caccd1" }}>
          <label
            style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
          >
            Account Visibility
          </label>
          <select
            value={accountVisibility}
            onChange={(e) => setAccountVisibility(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #514770",
              fontSize: "16px",
              background: "linear-gradient(180deg,rgb(15, 23, 42))",
              color: "#caccd1",
            }}
          >
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>Everyone</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>Followers Only</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>Only Me</option>
          </select>
        </div>

     
        <div style={{ marginBottom: "25px", color: "#caccd1" }}>
          <label
            style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
          >
            Timezone
          </label>
          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #514770",
              fontSize: "16px",
              background: "linear-gradient(180deg,rgb(15, 23, 42))",
              color: "#caccd1",
            }}
          >
             <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>GMT-12</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>GMT-8</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>GMT+0</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>GMT+5</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>GMT+8</option>
          </select>
        </div>

        <button
          onClick={handleSave}
          style={{
            padding: "10px 20px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(90deg, #6366f1, #0ea5e9)",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.3s",
            width: "100%",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#554fbd")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#6366f1")
          }
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}*/
// src/pages/Settings.jsx
import React, { useState, useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

export default function Settings() {
  // Theme colors
  const bodyBgColor =
    "linear-gradient(180deg,rgb(15, 23, 42), linear-gradient(180deg,rgb(15, 23, 42))";
  const cardBgColor =
    "linear-gradient(180deg,rgb(15, 23, 42), linear-gradient(180deg,rgb(15, 23, 42))";
  const cardShadow = "rgb(56 53 98 / 30%) 0px 8px 20px";

  // Context settings
  const { settings, setSettings } = useContext(SettingsContext) || {};
  const currentSettings = settings || { notifications: false };

  // Local states
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [language, setLanguage] = useState("Urdu");
  const [privacy, setPrivacy] = useState("Public");
  const [accountVisibility, setAccountVisibility] = useState("Everyone");
  const [timezone, setTimezone] = useState("GMT+5");

  // Save button
  const handleSave = () => {
    const savedSettings = {
      notifications: currentSettings.notifications,
      emailUpdates,
      language,
      privacy,
      accountVisibility,
      timezone,
    };
    console.log("Settings saved:", savedSettings);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        background: bodyBgColor,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          fontWeight: "700",
          marginBottom: "40px",
          color: "#3b82f6",
          letterSpacing: "1px",
          textShadow: "0 2px 6px rgba(0,0,0,0.2)",
        }}
      >
        Settings
      </h2>

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: cardBgColor,
          borderRadius: "16px",
          padding: "30px",
          boxShadow: cardShadow,
        }}
      >
        {/* App Notifications */}
<div
  style={{
    marginBottom: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#caccd1",
    fontWeight: "bold",
  }}
>
  <span>App Notifications</span>
  <label
    style={{
      position: "relative",
      display: "inline-block",
      width: "50px",
      height: "28px",
    }}
  >
    <input
      type="checkbox"
      checked={settings?.notifications ?? false} // use the live context value
      onChange={() => {
        // toggle the value safely
        setSettings((prev) => ({
          ...prev,
          notifications: !prev.notifications,
        }));
      }}
      style={{ opacity: 0, width: 0, height: 0 }}
    />
    {/* toggle background */}
    <span
      style={{
        position: "absolute",
        cursor: "pointer",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: settings?.notifications ? "#3b82f6" : "#ccc",
        borderRadius: "34px",
        transition: "0.4s",
      }}
    ></span>
    {/* toggle circle */}
    <span
      style={{
        position: "absolute",
        height: "22px",
        width: "22px",
        left: "3px",
        bottom: "3px",
        backgroundColor: "white",
        borderRadius: "50%",
        transition: "0.4s",
        transform: settings?.notifications ? "translateX(22px)" : "translateX(0)",
      }}
    ></span>
  </label>
</div>
        {/* Email Updates */}
        <div
          style={{
            marginBottom: "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#caccd1",
            fontWeight: "bold",
          }}
        >
          <span>Email Updates</span>
          <label
            style={{
              position: "relative",
              display: "inline-block",
              width: "50px",
              height: "28px",
            }}
          >
            <input
              type="checkbox"
              checked={emailUpdates}
              onChange={() => setEmailUpdates(!emailUpdates)}
              style={{ opacity: 0, width: 0, height: 0 }}
            />
            <span
              style={{
                position: "absolute",
                cursor: "pointer",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: emailUpdates ? "#3b82f6" : "#ccc",
                borderRadius: "34px",
                transition: "0.4s",
              }}
            ></span>
            <span
              style={{
                position: "absolute",
                height: "22px",
                width: "22px",
                left: "3px",
                bottom: "3px",
                backgroundColor: "white",
                borderRadius: "50%",
                transition: "0.4s",
                transform: emailUpdates ? "translateX(22px)" : "translateX(0)",
              }}
            ></span>
          </label>
        </div>

        {/* Language */}
        <div style={{ marginBottom: "25px", color: "#caccd1" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            Language
          </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #514770",
              fontSize: "16px",
              background: "linear-gradient(180deg,rgb(15, 23, 42))",
              color: "#caccd1",
            }}
          >
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>English</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>Spanish</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>French</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>Urdu</option>
          </select>
        </div>

        {/* Profile Privacy */}
        <div style={{ marginBottom: "25px", color: "#caccd1" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            Profile Privacy
          </label>
          <select
            value={privacy}
            onChange={(e) => setPrivacy(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #514770",
              fontSize: "16px",
              background: "linear-gradient(180deg,rgb(15, 23, 42))",
              color: "#caccd1",
            }}
          >
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>Public</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>Friends Only</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>Private</option>
          </select>
        </div>

        {/* Account Visibility */}
        <div style={{ marginBottom: "25px", color: "#caccd1" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            Account Visibility
          </label>
          <select
            value={accountVisibility}
            onChange={(e) => setAccountVisibility(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #514770",
              fontSize: "16px",
              background: "linear-gradient(180deg,rgb(15, 23, 42))",
              color: "#caccd1",
            }}
          >
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>Everyone</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>Followers Only</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>Only Me</option>
          </select>
        </div>

        {/* Timezone */}
        <div style={{ marginBottom: "25px", color: "#caccd1" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}>
            Timezone
          </label>
          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #514770",
              fontSize: "16px",
              background: "linear-gradient(180deg,rgb(15, 23, 42))",
              color: "#caccd1",
            }}
          >
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>GMT-12</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>GMT-8</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>GMT+0</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>GMT+5</option>
            <option style={{ backgroundColor: "#0f172a", color: "#ffffff" }}>GMT+8</option>
          </select>
        </div>

        {/* Save button */}
        <button
          onClick={handleSave}
          style={{
            padding: "10px 20px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(90deg, #6366f1, #0ea5e9)",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.3s",
            width: "100%",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#554fbd")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#6366f1")}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}