import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use — KATA Investment",
  description:
    "Terms of Use for KATA Investment. Please read these terms carefully before using our website.",
};

export default function TermsOfUsePage() {
  return (
    <main id="top">
      {/* Global navigation */}
      <NavBar />

      <section className="section compact" aria-labelledby="terms-title">
        <div className="container" style={{ maxWidth: 860 }}>
          <header>
            <h1 id="terms-title" className="h2" style={{ marginBottom: 12 }}>
              Terms of Use
            </h1>
            <p className="p" style={{ marginBottom: 24 }}>
              Last updated: <time dateTime="2025-10-15">October 15, 2025</time>
            </p>
          </header>

          {/* On-page navigation */}
          <nav aria-label="On this page" style={{ margin: "16px 0 28px" }}>
            <ul style={{ lineHeight: 1.9 }}>
              <li><Link href="#acceptance">Acceptance of terms</Link></li>
              <li><Link href="#changes">Changes to terms</Link></li>
              <li><Link href="#use">Use of the website</Link></li>
              <li><Link href="#ip">Intellectual property</Link></li>
              <li><Link href="#no-offer">No offer / No advice</Link></li>
              <li><Link href="#third-party">Third-party links</Link></li>
              <li><Link href="#disclaimer">Disclaimers</Link></li>
              <li><Link href="#liability">Limitation of liability</Link></li>
              <li><Link href="#indemnity">Indemnification</Link></li>
              <li><Link href="#law">Governing law</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </nav>

          <hr style={{ borderColor: "rgba(255,255,255,.12)", margin: "18px 0 28px" }} />

          <section id="acceptance" aria-labelledby="acceptance-title" style={{ marginBottom: 28 }}>
            <h2 id="acceptance-title" className="h3" style={{ marginBottom: 10 }}>
              Acceptance of terms
            </h2>
            <p className="p">
              By accessing or using this website (the “Site”), you agree to be bound by these Terms
              of Use and all applicable laws and regulations. If you do not agree, you must not use
              the Site.
            </p>
          </section>

          <section id="changes" aria-labelledby="changes-title" style={{ marginBottom: 28 }}>
            <h2 id="changes-title" className="h3" style={{ marginBottom: 10 }}>
              Changes to terms
            </h2>
            <p className="p">
              We may revise these Terms at any time by updating this page. Your continued use of the
              Site after changes are posted constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section id="use" aria-labelledby="use-title" style={{ marginBottom: 28 }}>
            <h2 id="use-title" className="h3" style={{ marginBottom: 10 }}>
              Use of the website
            </h2>
            <ul className="p" style={{ lineHeight: 1.9 }}>
              <li>Use the Site only for lawful purposes and in accordance with these Terms.</li>
              <li>Do not attempt to gain unauthorized access to any portion of the Site or its systems.</li>
              <li>Do not introduce malware, attempt to reverse engineer, or disrupt operation of the Site.</li>
            </ul>
          </section>

          <section id="ip" aria-labelledby="ip-title" style={{ marginBottom: 28 }}>
            <h2 id="ip-title" className="h3" style={{ marginBottom: 10 }}>
              Intellectual property
            </h2>
            <p className="p">
              All content on the Site, including text, graphics, logos, and trademarks, is owned by
              or licensed to KATA Investment and protected by applicable intellectual property laws.
              You may not reproduce, modify, distribute, or publicly display any content without
              prior written permission.
            </p>
          </section>

          <section id="no-offer" aria-labelledby="no-offer-title" style={{ marginBottom: 28 }}>
            <h2 id="no-offer-title" className="h3" style={{ marginBottom: 10 }}>
              No offer / No advice
            </h2>
            <p className="p">
              Content on the Site is for informational purposes only and does not constitute an
              offer to sell or a solicitation to buy any securities, nor does it constitute
              investment, legal, tax, or other advice.
            </p>
          </section>

          <section id="third-party" aria-labelledby="third-party-title" style={{ marginBottom: 28 }}>
            <h2 id="third-party-title" className="h3" style={{ marginBottom: 10 }}>
              Third-party links
            </h2>
            <p className="p">
              The Site may contain links to third-party websites. We are not responsible for the
              content, policies, or practices of those sites, and your use of them is at your own
              risk.
            </p>
          </section>

          <section id="disclaimer" aria-labelledby="disclaimer-title" style={{ marginBottom: 28 }}>
            <h2 id="disclaimer-title" className="h3" style={{ marginBottom: 10 }}>
              Disclaimers
            </h2>
            <p className="p">
              The Site is provided on an “as is” and “as available” basis without warranties of any
              kind, whether express or implied, including but not limited to merchantability,
              fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section id="liability" aria-labelledby="liability-title" style={{ marginBottom: 28 }}>
            <h2 id="liability-title" className="h3" style={{ marginBottom: 10 }}>
              Limitation of liability
            </h2>
            <p className="p">
              To the maximum extent permitted by law, KATA Investment shall not be liable for any
              direct, indirect, incidental, special, consequential, or punitive damages arising
              from or related to your use of the Site.
            </p>
          </section>

          <section id="indemnity" aria-labelledby="indemnity-title" style={{ marginBottom: 28 }}>
            <h2 id="indemnity-title" className="h3" style={{ marginBottom: 10 }}>
              Indemnification
            </h2>
            <p className="p">
              You agree to indemnify and hold harmless KATA Investment and its affiliates from any
              claims, losses, liabilities, damages, costs, or expenses arising out of your use of the
              Site or violation of these Terms.
            </p>
          </section>

          <section id="law" aria-labelledby="law-title" style={{ marginBottom: 28 }}>
            <h2 id="law-title" className="h3" style={{ marginBottom: 10 }}>
              Governing law
            </h2>
            <p className="p">
              These Terms are governed by the laws of the applicable jurisdiction without regard to
              conflict of law principles. Venue for any dispute shall lie in the appropriate courts
              of such jurisdiction.
            </p>
          </section>

          <section id="contact" aria-labelledby="contact-title">
            <h2 id="contact-title" className="h3" style={{ marginBottom: 10 }}>
              Contact
            </h2>
            <p className="p">
              If you have questions about these Terms, please contact us via the{" "}
              <Link href="/#contact">Contact</Link> section or by mail at:
              <br />
              KATA Investment, 40 Pacifica Street, Irvine, CA.
            </p>
          </section>
        </div>
      </section>

      {/* Global footer */}
      <Footer />
    </main>
  );
}