import React from "react";
import Footer from "../components/Footer";
import SensorTile from "../components/SensorTile";

const Tail = () => {
  const standardSensors = ["Temp", "Humidity", "Pressure", "NO"];
  const coSensors = ["CO", "CO2"];

  const createSensorGroup = (labels) => {
    return labels.map((label) => {
      const value = (Math.random() * 100).toFixed(1);
      const percentage = Math.min((value / 100) * 100, 100);
      const unitMap = {
        Temp: "°C",
        Humidity: "%",
        Pressure: "",
        NO: "",
        CO: "ppm",
        CO2: "ppm",
      };
      return { label, unit: unitMap[label], value, percentage };
    });
  };

  const sensorBoxes = Array.from({ length: 30 }, (_, index) => {
    const id = index + 1;
    return id === 6 || id === 9
      ? createSensorGroup(coSensors)
      : createSensorGroup(standardSensors);
  });

  const layoutClasses = Array.from({ length: 30 }, () => "row-span-2");

  return (
    <>
      <div className="bg-gray-100 min-h-screen p-4">
        <div className="grid grid-cols-3 grid-rows-8 gap-2 w-full h-full">
          {sensorBoxes.map((sensorGroup, index) => (
            <div
              key={index}
              className={`border rounded-xl shadow-lg bg-white p-2 flex flex-col justify-center ${layoutClasses[index]}`}
            >
              {/* Location label at the top */}
              <div className="text-center font-semibold text-gray-700 mb-2 border rounded p-1">
                {`Bay ${index + 1}`}
              </div>

              {/* Sensor tiles grid */}
              <div
                className={
                  index + 1 === 6 || index + 1 === 9
                    ? "grid grid-rows-2 gap-2"
                    : "grid grid-cols-2 gap-2"
                }
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

export default Tail;
