import React, { useState } from "react";
import SensorTable from "../components/SensorTable";
import { Cpu } from "lucide-react";
import { motion } from "framer-motion";
import image from "../images/input.png";

const Tail = () => {
  const [selectedId, setSelectedId] = useState(null);

  const generateSensorRow = (id) => ({
    id: id.toString(),
  });

  const sensorData = Array.from({ length: 8 }, (_, i) =>
    generateSensorRow(i + 1)
  );

  const handleSelect = (id) => {
    setSelectedId(id);
    console.log(`Selected Row ID: ${id}`);
  };

  return (
    <div
      className="bg-gray-200 flex flex-col items-center rounded-2xl justify-start py-4 px-4 max-h-full max-w-full"
    >
      {/* Heading with animated icon */}
      <div className="flex items-center gap-3 mb-1">
        <img src={image} alt="" className="w-28 h-auto"/>
      </div>

      <div className="w-full max-w-4xl">
        <SensorTable
          data={sensorData}
          onSelect={handleSelect}
          selectedId={selectedId}
        />
      </div>
    </div>
  );
};

export default Tail;