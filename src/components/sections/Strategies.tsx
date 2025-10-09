import { strategies } from "@/data/strategies";
import "@/styles/strategies.css";

export default function Strategies() {
  return (
    <section id="strategies" className="section strategies">
      <div className="container">
        <h2 className="h2">Strategies</h2>
        <p className="p mt-4 maxw-2xl">
          Flexible mandate across the capital structure to match company needs and cycle dynamics.
        </p>

        <div className="strategies-grid">
          {strategies.map((s) => (
            <div key={s.title} className="strategy-card">
              <div className="strategy-aum">{s.aum}</div>
              <div className="strategy-title">{s.title}</div>
              <p className="strategy-blurb">{s.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}