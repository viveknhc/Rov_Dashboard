import React from "react";
import useTelemetry from "../../hooks/useTelemetry";
import "./Sidebar.css";
import RovControls from "../Controls/RovControls";
import DPad from "../Dpad/Dpad";

export default function Sidebar() {
  const { telemetry } = useTelemetry();

  return (
    <div className="sidebar">
      <div className="title">
        <h2>ROV Dashboard</h2>
        <h4>Dashboard Controls</h4>
      </div>


      <div className="sensor-wrap">
        <h3>
          Sensor Data
        </h3>


        <div className="sensor">
         <div className="icon">

<i class="fa-solid fa-gauge-high"></i>

          </div>
          <span>Depth</span>
          <strong>{telemetry.depth.toFixed(1)} m</strong>

          <div className="status">
            <span>Normal</span>
          </div>
        </div>

        <div className="sensor">
          <div className="icon">

       <i class="fa-solid fa-temperature-high"></i>

          </div>
          <span>Temperature</span>
          <strong>{telemetry.temperature.toFixed(1)} °C</strong>

          <div className="status">
            <span>Normal</span>
          </div>
        </div>

        <div className="sensor">
         <div className="icon">

      <i class="fa-solid fa-water"></i>

          </div>
          <span>Pressure</span>
          <strong>{telemetry.pressure.toFixed(1)} bar</strong>

          <div className="status">
            <span>Normal</span>
          </div>
        </div>

        <div className="sensor">
         <div className="icon">

       <i class="fa-solid fa-compass"></i>

          </div>
          <span>Heading</span>
          <strong>{telemetry.heading.toFixed(1)} °</strong>

          <div className="status">
            <span>Normal</span>
          </div>
        </div>

        <div className="sensor">

          <div className="icon">

       <i class="fa-solid fa-forward"></i>

          </div>
          <span>Speed</span>
          <strong>{telemetry.speed.toFixed(2)} m/s</strong>

          <div className="status">
            <span>Normal</span>
          </div>
        </div>

      </div>

      <RovControls />  
       

      <DPad />



    </div>
  );
}
