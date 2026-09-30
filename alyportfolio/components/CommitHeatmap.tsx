"use client";

import { useEffect, useState } from "react";

const REPO = "AlyGaber0/Gabl";
const PER_PAGE = 100;
const MAX_PAGES = 10;

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

type GithubCommit = {
  commit: {
    author: { date: string } | null;
    committer: { date: string } | null;
  };
};

type HeatmapState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; counts: Map<string, number>; total: number; first: string };

/** YYYY-MM-DD in UTC. Every date in this component is handled in UTC so that
 *  the weekday a cell is drawn in always matches the date it is labelled with. */
function toDayKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function parseDayKey(key: string): Date {
  return new Date(`${key}T00:00:00Z`);
}

/** Monday = 0 ... Sunday = 6 */
function mondayIndex(date: Date): number {
  return (date.getUTCDay() + 6) % 7;
}

function addUTCDays(date: Date, days: number): Date {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}

function getColor(count: number): string {
  if (count === 0) return "bg-zinc-800";
  if (count === 1) return "bg-green-900";
  if (count <= 3) return "bg-green-700";
  return "bg-green-500";
}

/** Columns of 7 days, each column running Monday -> Sunday. */
function buildWeeks(start: Date, end: Date): Date[][] {
  const cursor = addUTCDays(start, -mondayIndex(start));
  const last = addUTCDays(end, 6 - mondayIndex(end));

  const weeks: Date[][] = [];
  let week: Date[] = [];
  for (let day = cursor; day <= last; day = addUTCDays(day, 1)) {
    week = [...week, day];
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  return weeks;
}

async function fetchAllCommits(): Promise<GithubCommit[]> {
  const all: GithubCommit[] = [];

  for (let page = 1; page <= MAX_PAGES; page++) {
    const res = await fetch(
      `https://api.github.com/repos/${REPO}/commits?per_page=${PER_PAGE}&page=${page}`,
      { headers: { Accept: "application/vnd.github+json" } }
    );
    if (!res.ok) {
      throw new Error(`GitHub API responded ${res.status}`);
    }

    const batch: unknown = await res.json();
    if (!Array.isArray(batch)) {
      throw new Error("Unexpected GitHub API response");
    }

    all.push(...(batch as GithubCommit[]));
    // A short page means there is nothing left to page through.
    if (batch.length < PER_PAGE) break;
  }

  return all;
}

export default function CommitHeatmap() {
  const [state, setState] = useState<HeatmapState>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;

    fetchAllCommits()
      .then((commits) => {
        if (cancelled) return;

        const counts = new Map<string, number>();
        for (const item of commits) {
          const raw = item.commit?.author?.date ?? item.commit?.committer?.date;
          if (!raw) continue;
          const key = toDayKey(new Date(raw));
          counts.set(key, (counts.get(key) ?? 0) + 1);
        }

        if (counts.size === 0) {
          setState({ status: "error" });
          return;
        }

        const first = [...counts.keys()].sort()[0];
        setState({ status: "ready", counts, total: commits.length, first });
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error" });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (state.status === "error") {
    return (
      <div className="mb-10 text-sm text-zinc-500">
        Commit activity is unavailable right now (GitHub&apos;s API is
        rate-limited or unreachable).{" "}
        <a
          href={`https://github.com/${REPO}/commits`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-300 underline underline-offset-2 hover:text-white"
        >
          View the commits on GitHub
        </a>
        .
      </div>
    );
  }

  if (state.status === "loading") {
    return (
      <div className="mb-10 h-32 flex items-center text-sm text-zinc-600 font-mono">
        Loading commit activity...
      </div>
    );
  }

  // Range runs from the first commit through today, so the graph stays current
  // on its own as new commits land.
  const rangeStart = parseDayKey(state.first);
  const rangeEnd = parseDayKey(toDayKey(new Date()));
  const weeks = buildWeeks(rangeStart, rangeEnd);

  // One label per month, placed on the first column belonging to that month.
  const monthLabels = new Map<number, string>();
  let lastMonth = -1;
  weeks.forEach((week, colIdx) => {
    const month = week[0].getUTCMonth();
    if (month !== lastMonth) {
      monthLabels.set(colIdx, MONTHS[month]);
      lastMonth = month;
    }
  });

  return (
    <div className="mb-10">
      <div className="overflow-x-auto pb-1">
        <div className="inline-block min-w-fit">
          {/* Month labels */}
          <div className="flex mb-1 ml-10">
            {weeks.map((_, colIdx) => (
              <div key={colIdx} className="w-4.75 shrink-0">
                {monthLabels.has(colIdx) && (
                  <span className="text-xs font-mono text-zinc-500">
                    {monthLabels.get(colIdx)}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="flex">
            {/* Day labels */}
            <div className="flex flex-col gap-0.75 w-8 mr-2 shrink-0">
              {DAYS.map((day, i) => (
                <div key={day} className="h-4 flex items-center">
                  {i % 2 === 0 && (
                    <span className="text-[10px] font-mono text-zinc-600 leading-none">
                      {day}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Week columns */}
            <div className="flex gap-0.75">
              {weeks.map((week, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-0.75">
                  {week.map((day) => {
                    const key = toDayKey(day);
                    const inRange = day >= rangeStart && day <= rangeEnd;
                    if (!inRange) {
                      return (
                        <div
                          key={key}
                          className="w-4 h-4 rounded-sm bg-transparent"
                        />
                      );
                    }
                    const count = state.counts.get(key) ?? 0;
                    return (
                      <div
                        key={key}
                        title={`${key}: ${count} commit${count !== 1 ? "s" : ""}`}
                        className={`w-4 h-4 rounded-sm ${getColor(count)}`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between mt-3 ml-10 max-w-md">
        <span className="text-[11px] font-mono text-zinc-600">
          {state.total} commits
        </span>
        <div className="flex items-center gap-1">
          <span className="text-[11px] font-mono text-zinc-600">Less</span>
          {["bg-zinc-800", "bg-green-900", "bg-green-700", "bg-green-500"].map(
            (cls) => (
              <div key={cls} className={`w-4 h-4 rounded-sm ${cls}`} />
            )
          )}
          <span className="text-[11px] font-mono text-zinc-600">More</span>
        </div>
      </div>
    </div>
  );
}
