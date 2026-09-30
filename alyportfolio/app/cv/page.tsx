"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

const skillsData = [
  {
    label: "Languages",
    items: [
      "C", "C++", "Python", "Java", "SQL", "TypeScript",
      "JavaScript", "ARM Assembly", "VHDL",
    ],
  },
  {
    label: "Tools & Infra",
    items: [
      "Git", "Make", "Docker", "GCP (Cloud Functions, Vertex AI)",
      "PostgreSQL", "BigQuery", "Linux",
    ],
  },
  {
    label: "Web & Frameworks",
    items: [
      "React", "Next.js", "Node.js", "Tailwind CSS", "Spring Boot",
      "Flask", "Supabase", "REST APIs",
    ],
  },
];

const educationData = [
  {
    role: "B.Eng in Software Engineering",
    company: "McGill University - Montreal, QC",
    date: "Sep 2024 - May 2028 (Expected)",
    bullets: [
      "Minor in Mathematics, Co-op Program.",
      "Systems & Software Coursework: Compiler Design (W27), Computer Architecture (W27), Computer Organization, Digital Logic, Intro to Software Systems (C, Unix), Signals and Networks, Data Structures and Algorithms, Software Engineering (Java, OOP), Applied Machine Learning.",
      "Mathematics Coursework: Real Analysis, Linear Algebra I & II, Probability and Statistics.",
    ],
    tags: [],
  },
];

const experienceData = [
  {
    role: "Software Engineering Intern",
    company: "Vexo Labs Inc.",
    date: "Jan 2026 - Apr 2026",
    bullets: [
      "Built four customer-facing pages end to end at an early-stage fintech, including a live market dashboard rendering real-time prices across a broad ticker list alongside the day's top three gainers and losers.",
      "Integrated those pages with a Supabase (PostgreSQL) backend, writing the queries behind each view against the team's schema and contributing to schema and data-fetching decisions with the founding team.",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
  },
  {
    role: "Software Engineering Intern",
    company: "Darwinz AI (TheDar.AI) - Cairo, EG",
    date: "May 2025 - Jul 2025",
    bullets: [
      "Built a document pipeline on GCP (Cloud Functions, Vertex AI) that ran PDFs through OCR, translation, and summarization, then loaded structured metadata into BigQuery for SQL analysis.",
      "Wrote and deployed the project's Flask REST services on Google Cloud, containerized with Docker; improved reliability through team code reviews.",
    ],
    tags: ["Flask", "Python", "Google Cloud", "Vertex AI", "BigQuery", "Docker"],
  },
];

const extracurricularData = [
  {
    role: "Varsity Squash",
    company: "McGill Squash Team",
    date: "Sep 2024 - Present",
    bullets: [
      "Men's B National Champion with an undefeated record; compete and train 15+ hours/week alongside a full academic workload.",
    ],
    tags: [],
  },
  {
    role: "Software Team Member",
    company: "McGill Formula Electric - Montreal, QC",
    date: "Oct 2024 - Apr 2025",
    bullets: [
      "Developed real-time telemetry systems capturing 12+ vehicle parameters using Raspberry Pi and Python to optimize performance and safety.",
      "Achieved >85% accuracy of a State-Of-Charge prediction model using MATLAB/Simulink and Python through advanced feature engineering and regression analysis.",
    ],
    tags: ["Python", "Raspberry Pi", "MATLAB", "Simulink", "Data Pipeline"],
  },
  {
    role: "Operations Analyst",
    company: "McGill Engineering Students in Finance",
    date: "Feb 2025 - Present",
    bullets: [
      "Coordinating industry partnerships and guest speaker events.",
      "Facilitated multiple company office visits across Montreal.",
    ],
    tags: ["Operations", "Event Coordination"],
  },
];

const renderList = (data: typeof experienceData) => (
  <div className="flex flex-col gap-8">
    {data.map((item, index) => (
      <div key={index}>
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-white font-mono">
              {item.role}
            </h3>
            <p className="text-sm text-zinc-400">{item.company}</p>
          </div>
          <span className="text-xs font-mono text-zinc-500 mt-1 text-right shrink-0 ml-4">
            {item.date}
          </span>
        </div>

        <ul className="list-disc list-outside ml-4 mt-6 flex flex-col gap-3 text-sm text-zinc-300">
          {item.bullets.map((bullet, i) => (
            <li key={i} className="leading-relaxed pl-2 marker:text-zinc-600">
              {bullet}
            </li>
          ))}
        </ul>

        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 text-xs font-mono text-zinc-400">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
);

export default function CvPage() {
  return (
    <motion.div exit={{ opacity: 0, transition: { duration: 0.06 } }} className="flex flex-col gap-8 pb-24">
      <section>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-white font-mono">CV</h1>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white transition-colors"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>
        <hr className="border-zinc-800" />
      </section>

      <div className="flex flex-col gap-20">
        <section>
          <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-5">
            Experience
          </h2>
          {renderList(experienceData)}
        </section>

        <section>
          <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-5">
            Technical Skills
          </h2>
          <div className="flex flex-col gap-4">
            {skillsData.map((group) => (
              <div key={group.label} className="flex items-start gap-4">
                <span className="text-xs font-mono text-zinc-500 w-24 shrink-0 mt-1">
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-xs font-mono text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-5">
            Education
          </h2>
          {renderList(educationData)}
        </section>

        <section>
          <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-5">
            Extracurriculars
          </h2>
          {renderList(extracurricularData)}
        </section>
      </div>
    </motion.div>
  );
}
