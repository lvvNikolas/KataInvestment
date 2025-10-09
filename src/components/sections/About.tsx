import "@/styles/about.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-left">
          <h2 className="h2">Independent. Long-term. Aligned.</h2>

          <p className="p mt-6">
            KATA Investment is an independent investment firm backing exceptional founders and management teams.
            Our model emphasizes partnership, governance, and disciplined underwriting across cycles.
          </p>

          <div className="about-stats mt-8">
            {[
              { k: "Years of experience", v: "10+" },
              { k: "Sectors", v: "Tech, HC, Fin, Industrials" },
              { k: "Offices", v: "Helsinki • (Remote)" },
            ].map((s) => (
              <div key={s.k} className="about-card">
                <div className="about-card-key">{s.k}</div>
                <div className="about-card-value">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-right">
          <div className="about-principles">
            <h3 className="h3">Investment principles</h3>
            <ul>
              <li>Cash flow and unit economics first</li>
              <li>Alignment through governance & incentives</li>
              <li>Operational value-creation playbooks</li>
              <li>Risk management and downside protection</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}