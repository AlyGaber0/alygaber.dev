"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";

export default function NormanProject() {
  const project = projectsData.find((p) => p.id === "norman");
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
        <h3 className="text-xl font-bold text-white mb-4 font-mono">
          Overview
        </h3>
        <p className="text-zinc-400 leading-relaxed mb-4">
          Norman Private Capital is a financial research and data platform built
          to make institutional-style market analysis accessible to retail
          investors, students, and early-career professionals. The platform
          packages deep fundamental analysis, thematic portfolios, and
          software-driven delivery so users can understand markets, evaluate
          companies, and react to macro events with structure instead of noise.
        </p>
        <p className="text-zinc-400 leading-relaxed mb-10">
          Under the hood, the product is a full-stack system: a modern
          Next.js-based web experience on top of a typed PostgreSQL schema and a
          Python FastAPI microservice that ingests market data, runs valuation
          models, and maintains a live portfolio tracker. This turns financial
          research into a repeatable digital product rather than static PDFs,
          enabling versioned model packages, thematic portfolios, and a public
          track record to prove the quality of the process.
        </p>

        <h3 className="text-xl font-bold text-white mb-4 font-mono">
          Technical Stack & My Role
        </h3>
        <ul className="list-disc list-outside ml-4 text-zinc-400 flex flex-col gap-4">
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            <span className="font-semibold">Frontend architecture:</span>{" "}
            Designed and implemented the client experience using Next.js (App
            Router), Tailwind CSS, and interactive charting libraries to build
            the model viewer and portfolio watcher with fast, SEO-friendly
            pages.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            <span className="font-semibold">Backend & data engine:</span> Helped
            design a decoupled Python FastAPI microservice that uses NumPy and
            Pandas for valuation math, exposing clean REST endpoints that the
            Next.js app can call for DCF outputs and portfolio metrics.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            <span className="font-semibold">
              Infrastructure & integrations:
            </span>{" "}
            Worked on the PostgreSQL + Prisma data model, and integrated Stripe,
            Clerk Auth, Resend, and market-data APIs to handle payments, access
            control, transactional email, and automated portfolio
            updates—deploying the stack across Vercel (frontend) and a Python
            host for the FastAPI service.
          </li>
        </ul>

        <div className="flex flex-col items-center mb-16">
          <div className="w-full max-w-2xl h-[700px] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-lg relative">
            <object
              data="/norman-summary.pdf"
              type="application/pdf"
              className="w-full h-full"
            >
              {/* Fallback for mobile devices that can't render PDFs natively */}
              <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-zinc-950">
                <p className="text-zinc-400 mb-4 font-mono text-sm">
                  Your browser does not support inline PDFs.
                </p>
                <a
                  href="/norman-exec-summary.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-zinc-100 text-zinc-900 rounded-lg font-medium hover:bg-white transition-colors"
                >
                  Download PDF Instead
                </a>
              </div>
            </object>
          </div>
          <p className="text-sm text-zinc-500 italic mt-4 text-center max-w-xl">
            Executive summary of Norman PC
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
