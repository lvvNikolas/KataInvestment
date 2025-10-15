import Head from "next/head";

export default function CookiePolicyPage() {
  return (
    <>
      <Head>
        <title>Cookie Policy — KATA Investment</title>
        <meta
          name="description"
          content="Cookie Policy for KATA Investment. Learn how we use cookies and similar technologies."
        />
      </Head>

      <main id="top">
        {/* Hero / Header */}
        <section className="section compact" aria-labelledby="cookie-title">
          <div className="container" style={{ maxWidth: 860 }}>
            <h1 id="cookie-title" className="h2" style={{ marginBottom: 12 }}>
              Cookie Policy
            </h1>
            <p className="p" style={{ marginBottom: 24 }}>
              Last updated: <time dateTime="2025-10-15">October 15, 2025</time>
            </p>

            <div className="p" style={{ marginBottom: 28 }}>
              This Cookie Policy explains how <strong>KATA Investment</strong> (“we”, “us”, or
              “our”) uses cookies and similar technologies on our website. It should be read
              together with our Privacy Policy.
            </div>

            {/* Table of contents */}
            <nav aria-label="On this page" style={{ margin: "16px 0 28px" }}>
              <ul style={{ lineHeight: 1.9 }}>
                <li><a href="#what-are-cookies">What are cookies?</a></li>
                <li><a href="#how-we-use">How we use cookies</a></li>
                <li><a href="#types">Types of cookies we use</a></li>
                <li><a href="#manage">How to manage cookies</a></li>
                <li><a href="#changes">Changes to this Policy</a></li>
                <li><a href="#contact">Contact us</a></li>
              </ul>
            </nav>

            <hr style={{ borderColor: "rgba(255,255,255,.12)", margin: "18px 0 28px" }} />

            <section id="what-are-cookies" style={{ marginBottom: 28 }}>
              <h2 className="h3" style={{ marginBottom: 10 }}>What are cookies?</h2>
              <p className="p">
                Cookies are small text files that are stored on your device when you visit a
                website. They are widely used to make websites work, or to work more efficiently,
                as well as to provide information to the site owners.
              </p>
            </section>

            <section id="how-we-use" style={{ marginBottom: 28 }}>
              <h2 className="h3" style={{ marginBottom: 10 }}>How we use cookies</h2>
              <p className="p">
                We use cookies to enable essential functionality, remember your preferences, and
                understand how our site is used so that we can improve it.
              </p>
            </section>

            <section id="types" style={{ marginBottom: 28 }}>
              <h2 className="h3" style={{ marginBottom: 10 }}>Types of cookies we use</h2>
              <ul className="p" style={{ lineHeight: 1.9 }}>
                <li>
                  <strong>Strictly necessary</strong> — required for core site functionality
                  (e.g., security, load balancing). These cannot be switched off.
                </li>
                <li>
                  <strong>Performance / Analytics</strong> — help us measure traffic and usage
                  patterns to improve our services.
                </li>
                <li>
                  <strong>Functional</strong> — remember user choices and provide enhanced
                  features.
                </li>
                <li>
                  <strong>Advertising (if used)</strong> — may be set by advertising partners to
                  build a profile of your interests.
                </li>
              </ul>
            </section>

            <section id="manage" style={{ marginBottom: 28 }}>
              <h2 className="h3" style={{ marginBottom: 10 }}>How to manage cookies</h2>
              <p className="p">
                You can manage cookies through your browser settings. Most browsers allow you to
                refuse or delete cookies. Please note that blocking certain cookies may impact
                site functionality. To learn more, visit{" "}
                <a href="https://www.allaboutcookies.org/" target="_blank" rel="noreferrer">
                  allaboutcookies.org
                </a>.
              </p>
            </section>

            <section id="changes" style={{ marginBottom: 28 }}>
              <h2 className="h3" style={{ marginBottom: 10 }}>Changes to this Policy</h2>
              <p className="p">
                We may update this Cookie Policy from time to time. We encourage you to review
                this page periodically to stay informed about our use of cookies.
              </p>
            </section>

            <section id="contact">
              <h2 className="h3" style={{ marginBottom: 10 }}>Contact us</h2>
              <p className="p">
                If you have any questions about this Cookie Policy, please contact us at{" "}
                <a href="#contact">Contact</a> or by mail at: KATA Investment, 40 Pacifica Street, Irvine, CA.
              </p>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}