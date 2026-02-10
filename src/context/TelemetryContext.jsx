import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { createTelemetrySimulator } from "../data/telemetrySimulator";
import { addLog } from "../data/logStore";

const TelemetryContext = createContext(null);

const INITIAL_TELEMETRY = {
  depth: 88.5,
  temperature: 6.6,
  pressure: 150.5,
  heading: 160.5,
  speed: 0.5,
};

const MAX_HISTORY = 60;

export function TelemetryProvider({ children }) {
  const [telemetry, setTelemetry] = useState(INITIAL_TELEMETRY);
  const [history, setHistory] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [isEmergency, setIsEmergency] = useState(false);



  useEffect(() => {
    // Log system start once on mount
    addLog("System initialized", "INFO");
  }, []);

  const simulatorRef = useRef(null);

  useEffect(() => {
    simulatorRef.current = createTelemetrySimulator(
      INITIAL_TELEMETRY,
      (newData) => {
        if (isEmergency) return;

        setTelemetry(newData);

        setHistory((prev) => {
          const updated = [
            ...prev,
            { ...newData, timestamp: Date.now() },
          ];
          return updated.slice(-MAX_HISTORY);
        });
      }
    );

    simulatorRef.current.start(1000);

    return () => simulatorRef.current.stop();
  }, [isEmergency]);

  const startRecording = () => {
    setIsRecording(true);
    addLog("Recording started", "INFO");
  };

  const stopRecording = () => {
    setIsRecording(false);
    addLog("Recording stopped", "INFO");
  };

  const emergencyStop = () => {
    if (isRecording) {
      setIsRecording(false);
      addLog("Recording auto-stopped (Emergency)", "WARNING");
    }
    setIsEmergency(true);
    simulatorRef.current?.stop();
    addLog("EMERGENCY STOP activated", "CRITICAL");
  };


  return (
    <TelemetryContext.Provider
      value={{
        telemetry,
        history,
        isRecording,
        isEmergency,
        startRecording,
        stopRecording,
        emergencyStop,
      }}
    >
      {children}
    </TelemetryContext.Provider>
  );
}

export function useTelemetryContext() {
  return useContext(TelemetryContext);
}
