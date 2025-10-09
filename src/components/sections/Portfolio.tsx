import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import "@/styles/portfolio.css";

export default function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <div className="portfolio-header">
          <div>
            <h2 className="h2">Selected Partnerships</h2>
            <p className="p mt-4 maxw-2xl">
              We invest behind durable themes and exceptional leadership teams.
            </p>
          </div>
          <a href="#contact" className="btn btn-outline pitch-btn">
            Pitch your company
          </a>
        </div>

        <div className="portfolio-grid">
          {portfolio.map((c) => (
            <div key={c.name} className="portfolio-card">
              <div className="portfolio-logo">
                <Image
                  src={c.logo}
                  alt={c.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="portfolio-sector">{c.sector}</div>
              <div className="portfolio-name">{c.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
