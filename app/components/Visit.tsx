"use client";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { BIZ, todayStatus } from "../lib/data";
import { IconPin, IconClock, IconPhone, IconArrow } from "./Icons";

export default function Visit() {
  const [status, setStatus] = useState<{ isOpen: boolean; day: string } | null>(null);

  useEffect(() => {
    const compute = () => {
      const now = new Date();
      const s = todayStatus(now);
      setStatus({ isOpen: s.isOpen, day: s.row.day });
    };
    compute();
    const id = setInterval(compute, 60000);
    return () => clearInterval(id);
  }, []);

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(BIZ.mapsQuery)}&output=embed`;

  return (
    <section id="visit" style={{ padding: "clamp(54px,8vh,96px) 0", background: "var(--paper-2)" }}>
      <div className="wrap">
        <div className="sec-head">
          <Reveal><span className="kick">Visit the store</span></Reveal>
          <Reveal delay={60}>
            <h2 className="sec-title">Come try a pair on, on Main Street.</h2>
          </Reveal>
        </div>

        <div className="visit-grid" style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 16, alignItems: "stretch" }}>
          {/* info column */}
          <div style={{ display: "grid", gap: 16, gridAutoRows: "min-content" }}>
            <Reveal>
              <div className="tile tile-pad" style={{ display: "grid", gap: 18 }}>
                <Row Icon={IconPin} label="Address">
                  <div style={{ fontWeight: 700, color: "var(--ink)" }}>{BIZ.address}</div>
                  <div style={{ color: "var(--ink-2)" }}>{BIZ.city}, {BIZ.state} {BIZ.zip}</div>
                </Row>
                <div style={{ height: 1, background: "var(--line)" }} />
                <Row Icon={IconPhone} label="Phone">
                  <a href={BIZ.phoneHref} style={{ fontWeight: 700, color: "var(--blue-2)" }}>{BIZ.phone}</a>
                </Row>
                <div style={{ height: 1, background: "var(--line)" }} />
                <Row Icon={IconClock} label="Hours">
                  <div suppressHydrationWarning style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ width: 8, height: 8, borderRadius: 999, background: status?.isOpen ? "#2BB673" : "#C2503E", boxShadow: status?.isOpen ? "0 0 0 4px rgba(43,182,115,.18)" : "0 0 0 4px rgba(194,80,62,.16)" }} />
                    <span style={{ fontWeight: 700, color: status?.isOpen ? "#1E8A56" : "#A23D2E", fontSize: 13.5 }}>
                      {status ? (status.isOpen ? "Open now" : "Closed now") : "Hours"}
                    </span>
                  </div>
                  <div style={{ display: "grid", gap: 5 }}>
                    {BIZ.hours.map((h) => (
                      <div key={h.day} style={{ display: "flex", justifyContent: "space-between", fontSize: 13.5, color: "var(--ink-2)", paddingBlock: 1, fontWeight: status?.day === h.day ? 800 : 500 }}>
                        <span>{longDay(h.day)}</span>
                        <span className="fb">{h.open} – {h.close}</span>
                      </div>
                    ))}
                  </div>
                </Row>
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BIZ.mapsQuery)}`} target="_blank" rel="noopener" className="btn btn-blue" style={{ marginTop: 2 }}>
                  Get directions <IconArrow width={16} height={16} />
                </a>
              </div>
            </Reveal>
          </div>

          {/* map */}
          <Reveal delay={120}>
            <div className="tile" style={{ minHeight: 360, height: "100%", overflow: "hidden" }}>
              <iframe
                title="Map to Fabco Shoes on Main St, Orange NJ"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ width: "100%", height: "100%", minHeight: 360, border: 0, filter: "grayscale(0.15) contrast(1.02)" }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Row({ Icon, label, children }: { Icon: React.ElementType; label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
      <span style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 11, background: "var(--sky)", color: "var(--blue-2)", display: "grid", placeItems: "center" }}>
        <Icon width={20} height={20} />
      </span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--mute)", marginBottom: 5 }}>{label}</div>
        <div style={{ fontSize: 14.5, lineHeight: 1.5 }}>{children}</div>
      </div>
    </div>
  );
}

function longDay(d: string) {
  return { Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday", Fri: "Friday", Sat: "Saturday", Sun: "Sunday" }[d] || d;
}
