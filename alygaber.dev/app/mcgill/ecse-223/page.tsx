"use client";

import { motion } from "framer-motion";

export default function Ecse223() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <motion.h1 
        layoutId="mcgill-title-ecse223"
        className="text-4xl font-bold text-white mb-4 font-mono origin-left inline-block"
      >
        ECSE 223 - Model-Based Programming
      </motion.h1>
      
      <p className="text-lg text-zinc-400 mb-12">Software engineering using state machines and UML.</p>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="prose prose-invert prose-zinc max-w-none text-zinc-400 leading-relaxed"
      >
        <p>
          This course focused on domain-driven design. We utilized Umple and Java to build robust 
          backend systems mapped perfectly to UML state diagrams and class models.
        </p>
      </motion.div>
    </motion.div>
  );
}
