"use client";

import { motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";

export default function McGillList() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
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

      <hr className="border-zinc-800 mb-10" />

      <div className="flex flex-col gap-12">
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
          <motion.p
            layoutId="mcgill-desc-ecse211"
            className="text-sm text-zinc-400 origin-left"
          >
            Autonomous robotics and hardware-software integration.
          </motion.p>
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
          <motion.p
            layoutId="mcgill-desc-ecse223"
            className="text-sm text-zinc-400 origin-left"
          >
            Software engineering using state machines and UML.
          </motion.p>
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
          <motion.p
            layoutId="mcgill-desc-ecse321"
            className="text-sm text-zinc-400 origin-left"
          >
            Full-stack web application development and CI/CD.
          </motion.p>
        </TransitionLink>
      </div>
    </motion.div>
  );
}
