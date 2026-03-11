"use client";

import { motion } from "framer-motion";
import { mcgillData } from "@/lib/data";

export default function Ecse321() {
  const course = mcgillData.find((c) => c.id === "ecse-321");
  if (!course) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="pb-24"
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
        <div className="flex flex-wrap gap-2 text-xs font-mono mt-4 text-zinc-500">
          {["Full-Stack Development", "REST APIs"].map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 border border-zinc-800 rounded bg-zinc-900/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <hr className="border-zinc-800 mt-3" />
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
          In this course, we were tasked with planning, designing, building, and
          deploying a complete full-stack web application for a boutique fashion
          store. This is my first formal introduction to managing a complete
          software stack from the database to the frontend UI. I am currently
          progressing through the course now.
        </p>

        <h3 className="text-xl font-bold text-white mb-4 font-mono">
          How This Made Me A Better Software Engineer
        </h3>
        <ul className="list-disc list-outside ml-4 text-zinc-400 flex flex-col gap-4 mb-16">
          <li className="leading-relaxed pl-2 marker:text-zinc-600">

          </li>

        </ul>
      </motion.div>
    </motion.div>
  );
}
