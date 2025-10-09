"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import "@/styles/header.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#strategies", label: "Strategy" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Закрытие меню при клике вне или ESC
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="#" className="logo">
          <img src="/logos/kata-mark.svg" alt="KATA" width={28} height={28} />
          <span className="logo-text">KATA Investment</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="nav">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          <Link href="#contact" className="btn btn-primary">
            Get in touch
          </Link>
        </nav>

        {/* Burger button */}
        <button
          className="burger"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mobile" ref={menuRef}>
          <div className="container mobile-inner">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary cta"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}