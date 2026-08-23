import { ImageResponse } from "next/og";
import YogaNarasimhaMark from "@/components/ui/YogaNarasimhaMark";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#742F27",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <YogaNarasimhaMark
          accentColor="#F8F4EC"
          style={{ width: 27, height: 27, color: "#D7B980" }}
        />
      </div>
    ),
    { ...size }
  );
}
