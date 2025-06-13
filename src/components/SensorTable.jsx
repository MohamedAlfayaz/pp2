import React from "react";
import SensorValues from "./SensorValues";
import {
  Thermometer,
  Droplets,
  Gauge,
  Cloud,
  Radiation,
  Cloudy,
} from "lucide-react";

// Icon rendering helper
const renderHeaderIcon = (label) => {
  const iconSize = "w-5 h-5";
  switch (label) {
    case "Temp":
      return <Thermometer className={`${iconSize} text-red-600 animate-pulse`} />;
    case "Press":
      return <Gauge className={`${iconSize} text-gray-600 animate-spin-slow`} />;
    case "Hum":
      return <Droplets className={`${iconSize} text-blue-600 animate-bounce`} />;
    case "NO":
      return <Radiation className={`${iconSize} text-purple-600 animate-pulse`} />;
    case "CO":
      return <Cloud className={`${iconSize} text-yellow-500 animate-bounce`} />;
    case "CO2":
      return <Cloudy className={`${iconSize} text-green-600 animate-bounce`} />;
    default:
      return null;
  }
};

const SensorTable = ({ data, onSelect, selectedId }) => {
  return (
    <div className="rounded-xl shadow-lg p-4 bg-white">
      
      {/* Header Row */}
      <div className="grid grid-cols-7 gap-x-8 bg-gray-100 text-gray-800 font-semibold text-sm rounded-xl px-6 py-4 shadow-inner">
        {[
          { label: "Bay" },
          { label: "Temp", unit: "°C" },
          { label: "Press", unit: "Pa" },
          { label: "Hum", unit: "%" },
          { label: "NO", unit: "ppm" },
          { label: "CO", unit: "ppm" },
          { label: "CO2", unit: "ppm" },
        ].map(({ label, unit }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center space-y-1 text-center"
          >
            {renderHeaderIcon(label)}
            <span className="text-[11px] sm:text-sm leading-tight">
              {label}
              {unit && (
                <span className="text-gray-500 text-[10px]"> ({unit})</span>
              )}
            </span>
          </div>
        ))}
      </div>

      {/* Sensor Rows */}
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
            className={`grid grid-cols-7 gap-6 items-center rounded-xl px-6 py-4 mt-2 transition-all duration-300 hover:bg-blue-50 ${bgColor}`}
          >
            <div className="text-center font-semibold text-gray-800">
              {row.id}
            </div>

            <SensorValues
              label="Temp"
              value={row.temp}
              unit="°C"
              setpoint={row.setpoints?.Temp}
              selected={isSelected}
              onSelect={() => onSelect(row.id, "Temp")}
            />
            <SensorValues
              label="Pressure"
              value={row.pressure}
              unit="Pa"
              setpoint={row.setpoints?.Pressure}
              selected={isSelected}
              onSelect={() => onSelect(row.id, "Pressure")}
            />
            <SensorValues
              label="Humidity"
              value={row.humidity}
              unit="%"
              setpoint={row.setpoints?.Humidity}
              selected={isSelected}
              onSelect={() => onSelect(row.id, "Humidity")}
            />
            <SensorValues
              label="NO"
              value={row.no}
              unit="ppm"
              setpoint={row.setpoints?.NO}
              selected={isSelected}
              onSelect={() => onSelect(row.id, "NO")}
            />
            <SensorValues
              label="CO"
              value={row.co}
              unit="ppm"
              setpoint={row.setpoints?.CO}
              selected={isSelected}
              onSelect={() => onSelect(row.id, "CO")}
            />
            <SensorValues
              label="CO2"
              value={row.co2}
              unit="ppm"
              setpoint={row.setpoints?.CO2}
              selected={isSelected}
              onSelect={() => onSelect(row.id, "CO2")}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SensorTable;
