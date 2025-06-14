import React, { useEffect, useState } from "react";

const SensorValues = () => {
  const [value, setValue] = useState("0000");

  useEffect(() => {
    // Generate a random 4-digit number, padded with zeros if needed
    const random = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");
    setValue(random);
  }, []);

  const firstTwo = value.slice(0, 2);
  const lastTwo = value.slice(2, 4);

  return (
    <div className="flex items-center justify-center">
      <div className="text-gray-700">
        <span className="text-lg font-bold">{firstTwo}.</span>
        <span className="text-sm font-semibold ml-0.5">{lastTwo}</span>
      </div>
    </div>
  );
};

export default SensorValues;
