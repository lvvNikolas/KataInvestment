"use client";
import { motion } from "framer-motion";
import "@/styles/strategies.css";

const strategies = [
  {
    title: "Technology",
    description:
      "As technology continues to penetrate all sectors of the global economy at an accelerating rate, we are supporting visionary management teams to scale their businesses into the platforms of the future.",
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
];

export default function Strategies() {
  return (
    <section id="strategy" className="section strategies">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Strategies
        </motion.h2>

        <div className="strategies-grid">
          {strategies.map((s, i) => (
            <motion.div
              key={i}
              className="strategy-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="strategy-image">
                <img src={s.image} alt={s.title} loading="lazy" />
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}