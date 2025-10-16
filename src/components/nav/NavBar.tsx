"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "@/styles/header.css";

type NavItem = { href: `#${string}`; label: string };

const links: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#strategies", label: "Strategy" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<NavItem["href"]>("#about");
  const sheetRef = useRef<HTMLDivElement>(null);

  // Lock body scroll while menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on outside click / Esc
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!open) return;
      const node = sheetRef.current;
      if (node && !node.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Highlight current section
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (targets.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (top?.target?.id) setActive(("#" + top.target.id) as NavItem["href"]);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.2, 0.4, 0.6] }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const onNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="header" role="banner">
      <div className="container header-inner">
        {/* Brand */}
        <Link href="/" className="logo" aria-label="KATA Investment">
          <Image
            src="/logos/kata-mark.svg"
            alt="KATA"
            width={22}
            height={22}
            priority
          />
          <span className="logo-text">KATA Investment</span>
        </Link>

        {/* Desktop nav (centered) */}
        <nav className="nav" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={onNavClick(l.href)}
              className={active === l.href ? "active" : undefined}
              aria-current={active === l.href ? "page" : undefined}
            >
              <span>{l.label}</span>
            </a>
          ))}
        </nav>

        {/* Desktop action (right) */}
        <div className="nav-login">
          <Link href="/login" className="login-btn">
            Login
          </Link>
        </div>

        {/* Mobile burger (always at far right) */}
        <button
          className="burger"
          data-open={open ? "true" : "false"}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {/* hamburger */}
          <svg
            className="icon icon-hamb"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          {/* close */}
          <svg
            className="icon icon-close"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6l12 12M18 6l-12 12" />
          </svg>
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="mobile"
          onClick={() => setOpen(false)} // click on dark backdrop closes
          aria-hidden="true"
        >
          <div
            id="mobile-nav"
            className="mobile-sheet"
            ref={sheetRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            onClick={(e) => e.stopPropagation()} // keep clicks inside
          >
            <button
              className="mobile-close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <div className="mobile-inner">
              <div className="mobile-nav">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={onNavClick(l.href)}
                    className={active === l.href ? "active" : undefined}
                  >
                    {l.label}
                  </a>
                ))}
                <div className="mobile-divider" />
                <Link href="/login" className="login-btn mobile-login" onClick={() => setOpen(false)}>
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}