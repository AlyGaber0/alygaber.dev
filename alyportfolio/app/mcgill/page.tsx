"use client";

import { motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";
import { mcgillData } from "@/lib/data";

export default function McGillList() {
  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      className="flex flex-col gap-16"
    >
      <section>
        <h1 className="text-4xl font-bold text-white mb-6 font-mono">
          McGill Coursework
        </h1>
        <p className="text-lg leading-relaxed text-zinc-400">
          Core classes and projects completed during my software engineering
          degree.
        </p>
        <hr className="border-zinc-800 mt-3" />
      </section>

      <div className="flex flex-col gap-8">
        {mcgillData.map((course) => (
          <TransitionLink
            key={course.id}
            href={course.href}
            className="group block cursor-pointer"
          >
            <motion.h3
              layoutId={course.layoutIdTitle}
              transition={{ type: "tween", duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-lg font-bold text-white mb-2 font-mono group-hover:text-zinc-300 transition-colors"
            >
              {course.title}
            </motion.h3>
            <p className="text-sm text-zinc-400">
              {course.description}
            </p>
          </TransitionLink>
        ))}
      </div>
    </motion.div>
  );
}
