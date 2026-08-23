import type { Metadata, Viewport } from "next";
import {
  Newsreader,
  Plus_Jakarta_Sans,
  Tiro_Devanagari_Sanskrit,
  Tiro_Tamil,
} from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import RevealObserver from "@/components/ui/RevealObserver";
import SacredIntro from "@/components/layout/SacredIntro";
import { INTRO_STORAGE_KEY } from "@/lib/intro";

const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap",
  adjustFontFallback: false,
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-jakarta",
  display: "swap",
  adjustFontFallback: false,
});

const tiroSanskrit = Tiro_Devanagari_Sanskrit({
  subsets: ["latin", "devanagari"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-tiro-sanskrit",
  display: "swap",
  adjustFontFallback: false,
});

const tiroTamil = Tiro_Tamil({
  subsets: ["latin", "tamil"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-tiro-tamil",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Authentic Vedic Rituals`,
    template: `%s · ${site.name}`,
  },
  description: site.promise,
  applicationName: site.name,
  keywords: [
    "Vedic priest",
    "Hindu rituals",
    "Homa",
    "Puja",
    "Samskara",
    "Vedic ceremony India",
    "priest for NRI families",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — Authentic Vedic Rituals`,
    description: site.promise,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Authentic Vedic Rituals`,
    description: site.promise,
  },
  alternates: { canonical: site.url },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Users must always be able to zoom (WCAG 2.2 AA, 1.4.4 Resize Text)
  maximumScale: 5,
  userScalable: true,
  themeColor: "#F8F4EC",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${jakarta.variable} ${tiroSanskrit.variable} ${tiroTamil.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;var seen=sessionStorage.getItem("${INTRO_STORAGE_KEY}")==="1";document.documentElement.dataset.intro=reduced||seen?"skip":"play"}catch(e){document.documentElement.dataset.intro="play"}})();`,
          }}
        />
        <noscript>
          <style>{`.sacred-intro{display:none!important}[data-reveal=""]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-svh flex-col">
        <SacredIntro />
        <RevealObserver />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:inline-flex focus:min-h-tap focus:items-center focus:bg-maroon focus:px-5 focus:text-ivory"
        >
          Skip to content
        </a>
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
