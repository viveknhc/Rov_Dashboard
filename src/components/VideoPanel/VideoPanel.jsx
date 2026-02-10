import React from "react";
import "./VideoPanel.css";
import Controls from "../Controls/Controls";


export default function VideoPanel() {
  return (
    <div className="video-panel">
      <div className="pointer">
        <img src="pointer.png" alt="" />
      </div>
      <div className="video-overlay">

        <span>Live ROV Camera</span>
      </div>

      {/* Placeholder video/image */}
      <div className="video-placeholder">
        <video src="cam2.mp4" autoPlay loop muted></video>
      </div>

      <Controls />
    </div>
  );
}
