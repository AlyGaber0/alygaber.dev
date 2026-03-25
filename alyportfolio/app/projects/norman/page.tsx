"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export default function NormanProject() {
  const project = projectsData.find((p) => p.id === "norman");
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
        <div className="flex flex-col items-start gap-4 mb-10">
          <a
            href="https://normanprivatecapital.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-2 inline-flex items-center gap-2 bg-zinc-100 text-zinc-900 px-6 py-3 rounded-lg font-medium transition-all hover:scale-[1.02] hover:bg-white text-sm no-underline"
          >
            Visit normanprivatecapital.ca
            <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-zinc-900 transition-colors" />
          </a>
        </div>

        <h3 className="text-xl font-bold text-white mb-4 font-mono">
          Overview
        </h3>
        <p className="text-zinc-400 leading-relaxed mb-10">
          Norman Private Capital is a full-stack fintech SaaS platform that
          delivers institutional-grade investment research to retail investors.
          We offer two main products: Curated portfolios for beginner investors who don't know where they should distribute their capital, and industry-grade financial models for those who want to save their most valuable asset: time.
        </p>

        <h3 className="text-xl font-bold text-white mb-4 font-mono">
          My Role & Technical Stack
        </h3>

        <h4 className="text-lg font-semibold text-white mb-3 font-mono">
          External APIs & Services
        </h4>
        <ul className="list-disc list-outside ml-4 text-zinc-400 flex flex-col gap-2 mb-6">
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            <span className="font-semibold">Stripe:</span> Implemented full
            payment infrastructure: Checkout sessions, embedded card +
            Apple/Google Pay via Elements, Payment Intents, and webhooks. New
            products and CAD prices are created dynamically through the Stripe
            API so we never touch the Stripe dashboard in normal operation.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            <span className="font-semibold">Clerk:</span> Wired up
            authentication and identity, including email/password with OTP,
            Google/Apple OAuth, session handling through middleware, and
            server-side user lookups via the Clerk Node SDK for precise
            notification targeting.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            <span className="font-semibold">Supabase (PostgreSQL):</span>{" "}
            Designed a relational schema and integrated it via the Supabase JS
            client using a service-role key for admin operations. Handled
            foreign keys and manual cascade deletion logic for portfolios,
            holdings, and purchases.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            <span className="font-semibold">Resend:</span> Built transactional
            email flows with branded HTML templates. New product launches email
            all registered users; updates only email customers who purchased
            that specific product, resolved from the purchases table.
          </li>
        </ul>

        <h4 className="text-lg font-semibold text-white mb-3 font-mono">
          Frontend
        </h4>
        <ul className="list-disc list-outside ml-4 text-zinc-400 flex flex-col gap-2 mb-6">
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Built the entire interface in Next.js App Router (React + TypeScript
            + Tailwind), with client components, loading states, and skeletons
            for all data fetches.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Built a password-protected admin dashboard with tabs for Portfolios,
            Models, and Tracker, including inline editing, holdings management
            with live chart preview, and "Save & Notify" flows.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Used Framer Motion for page transitions, scroll-triggered
            animations, and a smooth multi-step auth/admin flow.
          </li>{" "}
        </ul>

        <h4 className="text-lg font-semibold text-white mb-3 font-mono">
          Backend
        </h4>
        <ul className="list-disc list-outside ml-4 text-zinc-400 flex flex-col gap-2 mb-6">
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Implemented 20+ REST API routes under app/api/, grouped by resource
            (portfolios, models, tracker, admin, Stripe).
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Portfolio routes support full CRUD plus atomic holdings updates and
            manual cascade deletion of dependent rows.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Admin routes handle Stripe checkout session creation, webhook
            processing (with signature verification), Stripe product/price
            creation, and batched email notifications via Resend.
          </li>
        </ul>

        <h4 className="text-lg font-semibold text-white mb-3 font-mono">
          Engineering Practices
        </h4>
        <ul className="list-disc list-outside ml-4 text-zinc-400 flex flex-col gap-2 mb-8">
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Enforced separation of concerns: public read endpoints are open; all
            write operations require an x-admin-password header checked
            server-side.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Disabled stale caching on data routes with export const dynamic =
            'force-dynamic' so admin changes show up immediately.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Protected relational integrity by deleting dependent rows in the
            correct order (purchases → holdings → parent).
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Standardized error handling: all APIs return structured JSON with
            proper HTTP status codes; the frontend reads these and surfaces
            clear inline messages.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Hardened payments via Stripe webhook signature verification before
            processing any event.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            After destructive operations, follow-up SELECT checks confirm the
            database state; the admin UI only updates local state when res.ok is
            true, and email failures from Resend are shown separately from save
            failures.
          </li>
        </ul>

        <div className="flex flex-col items-center mb-16 mt-12">
          <div className="w-full max-w-2xl h-[700px] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-lg relative">
            <object
              data="/norman-summary.pdf"
              type="application/pdf"
              className="w-full h-full"
            >
              {/* Fallback for mobile devices that can't render PDFs natively */}
              <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-zinc-950">
                <p className="text-zinc-400 mb-4 font-mono text-sm">
                  Your browser does not support inline PDFs.
                </p>
                <a
                  href="/norman-exec-summary.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-zinc-100 text-zinc-900 rounded-lg font-medium hover:bg-white transition-colors"
                >
                  Download PDF Instead
                </a>
              </div>
            </object>
          </div>
          <p className="text-sm text-zinc-500 italic mt-4 text-center max-w-xl">
            Executive summary of Norman PC
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
