import { ImageResponse } from "next/og";
import { profile } from "@/data/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#0d1117",
        color: "#e6edf3",
        fontFamily: "monospace",
      }}
    >
      <div style={{ display: "flex", color: "#57b6ff", fontSize: 28 }}>
        Hi, my name is
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 72,
          fontWeight: 700,
          marginTop: 16,
        }}
      >
        {profile.name}.
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 48,
          fontWeight: 700,
          color: "#8b949e",
        }}
      >
        {profile.title}.
      </div>
    </div>,
    size,
  );
}
