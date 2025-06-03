import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTasks, FaCog, FaArrowLeft, FaProjectDiagram, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const RightSidebar = () => {
  const location = useLocation();

  let iconsToShow = [];

  if (location.pathname === "/") {
    iconsToShow = [
      {
        key: "process",
        path: "/process",
        icon: <FaArrowRight />,
        title: "Go to Process",
      },
    ];
  } else if (location.pathname === "/process") {
    iconsToShow = [
      {
        key: "output",
        path: "/output",
        icon: <FaArrowRight />,
        title: "Go to Output",
      },
      {
        key: "home",
        path: "/",
        icon: <FaArrowLeft />,
        title: "Back to Home",
      },
    ];
  } else if (location.pathname === "/output") {
    iconsToShow = [
      {
        key: "back",
        path: "/process",
        icon: <FaArrowLeft />,
        title: "Back to Process",
      },
    ];
  }

  if (iconsToShow.length === 0) return null;

  return (
    <div className="fixed top-0 right-0 h-full w-8 z-50 flex flex-col justify-center items-center">
      <AnimatePresence mode="wait">
        {iconsToShow.map((item) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to={item.path}
              className={`text-2xl p-3 transition-transform hover:scale-110 ${
                location.pathname === item.path
                  ? "text-blue-800"
                  : "text-gray-500"
              }`}
              title={item.title}
            >
              {item.icon}
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default RightSidebar;
