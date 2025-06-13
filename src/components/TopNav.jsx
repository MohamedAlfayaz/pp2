import React from "react";
import logo from "../images/maxmoc_logo.png";
import { FaBars } from "react-icons/fa";

const TopNav = ({ toggleSidebar }) => {
  return (
    <div className="bg-[#f8f4ef] shadow-md w-full h-16 flex items-center justify-between px-4 fixed top-0 z-50">
      <button onClick={toggleSidebar} className="text-xl text-blue-800">
        <FaBars />
      </button>
      <h1 className="text-2xl font-bold text-blue-800 tracking-wider">
        SCRUBBER
      </h1>
      <img src={logo} alt="Logo" className="h-10 object-contain" />
    </div>
  );
};

export default TopNav;
