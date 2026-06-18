// Fabco Shoes · Orange NJ — verified facts only.
// Chain since 1953; this storefront is the Orange location with no individual site.
export const BIZ = {
  name: "Fabco Shoes",
  cityTag: "Orange",
  since: "1953",
  address: "301 Main St",
  city: "City of Orange",
  state: "NJ",
  zip: "07050",
  phone: "(646) 644-6815",
  phoneHref: "tel:+16466448615",
  mapsQuery: "Fabco Shoes 301 Main St Orange NJ 07050",
  hours: [
    { day: "Mon", open: "10:00 AM", close: "7:30 PM" },
    { day: "Tue", open: "10:00 AM", close: "7:30 PM" },
    { day: "Wed", open: "10:00 AM", close: "7:30 PM" },
    { day: "Thu", open: "10:00 AM", close: "7:30 PM" },
    { day: "Fri", open: "10:00 AM", close: "7:30 PM" },
    { day: "Sat", open: "10:00 AM", close: "7:30 PM" },
    { day: "Sun", open: "11:00 AM", close: "6:00 PM" },
  ],
};

// Open-hours helper, 12-hour everywhere.
export function todayStatus(now: Date) {
  const idx = (now.getDay() + 6) % 7; // 0=Mon
  const row = BIZ.hours[idx];
  const open = parse12(row.open);
  const close = parse12(row.close);
  const mins = now.getHours() * 60 + now.getMinutes();
  const isOpen = mins >= open && mins < close;
  return { isOpen, row };
}
function parse12(s: string) {
  const m = s.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!m) return 0;
  let h = parseInt(m[1], 10);
  const min = parseInt(m[2], 10);
  const pm = m[3].toUpperCase() === "PM";
  if (h === 12) h = 0;
  if (pm) h += 12;
  return h * 60 + min;
}
