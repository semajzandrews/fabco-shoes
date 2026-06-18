"use client";
import { useEffect, useState } from "react";
import { BIZ } from "../lib/data";
import { IconPhone } from "./Icons";

const LINKS = [
  { label: "The Floor", href: "#floor" },
  { label: "Fits", href: "#fits" },
  { label: "Why Fabco", href: "#why" },
  { label: "Visit", href: "#visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="eased"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        padding: scrolled ? "10px 0" : "16px 0",
        background: scrolled ? "rgba(244,246,250,0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(1.3)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <nav className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#top" aria-label="Fabco Shoes home" style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <Mark />
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontWeight: 900, fontSize: 19, letterSpacing: "-0.02em", color: "var(--ink)" }}>
              Fabco<span style={{ color: "var(--blue)" }}>.</span>
            </span>
            <span style={{ fontSize: 9.5, letterSpacing: "0.28em", color: "var(--mute)", fontWeight: 700, textTransform: "uppercase", marginTop: 3 }}>
              Shoes · Orange NJ
            </span>
          </span>
        </a>

        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 30 }}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="eased nav-link"
              style={{ fontSize: 14, fontWeight: 600, color: "var(--ink-2)" }}>
              {l.label}
            </a>
          ))}
          <a href={BIZ.phoneHref} className="btn btn-blue" style={{ padding: "11px 18px", fontSize: 14 }}>
            <IconPhone width={16} height={16} /> Call the store
          </a>
        </div>

        {/* mobile: compact call icon + menu toggle */}
        <div className="nav-mobile" style={{ display: "none", alignItems: "center", gap: 10 }}>
          <a href={BIZ.phoneHref} aria-label="Call Fabco Shoes" className="eased"
            style={{ width: 46, height: 46, borderRadius: 999, background: "var(--blue)", color: "#fff", display: "grid", placeItems: "center", boxShadow: "0 8px 22px -10px rgba(31,122,224,.8)" }}>
            <IconPhone width={19} height={19} />
          </a>
          <button aria-label="Menu" onClick={() => setOpen((v) => !v)}
            style={{ width: 46, height: 46, borderRadius: 14, background: "var(--card)", border: "1px solid var(--line-2)", display: "grid", placeItems: "center" }}>
            <span style={{ display: "block", width: 18, height: 2, background: "var(--ink)", boxShadow: "0 -5px 0 var(--ink), 0 5px 0 var(--ink)" }} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="wrap" style={{ marginTop: 10 }}>
          <div className="tile tile-pad" style={{ display: "grid", gap: 4 }}>
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                style={{ padding: "12px 8px", fontSize: 17, fontWeight: 700, borderBottom: "1px solid var(--line)" }}>
                {l.label}
              </a>
            ))}
            <a href={BIZ.phoneHref} className="btn btn-blue" style={{ marginTop: 10 }}>
              <IconPhone width={16} height={16} /> {BIZ.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Mark() {
  // bespoke shoe-sole "F" mark
  return (
    <span style={{ width: 38, height: 38, borderRadius: 12, background: "var(--blue)", display: "grid", placeItems: "center", boxShadow: "0 8px 20px -10px rgba(31,122,224,.85)" }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 5h11M7 12h8M7 5v15" />
      </svg>
    </span>
  );
}
