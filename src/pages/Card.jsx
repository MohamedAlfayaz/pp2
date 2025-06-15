import React from "react";
import SensorCard from "../components/SensorCard"; 

// Function to generate sensor data
const generateSensorData = (locationNumber) => ({
  co: (Math.random() * 100).toFixed(2),
  no: (Math.random() * 100).toFixed(2),
  temperature: (Math.random() * 40 + 10).toFixed(2),
  humidity: (Math.random() * 100).toFixed(2),
  pressure: (Math.random() * 20 + 20).toFixed(2),
  location: `Location ${locationNumber}`,
});

const Card = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-2 p-4">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="row-span-2">
          <SensorCard sensorData={generateSensorData(index + 1)} />
        </div>
      ))}
    </div>
  );
};

export default Card;
