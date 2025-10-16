"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "@/styles/hero.css";

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Если пользователь предпочитает меньше движений — не автоплей
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      video.pause();
      return;
    }

    // Ленивая автопрокрутка: запускаем видео, когда секция в зоне видимости
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          video.play().catch(() => {/* браузер мог заблокировать — игнорируем */});
        } else {
          // экономим батарею/CPU, когда секция вне экрана
          video.pause();
        }
      },
      { root: null, threshold: 0.25 }
    );

    io.observe(video);
    return () => io.disconnect();
  }, []);

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
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="h1 text-glow"
        >
          KATA Investment — a private investment firm providing capital for builders of enduring companies.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="p mt-6 maxw-2xl"
        >
          We focus on private investments across multiple sectors — technology, finance, energy, and industrials — guided by a disciplined, fundamentals-first approach.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="hero-buttons"
        >
          <a href="#about" className="btn btn-primary">Our firm</a>
          <a href="#contact" className="btn btn-outline">Discuss an opportunity</a>
        </motion.div>
      </div>
    </section>
  );
}