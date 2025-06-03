import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const generateSensorData = () => {
  return Array.from({ length: 10 }, (_, i) => ({
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
    value: parseFloat((Math.random() * 100).toFixed(1)),
  }));
};

const getSensorLabels = (tileId) => {
  return [7, 8].includes(tileId)
    ? ["CO", "CO2"]
    : ["Temp", "Humidity", "Pressure", "NO"];
};

const lineColors = {
  Temp: "red",
  Humidity: "blue",
  Pressure: "gray",
  NO: "purple",
  CO: "yellow",
  CO2: "green",
};

const Graph = () => {
  const [selectedTile, setSelectedTile] = useState(null);
  const [sensorData, setSensorData] = useState({});

  useEffect(() => {
    if (selectedTile !== null) {
      const labels = getSensorLabels(selectedTile);
      const newData = {};
      labels.forEach((label) => {
        newData[label] = generateSensorData();
      });
      setSensorData(newData);
    }
  }, [selectedTile]);

  const handleSelectChange = (e) => {
    const id = parseInt(e.target.value, 10);
    setSelectedTile(id);
  };

  return (
    <div className="min-h-screen p-3 bg-gray-50">
      <div className="flex justify-center mb-6">
        <select
          onChange={handleSelectChange}
          defaultValue=""
          className="px-4 py-2 border rounded text-sm"
        >
          <option value="" disabled>
            Select a Bay
          </option>
          {Array.from({ length: 30 }, (_, i) => {
            const bayNumber = i + 1;
            const label =
              bayNumber === 7
                ? "C1"
                : bayNumber === 8
                ? "C2"
                : `Bay ${bayNumber}`;
            return (
              <option key={bayNumber} value={bayNumber}>
                {label}
              </option>
            );
          })}
        </select>
      </div>

      {selectedTile && (
        <div className="grid grid-cols-2 gap-6">
          {getSensorLabels(selectedTile).map((label) => (
            <div key={label} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-center font-semibold mb-2 text-gray-700">
                {label}
              </h2>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={sensorData[label]}>
                  <CartesianGrid strokeDasharray="4 4" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  {/* Legend removed */}
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
