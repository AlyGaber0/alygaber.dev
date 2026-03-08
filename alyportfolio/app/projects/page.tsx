"use client";

import { motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";

export default function ProjectsList() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <h1 className="text-4xl font-bold text-white mb-16 font-mono">Projects</h1>

      <div className="flex flex-col gap-12">
        <TransitionLink href="/projects/root" className="group block cursor-pointer">
          <motion.h3 
            layoutId="project-title-root" 
            className="text-lg font-bold text-white mb-2 font-mono group-hover:text-zinc-300 transition-colors inline-block origin-left"
          >
            Root
          </motion.h3>
          <p className="text-sm text-zinc-400 mb-4">My personal knowledge companion</p>
          <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-500">
            {["Next.js", "FastAPI", "Go", "Postgres"].map(tag => (
              <span key={tag} className="px-2 py-1 border border-zinc-800 rounded bg-zinc-900/30">{tag}</span>
            ))}
          </div>
        </TransitionLink>
      </div>
    </motion.div>
  );
}
