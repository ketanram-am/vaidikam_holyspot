import type { Config } from "tailwindcss";

// Fluid scales are computed for a 320px → 1440px viewport range and then clamped,
// so every size is stable from iPhone SE up to 4K / ultrawide displays.
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        ivory: "#F4EEE2",
        cream: "#E7DAC6",
        sand: "#D7C6AA",
        paper: "#F9F3E8",
        ink: "#201A17",
        charcoal: "#3A302A",
        taupe: "#75685E",
        hairline: "#D2C2A8",
        maroon: "#742F27",
        "maroon-deep": "#4B1D19",
        bronze: "#805B38",
        saffron: "#B97932",
        olive: "#4D5140",
        brass: "#B28C57",
        "brass-light": "#D7B980",
        stone: "#5B554E",
        soot: "#171310",
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "Iowan Old Style", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "Avenir Next", "system-ui", "sans-serif"],
        display: ["var(--font-newsreader)", "Iowan Old Style", "Georgia", "serif"],
        devanagari: ["var(--font-tiro-sanskrit)", "Noto Serif Devanagari", "serif"],
        tamil: ["var(--font-tiro-tamil)", "Noto Serif Tamil", "serif"],
      },
      fontSize: {
        display: [
          "clamp(3rem, 1.9rem + 5.5vw, 7rem)",
          { lineHeight: "0.91", letterSpacing: "-0.045em" },
        ],
        h1: [
          "clamp(2.5rem, 1.8rem + 3.5vw, 5.25rem)",
          { lineHeight: "0.96", letterSpacing: "-0.035em" },
        ],
        h2: [
          "clamp(2rem, 1.55rem + 2.25vw, 3.75rem)",
          { lineHeight: "1", letterSpacing: "-0.028em" },
        ],
        h3: [
          "clamp(1.35rem, 1.18rem + 0.85vw, 1.95rem)",
          { lineHeight: "1.12", letterSpacing: "-0.012em" },
        ],
        quote: [
          "clamp(1.5rem, 1.15rem + 1.75vw, 2.75rem)",
          { lineHeight: "1.25", letterSpacing: "-0.012em" },
        ],
        stat: [
          "clamp(1.75rem, 1.536rem + 1.071vw, 2.5rem)",
          { lineHeight: "1.1" },
        ],
        lead: [
          "clamp(1.0625rem, 0.991rem + 0.357vw, 1.3125rem)",
          { lineHeight: "1.6" },
        ],
        body: [
          "clamp(1rem, 0.973rem + 0.134vw, 1.09375rem)",
          { lineHeight: "1.7" },
        ],
        small: [
          "clamp(0.875rem, 0.862rem + 0.067vw, 0.9375rem)",
          { lineHeight: "1.55" },
        ],
      },
      maxWidth: {
        content: "1380px",
        prose: "64ch",
      },
      boxShadow: {
        card: "0 1px 0 rgba(255,255,255,.58) inset, 0 18px 42px -34px rgba(45,25,14,.42)",
        lift: "0 1px 0 rgba(255,255,255,.7) inset, 0 26px 55px -34px rgba(45,25,14,.55)",
        panel: "10px 14px 0 rgba(96,66,38,.08), 0 32px 72px -38px rgba(42,24,14,.55)",
      },
      spacing: {
        gutter: "clamp(1.25rem, 4vw, 3.5rem)",
        // Two adjacent sections each contribute their padding, so the visual
        // gap between bands is roughly double these values. 7rem keeps that
        // gap generous without leaving the page feeling unfinished.
        section: "clamp(4.25rem, 3rem + 6vw, 10rem)",
        band: "clamp(3.25rem, 2.4rem + 4vw, 7rem)",
        // The single gap between a SectionHeader and the content it introduces.
        headline: "clamp(2.5rem, 1.8rem + 4vw, 6rem)",
        tap: "44px",
      },
      minHeight: { tap: "44px" },
      minWidth: { tap: "44px" },
      letterSpacing: { eyebrow: "0.2em" },
      transitionTimingFunction: {
        /* Interactive states — symmetric, so a hover that reverses mid-flight
           does not snap. */
        calm: "cubic-bezier(0.4, 0, 0.2, 1)",
        /* Entrances — expo-out. Crisp departure, soft landing. */
        arrive: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
