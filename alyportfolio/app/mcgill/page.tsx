"use client";

import { motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";
import { mcgillData } from "@/lib/data";

export default function McGillList() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="flex flex-col gap-16"
    >
      <section>
        <motion.h1
          layoutId="main-page-title"
          className="text-4xl font-bold text-white mb-6 font-mono inline-block origin-left"
        >
          McGill Coursework
        </motion.h1>
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
              className="text-lg font-bold text-white mb-2 font-mono group-hover:text-zinc-300 transition-colors inline-block origin-left"
            >
              {course.title}
            </motion.h3>
            <motion.p
              layoutId={course.layoutIdDesc}
              className="text-sm text-zinc-400"
            >
              {course.description}
            </motion.p>
          </TransitionLink>
        ))}
      </div>
    </motion.div>
  );
}
