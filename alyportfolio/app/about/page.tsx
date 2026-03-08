"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="flex flex-col gap-12"
    >
      <section>
        <motion.h1
          layoutId="main-page-title"
          className="text-4xl font-bold text-white mb-16 font-mono inline-block origin-left"
        >
          Projects
        </motion.h1>{" "}
        <p className="text-lg leading-relaxed text-zinc-400">
          Lifelong learner with interests in coding, music, and reading. This
          page still leans on my coding output today, but I'll keep widening the
          lens over time.
        </p>
      </section>

      <hr className="border-zinc-800" />

      {/* Custom Subtitles Section */}
      <section>
        <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6">
          Current Focus
        </h2>
        <h3 className="text-lg font-bold text-white mb-2 font-mono">
          Building Scalable Systems
        </h3>
        <p className="text-sm leading-relaxed text-zinc-400 mb-8">
          Currently exploring distributed systems, advanced cloud architectures,
          and how to effectively integrate AI tools into traditional CI/CD
          pipelines without adding unnecessary complexity.
        </p>

        <h3 className="text-lg font-bold text-white mb-2 font-mono">
          Personal Growth
        </h3>
        <p className="text-sm leading-relaxed text-zinc-400">
          When I'm not coding, I'm usually reading up on software design
          patterns, trying out new web frameworks, or organizing my personal
          knowledge base.
        </p>
      </section>
    </motion.div>
  );
}
