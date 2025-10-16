"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "@/styles/hero.css";

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Автоплей видео при видимости
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      video.pause();
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.3 }
    );

    io.observe(video);
    return () => io.disconnect();
  }, []);

  const sentence =
    "KATA Investment — a private investment firm providing capital for builders of enduring companies.";

  return (
    <section className="hero" aria-label="Hero">
      <video
        ref={videoRef}
        className="hero-video"
        muted
        playsInline
        loop
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="container hero-body">
        {/* Заголовок с анимацией появления слов */}
        <motion.h1
          className="h1 hero-title"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.035, delayChildren: 0.15 },
            },
          }}
        >
          {sentence.split(" ").map((word, i) => (
            <motion.span
              key={i}
              className="hero-word"
              variants={{
                hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.4, ease: "easeOut" },
                },
              }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>

        {/* Подзаголовок */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p mt-6 maxw-2xl"
        >
          We focus on private investments across multiple sectors — technology, finance, energy, and
          industrials — guided by a disciplined, fundamentals-first approach.
        </motion.p>

        {/* Кнопки */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-buttons"
        >
          <a href="#about" className="btn btn-primary">
            Our firm
          </a>
          <a href="#contact" className="btn btn-outline">
            Discuss an opportunity
          </a>
        </motion.div>
      </div>
    </section>
  );
}