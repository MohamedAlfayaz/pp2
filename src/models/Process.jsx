import React, { useState } from "react";
import SensorTable from "../components/SensorTable";
import { SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import image from "../images/process.png";

const Process = () => {
  const [selectedId, setSelectedId] = useState(null);

  const generateSensorRow = (id) => ({
    id: id.toString(),
  });

  const sensorData = Array.from({ length: 3 }, (_, i) =>
    generateSensorRow(i + 1)
  );

  const handleSelect = (id) => {
    setSelectedId(id);
    console.log(`Selected Row ID: ${id}`);
  };

  return (
    <div className="bg-gray-200 flex flex-col rounded-2xl items-center justify-start px-4 py-6 max-h-full max-w-full">
      {/* Header Image */}
      <div className="flex items-center gap-3 my-2">
        <img src={image} className="w-38 h-auto" alt="process icon" />
      </div>

      {/* Sensor Table */}
      <div className="w-full max-w-3xl mb-6">
        <SensorTable
          data={sensorData}
          onSelect={handleSelect}
          selectedId={selectedId}
        />
      </div>

      {/* Label & Value Section */}
      <div className="w-full max-w-2xl bg-white rounded-xl p-4 shadow-inner">
        {/* Headings */}
        <div className="grid grid-cols-2 mb-3 px-4">
          <div className="text-gray-800 text-lg font-semibold text-center">
            Label
          </div>
          <div className="text-gray-800 text-lg font-semibold text-center">
            Value
          </div>
        </div>

        {/* Label/Value Boxes */}
        <div className="grid grid-cols-2 gap-4 px-4">
          {Array.from({ length: 10 }, (_, i) => (
            <React.Fragment key={i}>
              <div className="bg-gray-200 shadow-md h-10 rounded-md flex items-center justify-center text-gray-700 font-medium">
                Label {i + 1}
              </div>
              <div className="bg-gray-200 shadow-md h-10 rounded-md flex items-center justify-center text-gray-700 font-medium">
                Value {i + 1}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
