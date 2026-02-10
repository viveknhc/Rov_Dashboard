export function createTelemetrySimulator(initialState, onUpdate) {
  let telemetry = { ...initialState };
  let intervalId = null;

  function randomDelta(min, max) {
    return Math.random() * (max - min) + min;
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function updateTelemetry() {
    telemetry = {
      depth: clamp(telemetry.depth + randomDelta(-0.3, 0.5), 0, 300),
      temperature: clamp(telemetry.temperature + randomDelta(-0.05, 0.05), 2, 15),
      pressure: clamp(telemetry.pressure + randomDelta(-0.4, 0.6), 1, 400),
      heading: (telemetry.heading + randomDelta(-2, 2) + 360) % 360,
      speed: clamp(telemetry.speed + randomDelta(-0.05, 0.05), 0, 3),
    };

    onUpdate(telemetry);
  }

  return {
    start(interval = 1000) {
      if (!intervalId) {
        intervalId = setInterval(updateTelemetry, interval);
      }
    },
    stop() {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    },
  };
}
