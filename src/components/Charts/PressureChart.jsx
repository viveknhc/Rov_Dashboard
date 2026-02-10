import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import useTelemetry from "../../hooks/useTelemetry";

export default function PressureChart() {
  const { history } = useTelemetry();

  return (
    <div className="chart-box">
      <h4>Pressure (bar)</h4>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={history}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis hide  />
          <YAxis domain={[0, "dataMax + 10"]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="pressure"
            stroke="#facc15"
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
