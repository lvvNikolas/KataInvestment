import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — KATA Investment",
  description:
    "Privacy Policy for KATA Investment. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main id="top">
      {/* Global navigation */}
      <NavBar />

      <section className="section compact" aria-labelledby="privacy-title">
        <div className="container" style={{ maxWidth: 860 }}>
          <header>
            <h1 id="privacy-title" className="h2" style={{ marginBottom: 12 }}>
              Privacy Policy
            </h1>
            <p className="p" style={{ marginBottom: 24 }}>
              Last updated: <time dateTime="2025-10-15">October 15, 2025</time>
            </p>
          </header>

          <p className="p" style={{ marginBottom: 28 }}>
            This Privacy Policy describes how <strong>KATA Investment</strong> (“we”, “us”, or
            “our”) collects, uses, and safeguards information obtained through our website and
            related services.
          </p>

          <nav aria-label="On this page" style={{ margin: "16px 0 28px" }}>
            <ul style={{ lineHeight: 1.9 }}>
              <li><Link href="#information">Information we collect</Link></li>
              <li><Link href="#use">How we use your information</Link></li>
              <li><Link href="#sharing">Disclosure of information</Link></li>
              <li><Link href="#security">Data security</Link></li>
              <li><Link href="#rights">Your rights</Link></li>
              <li><Link href="#changes">Changes to this policy</Link></li>
              <li><Link href="#contact">Contact us</Link></li>
            </ul>
          </nav>

          <hr style={{ borderColor: "rgba(255,255,255,.12)", margin: "18px 0 28px" }} />

          <section id="information" aria-labelledby="information-title" style={{ marginBottom: 28 }}>
            <h2 id="information-title" className="h3" style={{ marginBottom: 10 }}>
              Information we collect
            </h2>
            <p className="p">
              We may collect personal information that you voluntarily provide, such as your name,
              email address, company name, and any details shared through our contact forms.
              We also automatically collect limited technical data such as browser type, device
              information, and anonymized analytics through cookies.
            </p>
          </section>

          <section id="use" aria-labelledby="use-title" style={{ marginBottom: 28 }}>
            <h2 id="use-title" className="h3" style={{ marginBottom: 10 }}>
              How we use your information
            </h2>
            <ul className="p" style={{ lineHeight: 1.9 }}>
              <li>To respond to inquiries and provide requested information.</li>
              <li>To improve our website, content, and communication efficiency.</li>
              <li>To meet legal or regulatory obligations.</li>
              <li>To protect our rights, security, and operations.</li>
            </ul>
          </section>

          <section id="sharing" aria-labelledby="sharing-title" style={{ marginBottom: 28 }}>
            <h2 id="sharing-title" className="h3" style={{ marginBottom: 10 }}>
              Disclosure of information
            </h2>
            <p className="p">
              We do not sell or rent your personal information. We may share limited data with
              trusted service providers who assist us in operating our business (for example,
              analytics or hosting), under strict confidentiality agreements.
            </p>
          </section>

          <section id="security" aria-labelledby="security-title" style={{ marginBottom: 28 }}>
            <h2 id="security-title" className="h3" style={{ marginBottom: 10 }}>
              Data security
            </h2>
            <p className="p">
              We use appropriate administrative, technical, and physical safeguards to protect
              your data against unauthorized access, disclosure, or misuse. However, please note
              that no online transmission or storage system is completely secure.
            </p>
          </section>

          <section id="rights" aria-labelledby="rights-title" style={{ marginBottom: 28 }}>
            <h2 id="rights-title" className="h3" style={{ marginBottom: 10 }}>
              Your rights
            </h2>
            <p className="p">
              Depending on your jurisdiction, you may have the right to access, correct, delete,
              or restrict the processing of your personal data. You can contact us to exercise
              these rights or withdraw consent for certain uses.
            </p>
          </section>

          <section id="changes" aria-labelledby="changes-title" style={{ marginBottom: 28 }}>
            <h2 id="changes-title" className="h3" style={{ marginBottom: 10 }}>
              Changes to this policy
            </h2>
            <p className="p">
              We may update this Privacy Policy periodically. Any significant changes will be
              posted on this page with a new “Last updated” date.
            </p>
          </section>

          <section id="contact" aria-labelledby="contact-title">
            <h2 id="contact-title" className="h3" style={{ marginBottom: 10 }}>
              Contact us
            </h2>
            <p className="p">
              If you have any questions or concerns regarding this Privacy Policy, please contact
              us through the <Link href="/#contact">Contact</Link> section or by mail at:
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