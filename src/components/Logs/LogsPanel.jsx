import { useEffect, useState } from "react";
import { subscribe } from "../../data/logStore";
import "./LogsPanel.css";

export default function LogsPanel() {
  const [logs, setLogs] = useState([]); // must be array

  useEffect(() => {
    const unsubscribe = subscribe(setLogs);
    return unsubscribe;
  }, []);

  return (
    <div className="logs-panel">
      <h3>Data Logging Timeline</h3>

      <div className="timeline">
        {logs.map((log) => (
            <div key={log.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-time">{log.time}</div>
                <div className="timeline-content">{log.message}</div>
            </div>
               ))}

        </div>

    
    </div>
  );
}
