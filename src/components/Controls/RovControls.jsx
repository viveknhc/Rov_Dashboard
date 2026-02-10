

import React, { useState } from "react";
import "./Controls.css";

export default function RovControls() {

  const [depthLimit, setDepthLimit] = useState(90);
  const [speedLimit, setSpeedLimit] = useState(0.5);
  const [cameraZoom, setCameraZoom] = useState(1.0);

  return (
    <div className="controls">
        <h3>ROV Controls</h3>
     

      <div className="limit">
        <span>Depth Limit</span>
        <div className="limit-controls">
          <button onClick={() => setDepthLimit((d) => d - 1)}>-</button>
          <strong>{depthLimit} m</strong>
          <button onClick={() => setDepthLimit((d) => d + 1)}>+</button>
        </div>
      </div>

       <div className="limit">
        <span>Camera Zoom</span>
        <div className="limit-controls">
          <button onClick={() => setCameraZoom((s) => Math.max(0, s - 0.1))}>
            -
          </button>
          <strong>{cameraZoom.toFixed(1)}x</strong>
          <button onClick={() => setCameraZoom((s) => s + 0.1)}>+</button>
        </div>
      </div>

      <div className="limit">
        <span>Speed Limit</span>
        <div className="limit-controls">
          <button onClick={() => setSpeedLimit((s) => Math.max(0, s - 0.1))}>
            -
          </button>
          <strong>{speedLimit.toFixed(1)} m/s</strong>
          <button onClick={() => setSpeedLimit((s) => s + 0.1)}>+</button>
        </div>
      </div>
    </div>
  );
}
