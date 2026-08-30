import type { Metadata, Viewport } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site, priest } from "@/content/site";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import RevealObserver from "@/components/ui/RevealObserver";
import SmoothScroll from "@/components/layout/SmoothScroll";

/**
 * Two typefaces. Newsreader for headings and ceremony names, Jakarta for
 * everything read at body size.
 *
 * The Devanagari and Tamil faces were dropped with the decorative Sanskrit
 * lockup that used them — two extra font downloads for one ornament.
 */
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap",
  // Next cannot derive fallback metrics for this variable face and logs
  // "Failed to find font override values" on every build. The size-adjust it
  // would emit is not worth a build-time error for a font that is loaded with
  // `swap` anyway.
  adjustFontFallback: false,
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-jakarta",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Vedic ceremonies by ${priest.name}`,
    template: `%s · ${site.name}`,
  },
  description: site.promise,
  applicationName: site.name,
  keywords: [
    "Vedic priest",
    "homa",
    "yagna",
    "puja",
    "samskara",
    "Sri Vaishnava",
    "Vedic ceremony for families abroad",
  ],
  openGraph: {
    title: `${site.name} — Vedic ceremonies by ${priest.name}`,
    description: site.promise,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  alternates: { canonical: site.url },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Users must always be able to zoom (WCAG 2.2 AA, 1.4.4 Resize Text)
  maximumScale: 5,
  userScalable: true,
  themeColor: "#F8F4EC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <head>
        <noscript>
          {/* Without JS the reveal observer never runs, so content must not
              start hidden. */}
          <style>{`[data-reveal=""]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-svh flex-col">
        <SmoothScroll />
        <RevealObserver />
        <a href="#main" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
