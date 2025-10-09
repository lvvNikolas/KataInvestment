import { insights } from "@/data/insights";
import "@/styles/insights.css";

export default function Insights() {
  return (
    <section id="insights" className="section insights">
      <div className="container">
        <h2 className="h2">Insights</h2>

        <div className="insights-grid">
          {insights.map((i) => (
            <a key={i.title} href={i.href} className="insight-card">
              <div className="insight-date">{i.date}</div>
              <div className="insight-title">{i.title}</div>
              <p className="insight-summary">{i.summary}</p>
              <div className="insight-read">Read →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}