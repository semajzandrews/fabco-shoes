import Reveal from "./Reveal";
import { IconFamily, IconTag, IconClock, IconSneaker } from "./Icons";

const POINTS = [
  { Icon: IconFamily, title: "Built for the whole family", body: "One stop for the kids' new school shoes, your work boots and grandma's comfortable walkers. Nobody gets left out of the cart." },
  { Icon: IconTag, title: "Prices that stay fair", body: "Affordable footwear has been the promise since 1953. Real styles at neighborhood prices, with BOGO deals on select pairs." },
  { Icon: IconSneaker, title: "Try it on, today", body: "No waiting on shipping or guessing a size online. Walk in on Main Street, try the fit, and leave wearing them." },
  { Icon: IconClock, title: "Open seven days", body: "Late evenings Monday through Saturday and open on Sundays too, so there is always time to stop in after work or church." },
];

export default function Why() {
  return (
    <section id="why" style={{ padding: "clamp(54px,8vh,96px) 0", background: "var(--paper-2)" }}>
      <div className="wrap">
        <div className="sec-head">
          <Reveal><span className="kick">Why Fabco</span></Reveal>
          <Reveal delay={60}>
            <h2 className="sec-title">A neighborhood shoe store that just works.</h2>
          </Reveal>
        </div>

        <div className="why-bento" style={{ marginTop: 34, display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
          {POINTS.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 70}>
              <div className="tile tile-pad tile-hover" style={{ display: "flex", gap: 16, alignItems: "flex-start", height: "100%" }}>
                <span style={{ flexShrink: 0, width: 46, height: 46, borderRadius: 13, background: "var(--sky)", color: "var(--blue-2)", display: "grid", placeItems: "center" }}>
                  <p.Icon width={23} height={23} />
                </span>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.01em" }}>{p.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--ink-2)", marginTop: 7 }}>{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
