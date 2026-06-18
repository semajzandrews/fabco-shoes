import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fabco Shoes — Family footwear on Main St, Orange NJ",
  description:
    "Affordable shoes for the whole family on Main Street in the City of Orange, NJ. Sneakers, boots, dress shoes, kids and accessories. A neighborhood Fabco serving Orange since the chain's start in 1953.",
  metadataBase: new URL("https://fabco-shoes.vercel.app"),
  openGraph: {
    title: "Fabco Shoes · Orange NJ",
    description: "Family footwear, fair prices, on Main St in Orange NJ.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{if(document.visibilityState!=='hidden'){document.documentElement.classList.add('reveal-armed');}setTimeout(function(){document.documentElement.classList.add('reveal-done');},2600);}catch(e){}})();",
          }}
        />
      </head>
      <body className="floor-grain">{children}</body>
    </html>
  );
}
