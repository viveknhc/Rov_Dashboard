import React, { useEffect, useState } from "react";
import useTelemetry from "../../hooks/useTelemetry";
import "./TopBar.css";

import { useTheme } from "../../context/ThemeContext";

export default function TopBar() {
  const { theme, toggleTheme } = useTheme();
  const { isRecording, isEmergency } = useTelemetry();
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (isEmergency) return;

    const timer = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isEmergency]);

  const formatTime = () => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="topbar">
      <div className="content-box">

        <div className="topbar-left">
          <i class="fa-solid fa-wifi"></i>
          <span className="title">ROV Dashboard</span>
        </div>


        <div className="topbar-center">
          <i class="fa-regular fa-clock"></i>
          <span className="timer">Mission Timer: {formatTime()}</span>
        </div>

        <div className="darkmode">

          <label className="switch" htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              checked={theme === "light"}
              onChange={toggleTheme}
            />
            <div className="slider round"></div>
          </label>

          <span>{theme === "light" ? "Dark" : "Light"}</span>
        </div>



        <div className="topbar-right">


          <div className="recording-indicator">
            <span>Recording : </span>
            {isRecording && <i className="fa-solid fa-circle recording-dot"></i>}
            <span className={`recording ${isRecording ? "on" : "off"}`}>
              {isRecording ? "" : "Standby"}
            </span>


            <span className={`status ${isEmergency ? "emergency" : "normal"}`}>

              {isEmergency ? <i class="fa-solid fa-triangle-exclamation" style={{ color: "red" }}></i> : ""}

            </span>
          </div>
        </div>

      </div>


    </div>
  );
}
