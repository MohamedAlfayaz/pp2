import React from 'react';
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaTachometerAlt,
  FaTh,
  FaDownload,
  FaChartBar,
  FaMotorcycle
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../images/maxmoc_logo.png';

const Nav = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: <FaTh />, title: 'Input' },
    { path: '/export', icon: <FaDownload />, title: 'Export' },
    { path: '/graph', icon: <FaChartBar />, title: 'Graph' },
    { path: '/motor', icon: <FaMotorcycle />, title: 'Motor' }
  ];

  return (
    <div className="bg-[#f8f4ef] shadow-xl fixed top-0 left-0 h-full w-10 z-50 flex flex-col items-center py-4">
      <motion.img
        // src={logo}
        // alt="Logo"
        className="h-10 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />

      <nav className="flex flex-col items-center">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link
                to={item.path}
                className={`text-2xl p-2 rounded-xl transition-all duration-200
                  ${isActive
                    ? 'text-blue-800 '
                    : 'text-gray-400'}`}
                title={item.title}
              >
                {item.icon}
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </div>
  );
};

export default Nav;
