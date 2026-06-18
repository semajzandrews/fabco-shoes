import Reveal from "./Reveal";

// A tight on-the-floor mosaic of real pairs (lifestyle, street-true).
const SHOTS = [
  { img: "/img/box-open.jpg", alt: "Black, white and orange low sneakers on a ledge", tall: true },
  { img: "/img/running-blue.jpg", alt: "White and orange Air Max sneaker" },
  { img: "/img/kids-pair.jpg", alt: "Orange and blue sneakers on a curb" },
  { img: "/img/hero-wall.jpg", alt: "Burgundy lace-up sneaker", tall: true },
];

export default function Floor() {
  return (
    <section style={{ padding: "clamp(54px,8vh,96px) 0" }}>
      <div className="wrap">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
          <div className="sec-head">
            <Reveal><span className="kick">On the racks now</span></Reveal>
            <Reveal delay={60}>
              <h2 className="sec-title">Real pairs, on real feet, on Main Street.</h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p style={{ fontSize: 14, color: "var(--mute)", fontWeight: 600, maxWidth: 260 }}>
              Styles rotate often. The fresh deliveries hit the wall first, so it pays to stop by.
            </p>
          </Reveal>
        </div>

        <div className="floor-grid" style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gridAutoRows: "150px", gap: 14 }}>
          {SHOTS.map((s, idx) => (
            <Reveal key={s.img} delay={idx * 70} className={s.tall ? "span-2row" : ""}>
              <div className="tile tile-hover" style={{ height: "100%", overflow: "hidden", position: "relative" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.alt} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(1.04) contrast(1.02)" }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
