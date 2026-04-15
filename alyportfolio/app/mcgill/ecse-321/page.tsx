"use client";

import { motion } from "framer-motion";
import { mcgillData } from "@/lib/data";

export default function Ecse321() {
  const course = mcgillData.find((c) => c.id === "ecse-321");
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
          {["Java", "Spring Boot", "Vue.js", "REST APIs", "PostgreSQL", "JUnit", "CI/CD", "Gradle"].map((tag) => (
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
          In this course, our team of seven was tasked with designing, building,
          and testing a complete full-stack web platform for a local fashion
          store. The platform supports three user roles: customers who can browse
          products, manage a shopping cart, and place delivery orders; employees
          who view and process incoming orders; and managers who control the
          product catalog and oversee store operations. I led the team as Team
          Leader, which meant coordinating deliverables across all seven people,
          keeping the project on track, and making sure nothing fell through the
          cracks. On the technical side, we built a Java Spring Boot backend
          with a full layered architecture covering the model, repository,
          service, controller, and DTO layers, paired with a Vue.js frontend
          with separate dashboards for each user role.
        </p>

        <h3 className="text-xl font-bold text-white mb-4 font-mono">
          How This Made Me A Better Software Engineer
        </h3>
        <ul className="list-disc list-outside ml-4 text-zinc-400 flex flex-col gap-4 mb-16">
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Leading a team is its own skill: Managing seven people taught me
            that the biggest bottleneck in a project is almost never the code,
            it is communication. Keeping everyone aligned on priorities and
            unblocking teammates when they were stuck ended up making a bigger
            difference than any individual technical contribution I made.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Architecture earns its cost: The layered backend setup felt like
            extra overhead early on, but as the codebase grew it became clear
            why it was worth it. When something broke or needed to change, it
            was almost always easy to isolate exactly where the problem lived.
            That separation of concerns saved us a lot of time during
            integration.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Designing for multiple users changes everything: Building one app
            that serves three completely different user types forced me to think
            carefully about access control, data flow, and what each role
            actually needs versus what they should never be able to touch. It
            pushed me to stop thinking about features in isolation and start
            thinking about the whole system.
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}
