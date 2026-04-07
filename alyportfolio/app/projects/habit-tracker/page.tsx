"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";

export default function HabitTrackerProject() {
  const project = projectsData.find((p) => p.id === "habit-tracker");
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
        <p className="text-zinc-400 leading-relaxed mb-10">
          A fully personalized habit tracker I built for myself. Rather than
          fitting into a generic template, every metric tracked is something I
          actually care about: sleep, steps, spending, studying, and physical
          activity. The app is deployed as a web app but built mobile-first and
          installable as a PWA, so it sits on my iPhone home screen and feels
          native.
        </p>

        <h3 className="text-xl font-bold text-white mb-4 font-mono">
          Features
        </h3>

        <h4 className="text-lg font-semibold text-white mb-3 font-mono">
          Logging
        </h4>
        <ul className="list-disc list-outside ml-4 text-zinc-400 flex flex-col gap-2 mb-6">
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Daily log form to record sleep hours, step count, money spent,
            study time, and activities completed.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Each entry is persisted to Supabase with full authentication so
            the data is private and synced across devices.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Perfect day detection: a day qualifies when all five thresholds are
            met simultaneously (≥7h sleep, ≥10k steps, ≥1 activity, &lt;$40
            spent, ≥1h studying).
          </li>
        </ul>

        <h4 className="text-lg font-semibold text-white mb-3 font-mono">
          Analytics
        </h4>
        <ul className="list-disc list-outside ml-4 text-zinc-400 flex flex-col gap-2 mb-6">
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Weekly and monthly averages and totals for every tracked metric.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Correlation explorer: select any two data points and see how they
            relate over time.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Perfect day calendar highlighting every day all goals were achieved.
          </li>
        </ul>

        <h4 className="text-lg font-semibold text-white mb-3 font-mono">
          History
        </h4>
        <ul className="list-disc list-outside ml-4 text-zinc-400 flex flex-col gap-2 mb-6">
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Full log of every past day, browsable and filterable.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Each entry shows the complete snapshot of that day&apos;s stats.
          </li>
        </ul>

        <h4 className="text-lg font-semibold text-white mb-3 font-mono">
          Infrastructure
        </h4>
        <ul className="list-disc list-outside ml-4 text-zinc-400 flex flex-col gap-2 mb-8">
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Supabase for the PostgreSQL database and authentication. Login is
            required so no one else can read or write my data.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Configured as a Progressive Web App with a custom app icon, so it
            installs directly to my iPhone home screen and launches full-screen.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Not publicly open — built and deployed exclusively for personal use.
          </li>
        </ul>

        <h3 className="text-xl font-bold text-white mb-6 font-mono">
          Screenshots
        </h3>

        <div className="flex flex-col gap-8 mb-16">
          <div className="flex flex-col items-center gap-3">
            <div className="w-full rounded-2xl overflow-hidden border border-zinc-800 shadow-lg">
              <img
                src="/habit-log.png"
                alt="Habit Tracker — Daily Log"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-sm text-zinc-500 italic text-center">
              Daily log form
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-full rounded-2xl overflow-hidden border border-zinc-800 shadow-lg">
              <img
                src="/habit-analytics.png"
                alt="Habit Tracker — Analytics"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-sm text-zinc-500 italic text-center">
              Analytics &amp; insights
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-full rounded-2xl overflow-hidden border border-zinc-800 shadow-lg">
              <img
                src="/habit-history.png"
                alt="Habit Tracker — History"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-sm text-zinc-500 italic text-center">
              Full day history
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
