// Bespoke inline SVG icons for Fabco — drawn for this brand, no icon library.
import type { SVGProps } from "react";

const base = (p: SVGProps<SVGSVGElement>) => ({
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

export const IconSneaker = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M2 15.5c0-1.3.6-2 1.8-2.4l4-1.4 3-3.7c.4-.5 1.1-.6 1.6-.2l.9.7c.5.4.6 1 .3 1.6 1.9 1 4.6 1.7 7.4 1.9 1 .1 1.7.9 1.7 1.9v.6c0 1-.8 1.8-1.8 1.8H3.8C2.8 17.6 2 16.7 2 15.7Z" />
    <path d="M11.6 8.5 13 10M2.2 14.6h21M9 14.6v3M13 14.6v3" />
  </svg>
);

export const IconBoot = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M8 3h2.5v8.4c0 .8.3 1.5.9 2l5.3 4.4c.8.7 1.3 1.6 1.3 2.7v.5H6c-1.1 0-2-.9-2-2V8.2" />
    <path d="M4 12h4.5M4 17h14" />
  </svg>
);

export const IconDress = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M2 14c0-1 .7-1.6 1.7-1.8 2.6-.5 4.6-1.4 6.4-2.8.7-.5 1.6-.5 2.2.1 2 2 4.7 3.1 8 3.4 1 .1 1.7.9 1.7 1.9 0 1.1-.9 2-2 2H3.8C2.8 16.8 2 16 2 15Z" />
    <path d="M2.4 14.2h19.2M14 11.5l1.6 1.6" />
  </svg>
);

export const IconKids = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M4 15c0-1 .6-1.6 1.5-1.9l3.2-1 2.4-2.8c.4-.5 1-.5 1.4-.1l.6.6c.4.4.5 1 .2 1.5 1.4.7 3.3 1.2 5.3 1.4.9.1 1.6.9 1.6 1.8 0 1-.8 1.7-1.7 1.7H5.7C4.8 16.2 4 15.6 4 14.8Z" />
    <circle cx="9.5" cy="11" r="0.6" fill="currentColor" stroke="none" />
    <path d="M4.3 14.2h17" />
  </svg>
);

export const IconSandal = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M5 16.5c-1 0-1.8-.8-1.8-1.8 0-.7.4-1.3 1-1.6l9.4-4.4c.9-.4 2-.1 2.6.7 1.2 1.6 3.1 2.6 5.5 2.8 1 .1 1.5 1.1 1 2-1.4 2.3-4 3.9-7.4 3.9Z" />
    <path d="M8 9.5l1.5 3M12 7.8 13.6 11" />
  </svg>
);

export const IconTag = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M12.6 3H5a2 2 0 0 0-2 2v7.6c0 .5.2 1 .6 1.4l6.4 6.4a2 2 0 0 0 2.8 0l6.6-6.6a2 2 0 0 0 0-2.8L14 3.6c-.4-.4-.9-.6-1.4-.6Z" />
    <circle cx="8" cy="8" r="1.3" />
  </svg>
);

export const IconFamily = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <circle cx="7.5" cy="6" r="2.3" />
    <circle cx="16.5" cy="6.5" r="2" />
    <path d="M3.5 19v-3a4 4 0 0 1 4-4 4 4 0 0 1 3.4 1.9M13.5 19v-2.6a3.4 3.4 0 0 1 3.2-3.4 3.4 3.4 0 0 1 3.3 3.4V19" />
  </svg>
);

export const IconPin = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const IconClock = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const IconPhone = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M6.5 3.5h3l1.4 4-2 1.4a12 12 0 0 0 5.2 5.2l1.4-2 4 1.4v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
  </svg>
);

export const IconArrow = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
