"use client";
import { useCallback, useEffect, useRef, useState } from "react";

// THE SIZE RUNNER — the signature. A family-size scale; dragging the thumb across
// it swaps the shoe + copy, encoding "we carry every size, the whole household."
type Step = {
  size: string;
  who: string;
  line: string;
  img: string;
  alt: string;
  tone: string;
};

const STEPS: Step[] = [
  { size: "1", who: "Little kids", line: "First school shoes and tiny sneakers, sized right.", img: "/img/kids-pair.jpg", alt: "Kids sneakers on a curb", tone: "#F4A03D" },
  { size: "4", who: "Big kids", line: "Growing feet, growing styles, prices that stay kind.", img: "/img/box-open.jpg", alt: "Black, white and orange low sneakers", tone: "#E9622E" },
  { size: "7", who: "Women", line: "Sandals, flats and runners for the everyday walk.", img: "/img/sandals-tan.jpg", alt: "Tan two-strap sandals", tone: "#B08B5C" },
  { size: "9", who: "Everyday", line: "The white pair you actually reach for every morning.", img: "/img/running-blue.jpg", alt: "White and orange running sneaker", tone: "#1F7AE0" },
  { size: "11", who: "Men", line: "Boots for work, a clean dress shoe for Sunday.", img: "/img/boots-tan.jpg", alt: "Brown leather chukka boots", tone: "#9A5A2B" },
  { size: "13", who: "Big men", line: "Hard-to-find larger sizes carried in store, not special-ordered.", img: "/img/dress-oxford.jpg", alt: "Brown leather monk-strap dress shoes", tone: "#7A4A22" },
];

export default function SizeRunner() {
  const [i, setI] = useState(3);
  const [dragging, setDragging] = useState(false);
  const [reduced, setReduced] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const idleRef = useRef<number | null>(null);
  const dirRef = useRef(1);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // idle auto-sweep so it lives untouched
  useEffect(() => {
    if (reduced) return;
    let active = true;
    const tick = () => {
      if (!active) return;
      if (!dragging) {
        setI((prev) => {
          let n = prev + dirRef.current;
          if (n >= STEPS.length - 1) dirRef.current = -1;
          if (n <= 0) dirRef.current = 1;
          n = Math.max(0, Math.min(STEPS.length - 1, n));
          return n;
        });
      }
      idleRef.current = window.setTimeout(tick, 2200);
    };
    idleRef.current = window.setTimeout(tick, 2400);
    return () => {
      active = false;
      if (idleRef.current) clearTimeout(idleRef.current);
    };
  }, [dragging, reduced]);

  const setFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const t = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
    setI(Math.round(t * (STEPS.length - 1)));
  }, []);

  const onDown = (e: React.PointerEvent) => {
    setDragging(true);
    (e.target as Element).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    setFromClientX(e.clientX);
  };
  const onUp = () => setDragging(false);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") { setI((v) => Math.min(STEPS.length - 1, v + 1)); e.preventDefault(); }
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") { setI((v) => Math.max(0, v - 1)); e.preventDefault(); }
  };

  const step = STEPS[i];
  const pct = (i / (STEPS.length - 1)) * 100;

  return (
    <div className="tile" style={{ padding: "clamp(18px,2.4vw,28px)", display: "grid", gap: 18 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <span className="kick">Find your fit</span>
        <span style={{ fontSize: 12.5, color: "var(--mute)", fontWeight: 600 }}>Drag the dot. We carry the whole household.</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 16, alignItems: "stretch" }} className="runner-grid">
        {/* shoe preview */}
        <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", minHeight: 210, background: "var(--paper-2)" }}>
          {STEPS.map((s, idx) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={s.img} src={s.img} alt={s.alt}
              style={{
                position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
                filter: "saturate(1.04) contrast(1.03)",
                opacity: idx === i ? 1 : 0,
                transform: idx === i ? "scale(1)" : "scale(1.05)",
                transition: "opacity .5s ease, transform .6s cubic-bezier(.22,.61,.36,1)",
              }} />
          ))}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 45%,rgba(12,23,38,.55))" }} />
          <div style={{ position: "absolute", left: 14, bottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 9, height: 9, borderRadius: 999, background: step.tone, boxShadow: `0 0 0 4px ${step.tone}33` }} />
            <span style={{ color: "#fff", fontWeight: 800, fontSize: 13.5, letterSpacing: "-0.01em" }}>{step.who}</span>
          </div>
        </div>

        {/* size readout */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 10, paddingInline: 4 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--mute)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Size</span>
            <span className="fb" style={{ fontSize: 52, lineHeight: 0.9, color: "var(--ink)" }}>{step.size}</span>
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.5, color: "var(--ink-2)", maxWidth: 240 }}>{step.line}</p>
        </div>
      </div>

      {/* the runner track */}
      <div
        ref={trackRef}
        role="slider"
        aria-label="Shoe size selector"
        aria-valuemin={0}
        aria-valuemax={STEPS.length - 1}
        aria-valuenow={i}
        aria-valuetext={`Size ${step.size}, ${step.who}`}
        tabIndex={0}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onKeyDown={onKey}
        style={{ position: "relative", height: 58, cursor: "grab", touchAction: "none", userSelect: "none", outline: "none" }}
      >
        {/* rail */}
        <div style={{ position: "absolute", left: 10, right: 10, top: 30, height: 4, borderRadius: 999, background: "var(--paper-2)" }} />
        <div style={{ position: "absolute", left: 10, top: 30, height: 4, borderRadius: 999, width: `calc(${pct}% - ${pct / 100 * 20}px + 10px)`, background: "linear-gradient(90deg,var(--blue),var(--blue-2))", transition: dragging ? "none" : "width .35s cubic-bezier(.22,.61,.36,1)" }} />
        {/* ticks */}
        <div style={{ position: "absolute", left: 10, right: 10, top: 0, bottom: 0 }}>
          {STEPS.map((s, idx) => {
            const left = (idx / (STEPS.length - 1)) * 100;
            const on = idx <= i;
            return (
              <button key={s.size} aria-label={`Size ${s.size}`} onClick={() => setI(idx)}
                style={{ position: "absolute", left: `${left}%`, top: 0, transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer" }}>
                <span style={{ fontSize: 11.5, fontWeight: 800, color: on ? "var(--blue-2)" : "var(--mute)", transition: "color .3s" }} className="fb">{s.size}</span>
                <span style={{ width: idx === i ? 0 : 7, height: idx === i ? 0 : 7, borderRadius: 999, background: on ? "var(--blue)" : "var(--line-2)", transition: "all .25s", marginTop: idx === i ? 7 : 11 }} />
              </button>
            );
          })}
        </div>
        {/* thumb */}
        <div aria-hidden style={{ position: "absolute", left: `calc(10px + ${pct / 100} * (100% - 20px))`, top: 30, transform: "translate(-50%,-50%)", width: 26, height: 26, borderRadius: 999, background: "#fff", border: "3px solid var(--blue)", boxShadow: "0 6px 16px -6px rgba(31,122,224,.8)", transition: dragging ? "none" : "left .35s cubic-bezier(.22,.61,.36,1)", display: "grid", placeItems: "center" }}>
          <span style={{ width: 7, height: 7, borderRadius: 999, background: "var(--blue)" }} />
        </div>
      </div>
    </div>
  );
}
