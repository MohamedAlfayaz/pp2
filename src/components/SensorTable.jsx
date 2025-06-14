import React from "react";
import SensorValues from "./SensorValues";

const SensorTable = ({ data, onSelect, selectedId }) => {
  return (
    <div className="rounded-2xl shadow-lg bg-white overflow-hidden max-h-full">
      {/* Header Row - Sticky */}
      <div className="grid grid-cols-6 gap-x-6 bg-gray-400 text-gray-700 font-semibold text-xs sm:text-sm rounded-t-xl px-6 py-3 shadow-inner sticky top-0 z-10">
        {["S.No", "CO", "NO", "T", "H", "P"].map((label) => {
          const isRed = label === "CO" || label === "NO";
          const isBay = label === "S.No";

          return (
            <div
              key={label}
              className={`text-center font-bold text-md px-1 py-2 rounded  bg-white shadow-md
                ${isBay ? "text-gray-800" : isRed ? "text-red-600 bg-white shadow-md" : "text-gray-800 bg-white shadow-md"}`}
            >
              {label}
            </div>
          );
        })}
      </div>

      {/* Scrollable Sensor Rows */}
      <div className="overflow-y-auto max-h-[550px]">
        {data.map((row, index) => {
          const isSelected = selectedId === row.id;
          const bgColor = isSelected
            ? "bg-blue-100"
            : index % 2 === 0
            ? "bg-white"
            : "bg-gray-50";

          return (
            <div
              key={row.id}
              className={`grid grid-cols-6 gap-6 items-center rounded-xl px-6 py-4 shadow-xl hover:shadow-lg transition-all duration-300 hover:bg-blue-100 ${bgColor}`}
            >
              {/* S.No */}
              <div className="text-center font-semibold text-gray-800">
                {row.id}
              </div>

              {/* CO */}
              <SensorValues
                label="CO"
                value={row.co}
                unit="ppm"
                setpoint={row.setpoints?.CO}
                selected={isSelected}
                onSelect={() => onSelect(row.id, "CO")}
              />

              {/* NO */}
              <SensorValues
                label="NO"
                value={row.no}
                unit="ppm"
                setpoint={row.setpoints?.NO}
                selected={isSelected}
                onSelect={() => onSelect(row.id, "NO")}
              />

              {/* Temperature */}
              <SensorValues
                label="Temp"
                value={row.temp}
                unit="°C"
                setpoint={row.setpoints?.Temp}
                selected={isSelected}
                onSelect={() => onSelect(row.id, "Temp")}
              />

              {/* Humidity */}
              <SensorValues
                label="Humidity"
                value={row.humidity}
                unit="%"
                setpoint={row.setpoints?.Humidity}
                selected={isSelected}
                onSelect={() => onSelect(row.id, "Humidity")}
              />

              {/* Pressure */}
              <SensorValues
                label="Pressure"
                value={row.pressure}
                unit="Pa"
                setpoint={row.setpoints?.Pressure}
                selected={isSelected}
                onSelect={() => onSelect(row.id, "Pressure")}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SensorTable;
