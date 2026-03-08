"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RootProject() {
  const [activeTab, setActiveTab] = useState("Activity");
  const tabs = ["Overview", "Activity", "Architecture", "Change Log", "Takeaways"];

  // Helper to generate the fake GitHub contribution grid
  const renderGrid = () => {
    const cells = [];
    const colors = ["bg-zinc-800", "bg-[#0e4429]", "bg-[#006d32]", "bg-[#26a641]", "bg-[#39d353]"];
    for (let i = 0; i < 119; i++) {
      // Randomize the green squares to look like a real commit history
      const color = colors[Math.floor(Math.random() * (i % 7 === 0 ? 5 : 2))]; 
      cells.push(<div key={i} className={`w-3 h-3 rounded-[2px] ${color}`} />);
    }
    return cells;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      {/* Header with the Shared Layout ID for the sweep animation */}
      <motion.h1 
        layoutId="project-title-root"
        className="text-4xl font-bold text-white mb-4 font-mono origin-left inline-block"
      >
        Root
      </motion.h1>
      <p className="text-lg text-zinc-400 mb-4">My personal knowledge companion</p>
      <p className="text-xs text-zinc-500 font-mono mb-8">493 commits · last on Mar 7, 2026</p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mb-12">
        {["Next.js", "FastAPI", "Go", "Postgres", "Learning", "Knowledge Management", "Better Auth"].map((tag) => (
          <span key={tag} className="px-2 py-1 text-xs font-mono text-zinc-400 border border-zinc-800 rounded bg-zinc-900/30">
            {tag}
          </span>
        ))}
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-6 border-b border-zinc-800 mb-8 text-sm overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 transition-colors ${
              activeTab === tab
                ? "text-zinc-200 border-b-2 border-blue-500 font-medium"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Activity Content */}
      {activeTab === "Activity" && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6">Github Activity</h3>
          <p className="text-sm text-zinc-400 mb-8">Commit history from project inception (up to 1 year).</p>

          {/* GitHub Grid */}
          <div className="flex gap-4 text-xs text-zinc-500 mb-4 font-mono">
            <div className="flex flex-col justify-between py-1 text-right">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>
            <div className="grid grid-cols-[repeat(17,minmax(0,1fr))] gap-1 max-w-fit">
              {renderGrid()}
            </div>
          </div>
          
          {/* Grid Legend */}
          <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono ml-10 mb-10">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-[2px] bg-zinc-800" />
              <div className="w-3 h-3 rounded-[2px] bg-[#0e4429]" />
              <div className="w-3 h-3 rounded-[2px] bg-[#006d32]" />
              <div className="w-3 h-3 rounded-[2px] bg-[#26a641]" />
              <div className="w-3 h-3 rounded-[2px] bg-[#39d353]" />
            </div>
            <span>More</span>
          </div>

          <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6">Monthly Breakdown</h3>
          
          {/* Monthly Stats */}
          <div className="flex flex-col gap-4 font-mono text-sm text-zinc-400">
            {[
              { month: "Oct 2025", count: 4, width: "2%" },
              { month: "Nov 2025", count: 62, width: "30%" },
              { month: "Dec 2025", count: 125, width: "60%" },
              { month: "Jan 2026", count: 201, width: "100%" },
              { month: "Feb 2026", count: 81, width: "40%" },
              { month: "Mar 2026", count: 20, width: "10%" },
            ].map((stat) => (
              <div key={stat.month} className="flex items-center gap-4">
                <span className="w-20 shrink-0">{stat.month}</span>
                <div className="flex-1 bg-zinc-800/50 h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: stat.width }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-[#26a641] h-full rounded-full"
                  />
                </div>
                <span className="w-8 text-right text-zinc-500">{stat.count}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
