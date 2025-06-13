import React, { useEffect, useState } from "react";

const SensorValues = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const random = (Math.random() * 100).toFixed(1);
    setValue(random);
  }, []);

  return (
    <div className="flex items-center justify-center ">
      <div className="text-xl font-extrabold text-gray-700 shadow-2xl tracking-wide">
        {value}
      </div>
    </div>
  );
};

export default SensorValues;
