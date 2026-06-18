import Reveal from "./Reveal";
import { IconSneaker, IconBoot, IconDress, IconKids, IconSandal, IconArrow } from "./Icons";

const CATS = [
  { name: "Sneakers", note: "Runners, court and casual for every day.", img: "/img/sneaker-white.jpg", alt: "Red Nike running sneaker", Icon: IconSneaker, big: true },
  { name: "Boots", note: "Work boots and clean leather chukkas.", img: "/img/boots-tan.jpg", alt: "Brown leather chukka boots on wood", Icon: IconBoot },
  { name: "Dress", note: "Sharp shoes for church, work and weddings.", img: "/img/dress-oxford.jpg", alt: "Brown leather monk-strap dress shoes", Icon: IconDress },
  { name: "Kids", note: "First fits to growth spurts, sized in store.", img: "/img/lineup-shelf.jpg", alt: "White sneakers on foot", Icon: IconKids },
  { name: "Sandals", note: "Easy summer slides and two-strap comfort.", img: "/img/sandals-tan.jpg", alt: "Tan two-strap sandals", Icon: IconSandal, wide: true },
];

export default function Categories() {
  return (
    <section id="floor" style={{ padding: "clamp(54px,8vh,96px) 0" }}>
      <div className="wrap">
        <div className="sec-head">
          <Reveal><span className="kick">The floor</span></Reveal>
          <Reveal delay={60}>
            <h2 className="sec-title">Walk the aisles before you walk in.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ fontSize: 16.5, lineHeight: 1.55, color: "var(--ink-2)" }}>
              Five departments, one block on Main Street. Whatever the household needs
              this week, it is probably already on a shelf here.
            </p>
          </Reveal>
        </div>

        <div className="cat-bento" style={{ marginTop: 34, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridAutoRows: "minmax(190px, auto)", gap: 16 }}>
          {CATS.map((c, idx) => (
            <Reveal key={c.name} delay={idx * 70}
              className={c.big ? "span-2row" : c.wide ? "span-2col" : ""}>
              <CatTile {...c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CatTile({ name, note, img, alt, Icon }: { name: string; note: string; img: string; alt: string; Icon: React.ElementType }) {
  return (
    <a href="#visit" className="tile tile-hover" style={{ display: "block", height: "100%", minHeight: 190, position: "relative", overflow: "hidden" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "saturate(1.04) contrast(1.02)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(12,23,38,.05) 30%, rgba(12,23,38,.72))" }} />
      <div style={{ position: "absolute", top: 14, left: 14, width: 40, height: 40, borderRadius: 11, background: "rgba(255,255,255,.92)", display: "grid", placeItems: "center", color: "var(--blue-2)", backdropFilter: "blur(6px)" }}>
        <Icon width={21} height={21} />
      </div>
      <div style={{ position: "absolute", left: 16, right: 16, bottom: 14, color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <span style={{ fontSize: 21, fontWeight: 800, letterSpacing: "-0.02em" }}>{name}</span>
          <span className="eased" style={{ width: 30, height: 30, borderRadius: 999, background: "rgba(255,255,255,.18)", display: "grid", placeItems: "center" }}>
            <IconArrow width={15} height={15} />
          </span>
        </div>
        <p style={{ fontSize: 13, opacity: .9, marginTop: 5, maxWidth: 320, lineHeight: 1.4 }}>{note}</p>
      </div>
    </a>
  );
}
