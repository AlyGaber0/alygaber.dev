"use client";

import { motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";
import { projectsData } from "@/lib/data";

export default function ProjectsList() {
  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      className="flex flex-col gap-16"
    >
      <section>
        <h1 className="text-4xl font-bold text-white mb-6 font-mono">
          Projects
        </h1>
        <hr className="border-zinc-800 mt-3" />
      </section>

      <section className="flex flex-col gap-8">
        {projectsData.map((project) => (
          <TransitionLink
            key={project.id}
            href={project.href}
            className="group block cursor-pointer"
          >
            <motion.h3
              layoutId={project.layoutIdTitle}
              transition={{ type: "tween", duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-lg font-bold text-white mb-2 font-mono group-hover:text-zinc-300 transition-colors"
            >
              {project.title}
            </motion.h3>

            <p className="text-sm text-zinc-400 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-500">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 border border-zinc-800 rounded bg-zinc-900/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </TransitionLink>
        ))}
      </section>
    </motion.div>
  );
}
