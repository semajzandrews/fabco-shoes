import { BIZ } from "../lib/data";
import { IconPhone, IconArrow } from "./Icons";

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--paper)", paddingTop: "clamp(48px,7vh,80px)", paddingBottom: 30 }}>
      <div className="wrap">
        {/* CTA band */}
        <div className="tile" style={{ background: "linear-gradient(150deg,var(--blue),var(--blue-3))", border: "none", padding: "clamp(26px,4vw,44px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 22, flexWrap: "wrap" }}>
          <div>
            <h2 style={{ fontSize: "clamp(24px,3.4vw,36px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.04 }}>
              The right fit is a short walk away.
            </h2>
            <p style={{ color: "rgba(255,255,255,.88)", fontSize: 15.5, marginTop: 8, maxWidth: 440, lineHeight: 1.5 }}>
              Stop by Fabco Shoes on Main Street in the City of Orange and try on the whole family's next pair.
            </p>
          </div>
          <a href={BIZ.phoneHref} className="btn" style={{ background: "#fff", color: "var(--blue-2)", flexShrink: 0 }}>
            <IconPhone width={17} height={17} /> Call {BIZ.phone}
          </a>
        </div>

        {/* footer grid */}
        <div className="foot-grid" style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 28 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
              <span style={{ width: 36, height: 36, borderRadius: 11, background: "var(--blue)", display: "grid", placeItems: "center" }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 5h11M7 12h8M7 5v15" /></svg>
              </span>
              <span style={{ fontWeight: 900, fontSize: 19, color: "#fff" }}>Fabco<span style={{ color: "var(--blue)" }}>.</span> Shoes</span>
            </div>
            <p style={{ marginTop: 14, color: "rgba(244,246,250,.62)", fontSize: 14, lineHeight: 1.6, maxWidth: 320 }}>
              Affordable footwear for the whole family, in the City of Orange since the
              name has stood for value, 1953.
            </p>
          </div>

          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(244,246,250,.5)", fontWeight: 700, marginBottom: 14 }}>Find us</div>
            <address style={{ fontStyle: "normal", fontSize: 14, lineHeight: 1.7, color: "rgba(244,246,250,.82)" }}>
              {BIZ.address}<br />
              {BIZ.city}, {BIZ.state} {BIZ.zip}<br />
              <a href={BIZ.phoneHref} style={{ color: "#fff" }}>{BIZ.phone}</a>
            </address>
          </div>

          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(244,246,250,.5)", fontWeight: 700, marginBottom: 14 }}>Hours</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.7, color: "rgba(244,246,250,.82)" }}>
              <div>Mon &ndash; Sat &nbsp;<span className="fb">10:00 AM – 7:30 PM</span></div>
              <div>Sunday &nbsp;<span className="fb">11:00 AM – 6:00 PM</span></div>
            </div>
            <a href="#floor" style={{ marginTop: 14, display: "inline-flex", alignItems: "center", gap: 7, color: "#fff", fontSize: 13.5, fontWeight: 700 }}>
              Back to the floor <IconArrow width={14} height={14} />
            </a>
          </div>
        </div>

        {/* baseline */}
        <div style={{ marginTop: 34, paddingTop: 20, borderTop: "1px solid rgba(244,246,250,.12)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
          <span style={{ fontSize: 12.5, color: "rgba(244,246,250,.5)" }}>
            © {new Date().getFullYear()} Fabco Shoes · {BIZ.city}, NJ
          </span>
          <a href="https://bysemaj.com" target="_blank" rel="noopener"
            style={{ fontSize: 12.5, color: "rgba(244,246,250,.55)", display: "inline-flex", alignItems: "center", gap: 7 }}>
            built
            <span style={{ color: "#fff", fontWeight: 700, borderBottom: "1px solid var(--blue)", paddingBottom: 1 }}>bysemaj.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
