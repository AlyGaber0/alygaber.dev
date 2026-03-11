"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    role: "B.Eng in Software Engineering",
    company: "McGill University - Montreal, QC",
    date: "Sep 2024 - May 2028 (Expected)",
    bullets: [
      "Minor in Mathematics, Co-op Program.",
      "Relevant Coursework: Applied Machine Learning, Data Structures & Algorithms, Software Systems.",
    ],
    tags: [],
  },
];

const experienceData = [
  {
    role: "Software Engineer",
    company: "Vexo Labs Inc.",
    date: "Jan 2026 - Present",
    bullets: [
      "Develop responsive, user-facing features in Next.js by implementing designer-provided UI mockups into production-ready frontend code with a focus on customer experience and usability.",
      "Collaborating with team members through code reviews and iterative design sessions to build reusable, extensible components that improve software quality, maintainability, and performance across the full software development lifecycle.",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    role: "Software Engineering Intern",
    company: "Darwinz AI (TheDar.AI) - Cairo, EG",
    date: "May 2025 - Jul 2025",
    bullets: [
      "Architected and deployed maintainable and scalable Flask RESTful APIs on Google Cloud, automating PDF processing with Gemini AI for translation and TTS; improved system reliability through team code reviews.",
      "Built a cloud-native Machine Learning pipeline using Vertex AI, BigQuery, and Cloud Functions automating document ingestion, OCR, translation, summarization, and metadata storage for downstream analysis.",
    ],
    tags: ["Flask", "Python", "Google Cloud", "Vertex AI", "BigQuery"],
  },
];

const extracurricularData = [
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

const renderList = (data: any[]) => (
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
          {item.bullets.map((bullet: string, i: number) => (
            <li key={i} className="leading-relaxed pl-2 marker:text-zinc-600">
              {bullet}
            </li>
          ))}
        </ul>

        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2 text-xs font-mono text-zinc-400">
            {item.tags.map((tag: string) => (
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      // Changed the parent container to gap-8 so the header isn't miles away from the content
      className="flex flex-col gap-8 pb-24"
    >
      <section>
        <div className="flex flex-col">
          <motion.h1
            layoutId="main-page-title"
            className="text-4xl font-bold text-white mb-6 font-mono origin-left"
          >
            CV
          </motion.h1>
        </div>
        <hr className="border-zinc-800 mt-3" />
      </section>

      {/* Wrapped the remaining sections in their own div with gap-20 to keep them spaced out */}
      <div className="flex flex-col gap-20">
        {/* Experience Section */}
        <section>
          <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-5">
            Experience
          </h2>
          {renderList(experienceData)}
        </section>

        {/* Extracurriculars Section */}
        <section>
          <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-5">
            Extracurriculars
          </h2>
          {renderList(extracurricularData)}
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-5">
            Education
          </h2>
          {renderList(educationData)}
        </section>
      </div>
    </motion.div>
  );
}
