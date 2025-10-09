"use client";
import { motion } from "framer-motion";
import "@/styles/hero.css";

export default function VideoHero() {
  return (
    <section className="hero" aria-label="Hero">
      <video
        className="hero-video"
        src="/media/hero.mp4"
        // poster="/media/hero.jpg"
        autoPlay
        muted
        playsInline
        loop
      />
      <div className="hero-overlay" />
      <div className="container hero-body">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="h1 text-glow maxw-4xl"
        >
          Capital for builders of enduring companies.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="p mt-6 maxw-2xl"
        >
          We partner across growth, buyout and special situations with a long-term, fundamentals-first approach.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="hero-buttons mt-10"
        >
          <a href="#about" className="btn btn-primary">Our firm</a>
          <a href="#contact" className="btn btn-outline">Discuss an opportunity</a>
        </motion.div>
      </div>
    </section>
  );
}