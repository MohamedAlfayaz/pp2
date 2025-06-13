import React, { useState, useEffect } from "react";
import Select from "react-select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Generate random sensor data
const generateSensorData = () => {
  return Array.from({ length: 10 }, () => ({
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
    value: parseFloat((Math.random() * 100).toFixed(1)),
  }));
};

// Return sensor labels based on bay ID
const getSensorLabels = (tileId) => {
  return [7, 8].includes(tileId)
    ? ["CO", "CO2"]
    : ["Temp", "Humidity", "Pressure", "NO"];
};

// Line colors for different sensors
const lineColors = {
  Temp: "red",
  Humidity: "blue",
  Pressure: "gray",
  NO: "purple",
  CO: "yellow",
  CO2: "green",
};

// Options for the dropdown
const bayOptions = Array.from({ length: 30 }, (_, i) => {
  const bayNumber = i + 1;
  const label =
    bayNumber === 7 ? "C1" : bayNumber === 8 ? "C2" : `Bay ${bayNumber}`;
  return { value: bayNumber, label };
});

const Graph = () => {
  const [selectedTile, setSelectedTile] = useState(1);
  const [sensorData, setSensorData] = useState({});

  // Generate new sensor data on tile change
  useEffect(() => {
    if (selectedTile) {
      const labels = getSensorLabels(selectedTile);
      const newData = {};
      labels.forEach((label) => {
        newData[label] = generateSensorData();
      });
      setSensorData(newData);
    }
  }, [selectedTile]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-2xl text-center mb-2">Graph</h2>

      <div className="flex justify-center mb-6 w-full max-w-sm mx-auto">
        <Select
          options={bayOptions}
          defaultValue={bayOptions.find((opt) => opt.value === 1)}
          onChange={(option) => setSelectedTile(option.value)}
          isSearchable
          className="w-full"
        />
      </div>

      {selectedTile && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {getSensorLabels(selectedTile).map((label) => (
            <div key={label} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-center font-semibold mb-2 text-gray-700">
                {label}
              </h2>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={sensorData[label]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={lineColors[label]}
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Graph;