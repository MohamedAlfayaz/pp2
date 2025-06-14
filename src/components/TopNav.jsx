import React from "react";
import logo from "../images/maruti-suzuki-logo.png";
import { FaBars } from "react-icons/fa";

const TopNav = ({ toggleSidebar }) => {
  return (
    <div className="bg-[#f8f4ef] shadow-md w-full h-15 flex items-center justify-between px-4 fixed top-0 z-50">
      <img src={logo} alt="Logo" className="h-40 object-contain" />
      <h1 className="text-2xl font-bold text-red-600 tracking-wider">
        <span className="text-blue-800">SCRU</span>BBER
      </h1>
      <button onClick={toggleSidebar} className="text-xl text-blue-800">
        <FaBars />
      </button>
    </div>
  );
};

export default TopNav;
