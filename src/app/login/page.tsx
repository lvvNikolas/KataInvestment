"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "@/styles/login.css";

export default function LoginPage() {
  const [show, setShow] = useState(false);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    await new Promise((r) => setTimeout(r, 900)); // mock request
    setPending(false);
    // router.push("/dashboard");
  }

  return (
    <main className="login-page" aria-labelledby="login-title">
      {/* Background video */}
      <video
        className="login-bg"
        src="/media/earth.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
      <div className="login-overlay" aria-hidden />

      {/* Glass card */}
      <section className="login-card" role="region" aria-label="Sign in">
        <header className="login-head">
          <div className="login-brand">
            <Image
              src="/logos/kata-mark.svg"
              alt="KATA logo"
              width={28}
              height={28}
              className="login-logo"
              priority
            />
            <span className="login-brand-text">KATA Investment</span>
          </div>
          <h1 id="login-title" className="login-title">
            Sign in to your account
          </h1>
        </header>

        <form onSubmit={onSubmit} className="login-form" noValidate>
          <label className="login-field">
            <span className="login-label">Email</span>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              autoComplete="email"
              inputMode="email"
            />
          </label>

          <label className="login-field">
            <span className="login-label">Password</span>
            <div className="pwd-wrap">
              <input
                name="password"
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                className="pwd-toggle"
                aria-label={show ? "Hide password" : "Show password"}
                onClick={() => setShow((v) => !v)}
              >
                {show ? (
                  // eye-off
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path
                      d="M3 3l18 18M10.58 10.58A3 3 0 0012 15a3 3 0 002.42-4.42M9.88 5.08A10.63 10.63 0 0112 5c5.52 0 9.5 4.5 9.5 7s-3.98 7-9.5 7c-1.7 0-3.3-.37-4.73-1.03"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  // eye
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path
                      d="M12 5c5.52 0 9.5 4.5 9.5 7s-3.98 7-9.5 7S2.5 14.5 2.5 12 6.48 5 12 5z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                )}
              </button>
            </div>
          </label>

          <div className="login-aux">
            <label className="remember">
              <input type="checkbox" name="remember" /> <span>Remember me</span>
            </label>
            <Link href="/forgot-password" className="login-link">
              Forgot password
            </Link>
          </div>

          <button
            className="login-submit"
            type="submit"
            disabled={pending}
            aria-busy={pending}
          >
            {pending ? "Signing in…" : "Login"}
          </button>

          <p className="login-legal">
            By signing in, you agree to our{" "}
            <Link className="login-link" href="/terms-of-use">
              Terms
            </Link>{" "}
            and{" "}
            <Link className="login-link" href="/privacy-policy">
              Privacy Policy
            </Link>
            .
          </p>
        </form>
      </section>
    </main>
  );
}