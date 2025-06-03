import React from "react";
import {
  Thermometer,
  Droplets,
  Gauge,
  Cloud,
  Radiation,
  Cloudy,
} from "lucide-react";

// Returns text color class for icons
const getIconColor = (label) => {
  switch (label) {
    case "Temp":
      return "text-red-600";
    case "Humidity":
      return "text-blue-600";
    case "Pressure":
      return "text-gray-600";
    case "CO":
      return "text-yellow-500";
    case "NO":
      return "text-purple-600";
    case "CO2":
      return "text-green-600";
    default:
      return "text-red-600";
  }
};

// Returns background color class for progress bar
const getBarColor = (label) => {
  switch (label) {
    case "Temp":
      return "bg-red-600";
    case "Humidity":
      return "bg-blue-600";
    case "Pressure":
      return "bg-gray-600";
    case "CO":
      return "bg-yellow-500";
    case "NO":
      return "bg-purple-600";
    case "CO2":
      return "bg-green-600";
    default:
      return "bg-red-600";
  }
};

// Icon component based on label
const getIcon = (label) => {
  const baseClass = "h-6 w-6";
  const colorClass = getIconColor(label);

  switch (label) {
    case "Temp":
      return <Thermometer className={`${baseClass} ${colorClass} animate-pulse`} />;
    case "Humidity":
      return <Droplets className={`${baseClass} ${colorClass} animate-bounce`} />;
    case "Pressure":
      return <Gauge className={`${baseClass} ${colorClass} animate-spin-slow`} />;
    case "CO":
      return <Cloud className={`${baseClass} ${colorClass} animate-bounce`} />;
    case "NO":
      return <Radiation className={`${baseClass} ${colorClass} animate-pulse`} />;
    case "CO2":
      return <Cloudy className={`${baseClass} ${colorClass} animate-bounce`} />;
    default:
      return <Thermometer className={`${baseClass} ${colorClass} animate-pulse`} />;
  }
};

// Sensor tile component
const SensorTile = ({ label, unit, value, percentage }) => {
  const barColor = getBarColor(label);

  return (
    <div className="flex w-full border rounded-lg shadow p-2 bg-white">
      {/* Left side: icon and label */}
      <div className="flex flex-col items-center justify-center w-1/3">
        {getIcon(label)}
        <span className="text-xs font-semibold text-gray-700 mt-1">
          {label}
        </span>
      </div>

      {/* Right side: progress bar and value */}
      <div className="flex flex-col justify-center w-2/3">
        {/* Min/Max & Progress Bar */}
        <div className="flex items-center justify-between w-full px-2 mb-2">
          <div className="text-[10px] text-gray-600">
            Min
            <br />0
          </div>
          <div className="flex-1 mx-2 bg-gray-300 h-1 rounded-full relative">
            <div
              className={`h-1 rounded-full absolute top-0 left-0 ${barColor}`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <div className="text-[10px] text-gray-600">
            Max
            <br />
            100
          </div>
        </div>

        {/* Value box */}
        <div className="bg-blue-100 text-blue-800 font-semibold text-sm px-2 py-1 rounded shadow-inner text-center">
          {value} {unit}
        </div>
      </div>
    </div>
  );
};

export default SensorTile;
