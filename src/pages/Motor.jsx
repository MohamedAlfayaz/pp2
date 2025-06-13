import React from "react";
import image from "../images/motors.jpeg";

const Motor = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "auto" }}>
      <img
        src={image}
        alt="image"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "24%",
          left: "20%",
          color: "blue",
          fontWeight: "bold",
        }}
      >
        Tank 1
      </div>
      <div
        style={{
          position: "absolute",
          top: "24%", 
          left: "40%",
          color: "blue",
          fontWeight: "bold",
        }}
      >
        Tank 2
      </div>
      <div
        style={{
          position: "absolute",
          top: "68%",
          left: "38%",
          color: "blue",
          fontWeight: "bold",
        }}
      >
        Tank 3
      </div>
      <div
        style={{
          position: "absolute",
          top: "40.5%",
          left: "65.3%",
          color: "blue",
          fontWeight: "bold",
        }}
      >
        Value 1
      </div>
      <div
        style={{
          position: "absolute",
          top: "40.5%",
          left: "73.3%",
          color: "blue",
          fontWeight: "bold",
        }}
      >
        Value 2
      </div>
      <div
        style={{
          position: "absolute",
          top: "40.5%",
          left: "81%",
          color: "blue",
          fontWeight: "bold",
        }}
      >
        Value 3
      </div>
      <div
        style={{
          position: "absolute",
          top: "38.5%",
          left: "33.8%",
          color: "blue",
          fontWeight: "bold",
        }}
      >
        Temp 
      </div>
      <div
        style={{
          position: "absolute",
          top: "52.5%",
          left: "26.8%",
          color: "blue",
          fontWeight: "bold",
        }}
      >
        Hum 
      </div>
      <div
        style={{
          position: "absolute",
          top: "56.9%",
          left: "55.9%",
          color: "blue",
          fontWeight: "bold",
        }}
      >
        Process
      </div>
    </div>
  );
};

export default Motor;
