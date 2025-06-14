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
    <div className="max-h-full max-w-full overflow-hidden p-2">
      <div className="grid grid-cols-6 grid-rows-7 gap-2 max-h-full max-w-full">
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          className="col-span-2 row-span-7"
        >
          <Tail />
        </motion.div>

        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="col-span-2 row-span-7 col-start-3"
        >
          <Process />
        </motion.div>

        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="col-span-2 row-span-7 col-start-5"
        >
          <Output />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
