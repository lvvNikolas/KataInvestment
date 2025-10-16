import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Disclosures — KATA Investment",
  description:
    "Legal disclosures and regulatory information for KATA Investment, including risk statements and important notices.",
};

export default function DisclosuresPage() {
  return (
    <main id="top">
      {/* Global navigation */}
      <NavBar />

      <section className="section compact" aria-labelledby="disclosures-title">
        <div className="container" style={{ maxWidth: 860 }}>
          <header>
            <h1 id="disclosures-title" className="h2" style={{ marginBottom: 12 }}>
              Disclosures
            </h1>
            <p className="p" style={{ marginBottom: 24 }}>
              Last updated: <time dateTime="2025-10-15">October 15, 2025</time>
            </p>
          </header>

          <p className="p" style={{ marginBottom: 28 }}>
            This page contains important disclosures, disclaimers, and regulatory information
            regarding <strong>KATA Investment</strong> (“we”, “us”, or “our”). Please read these
            statements carefully before engaging with our materials or services.
          </p>

          <hr style={{ borderColor: "rgba(255,255,255,.12)", margin: "18px 0 28px" }} />

          <section id="general" aria-labelledby="general-title" style={{ marginBottom: 28 }}>
            <h2 id="general-title" className="h3" style={{ marginBottom: 10 }}>
              General information
            </h2>
            <p className="p">
              KATA Investment is a private investment and advisory company based in Irvine, CA.
              The information presented on this website is for general informational purposes only
              and should not be construed as investment, legal, accounting, or tax advice.
            </p>
          </section>

          <section id="no-offer" aria-labelledby="no-offer-title" style={{ marginBottom: 28 }}>
            <h2 id="no-offer-title" className="h3" style={{ marginBottom: 10 }}>
              No offer or solicitation
            </h2>
            <p className="p">
              Nothing on this website constitutes an offer to sell or a solicitation of an offer to
              buy any security, financial instrument, or investment product. Any such offer will be
              made only through formal offering documents and in accordance with applicable laws.
            </p>
          </section>

          <section id="performance" aria-labelledby="performance-title" style={{ marginBottom: 28 }}>
            <h2 id="performance-title" className="h3" style={{ marginBottom: 10 }}>
              Past performance
            </h2>
            <p className="p">
              Past performance is not indicative of future results. Investments involve risk,
              including possible loss of principal. No representation or warranty is made that any
              investment will achieve similar returns.
            </p>
          </section>

          <section
            id="forward-looking"
            aria-labelledby="forward-looking-title"
            style={{ marginBottom: 28 }}
          >
            <h2 id="forward-looking-title" className="h3" style={{ marginBottom: 10 }}>
              Forward-looking statements
            </h2>
            <p className="p">
              Certain statements on this website may constitute “forward-looking statements.” These
              are based on current expectations and assumptions that are subject to change. Actual
              results could differ materially from those projected.
            </p>
          </section>

          <section
            id="third-party"
            aria-labelledby="third-party-title"
            style={{ marginBottom: 28 }}
          >
            <h2 id="third-party-title" className="h3" style={{ marginBottom: 10 }}>
              Third-party data and links
            </h2>
            <p className="p">
              Information obtained from third-party sources is believed to be reliable but has not
              been independently verified. Links to other websites are provided solely for
              convenience and do not imply any endorsement or responsibility for their content.
            </p>
          </section>

          <section
            id="jurisdiction"
            aria-labelledby="jurisdiction-title"
            style={{ marginBottom: 28 }}
          >
            <h2 id="jurisdiction-title" className="h3" style={{ marginBottom: 10 }}>
              Jurisdictional limitations
            </h2>
            <p className="p">
              Access to this website may be restricted in certain jurisdictions. It is your
              responsibility to comply with all applicable laws and regulations in your country or
              region.
            </p>
          </section>

          <section
            id="confidentiality"
            aria-labelledby="confidentiality-title"
            style={{ marginBottom: 28 }}
          >
            <h2 id="confidentiality-title" className="h3" style={{ marginBottom: 10 }}>
              Confidentiality and intellectual property
            </h2>
            <p className="p">
              All materials on this site are the intellectual property of KATA Investment or its
              affiliates. Reproduction, redistribution, or republication of any materials without
              prior written consent is prohibited.
            </p>
          </section>

          <section id="contact" aria-labelledby="contact-title">
            <h2 id="contact-title" className="h3" style={{ marginBottom: 10 }}>
              Contact
            </h2>
            <p className="p">
              For questions about these disclosures, please contact us through the{" "}
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