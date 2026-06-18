import Reveal from "./Reveal";
import SizeRunner from "./SizeRunner";
import { BIZ } from "../lib/data";
import { IconArrow, IconPin, IconTag } from "./Icons";

export default function Hero() {
  return (
    <section id="top" style={{ position: "relative", paddingTop: "clamp(104px,15vh,150px)", paddingBottom: "clamp(40px,6vh,72px)" }}>
      {/* soft blue clean-tech wash */}
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(1100px 500px at 78% -8%, rgba(31,122,224,0.13), transparent 60%), radial-gradient(700px 420px at 0% 30%, rgba(31,122,224,0.06), transparent 55%)", pointerEvents: "none" }} />
      <div className="wrap" style={{ position: "relative" }}>
        <Reveal>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "7px 14px", borderRadius: 999, background: "var(--card)", border: "1px solid var(--line)", boxShadow: "0 6px 20px -14px rgba(12,23,38,.4)" }}>
            <span style={{ width: 7, height: 7, borderRadius: 999, background: "#2BB673", boxShadow: "0 0 0 4px rgba(43,182,115,.18)" }} />
            <span style={{ fontSize: 12.5, fontWeight: 700, color: "var(--ink-2)" }}>Open on Main St · Family footwear since 1953</span>
          </div>
        </Reveal>

        <Reveal delay={70}>
          <h1 style={{ fontWeight: 900, letterSpacing: "-0.035em", lineHeight: 0.98, fontSize: "clamp(40px,8.4vw,86px)", marginTop: 22, color: "var(--ink)", maxWidth: 980 }}>
            Every size for the<br />whole family,<br />
            <span style={{ color: "var(--blue)" }}>under one roof.</span>
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p style={{ marginTop: 20, fontSize: "clamp(16px,2vw,19px)", lineHeight: 1.55, color: "var(--ink-2)", maxWidth: 560 }}>
            Sneakers, boots, dress shoes, kids and sandals, fairly priced and ready to
            try on today. Walk in on Main Street in the City of Orange and walk out in
            the right fit.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#floor" className="btn btn-blue">Shop the floor <IconArrow width={17} height={17} /></a>
            <a href="#visit" className="btn btn-ghost"><IconPin width={17} height={17} /> Get directions</a>
          </div>
        </Reveal>

        {/* bento hero mosaic */}
        <div id="fits" style={{ position: "absolute", marginTop: -90 }} />
        <div className="hero-bento" style={{ marginTop: "clamp(34px,5vh,54px)", display: "grid", gridTemplateColumns: "1.7fr 1fr", gap: 16, alignItems: "stretch" }}>
          <Reveal delay={120} className="span-runner">
            <SizeRunner />
          </Reveal>

          <div style={{ display: "grid", gridTemplateRows: "1.25fr 1fr", gap: 16 }}>
            <Reveal delay={200}>
              <div className="tile tile-hover" style={{ position: "relative", overflow: "hidden", minHeight: 180 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/hero-wall.jpg" alt="Burgundy lace-up sneaker" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(12,23,38,0) 40%,rgba(12,23,38,.6))" }} />
                <div style={{ position: "absolute", left: 16, bottom: 14, color: "#fff" }}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", opacity: .85 }}>New in</div>
                  <div style={{ fontSize: 19, fontWeight: 800, marginTop: 2 }}>This week on the wall</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="tile tile-pad tile-hover" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 10, background: "linear-gradient(160deg,var(--blue),var(--blue-3))", border: "none", color: "#fff" }}>
                <div style={{ width: 38, height: 38, borderRadius: 11, background: "rgba(255,255,255,.16)", display: "grid", placeItems: "center" }}>
                  <IconTag width={20} height={20} />
                </div>
                <div>
                  <div className="fb" style={{ fontSize: 30, fontWeight: 900, lineHeight: 1 }}>Buy 1, Get 1</div>
                  <div style={{ fontSize: 13.5, opacity: .9, marginTop: 5, lineHeight: 1.4 }}>Ask about the in-store BOGO on select styles.</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* quick facts strip */}
        <Reveal delay={160}>
          <div className="facts" style={{ marginTop: 16, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            <Fact k="70+" v="Years fitting families" />
            <Fact k="Kids → 13" v="Every size on the floor" />
            <Fact k="Main St" v={`${BIZ.city}, NJ`} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div className="tile tile-pad" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <span className="fb" style={{ fontSize: "clamp(22px,3vw,30px)", fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.02em" }}>{k}</span>
      <span style={{ fontSize: 13, color: "var(--mute)", fontWeight: 600 }}>{v}</span>
    </div>
  );
}
