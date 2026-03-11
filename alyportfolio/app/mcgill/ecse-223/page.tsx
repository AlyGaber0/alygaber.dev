"use client";

import { motion } from "framer-motion";
import { mcgillData } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export default function Ecse223() {
  const course = mcgillData.find((c) => c.id === "ecse-223");
  if (!course) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="pb-24"
    >
      <div className="flex flex-col mb-12">
        <motion.h1
          layoutId={course.layoutIdTitle}
          className="text-4xl font-bold text-white mb-4 font-mono origin-left"
        >
          {course.title}
        </motion.h1>

        <motion.p
          layoutId={course.layoutIdDesc}
          className="text-lg text-zinc-400 origin-left"
        >
          {course.description}
        </motion.p>
        <div className="flex flex-wrap gap-2 text-xs font-mono mt-4 text-zinc-500">
          {["Object Oriented-Design", "UML & Umple", "State Machines"].map(
            (tag) => (
              <span
                key={tag}
                className="px-2 py-1 border border-zinc-800 rounded bg-zinc-900/30"
              >
                {tag}
              </span>
            ),
          )}
        </div>

        <hr className="border-zinc-800 mt-3" />
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
        <p className="text-zinc-400 leading-relaxed mb-10">
          In this course, we learned how to design software systems using class
          diagrams, state machines, UML, and Umple before moving into
          implementation. Our semester-long project involved building a cheese
          wheel sorting manager machine, which required careful planning of
          system behavior, object relationships, and overall architecture. The
          course emphasized the importance of modeling first, using clear
          software designs to guide development and reduce confusion later in
          the process.
        </p>

        <h3 className="text-xl font-bold text-white mb-4 font-mono">
          How This Made Me A Better Software Engineer
        </h3>
        <ul className="list-disc list-outside ml-4 text-zinc-400 flex flex-col gap-4 mb-16">
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Model before implementation: The biggest takeaway I got from this
            course is that strong software should start with a clear design and
            goal. Creating class diagrams first gave me a much clearer
            understanding of how different parts of a system should interact
            with each other before ever touching a line of java.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            You should always use your advantage when you can: UML and Umple are
            advantages and you should always attempt to get the edge. They
            taught me how useful modeling tools are. I became better at turning
            vague ideas into structured systems that others can understand and
            build from.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Design with structure: This course pushed me to think more carefully
            about architecture, not just features. I became better at breaking a
            system into well-defined components and designing software that is
            easier to extend and reason about.
          </li>
        </ul>

        {/* --- NEW GITHUB LINK SECTION --- */}
        <h3 className="text-xl font-bold text-white mb-4 font-mono">
          Project Deliverables
        </h3>
        
        <div className="flex flex-col items-start gap-4 mb-10">
          <p className="text-zinc-400 leading-relaxed m-0">
            To comply with university academic integrity policies, the raw source code for this project is kept private. However, you can view the complete system architecture, UML diagrams, and download the compiled, executable Java application via the public documentation repository.
          </p>
          
          <a
            href="https://github.com/AlyGaber0/ECSE223-CheECSE-Manager"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-2 inline-flex items-center gap-2 bg-zinc-100 text-zinc-900 px-6 py-3 rounded-lg font-medium transition-all hover:scale-[1.02] hover:bg-white text-sm no-underline"
          >
            View Architecture & Download App
            <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-zinc-900 transition-colors" />
          </a>
        </div>

      </motion.div>
    </motion.div>
  );
}
