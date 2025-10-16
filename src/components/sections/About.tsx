"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import aboutImg from "@/../public/media/about.jpg";
import "@/styles/about.css";

/** Тип одного факта */
type Fact = {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
};

/** Данные для фактов (строго соответствуют типу Fact) */
const FACTS: readonly Fact[] = [
  { id: "aum",     label: "ASSETS UNDER MANAGEMENT", value: 86, prefix: "$", suffix: "B" },
  { id: "years",   label: "YEARS’ EXPERIENCE",       value: 15,               suffix: "+" },
  { id: "sectors", label: "SECTORS INVESTED",        value: 12 },
] as const;

/** Наблюдение за видимостью (дженерик, типобезопасно) */
function useInView<T extends Element>(
  ref: React.RefObject<T | null>,
  options: IntersectionObserverInit = { threshold: 0.3 }
) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        io.disconnect();
      }
    }, options);
    io.observe(el);
    return () => io.disconnect();
  }, [ref, options.root, options.rootMargin, options.threshold]);
  return visible;
}

/** Плавный счётчик (уважает reduced motion) */
function Counter({
  to,
  prefix = "",
  suffix = "",
  duration = 2500,
  className,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const [val, setVal] = useState(prefersReducedMotion ? to : 0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    let raf = 0;
    const start = performance.now();
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setVal(Math.round(to * easeOutQuart(p)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration, prefersReducedMotion]);

  return <span className={className}>{prefix}{val}{suffix}</span>;
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const factsRef   = useRef<HTMLDivElement | null>(null);

  const titleIn = useInView<HTMLDivElement>(sectionRef, { threshold: 0.3 });
  const factsIn = useInView<HTMLDivElement>(factsRef,   { threshold: 0.3 });

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container" ref={sectionRef}>
        {/* Заголовок секции */}
        <motion.h2
          id="about-title"
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={titleIn ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          About Us
        </motion.h2>

        {/* Верх: текст + фото */}
        <div className="about-top">
          <div className="about-text">
            <h3 className="h2">Private. Strategic. Enduring.</h3>
            <p className="p mt-6 maxw-2xl">
              KATA Investment is a private investment firm supporting exceptional founders and companies.
              We invest across sectors with a long-term perspective, focusing on partnership, discipline, and sustainable value creation.
            </p>
          </div>

          <figure className="about-photo">
            <Image
              src={aboutImg}
              alt="Our firm"
              fill
              sizes="(max-width: 1200px) 100vw, 520px"
              placeholder="blur"
              className="about-img"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.style.opacity = "0";
                img.parentElement?.classList.add("about-photo--fallback");
              }}
            />
          </figure>
        </div>

        {/* Низ: факты по центру */}
        <motion.div
          ref={factsRef}
          className="about-facts"
          initial={{ opacity: 0, y: 28 }}
          animate={factsIn ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          role="region"
          aria-labelledby="facts-heading"
        >
          <h4 id="facts-heading" className="sr-only">Key facts</h4>

          <div className="facts-inner">
            {FACTS.map((f) => (
              <div key={f.id} className="fact">
                <div className="fact-number" aria-live="polite">
                  {factsIn ? (
                    <Counter
                      to={f.value}
                      prefix={f.prefix ?? ""}
                      suffix={f.suffix ?? ""}
                    />
                  ) : (
                    <span>{(f.prefix ?? "")}0{(f.suffix ?? "")}</span>
                  )}
                </div>
                <div className="fact-label">{f.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}