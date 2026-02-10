// src/data/logStore.js

let logs = [];
let listeners = [];

/**
 * Add a new log entry
 */
export function addLog(message, level = "INFO") {
  const log = {
    id: Date.now(),
    time: new Date().toLocaleTimeString(),
    level,
    message,
  };

  logs = [...logs, log].slice(-100); // keep last 100 logs

  listeners.forEach((cb) => cb(logs));
}

/**
 * Subscribe to log updates
 */
export function subscribe(callback) {
  listeners.push(callback);

  // send current logs immediately
  callback(logs);

  return () => {
    listeners = listeners.filter((l) => l !== callback);
  };
}
