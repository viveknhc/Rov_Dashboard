import React, { useState } from "react";
import useTelemetry from "../../hooks/useTelemetry";
import "./Controls.css";

export default function Controls() {
  const {
    isRecording,
    startRecording,
    stopRecording,
    emergencyStop,
    isEmergency,
  } = useTelemetry();


  return (
    <div className="controls">
      <button
        className="btn primary"
        onClick={startRecording}
        disabled={isEmergency || isRecording}
      >
        <i class="fa-solid fa-play"></i>

        Start Recording
      </button>


      <button
        className="btn emergency"
        onClick={emergencyStop}
        disabled={isEmergency}
      >
        <i className="fa-solid fa-triangle-exclamation"></i>
        EMERGENCY STOP
      </button>

      <button
        className="btn pause"
        onClick={stopRecording}
        disabled={isEmergency || !isRecording}
      >
       <i class="fa-solid fa-pause"></i>
        Stop Recording
      </button>

      

     
    </div>
  );
}
