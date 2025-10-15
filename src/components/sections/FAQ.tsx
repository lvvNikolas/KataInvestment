"use client";

import { useState } from "react";
import "@/styles/faq.css";

type QA = { q: string; a: string };

const founders: QA[] = [
  {
    q: "What stages do you invest in?",
    a: "We back Growth, Buyout and Special Situations. We prefer proven unit economics, clear operating levers and aligned governance.",
  },
  {
    q: "How fast is your process?",
    a: "Typical process takes 3–6 weeks from first call to signed term sheet, depending on data readiness and complexity.",
  },
  {
    q: "Do you lead rounds?",
    a: "Yes. We commonly lead and structure the round, bring co-investors when helpful, and support follow-on capital.",
  },
  {
    q: "How do you support portfolio companies?",
    a: "Operating playbooks in pricing, GTM, FP&A, talent, and M&A. You’ll work directly with partners and our operating network.",
  },
];

const lps: QA[] = [
  {
    q: "What is your target return profile?",
    a: "We target top-quartile performance with disciplined downside protection and consistent DPI across cycles.",
  },
  {
    q: "How do you manage risk?",
    a: "Position sizing, control of cash flows, conservative leverage and structured governance; we prioritize resilience over velocity.",
  },
  {
    q: "What is your edge?",
    a: "The combination of deep operating playbooks, founder alignment, and special-situations flexibility within a single platform.",
  },
  {
    q: "Reporting & transparency?",
    a: "Quarterly letters, KPI dashboards, and deal-by-deal commentary. LP portal access and ad-hoc calls on request.",
  },
];

function QAItem({
  item,
  idx,
  group,
}: {
  item: QA;
  idx: number;
  group: "founders" | "lps";
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? "is-open" : ""}`} role="group">
      <button
        className="faq-trigger"
        aria-expanded={open}
        aria-controls={`${group}-panel-${idx}`}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="faq-q">{item.q}</span>
        <span className="faq-icon" aria-hidden>
          <i className="faq-plus" />
        </span>
      </button>

      <div
        id={`${group}-panel-${idx}`}
        className="faq-panel"
        role="region"
        aria-label={item.q}
      >
        <p className="faq-a">{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="faq-header">
          <h2 className="section-title">FAQ — For Founders & LPs</h2>
          <p className="faq-kicker">
            Quick answers to common questions. If you need more detail, reach
            out — we’ll respond quickly.
          </p>
        </div>

        <div className="faq-grid">
          {/* Founders column */}
          <div className="faq-col">
            <div className="faq-card">
              <div className="faq-card-head">
                <h3 className="faq-title">For Founders</h3>
                <span className="faq-pill">Operators’ Playbooks</span>
              </div>

              <div className="faq-list" role="list">
                {founders.map((item, i) => (
                  <QAItem key={i} item={item} idx={i} group="founders" />
                ))}
              </div>
            </div>
          </div>

          {/* LPs column */}
          <div className="faq-col">
            <div className="faq-card">
              <div className="faq-card-head">
                <h3 className="faq-title">For LPs</h3>
                <span className="faq-pill">Aligned & Disciplined</span>
              </div>

              <div className="faq-list" role="list">
                {lps.map((item, i) => (
                  <QAItem key={i} item={item} idx={i} group="lps" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="faq-cta">
          <a href="#contact" className="btn btn-primary">Contact us</a>
          <a href="#insights" className="btn btn-outline">Read insights</a>
        </div>
      </div>
    </section>
  );
}