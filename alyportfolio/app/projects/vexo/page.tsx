"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";

export default function VexoProject() {
  const project = projectsData.find((p) => p.id === "vexo");
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="flex flex-col mb-4">
        <motion.h1
          layoutId={project.layoutIdTitle}
          className="text-4xl font-bold text-white mb-4 font-mono origin-left"
        >
          {project.title}
        </motion.h1>

        <motion.p
          layoutId={project.layoutIdDesc}
          className="text-lg text-zinc-400 origin-left"
        >
          {project.description}
        </motion.p>

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
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
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
        <p className="text-zinc-400 leading-relaxed mb-4">
          Vexo Labs is building the future of finance for the next generation. Our platform blends intelligent money management with culture, making investing and financial literacy accessible, engaging, and social. Through gamified insights, AI-driven budgeting, and real-time integration with stocks, crypto, and banking, we empower students and young professionals to take control of their financial journey.
        </p>
        <p className="text-zinc-400 leading-relaxed mb-10">
          With a focus on speed, design, and community, Vexo is more than a fintech app; it's where finance meets culture.
        </p>

        <h3 className="text-xl font-bold text-white mb-4 font-mono">
          My Contribution
        </h3>
        <ul className="list-disc list-outside ml-4 text-zinc-400 flex flex-col gap-4">
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Design and implement responsive frontend user interfaces from core design specifications using Next.js and Tailwind CSS.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Build complex, fluid page transitions and interactive animations using Framer Motion to ensure the app feels modern, engaging, and fast.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Bridge the gap between frontend features and backend infrastructure, actively connecting the UI to databases and assisting with the deployment pipeline.
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}
