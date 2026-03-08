"use client";

import { motion } from "framer-motion";
import { mcgillData } from "@/lib/data";

export default function Ecse223() {
  const course = mcgillData.find((c) => c.id === "ecse-223");
  if (!course) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="flex flex-col mb-12">
        <motion.h1
          layoutId={course.layoutIdTitle}
          className="text-4xl font-bold text-white mb-4 font-mono origin-left"
        >
          {course.title}
        </motion.h1>

        <motion.p
          layoutId={course.layoutIdDesc}
          className="text-lg text-zinc-400 origin-left"
        >
          {course.description}
        </motion.p>

        {/* <div className="flex flex-wrap gap-2 text-xs font-mono mt-4 text-zinc-500">
          {["Python", "Lego EV3", "Technical Documentation"].map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 border border-zinc-800 rounded bg-zinc-900/30"
            >
              {tag}
            </span>
          ))}
        </div> */}

        <hr className="border-zinc-800 mt-3" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="prose prose-invert prose-zinc max-w-none text-zinc-400 leading-relaxed"
      >
        <p>
          This course focused on domain-driven design. We utilized Umple and
          Java to build robust backend systems mapped perfectly to UML state
          diagrams and class models.
        </p>
      </motion.div>
    </motion.div>
  );
}
