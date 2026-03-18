import React, { createContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {

  // Sirf Urdu language
  const [language] = useState("ur");

  const [timezone, setTimezone] = useState("GMT+5");
  const [profileVisibility, setProfileVisibility] = useState("public");
  const [notifications, setNotifications] = useState(true);

  const saveSettings = () => {
    console.log("Settings Saved:", {
      language,
      timezone,
      profileVisibility,
      notifications,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        language,
        timezone,
        setTimezone,
        profileVisibility,
        setProfileVisibility,
        notifications,
        setNotifications,
        saveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};