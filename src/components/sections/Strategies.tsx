"use client";

import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "@/styles/strategies.css";

type Strategy = {
  title: string;
  description: string;
  image: string; // путь из /public, например: /media/tech.png
};

const STRATEGIES: Readonly<Strategy[]> = [
  {
    title: "Technology",
    description:
      "As technology continues to penetrate all sectors of the global economy at an accelerating rate, we support visionary management teams to scale their businesses into the platforms of the future.",
    image: "/media/tech.png",
  },
  {
    title: "Healthcare",
    description:
      "We partner with innovative healthcare companies that improve quality of life and redefine the delivery of medical services worldwide.",
    image: "/media/health.png",
  },
  {
    title: "Financial Services",
    description:
      "We back financial institutions and fintech platforms enabling transparency, inclusion, and efficiency across global markets.",
    image: "/media/finance.png",
  },
  {
    title: "Industrials",
    description:
      "We invest in industrial and engineering companies driving technological transformation and sustainable productivity.",
    image: "/media/industrial.png",
  },
] as const;

function StrategiesInner() {
  return (
    <section
      id="strategies"
      className="section strategies"
      aria-labelledby="strategies-title"
    >
      <div className="container">
        <motion.h2
          id="strategies-title"
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Strategies
        </motion.h2>

        <div className="strategies-grid" role="list">
          {STRATEGIES.map((s, i) => (
            <motion.article
              role="listitem"
              key={s.title}
              className="strategy-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="strategy-image">
                {/* 
                  Вариант с фиксированной рамкой под изображение:
                  — container .strategy-image должен иметь position:relative и фиксированную высоту/AR в CSS
                */}
                <Image
                  src={s.image.startsWith("/") ? s.image : `/${s.image}`}
                  alt={s.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, (max-width: 1400px) 33vw, 25vw"
                  priority={i === 0}
                />
              </div>

              <h3 className="strategy-title">{s.title}</h3>
              <p className="strategy-desc">{s.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(StrategiesInner);