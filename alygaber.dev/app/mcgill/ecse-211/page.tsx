"use client";

import { motion } from "framer-motion";

export default function Ecse211() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <motion.h1 
        layoutId="mcgill-title-ecse211"
        className="text-4xl font-bold text-white mb-4 font-mono origin-left inline-block"
      >
        ECSE 211 - Design Principles and Methods
      </motion.h1>
      
      <p className="text-lg text-zinc-400 mb-12">Autonomous robotics and hardware-software integration.</p>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="prose prose-invert prose-zinc max-w-none text-zinc-400 leading-relaxed"
      >
        <p>
          In this course, we designed and programmed autonomous EV3 robots to navigate obstacles, 
          localize themselves using sensors, and complete specific physical tasks within a strict time limit.
        </p>
      </motion.div>
    </motion.div>
  );
}
