import React, { useState } from "react";
import SensorTable from "../components/SensorTable";
import { LogOut } from "lucide-react";
import { motion } from "framer-motion";
import image from "../images/output.png";


const Output = () => {
  const [selectedId, setSelectedId] = useState(null);

  // Generate a row with ID, CO1, and CO2 values
  const generateSensorRow = (id) => ({
    id: id.toString(),
    co1: (Math.random() * 100).toFixed(2),
    co2: (Math.random() * 100).toFixed(2),
  });

  // Two sensor rows
  const sensorData = [generateSensorRow(1), generateSensorRow(2)];

  const handleSelect = (id, type) => {
    setSelectedId(id);
  };

  return (
    <div className="bg-gray-200 flex flex-col rounded-2xl items-center justify-start py-4 px-4 max-h-full max-w-full">
      {/* Header with Icon and Image */}
      <div className="flex items-center gap-3 my-1">
        <img src={image} alt="Output Graphic" className="w-35 h-auto" />
      </div>

      {/* Sensor Row 1 */}
      <div className="w-full max-w-md mb-4">
        <SensorTable
          data={[sensorData[0]]}
          onSelect={handleSelect}
          selectedId={selectedId}
        />
      </div>

      {/* Sensor Row 2 */}
      <div className="w-full max-w-md mb-6">
        <SensorTable
          data={[sensorData[1]]}
          onSelect={handleSelect}
          selectedId={selectedId}
        />
      </div>

      {/* CO₁ and CO₂ tiles side-by-side */}
      <div className="flex justify-center gap-6 mt-2 mb-6">
        <div className="bg-white rounded-xl shadow-md px-6 py-4 text-center w-40">
          <div className="text-xl text-red-600 font-bold  pb-1 mb-2 bg-white shadow-xl rounded-md">
            CO₁
          </div>
          <div className="text-2xl font-extrabold text-gray-800">{sensorData[0].co1}</div>
        </div>
        <div className="bg-white rounded-xl shadow-md px-6 py-4 text-center w-40">
          <div className="text-xl text-red-600 font-bold  pb-1 mb-2  bg-white shadow-xl rounded-md">
            CO₂
          </div>
          <div className="text-2xl font-extrabold text-gray-800">{sensorData[1].co2}</div>
        </div>
      </div>
    </div>
  );
};

export default Output;
