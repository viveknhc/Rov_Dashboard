import { useTelemetryContext } from "../context/TelemetryContext";

export default function useTelemetry() {
  const context = useTelemetryContext();

  if (!context) {
    throw new Error("useTelemetry must be used inside TelemetryProvider");
  }

  return context;
}
