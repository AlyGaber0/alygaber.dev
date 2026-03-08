"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
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
          className="text-4xl font-bold text-white mb-6 font-mono inline-block origin-left"
        >
          About
        </motion.h1>
        <p className="text-lg leading-relaxed text-zinc-400">
          SWE and Math student with interests in finance, coding, and sports and
          fitness. I enjoy a difficult task, and impossible ones every once in a
          while.
        </p>
        <hr className="border-zinc-800 mt-3" />
      </section>

      {/* Custom Subtitles Section */}
      <section>
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4 font-mono">
              Sports & Fitness
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              I train year-round and set measurable goals that keep me
              consistent and competitive across school semesters.
            </p>
            <ul className="list-disc list-outside mt-1 ml-4 text-zinc-400 flex flex-col gap-4 mb-16">
              <li className="leading-relaxed pl-2 marker:text-zinc-600">
                Recent highlights: Beneva Half Marathon, University
                Championships Men's B National Champion
              </li>
              <li className="leading-relaxed pl-2 marker:text-zinc-600">
                Currently training for the Quebec Open, McGill Open, 2026 Beneva
                Full Marathon
              </li>
            </ul>
            <h3 className="text-xl font-bold text-white mb-4 font-mono">
              Hobbies{" "}
            </h3>
            <ul className="list-disc list-outside mt-1 ml-4 text-zinc-400 flex flex-col gap-4 mb-16">
              <li className="leading-relaxed pl-2 marker:text-zinc-600">
                Current Read: Descartes Meditations on First Philosophy
              </li>
              {/* <li className="leading-relaxed pl-2 marker:text-zinc-600">
              </li> */}
            </ul>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
