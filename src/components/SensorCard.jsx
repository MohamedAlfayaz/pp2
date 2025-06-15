import React from "react";

const SensorCard = ({ sensorData }) => {
  return (
    <div className="min-h-full bg-gradient flex items-center justify-center p-1">
      <div className="bg-gray-700 backdrop-blur-md rounded-2xl p-3 shadow-2xl w-[340px] md:w-[400px]">
        {/* Arc Display */}
        <div className="relative w-full h-[180px] flex justify-center items-center">
          {/* Arc SVG */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 200 120"
            className="absolute top-0 left-0"
          >
            {/* Outer Arc */}
            <path
              d="M10 100 A90 90 0 0 1 190 100"
              fill="white"
              stroke="#aaa"
              strokeWidth="1.5"
            />

            {/* Bottom Arc for Location */}
            <path
              d="M50 100 A50 50 0 0 1 150 100"
              fill="#88b3f7"
              stroke="#aaa"
              strokeWidth="1.5"
            />
          </svg>

          {/* Vertical Divider */}
          <div className="absolute top-[30px] left-1/2 transform -translate-x-1/2 h-[40px] w-[2px] bg-gray-400 z-10" />

          {/* CO Value */}
          <div className="absolute top-[30px] left-[40px] flex flex-col items-center z-10">
            <div className="bg-white rounded-full px-3 py-1 text-red-600 font-bold shadow text-md">
              CO
            </div>
            <div className="mt-2 mr-2 text-black font-bold text-lg tracking-wide">
              {sensorData.co}
            </div>
          </div>

          {/* NO Value */}
          <div className="absolute top-[30px] right-[40px] flex flex-col items-center z-10">
            <div className="bg-white rounded-full px-3 py-1 text-blue-700 font-bold shadow text-md">
              NO
            </div>
            <div className="mt-2 ml-2 text-black font-bold text-lg tracking-wide">
              {sensorData.no}
            </div>
          </div>

          {/* Location */}
          <div className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 z-10 text-white font-bold text-md text-center">
            {sensorData.location}
          </div>
        </div>

        {/* Sensor Values */}
        <div className="mt-1 flex justify-between text-center">
          <div className="bg-white rounded-xl p-4 shadow-md w-[85px]">
            <div className="font-semibold text-black">Tem</div>
            <div className="mt-1 text-sm text-black font-medium">
              {sensorData.temperature}
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md w-[85px]">
            <div className="font-semibold text-black">Hum</div>
            <div className="mt-1 text-sm text-black font-medium">
              {sensorData.humidity}
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md w-[85px]">
            <div className="font-semibold text-black">Pres</div>
            <div className="mt-1 text-sm text-black font-medium">
              {sensorData.pressure}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorCard;
