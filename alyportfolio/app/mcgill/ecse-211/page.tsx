"use client";

import { motion } from "framer-motion";
import { mcgillData } from "@/lib/data";

export default function Ecse211() {
  const course = mcgillData.find((c) => c.id === "ecse-211");
  if (!course) return null;

  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      className="pb-24"
    >
      <div className="flex flex-col mb-12">
        <motion.h1
          layoutId={course.layoutIdTitle}
          transition={{ type: "tween", duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl font-bold text-white mb-4 font-mono"
        >
          {course.title}
        </motion.h1>

        <p className="text-lg text-zinc-400">
          {course.description}
        </p>
        <div className="flex flex-wrap gap-2 text-xs font-mono mt-4 text-zinc-500">
          {["Python", "Lego EV3", "Technical Documentation"].map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 border border-zinc-800 rounded bg-zinc-900/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <hr className="border-zinc-800 mt-3" />
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
          In this course we were tasked with planning, designing, building, and
          testing a fully autonomous, Python-powered LEGO EV3 robot to navigate
          a grid and "deliver mail" to specific office checkpoints. This came
          with many challenges, the main one being to master the engineering
          design process. My team and I treated this project like a professional
          software lifecycle. We wrote strict requirements documents, mapped out
          dependencies with Gantt charts, and used detailed meeting minutes to
          track and justify progress and technical decisions.
        </p>

        <h3 className="text-xl font-bold text-white mb-4 font-mono">
          How This Made Me A Better Software Engineer
        </h3>
        <ul className="list-disc list-outside ml-4 text-zinc-400 flex flex-col gap-4 mb-16">
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Design before you code: Working on your python script before writing
            your first requirement is the mistake I learned the hard way. This
            approach results in system components which fail to work together.
            The process of defining constraints and edge cases enabled our team
            to spend less time on integration debugging work.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Documentation prevents misalignment: Maintaining a complete record
            of all meetings, new ideas, design changes, and even team
            availabilities allowed our team to work smoothly and efficiently;
            never waiting on someone's green light to work independently.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            The bigger picture: This class transformed me from a programmer into
            a software engineer. I developed a systematic approach to
            development work through the creation of architectural plans which
            included risk management processes and logic documentation for
            others to use during collaboration.
          </li>
        </ul>

        <h3 className="text-xl font-bold text-white mb-8 font-mono">
          Project Gallery & Documentation
        </h3>

        <div className="flex flex-col items-center mb-16">
          <div className="w-full max-w-2xl h-[600px] rounded-xl overflow-hidden border border-zinc-800 bg-white shadow-lg relative">
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vTOfuItZb9uFZx_P6Cfum8ypxBR11ZuC5d53kM9yMsHnVmRYn8s4o1j160juz6QpoAh-ywTGQDX1Fmt/pub?embedded=true"
              className="absolute top-0 left-0 border-none"
              title="ECSE 211 Final Report"
              allowFullScreen

              style={{
                width: "125%",
                height: "125%",
                transform: "scale(0.8)",
                transformOrigin: "top left",
              }}
            ></iframe>
          </div>
          <p className="text-sm text-zinc-500 italic mt-4 text-center max-w-xl">
            Our 52-page final design report detailing software architecture,
            hardware integration, and testing methodologies.
          </p>
        </div>

        <div className="flex flex-col items-center mb-10">
          <div className="w-full max-w-2xl rounded-xl overflow-hidden bg-white/5 border border-zinc-800 p-1">
            <img
              src="/E211-robot.png"
              alt="ECSE 211 Robot Design"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <p className="text-sm text-zinc-500 italic mt-4 text-center max-w-xl">
            Final hardware architecture of our EV3 autonomous robot.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
