"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div exit={{ opacity: 0, transition: { duration: 0.06 } }} className="flex flex-col gap-16">
      <section>
        <h1 className="text-4xl font-bold text-white mb-6 font-mono">
          About
        </h1>
        <p className="text-lg leading-relaxed text-zinc-400">
          SWE and Math at McGill, based in Montreal. Systems and low-level work
          is what I reach for first, full-stack is what I&apos;ve shipped most.
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
              Squash on the McGill varsity team, 15+ hours a week alongside a
              full engineering courseload. Distance running and lifting in the
              off-season.
            </p>
            <ul className="list-disc list-outside mt-1 ml-4 text-zinc-400 flex flex-col gap-4 mb-16">
              <li className="leading-relaxed pl-2 marker:text-zinc-600">
                McGill Squash, Men&apos;s B National Champion. Undefeated in
                team play.
              </li>
              <li className="leading-relaxed pl-2 marker:text-zinc-600">
                Beneva Half Marathon, 2025.
              </li>
            </ul>
            <h3 className="text-xl font-bold text-white mb-4 font-mono">
              Outside That
            </h3>
            <ul className="list-disc list-outside mt-1 ml-4 text-zinc-400 flex flex-col gap-4 mb-16">
              <li className="leading-relaxed pl-2 marker:text-zinc-600">
                Reading. Currently Descartes&apos; Meditations on First
                Philosophy and The Brothers Karamazov.
              </li>
              <li className="leading-relaxed pl-2 marker:text-zinc-600">
                Lifting, most days.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
