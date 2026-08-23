import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import YogaNarasimhaMark from "@/components/ui/YogaNarasimhaMark";

export const alt = `${site.name} — Sri Vaishnava Vedic practice`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated rather than shipped as a static asset, so the share card can never
 * fall out of sync with the site name or promise.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F8F4EC",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <YogaNarasimhaMark
            accentColor="#742F27"
            style={{ width: 68, height: 68, color: "#805B38" }}
          />
          <div style={{ fontSize: 34, color: "#742F27", letterSpacing: "0.01em" }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 88,
              lineHeight: 0.95,
              color: "#742F27",
              letterSpacing: "-0.035em",
              maxWidth: 900,
            }}
          >
            Devotion, held across distance.
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.45,
              color: "#3A302A",
              maxWidth: 860,
            }}
          >
            Personal Sri Vaishnava ritual guidance for families in India and abroad.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#805B38",
          }}
        >
          Homas · Yagas · Pujas · Samskaras · Consultation
        </div>
      </div>
    ),
    size
  );
}
