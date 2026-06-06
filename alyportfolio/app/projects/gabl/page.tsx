"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import CommitHeatmap from "@/components/CommitHeatmap";

export default function GablProject() {
  const project = projectsData.find((p) => p.id === "gabl");
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
        <h3 className="text-xl font-bold text-white mb-4 font-mono">
          Overview
        </h3>
        <p className="text-zinc-400 leading-relaxed mb-10">
          Gabl is a fully custom programming language and interpreter built from
          scratch in C, with no external libraries or frameworks. The project
          covers every stage of language implementation, from raw source text
          to program execution, and was built as a way to deeply understand how
          programming languages actually work at every level.
        </p>

        <h3 className="text-xl font-bold text-white mb-4 font-mono">
          What&apos;s Built
        </h3>
        <ul className="list-disc list-outside ml-4 text-zinc-400 flex flex-col gap-4 mb-10">
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            <span className="text-white font-mono">Lexer</span>: scans raw source code character by character and produces a stream of typed tokens.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            <span className="text-white font-mono">Parser</span>: consumes the token stream and builds an Abstract Syntax Tree using recursive descent parsing, correctly handling operator precedence.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            <span className="text-white font-mono">Environment</span>: stores and retrieves variable bindings during program execution.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            <span className="text-white font-mono">Evaluator</span>: walks the AST recursively and executes the program.
          </li>
        </ul>

        <h3 className="text-xl font-bold text-white mb-4 font-mono">
          What Was Learned
        </h3>
        <ul className="list-disc list-outside ml-4 text-zinc-400 flex flex-col gap-4 mb-10">
          <li className="leading-relaxed pl-2 marker:text-zinc-600">Manual memory management in C using <span className="font-mono text-zinc-300">malloc</span> and <span className="font-mono text-zinc-300">free</span>.</li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">Recursive descent parsing and how operator precedence is encoded in the call stack.</li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">How a programming language goes from text to execution at every single step.</li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">Data structures including linked lists, binary trees, stacks, and hash maps, all implemented manually in C.</li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">Lexical analysis, abstract syntax trees, tree traversal, and environment scoping.</li>
        </ul>

        <h3 className="text-xl font-bold text-white mb-4 font-mono">
          Commit Activity
        </h3>
        <CommitHeatmap />

        <a
          href="https://github.com/AlyGaber0/Gabl"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white transition-colors no-underline"
        >
          View on GitHub
        </a>
      </motion.div>
    </motion.div>
  );
}
