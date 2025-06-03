import React, { useEffect, useState } from "react";
import GaugeChart from "react-gauge-chart";
import { FaCircle } from "react-icons/fa";

// Sensor unit and max values
const sensorConfig = {
  Temp: { unit: "°C", max: 100 },
  Humidity: { unit: "%", max: 100 },
  Pressure: { unit: "bar", max: 10 },
  NO: { unit: "ppm", max: 100 },
  CO: { unit: "ppm", max: 100 },
  CO2: { unit: "ppm", max: 1000 },
};

// Single gauge tile
const GaugeTile = ({ title, value, unit, percent }) => (
  <div className="bg-gray-900 text-white p-4 rounded-xl shadow-md w-60">
    <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
    <GaugeChart
      id={`gauge-${title}`}
      nrOfLevels={20}
      percent={percent}
      colors={["#003366", "#00BFFF"]}
      arcWidth={0.3}
      textColor="#00BFFF"
      needleColor="#00BFFF"
    />
    <p className="text-center text-xl mt-2 text-cyan-400">
      {value} {unit}
    </p>
  </div>
);

// Status light for status list
const StatusLight = ({ label, status }) => {
  const color =
    status === "ok"
      ? "bg-green-500"
      : status === "warn"
      ? "bg-yellow-400"
      : "bg-red-500";

  return (
    <div className="flex items-center space-x-2">
      <FaCircle className={`${color} text-xs`} />
      <span className="text-white">{label}</span>
    </div>
  );
};

// Main Process page
const Process = () => {
  const [sensorData, setSensorData] = useState([]);

  // Generate random sensor values
  const generateSensorData = () => {
    const labels = ["Temp", "Humidity", "Pressure", "NO", "CO", "CO2"];
    const generated = labels.map((label) => {
      const config = sensorConfig[label];
      const value = parseFloat((Math.random() * config.max).toFixed(1));
      return {
        title: label,
        value,
        unit: config.unit,
        percent: value / config.max,
      };
    });
    setSensorData(generated);
  };

  useEffect(() => {
    generateSensorData(); // Initial run
    const interval = setInterval(generateSensorData, 2000); // Update every 2s
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className=" min-h-screen p-6 text-white font-mono">
      {/* Gauge Tiles */}
      <div className="grid grid-cols-3 gap-6 justify-items-center mb-8">
        {sensorData.map((sensor, index) => (
          <GaugeTile
            key={index}
            title={sensor.title}
            value={sensor.value}
            unit={sensor.unit}
            percent={sensor.percent}
          />
        ))}
      </div>

      {/* Statistics and Status Section */}
      <div className="grid grid-cols-2 gap-8">
        {/* Statistics */}
        <div className="bg-gray-900 p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Statistics</h2>
          <ul className="space-y-2 text-cyan-300">
            {sensorData.length > 0 && (
              <>
                <li>
                  Average Temp: {sensorData.find((s) => s.title === "Temp")?.value} °C
                </li>
                <li>
                  Humidity: {sensorData.find((s) => s.title === "Humidity")?.value} %
                </li>
                <li>
                  Pressure: {sensorData.find((s) => s.title === "Pressure")?.value} bar
                </li>
                <li>
                  NO: {sensorData.find((s) => s.title === "NO")?.value} ppm
                </li>
                <li>Frequency: {(50 + Math.random() * 10).toFixed(1)} Hz</li>
              </>
            )}
          </ul>
        </div>

        {/* Status */}
        <div className="bg-gray-900 p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Status</h2>
          <div className="space-y-2">
            {sensorData.map((sensor, i) => {
              let status = "ok";
              if (sensor.percent > 0.9 && sensor.percent <= 1.0) status = "warn";
              if (sensor.percent > 1.0) status = "error";
              return <StatusLight key={i} label={sensor.title} status={status} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
