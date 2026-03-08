"use client";

import { motion } from "framer-motion";

export default function Ecse321() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <motion.h1 
        layoutId="mcgill-title-ecse321"
        className="text-4xl font-bold text-white mb-4 font-mono origin-left inline-block"
      >
        ECSE 321 - Intro to Software Engineering
      </motion.h1>
      
      <p className="text-lg text-zinc-400 mb-12">Full-stack web application development and CI/CD.</p>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="prose prose-invert prose-zinc max-w-none text-zinc-400 leading-relaxed"
      >
        <p>
          Working in an Agile team, we developed a complete multi-tier application. The stack included 
          Spring Boot for the backend, Vue/React for the frontend, and rigorous automated testing pipelines.
        </p>
      </motion.div>
    </motion.div>
  );
}
