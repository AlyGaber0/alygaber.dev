"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";

export default function KevProject() {
  const project = projectsData.find((p) => p.id === "kev");
  if (!project) return null;

  return (
    <motion.div exit={{ opacity: 0, transition: { duration: 0.06 } }}>
      <div className="flex flex-col mb-4">
        <motion.h1
          layoutId={project.layoutIdTitle}
          transition={{ type: "tween", duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="text-4xl font-bold text-white mb-4 font-mono"
        >
          {project.title}
        </motion.h1>

        <p className="text-lg text-zinc-400">
          {project.description}
        </p>

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

      <div className="prose prose-invert prose-zinc max-w-none">
        <h3 className="text-xl font-bold text-white mb-4 font-mono">
          Overview
        </h3>
        <p className="text-zinc-400 leading-relaxed mb-10">
          Kev, short for KE(y) V(alue), is a TCP key-value store written in C. A
          server holds a hash table in memory and speaks a small wire protocol
          over a socket, so any client that can open a TCP connection can issue{" "}
          <span className="font-mono text-zinc-300">GET</span>,{" "}
          <span className="font-mono text-zinc-300">SET</span>, and{" "}
          <span className="font-mono text-zinc-300">DEL</span> against it. Redis
          stripped down to the part that teaches you something.
        </p>

        <h3 className="text-xl font-bold text-white mb-4 font-mono">
          How It Works
        </h3>
        <p className="text-zinc-400 leading-relaxed mb-10">
          Single-threaded, non-blocking I/O built on{" "}
          <span className="font-mono text-zinc-300">poll()</span>. That is the
          load-bearing decision. A naive server calls{" "}
          <span className="font-mono text-zinc-300">accept()</span> and then
          blocks on <span className="font-mono text-zinc-300">read()</span>{" "}
          until that one client says something, so one slow client stalls
          everyone. The alternative is a thread per connection, which works
          until you have a few thousand of them and the scheduler starts eating
          your machine. <span className="font-mono text-zinc-300">poll()</span>{" "}
          avoids both: one process, one loop, a list of file descriptors, and
          the kernel tells you which ones are actually ready. You do work only
          when there is work. It is the same idea behind nginx and Node&apos;s
          event loop. <span className="font-mono text-zinc-300">poll()</span>{" "}
          over <span className="font-mono text-zinc-300">epoll()</span>{" "}
          specifically because it is POSIX, so the same source compiles on macOS
          and Linux. <span className="font-mono text-zinc-300">epoll</span> is
          faster and Linux-only.
        </p>

        <h3 className="text-xl font-bold text-white mb-4 font-mono">
          Build Phases
        </h3>
        <ul className="list-disc list-outside ml-4 text-zinc-400 flex flex-col gap-4 mb-10">
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            <span className="text-white font-mono">Echo server</span>: a
            blocking server that proves the sockets work.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            <span className="text-white font-mono">Event loop</span>:
            non-blocking sockets plus the{" "}
            <span className="font-mono text-zinc-300">poll()</span> loop that
            drives them.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            <span className="text-white font-mono">Buffers</span>:
            per-connection read and write buffers, since TCP is a byte stream
            and a message can arrive in pieces.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            <span className="text-white font-mono">Protocol</span>: the wire
            format and framing, deciding where one command ends and the next
            begins.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            <span className="text-white font-mono">Store</span>: the hash table
            itself, with{" "}
            <span className="font-mono text-zinc-300">GET</span>,{" "}
            <span className="font-mono text-zinc-300">SET</span>, and{" "}
            <span className="font-mono text-zinc-300">DEL</span>.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            <span className="text-white font-mono">Failure handling</span>:
            partial writes, disconnects mid-command, malformed input.
          </li>
        </ul>
        <p className="text-zinc-400 leading-relaxed mb-10">
          Each phase runs before the next one starts.
        </p>

        <h3 className="text-xl font-bold text-white mb-4 font-mono">
          Why
        </h3>
        <ul className="list-disc list-outside ml-4 text-zinc-400 flex flex-col gap-4">
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            Gabl covered what happens inside one process: how source text
            becomes a running program. Kev covers what happens between
            processes: how bytes cross a socket and turn back into structured
            commands. Together they are the two halves of most backend work.
          </li>
          <li className="leading-relaxed pl-2 marker:text-zinc-600">
            The interesting problems here are the ones nobody warns you about.
            TCP does not give you messages, it gives you a stream, so framing is
            your problem. Non-blocking writes can accept half your data and hand
            the rest back. A connection can vanish mid-command. Those are the
            things that separate someone who has used a socket from someone who
            understands one.
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
