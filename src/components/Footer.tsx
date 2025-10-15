"use client";

import "@/styles/footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const nav = {
    Company: [
      { label: "Our Firm", href: "#about" },
      { label: "Strategy", href: "#strategies" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Insights", href: "#insights" },
      { label: "Contact", href: "#contact" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms-of-use" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Disclosures", href: "/disclosures" },
    ],
  };

  return (
    <footer className="footer" aria-labelledby="footer-title">
      <div className="container">
        <div className="footer-glow" aria-hidden />

        <div className="footer-grid footer-grid--3">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#top" className="footer-logo" aria-label="KATA Investment — back to top">
              <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
                <defs>
                  <linearGradient id="katag" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#94F0FF" />
                    <stop offset="1" stopColor="#CDB67D" />
                  </linearGradient>
                </defs>
                <rect width="24" height="24" rx="6" fill="url(#katag)" opacity=".25" />
                <path d="M6 16l6-8 6 8" stroke="url(#katag)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              </svg>
              <span className="footer-wordmark">KATA Investment</span>
            </a>

            <p className="footer-tagline">
              Patient, aligned capital for builders of enduring companies.
            </p>

            <ul className="footer-social" aria-label="Social links">
              <li>
                <a href="#" aria-label="LinkedIn" className="footer-social-link">
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path
                      d="M6.5 9.5H9v9H6.5v-9ZM7.7 5.5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 7.7 5.5Zm4.3 4h2.4v1.25h.03c.33-.6 1.14-1.23 2.35-1.23 2.5 0 2.97 1.52 2.97 3.5V18.5H17.6v-4.2c0-1 0-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2v4.3H12V9.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" aria-label="X (Twitter)" className="footer-social-link">
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path
                      d="M16.4 4h2.3l-5 5.7L20 20h-4.9l-3.8-5-4.4 5H4.6L10 13.7 4 4h5l3.4 4.7L16.4 4Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Office — Irvine, CA */}
          <address className="footer-office" aria-label="Primary office">
            <h3 className="footer-title">Office</h3>
            <div className="footer-address">
              <div className="footer-address-lines">
                <span>Irvine, CA</span>
                <span>40 Pacifica Street</span>
              </div>
              <a
                href="tel:+15623309823"
                className="footer-phone"
                aria-label="Call +1 562 330 98 23"
              >
                +1&nbsp;562&nbsp;330&nbsp;98&nbsp;23
              </a>
              <div className="footer-actions">
                <a
                  href="https://maps.google.com/?q=40%20Pacifica%20Street%2C%20Irvine%2C%20CA"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-small-link"
                >
                  Get directions →
                </a>
              </div>
            </div>
          </address>

          {/* Company + Legal */}
          <div className="footer-colwrap">
            <nav className="footer-col" aria-labelledby="footer-company">
              <h3 id="footer-company" className="footer-title">Company</h3>
              <ul className="footer-links">
                {nav.Company.map((l) => (
                  <li key={l.label}><a className="footer-link" href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </nav>

            <nav className="footer-col" aria-labelledby="footer-legal">
              <h3 id="footer-legal" className="footer-title">Legal</h3>
              <ul className="footer-links">
                {nav.Legal.map((l) => (
                  <li key={l.label}><a className="footer-link" href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">© {year} KATA Investment. All rights reserved.</p>
          <div className="footer-bottom-links" role="navigation" aria-label="Footer secondary">
            <a href="#" className="footer-small-link">Privacy</a>
            <a href="#" className="footer-small-link">Terms</a>
            <a href="#top" className="footer-small-link">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}