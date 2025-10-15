import type { Metadata } from "next";
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
          <h1 id="privacy-title" className="h2" style={{ marginBottom: 12 }}>
            Privacy Policy
          </h1>
          <p className="p" style={{ marginBottom: 24 }}>
            Last updated: <time dateTime="2025-10-15">October 15, 2025</time>
          </p>

          <div className="p" style={{ marginBottom: 28 }}>
            This Privacy Policy describes how <strong>KATA Investment</strong> (“we”, “us”, or
            “our”) collects, uses, and safeguards information obtained through our website and
            related services.
          </div>

          <nav aria-label="On this page" style={{ margin: "16px 0 28px" }}>
            <ul style={{ lineHeight: 1.9 }}>
              <li><a href="#information">Information we collect</a></li>
              <li><a href="#use">How we use your information</a></li>
              <li><a href="#sharing">Disclosure of information</a></li>
              <li><a href="#security">Data security</a></li>
              <li><a href="#rights">Your rights</a></li>
              <li><a href="#changes">Changes to this policy</a></li>
              <li><a href="#contact">Contact us</a></li>
            </ul>
          </nav>

          <hr style={{ borderColor: "rgba(255,255,255,.12)", margin: "18px 0 28px" }} />

          <section id="information" style={{ marginBottom: 28 }}>
            <h2 className="h3" style={{ marginBottom: 10 }}>Information we collect</h2>
            <p className="p">
              We may collect personal information that you voluntarily provide, such as your name,
              email address, company name, and any details shared through our contact forms.  
              We also automatically collect limited technical data such as browser type, device
              information, and anonymized analytics through cookies.
            </p>
          </section>

          <section id="use" style={{ marginBottom: 28 }}>
            <h2 className="h3" style={{ marginBottom: 10 }}>How we use your information</h2>
            <ul className="p" style={{ lineHeight: 1.9 }}>
              <li>To respond to inquiries and provide requested information.</li>
              <li>To improve our website, content, and communication efficiency.</li>
              <li>To meet legal or regulatory obligations.</li>
              <li>To protect our rights, security, and operations.</li>
            </ul>
          </section>

          <section id="sharing" style={{ marginBottom: 28 }}>
            <h2 className="h3" style={{ marginBottom: 10 }}>Disclosure of information</h2>
            <p className="p">
              We do not sell or rent your personal information.  
              We may share limited data with trusted service providers who assist us in operating
              our business (for example, analytics or hosting), under strict confidentiality
              agreements.
            </p>
          </section>

          <section id="security" style={{ marginBottom: 28 }}>
            <h2 className="h3" style={{ marginBottom: 10 }}>Data security</h2>
            <p className="p">
              We use appropriate administrative, technical, and physical safeguards to protect
              your data against unauthorized access, disclosure, or misuse.  
              However, please note that no online transmission or storage system is completely
              secure.
            </p>
          </section>

          <section id="rights" style={{ marginBottom: 28 }}>
            <h2 className="h3" style={{ marginBottom: 10 }}>Your rights</h2>
            <p className="p">
              Depending on your jurisdiction, you may have the right to access, correct, delete, or
              restrict the processing of your personal data.  
              You can contact us to exercise these rights or withdraw consent for certain uses.
            </p>
          </section>

          <section id="changes" style={{ marginBottom: 28 }}>
            <h2 className="h3" style={{ marginBottom: 10 }}>Changes to this policy</h2>
            <p className="p">
              We may update this Privacy Policy periodically. Any significant changes will be
              posted on this page with a new “Last updated” date.
            </p>
          </section>

          <section id="contact">
            <h2 className="h3" style={{ marginBottom: 10 }}>Contact us</h2>
            <p className="p">
              If you have any questions or concerns regarding this Privacy Policy, please contact
              us through the <a href="/#contact">Contact</a> section or by mail at:  
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