import React from "react";
import Footer from "../components/Footer";
import SensorTile from "../components/SensorTile";

const Output = () => {
  const standardSensors = ["Pressure", "NO"];
  const coSensors = ["CO", "CO2"];

  const createSensorGroup = (labels) => {
    return labels.map((label) => {
      const value = (Math.random() * 100).toFixed(1);
      const percentage = Math.min((value / 100) * 100, 100);
      const unitMap = {
        Pressure: "",
        NO: "",
        CO: "ppm",
        CO2: "ppm",
      };
      return { label, unit: unitMap[label], value, percentage };
    });
  };

  const sensorBoxes = Array.from({ length: 20 }, (_, index) => {
    const id = index + 1;
    return id === 8 || id === 12
      ? createSensorGroup(coSensors)
      : createSensorGroup(standardSensors);
  });

  const layoutClasses = Array.from({ length: 20 }, () => "row-span-1");

  return (
    <>
      <div className="bg-gray-100 min-h-screen p-4">
        <div className="grid grid-cols-4 grid-rows-5 gap-4 w-full">
          {sensorBoxes.map((sensorGroup, index) => (
            <div
              key={index}
              className={`border rounded-xl shadow-lg bg-white p-2 flex flex-row items-center gap-2 ${layoutClasses[index]}`}
            >
              {/* Location label on the left */}
              <div className="w-1/4 h-full flex items-center justify-center border text-sm font-semibold text-gray-700 rounded-lg p-2 text-center">
                {`Bay ${index + 1}`}
              </div>

              {/* Sensor values on the right */}
              <div
                className={`flex-1 ${
                  index + 1 === 8 || index + 1 === 12
                    ? "grid grid-rows-2 gap-2"
                    : "grid grid-cols-1 gap-2"
                }`}
              >
                {sensorGroup.map((sensor, i) => (
                  <SensorTile key={i} {...sensor} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Output;
