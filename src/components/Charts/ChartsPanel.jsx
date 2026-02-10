import React from "react";
import DepthChart from "./DepthChart";
import TemperatureChart from "./TemperatureChart";
import PressureChart from "./PressureChart";
import "./ChartsPanel.css";
import LogsPanel from "../Logs/LogsPanel";

export default function ChartsPanel() {
  return (
    <div className="charts-panel">
      <DepthChart />
      <TemperatureChart />
      <PressureChart />
       <LogsPanel />

    </div>
  );
}
