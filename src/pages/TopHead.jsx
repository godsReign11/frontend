import React from "react";
import { motion } from "framer-motion";

const TopHead = (props) => {
  return (
    <motion.div
      className="main-top-div bg-gradient-to-r from-blue-500 to-purple-500 py-6 px-8 text-white rounded-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.h1
        className="text-3xl font-bold"
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
        }}
        whileTap={{ scale: 0.9 }}
      >
        {props.name}
      </motion.h1>
      <div className="flex justify-end">
        <motion.h3
          className="text-lg font-semibold"
          whileHover={{ scale: 1.1, color: "purple" }}
          whileTap={{ scale: 0.9 }}
        >
          Profile
        </motion.h3>
      </div>
    </motion.div>
  );
};

export default TopHead;
