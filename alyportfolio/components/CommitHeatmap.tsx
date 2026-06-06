"use client";

import { useEffect, useState } from "react";

const REPO = "AlyGaber0/Gabl";
const SINCE = "2026-05-01T00:00:00Z";
const UNTIL = "2026-09-01T00:00:00Z";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function toDateStr(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function getColor(count: number, loading: boolean): string {
  if (loading) return "bg-zinc-800/40";
  if (count === 0) return "bg-zinc-800";
  if (count === 1) return "bg-green-900";
  if (count <= 3) return "bg-green-700";
  return "bg-green-500";
}

function buildGrid(start: Date, end: Date) {
  // Pad start back to Monday (ISO weekday: Mon=1, Sun=7)
  const dayOfWeek = start.getDay() === 0 ? 7 : start.getDay();
  const paddedStart = new Date(start);
  paddedStart.setDate(paddedStart.getDate() - (dayOfWeek - 1));

  // Pad end forward to Sunday
  const endDayOfWeek = end.getDay() === 0 ? 7 : end.getDay();
  const paddedEnd = new Date(end);
  if (endDayOfWeek !== 7) {
    paddedEnd.setDate(paddedEnd.getDate() + (7 - endDayOfWeek));
  }

  const days: Date[] = [];
  const cur = new Date(paddedStart);
  while (cur <= paddedEnd) {
    days.push(new Date(cur));
    cur.setDate(cur.getDate() + 1);
  }

  // Chunk into weeks
  const weeks: Date[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return { weeks, paddedStart };
}

export default function CommitHeatmap() {
  const [commitMap, setCommitMap] = useState<Map<string, number>>(new Map());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.github.com/repos/${REPO}/commits?since=${SINCE}&until=${UNTIL}&per_page=100`
    )
      .then((res) => res.json())
      .then((data: { commit: { author: { date: string } } }[]) => {
        if (!Array.isArray(data)) return;
        const map = new Map<string, number>();
        for (const item of data) {
          const date = toDateStr(new Date(item.commit.author.date));
          map.set(date, (map.get(date) ?? 0) + 1);
        }
        setCommitMap(map);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const rangeStart = new Date("2026-05-01");
  const rangeEnd = new Date("2026-08-31");
  const { weeks } = buildGrid(rangeStart, rangeEnd);

  // Build month labels: find the first week index where each month starts
  const monthLabels: { label: string; col: number }[] = [];
  weeks.forEach((week, colIdx) => {
    const firstDay = week[0];
    if (firstDay.getDate() <= 7) {
      const month = firstDay.getMonth();
      if (!monthLabels.find((m) => m.label === MONTHS[month])) {
        monthLabels.push({ label: MONTHS[month], col: colIdx });
      }
    }
  });

  return (
    <div className="mb-10">
      {/* Month labels */}
      <div className="flex mb-1 ml-10">
        {weeks.map((_, colIdx) => {
          const label = monthLabels.find((m) => m.col === colIdx);
          return (
            <div key={colIdx} className="w-4.75 mr-0 shrink-0">
              {label && (
                <span className="text-xs font-mono text-zinc-500">
                  {label.label}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Grid */}
      <div className="flex gap-0">
        {/* Day labels */}
        <div className="flex flex-col gap-0.75 mr-2 shrink-0">
          {DAYS.map((day, i) => (
            <div
              key={day}
              className="h-4 flex items-center"
            >
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
                const dateStr = toDateStr(day);
                const count = commitMap.get(dateStr) ?? 0;
                const inRange =
                  day >= rangeStart && day <= new Date("2026-09-01");
                const color = inRange
                  ? getColor(count, loading)
                  : "bg-transparent";
                return (
                  <div
                    key={dateStr}
                    title={
                      inRange
                        ? `${dateStr}: ${count} commit${count !== 1 ? "s" : ""}`
                        : undefined
                    }
                    className={`w-4 h-4 rounded-sm ${color} ${inRange && !loading ? "cursor-default" : ""}`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-1 mt-3 ml-10">
        <span className="text-[11px] font-mono text-zinc-600">Less</span>
        {["bg-zinc-800", "bg-green-900", "bg-green-700", "bg-green-500"].map(
          (cls) => (
            <div key={cls} className={`w-4 h-4 rounded-sm ${cls}`} />
          )
        )}
        <span className="text-[11px] font-mono text-zinc-600">More</span>
      </div>
    </div>
  );
}
