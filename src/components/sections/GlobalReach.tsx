// src/components/sections/GlobalReach.tsx
"use client";
import { useEffect, useMemo, useState } from "react";
import "@/styles/global-reach.css";

type City = { name: string; tz: string };

const cities: City[] = [
  { name: "New York", tz: "America/New_York" },
  { name: "London", tz: "Europe/London" },
  { name: "Dubai", tz: "Asia/Dubai" },
  { name: "Singapore", tz: "Asia/Singapore" },
  { name: "Tokyo", tz: "Asia/Tokyo" },
  { name: "Hong Kong", tz: "Asia/Hong_Kong" },
  { name: "Paris", tz: "Europe/Paris" },
  { name: "San Francisco", tz: "America/Los_Angeles" },
  { name: "São Paulo", tz: "America/Sao_Paulo" },
  { name: "Seoul", tz: "Asia/Seoul" },
];

function useNow(tickMs = 1000) {
  const [now, setNow] = useState<Date>(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), tickMs);
    return () => clearInterval(id);
  }, [tickMs]);
  return now;
}

export default function GlobalReach() {
  const now = useNow(1000);

  const items = useMemo(() => {
    return cities.map((c) => {
      const fmt = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: c.tz,
      })
        .format(now)
        .replace(/\u200E/g, ""); // иногда попадается LRM

      // "03:08 PM" -> {hh:"03", mm:"08", ampm:"pm"}
      const [time, ampmRaw] = fmt.split(" ");
      const [hh, mm] = time.split(":");
      const ampm = (ampmRaw || "").toLowerCase();
      return { ...c, hh, mm, ampm };
    });
  }, [now]);

  return (
    <section id="global-reach" className="section gr">
      {/* background video */}
      <video
        className="gr-video"
        src="/media/earth.mp4"
        autoPlay
        muted
        playsInline
        loop
        aria-hidden="true"
      />
      <div className="gr-overlay" aria-hidden="true" />

      <div className="container gr-body">
        <h2 className="section-title">Our Global Reach</h2>
        <p className="gr-sub">Tracking time across our global offices.</p>

        <div className="gr-grid">
          {items.map((it, i) => (
            <div
              key={it.name}
              className="gr-item"
              style={{ animationDelay: `${0.08 * i}s` }} // поочерёдное появление
            >
              <div className="gr-city">{it.name}</div>
              <div className="gr-time">
                <span className="gr-digit">{it.hh}</span>
                {/* мигающие двоеточия */}
                <span className="gr-colon" aria-hidden>:</span>
                <span className="gr-digit">{it.mm}</span>
                <span className="gr-ampm">{it.ampm}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}