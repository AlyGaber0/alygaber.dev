"use client";

import { motion } from "framer-motion";

// Update this array whenever you want to change your CV!
const cvData = [
  {
    role: "Software Engineering Intern",
    company: "C24 Bank - Frankfurt, Germany",
    date: "May 2025 - August 2025",
    bullets: [
      "Maintained and extended Kafka-based credit pipeline workflows for monitoring applications and creditworthiness of customers.",
      "Built and improved internal Angular dashboards for monitoring outstanding credits, defaults, and viewing customer data.",
      "Implemented client-side load balancing between Credit backend services and internal/external services.",
      "Built a stateless proxy to Cloudflare enabling automated DNS failovers via internal dashboards.",
      "Migrated container registry from Nexus to Harbor; implemented image retagging to reduce deployment pipeline times.",
      "Monitored and troubleshot production issues using Grafana and OpenSearch; patched bugs including a Zendesk integration failure.",
      "Built v1 of an internal AI monitoring tool: integrated LLM provider APIs and designed the interaction layer and UX."
    ],
    tags: ["Spring Boot", "Angular", "Kafka", "Grafana", "OpenSearch", "Harbor", "Cloudflare"]
  },
  {
    role: "Software Engineering Intern",
    company: "CEPRES - Munich, Germany",
    date: "May 2024 - August 2024",
    bullets: [
      "Developed responsive web applications using React.",
      "Designed and implemented systems for validating, developing, and deploying client-facing API documentation.",
      "Implemented and tested financial algorithms for private equity.",
      "Collaborated on feature design and technical implementation for portfolio optimization."
    ],
    tags: []
  }
];

export default function CvPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="flex flex-col gap-12 pb-24"
    >
      <section>
        <h1 className="text-4xl font-bold text-white mb-6 font-mono">Curriculum Vitae</h1>
        <p className="text-base leading-relaxed text-zinc-400">
          Software engineer focused on web applications and distributed systems. I leverage AI and modern 
          tools to move fast—but prefer simple, well-architected solutions over clever ones.
        </p>
      </section>

      <hr className="border-zinc-800" />

      <section>
        <h2 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-8">Experience</h2>
        
        <div className="flex flex-col gap-16">
          {cvData.map((job, index) => (
            <div key={index}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-white font-mono">{job.role}</h3>
                  <p className="text-sm text-zinc-400">{job.company}</p>
                </div>
                <span className="text-xs font-mono text-zinc-500 mt-1">{job.date}</span>
              </div>
              
              <ul className="list-disc list-outside ml-4 mt-6 flex flex-col gap-3 text-sm text-zinc-300">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="leading-relaxed pl-2 marker:text-zinc-600">
                    {bullet}
                  </li>
                ))}
              </ul>

              {job.tags && job.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6 text-xs font-mono text-zinc-400">
                  {job.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
