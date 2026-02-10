import React from "react";
import { TelemetryProvider } from "./context/TelemetryContext";
import { ThemeProvider } from "./context/ThemeContext";
import Dashboard from "./pages/Dashboard";
import "./App.css"

function App() {
  return (
    <ThemeProvider>
      <TelemetryProvider>
        <Dashboard />
      </TelemetryProvider>
    </ThemeProvider>
  );
}

export default App;
