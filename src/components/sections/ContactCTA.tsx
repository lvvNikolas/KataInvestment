"use client";
import "@/styles/contact.css";

export default function ContactCTA() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div className="contact-left">
          <h2 className="h2">Building something enduring?</h2>
          <p className="p mt-4 maxw-2xl">
            We partner with founders and CEOs seeking patient, aligned capital.
            Share your opportunity and we’ll respond quickly.
          </p>
        </div>

        <div className="contact-right">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="contact-form"
            aria-label="Contact form"
          >
            <div className="contact-fields">
              <input className="field" required placeholder="Full name" aria-label="Full name" />
              <input className="field" required type="email" placeholder="Email" aria-label="Email" />
              <input className="field" placeholder="Company" aria-label="Company" />
              <textarea className="field" required rows={4} placeholder="Tell us about the opportunity" aria-label="Message" />
            </div>

            <button className="btn btn-primary contact-submit" type="submit">
              Send message
            </button>

            <p className="p contact-legal">
              By submitting, you agree to our terms and privacy policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}