"use client";

import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";
import { projectsData, mcgillData } from "@/lib/data";

export default function Home() {
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
          className="text-5xl font-bold text-white mb-6 tracking-tight font-mono inline-block origin-left"
        >
          Aly Gaber
        </motion.h1>

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
        {projectsData.map((project) => (
          <TransitionLink
            key={project.id}
            href={project.href}
            className="group block cursor-pointer"
          >
            <motion.h3
              layoutId={project.layoutIdTitle}
              className="text-lg font-bold text-white mb-2 font-mono group-hover:text-zinc-300 transition-colors inline-block origin-left"
            >
              {project.title}
            </motion.h3>
            <motion.p
              layoutId={project.layoutIdDesc}
              className="text-sm text-zinc-400 mb-4"
            >
              {project.description}
            </motion.p>
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

      {/* Mcgill courses */}
      <section>
        <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6">
          McGill Coursework
        </h2>
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
      </section>

      <footer className="w-full mb-100 pb-10 md:mb-5" id="contact">
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2026 Aly Gaber
          </p>
        </div>
      </footer>
    </motion.div>
  );
}
