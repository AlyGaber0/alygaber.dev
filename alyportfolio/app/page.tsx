"use client";

import { Github, Linkedin, Copy, Check, Mail } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";
import { projectsData, mcgillData } from "@/lib/data";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const email = "aly.gaber@mail.mcgill.ca";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      className="flex flex-col gap-16"
    >
      <section>
        <h1 className="text-5xl font-bold text-white mb-6 tracking-tight font-mono">
          Aly Gaber
        </h1>

        <p className="text-lg leading-relaxed text-zinc-400 mb-6 max-w-2xl">
          I  build real products. Fintech platforms, analytics dashboards, full-stack systems - shipped, deployed, live.{" "}
        </p>

        <div className="flex flex-col gap-4">
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

          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors w-fit group"
          >
            <Mail size={18} /> {email}
            <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">
              {copied ? (
                <Check size={14} className="text-green-500" />
              ) : (
                <Copy size={14} />
              )}
            </span>
          </button>
        </div>
      </section>

      {/* Recent Projects */}
      <section>
        <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6">
          Recent Projects
        </h2>
        <div className="flex flex-col gap-8">
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
        </div>
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
