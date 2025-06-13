import React, { useState } from "react";
import SensorTable from "../components/SensorTable";
import { Cpu } from "lucide-react";
import { motion } from "framer-motion";

const Tail = () => {
  const [selectedId, setSelectedId] = useState(null);

  const generateSensorRow = (id) => ({
    id: id.toString(),
  });

  const sensorData = Array.from({ length: 20 }, (_, i) =>
    generateSensorRow(i + 1)
  );

  const handleSelect = (id) => {
    setSelectedId(id);
    console.log(`Selected Row ID: ${id}`);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-start py-5 px-4">
      {/* Heading with animated icon */}
      <div className="flex items-center gap-3 mb-8">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1.5 }}
        >
          <Cpu className="w-7 h-7 text-blue-600" />
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Input
        </h2>
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
