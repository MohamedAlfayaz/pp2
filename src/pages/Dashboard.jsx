import React from "react";
import { motion } from "framer-motion";
import Tail from "../models/Tail";
import Process from "../models/Process";
import Output from "../models/Output";

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Dashboard = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-6 grid-rows-7 gap-2 h-full">
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          className="col-span-2 row-span-7 rounded-xl"
        >
          <Tail />
        </motion.div>

        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="col-span-2 row-span-7 col-start-3 rounded-xl"
        >
          <Process />
        </motion.div>

        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="col-span-2 row-span-7 col-start-5 rounded-xl"
        >
          <Output />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;