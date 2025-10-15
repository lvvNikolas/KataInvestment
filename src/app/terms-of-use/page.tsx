import type { Metadata } from "next";
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
          <h1 id="terms-title" className="h2" style={{ marginBottom: 12 }}>
            Terms of Use
          </h1>
          <p className="p" style={{ marginBottom: 24 }}>
            Last updated: <time dateTime="2025-10-15">October 15, 2025</time>
          </p>

          {/* On-page nav */}
          <nav aria-label="On this page" style={{ margin: "16px 0 28px" }}>
            <ul style={{ lineHeight: 1.9 }}>
              <li><a href="#acceptance">Acceptance of terms</a></li>
              <li><a href="#changes">Changes to terms</a></li>
              <li><a href="#use">Use of the website</a></li>
              <li><a href="#ip">Intellectual property</a></li>
              <li><a href="#no-offer">No offer / No advice</a></li>
              <li><a href="#third-party">Third-party links</a></li>
              <li><a href="#disclaimer">Disclaimers</a></li>
              <li><a href="#liability">Limitation of liability</a></li>
              <li><a href="#indemnity">Indemnification</a></li>
              <li><a href="#law">Governing law</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <hr style={{ borderColor: "rgba(255,255,255,.12)", margin: "18px 0 28px" }} />

          <section id="acceptance" style={{ marginBottom: 28 }}>
            <h2 className="h3" style={{ marginBottom: 10 }}>Acceptance of terms</h2>
            <p className="p">
              By accessing or using this website (the “Site”), you agree to be bound by these Terms of
              Use and all applicable laws and regulations. If you do not agree, you must not use the Site.
            </p>
          </section>

          <section id="changes" style={{ marginBottom: 28 }}>
            <h2 className="h3" style={{ marginBottom: 10 }}>Changes to terms</h2>
            <p className="p">
              We may revise these Terms at any time by updating this page. Your continued use of the
              Site after changes are posted constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section id="use" style={{ marginBottom: 28 }}>
            <h2 className="h3" style={{ marginBottom: 10 }}>Use of the website</h2>
            <ul className="p" style={{ lineHeight: 1.9 }}>
              <li>Use the Site only for lawful purposes and in accordance with these Terms.</li>
              <li>Do not attempt to gain unauthorized access to any portion of the Site or its systems.</li>
              <li>Do not introduce malware, attempt to reverse engineer, or disrupt operation of the Site.</li>
            </ul>
          </section>

          <section id="ip" style={{ marginBottom: 28 }}>
            <h2 className="h3" style={{ marginBottom: 10 }}>Intellectual property</h2>
            <p className="p">
              All content on the Site, including text, graphics, logos, and trademarks, is owned by or
              licensed to KATA Investment and protected by applicable intellectual property laws. You
              may not reproduce, modify, distribute, or publicly display any content without prior
              written permission.
            </p>
          </section>

          <section id="no-offer" style={{ marginBottom: 28 }}>
            <h2 className="h3" style={{ marginBottom: 10 }}>No offer / No advice</h2>
            <p className="p">
              Content on the Site is for informational purposes only and does not constitute an offer to
              sell or a solicitation to buy any securities, nor does it constitute investment, legal, tax,
              or other advice.
            </p>
          </section>

          <section id="third-party" style={{ marginBottom: 28 }}>
            <h2 className="h3" style={{ marginBottom: 10 }}>Third-party links</h2>
            <p className="p">
              The Site may contain links to third-party websites. We are not responsible for the content,
              policies, or practices of those sites, and your use of them is at your own risk.
            </p>
          </section>

          <section id="disclaimer" style={{ marginBottom: 28 }}>
            <h2 className="h3" style={{ marginBottom: 10 }}>Disclaimers</h2>
            <p className="p">
              The Site is provided on an “as is” and “as available” basis without warranties of any kind,
              whether express or implied, including but not limited to merchantability, fitness for a
              particular purpose, and non-infringement.
            </p>
          </section>

          <section id="liability" style={{ marginBottom: 28 }}>
            <h2 className="h3" style={{ marginBottom: 10 }}>Limitation of liability</h2>
            <p className="p">
              To the maximum extent permitted by law, KATA Investment shall not be liable for any direct,
              indirect, incidental, special, consequential, or punitive damages arising from or related
              to your use of the Site.
            </p>
          </section>

          <section id="indemnity" style={{ marginBottom: 28 }}>
            <h2 className="h3" style={{ marginBottom: 10 }}>Indemnification</h2>
            <p className="p">
              You agree to indemnify and hold harmless KATA Investment and its affiliates from any claims,
              losses, liabilities, damages, costs, or expenses arising out of your use of the Site or
              violation of these Terms.
            </p>
          </section>

          <section id="law" style={{ marginBottom: 28 }}>
            <h2 className="h3" style={{ marginBottom: 10 }}>Governing law</h2>
            <p className="p">
              These Terms are governed by the laws of the applicable jurisdiction without regard to
              conflict of law principles. Venue for any dispute shall lie in the appropriate courts of
              such jurisdiction.
            </p>
          </section>

          <section id="contact">
            <h2 className="h3" style={{ marginBottom: 10 }}>Contact</h2>
            <p className="p">
              If you have questions about these Terms, please contact us via the{" "}
              <a href="/#contact">Contact</a> section or by mail at:  
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