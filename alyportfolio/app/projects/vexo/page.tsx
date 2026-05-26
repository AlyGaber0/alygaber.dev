"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";

export default function VexoProject() {
  const project = projectsData.find((p) => p.id === "vexo");
  if (!project) return null;

  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
    >
      <div className="flex flex-col mb-4">
        <motion.h1
          layoutId={project.layoutIdTitle}
          transition={{ type: "tween", duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl font-bold text-white mb-4 font-mono"
        >
          {project.title}
        </motion.h1>

        <p className="text-lg text-zinc-400">
          {project.description}
        </p>

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
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="prose prose-invert prose-zinc max-w-none"
      >
        <div className="w-1/3 mb-10 overflow-hidden ">
          <img
            src="/vexo-full.svg"
            alt="Vexo Labs Logo"
            className="w-full h-auto object-cover"
          />
        </div>

        <h3 className="text-xl font-bold text-white mb-4 font-mono">
          Overview
        </h3>
        <p className="text-zinc-400 leading-relaxed mb-10">
          Vexo was a fintech platform where users could research stocks, read
          news and AI-generated insights, and connect their brokerage account to
          trade directly within the app. The product was in development and never
          reached customers. Vexo Labs Inc. was dissolved in 2026.
        </p>

        <h3 className="text-xl font-bold text-white mb-4 font-mono">
          My Contribution
        </h3>
        <ul className="list-disc list-outside ml-4 text-zinc-400 flex flex-col gap-4">
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Built 4 core customer-facing pages end-to-end — home, login, signup, and market overview — using Next.js, TypeScript, and Tailwind CSS as part of a 6-person engineering team.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Designed the Supabase users table handling authentication and profile data; wrote queries and integrated Supabase Auth with protected routing and session management across the frontend.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Participated in code reviews and PRs as part of the standard engineering workflow.
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}
