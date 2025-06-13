import React, { useState } from "react";

const Tooltip = ({ children, text, position = "right", arrow = "right" }) => {
  const [show, setShow] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left: "right-full top-1/2 -translate-y-1/2 mr-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3",
  };

  const arrowElements = {
    left: (
      <div
        className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 
        border-t-6 border-b-6 border-l-6 
        border-t-transparent border-b-transparent border-l-blue-800"
      />
    ),
    right: (
      <div
        className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 
        border-t-6 border-b-6 border-r-6 
        border-t-transparent border-b-transparent border-r-blue-800"
        // style={{ borderWidth: "6px" }}
      />
    ),
    top: (
      <div
        className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 
        border-l-6 border-r-6 border-b-6 
        border-l-transparent border-r-transparent border-b-blue-800"
        // style={{ borderWidth: "6px" }}
      />
    ),
    bottom: (
      <div
        className="absolute top-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 
        border-l-6 border-r-6 border-t-6 
        border-l-transparent border-r-transparent border-t-blue-800"
        // style={{ borderWidth: "6px" }}
      />
    ),
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div
          className={`absolute z-10 bg-blue-800 text-white font-medium text-xs px-2 py-1 rounded whitespace-nowrap transition-opacity duration-200 ${positionClasses[position]}`}
        >
          {arrowElements[arrow]}
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
