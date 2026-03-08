"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";

export default function VexoProject() {
  const project = projectsData.find((p) => p.id === "vexo");
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="flex flex-col mb-4">
        <motion.h1
          layoutId={project.layoutIdTitle}
          className="text-4xl font-bold text-white mb-4 font-mono origin-left"
        >
          {project.title}
        </motion.h1>

        <motion.p
          layoutId={project.layoutIdDesc}
          className="text-lg text-zinc-400 origin-left"
        >
          {project.description}
        </motion.p>

        <div className="flex flex-wrap gap-2 text-xs font-mono mt-4 text-zinc-500">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-mono text-zinc-400 border border-zinc-800 rounded bg-zinc-900/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <hr className="border-zinc-800 mt-3 mb-12" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="prose prose-invert prose-zinc max-w-none"
      >
        <h3 className="text-xl font-bold text-white mb-4 font-mono">
          Overview
        </h3>
        <p className="text-zinc-400 leading-relaxed mb-10">
          Vexo is a modern analytics platform designed specifically to help
          developers monitor and understand user behavior inside mobile
          applications. It provides real-time insights, custom event tracking,
          and performance metrics in a clean, user-friendly dashboard.
        </p>

        <h3 className="text-xl font-bold text-white mb-4 font-mono">
          My Contribution
        </h3>
        <ul className="list-disc list-outside ml-4 text-zinc-400 flex flex-col gap-4">
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Designed and implemented the core analytics dashboard using Next.js
            and Tailwind CSS, focusing on data visualization and an intuitive
            user experience.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Integrated complex charting libraries to display real-time user
            retention and drop-off rates accurately.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Optimized frontend performance, ensuring the dashboard loaded
            instantly even when processing thousands of data points.
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}
