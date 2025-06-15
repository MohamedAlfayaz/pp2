import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaTh,
  FaDownload,
  FaChartLine,
  FaCogs,
  FaRegCreditCard,
} from "react-icons/fa";
import { motion } from "framer-motion";
import TopNav from "./TopNav";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isToggled, setIsToggled] = useState(true);

  const navItems = [
    { path: "/", icon: <FaTh />, title: "Dashboard" },
    { path: "/export", icon: <FaDownload />, title: "Export" },
    { path: "/graph", icon: <FaChartLine />, title: "Graph" },
    { path: "/motor", icon: <FaCogs />, title: "Motor" },
    { path: "/card", icon: <FaRegCreditCard />, title: "Card" },
  ];

  const toggleSidebar = () => setIsExpanded(!isExpanded);
  const toggleSwitch = () => setIsToggled(!isToggled);

  const handleNavClick = (path) => {
    setIsExpanded(false);
    navigate(path);
  };

  return (
    <>
      <TopNav toggleSidebar={toggleSidebar} />

      <motion.div
        animate={{ width: isExpanded ? 140 : 60 }}
        initial={{ x: 180 }}
        className={`${
          isExpanded ? "bg-[#f8f4ef]" : "bg-transparent"
        } fixed top-[60px] right-0 h-[calc(100%-60px)] z-40 flex flex-col transition-all duration-300`}
      >
        {isExpanded && (
          <div className="flex flex-col flex-1 px-2 py-4">
            {/* Nav Items */}
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }} // slide from right
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    onClick={() => handleNavClick(item.path)}
                    className={`flex items-center w-full px-2 py-2 rounded-lg cursor-pointer transition-colors ${
                      isActive
                        ? "bg-blue-100 text-blue-800"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <div className="flex items-center w-full">
                      <span className="text-xl">{item.icon}</span>
                      <span className="ml-3 text-sm font-medium">
                        {item.title}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </nav>

            {/* Toggle Switch */}
            <div className="px-2 mt-3">
              <span className="text-xs font-semibold text-gray-600 mb-1 block">
                {isToggled ? "ON" : "OFF"}
              </span>
              <button
                onClick={toggleSwitch}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                  isToggled ? "bg-blue-600" : "bg-gray-400"
                }`}
              >
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="w-4 h-4 bg-white rounded-full shadow-md"
                  animate={{ x: isToggled ? 24 : 0 }}
                />
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Nav;
