// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Your main App component
import { SettingsProvider } from "./context/SettingsContext.jsx";
import "./styles/global.css"; // Your global styles
import { SearchProvider } from "./context/SearchContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SettingsProvider>
      {/* <SearchProvider> */}
      <App />
      {/* </SearchProvider> */}
    </SettingsProvider>
  </React.StrictMode>
);