"use client";

import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="flex flex-col gap-16"
    >
      <section>
        <h1 className="text-5xl font-bold text-white mb-6 tracking-tight font-mono">
          Aly Gaber
        </h1>
        <p className="text-lg leading-relaxed text-zinc-400 mb-6 max-w-2xl">
          I build responsive, user-facing products with a focus on clean UI,
          usability, and maintainable frontend systems.{" "}
        </p>
        <div className="flex gap-6 text-sm text-zinc-400">
          <a
            href="https://github.com/AlyGaber0"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aly-gaber/"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </section>

{/* Recent Projects */}
      <section>
        <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6">
          Recent Projects
        </h2>
        <TransitionLink
          href="/projects/root"
          className="group block cursor-pointer"
        >
          <motion.h3
            layoutId="project-title-root"
            className="text-lg font-bold text-white mb-2 font-mono group-hover:text-zinc-300 transition-colors inline-block origin-left"
          >
            Root
          </motion.h3>
          <p className="text-sm text-zinc-400 mb-4">
            My personal knowledge companion
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-500">
            {["Next.js", "FastAPI", "Go", "Postgres"].map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 border border-zinc-800 rounded bg-zinc-900/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </TransitionLink>
      </section>

{/* Mcgill courses */}
      <section>
        <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6">
          McGill Coursework
        </h2>
        <div className="flex flex-col gap-8">
          <TransitionLink
            href="/mcgill/ecse-211"
            className="group block cursor-pointer"
          >
            <motion.h3
              layoutId="mcgill-title-ecse211"
              className="text-lg font-bold text-white mb-2 font-mono group-hover:text-zinc-300 transition-colors inline-block origin-left"
            >
              ECSE 211 - Design Principles and Methods
            </motion.h3>
            <p className="text-sm text-zinc-400">
              Autonomous robotics and hardware-software integration.
            </p>
          </TransitionLink>

          <TransitionLink
            href="/mcgill/ecse-223"
            className="group block cursor-pointer"
          >
            <motion.h3
              layoutId="mcgill-title-ecse223"
              className="text-lg font-bold text-white mb-2 font-mono group-hover:text-zinc-300 transition-colors inline-block origin-left"
            >
              ECSE 223 - Model-Based Programming
            </motion.h3>
            <p className="text-sm text-zinc-400">
              Software engineering using state machines and UML.
            </p>
          </TransitionLink>

          <TransitionLink
            href="/mcgill/ecse-321"
            className="group block cursor-pointer"
          >
            <motion.h3
              layoutId="mcgill-title-ecse321"
              className="text-lg font-bold text-white mb-2 font-mono group-hover:text-zinc-300 transition-colors inline-block origin-left"
            >
              ECSE 321 - Intro to Software Engineering
            </motion.h3>
            <p className="text-sm text-zinc-400">
              Full-stack web application development and CI/CD.
            </p>
          </TransitionLink>
        </div>
      </section>
    </motion.div>
  );
}
