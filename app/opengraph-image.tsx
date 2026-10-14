import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Kelvin Ajayi, software engineer. Open to full-time mobile and fullstack roles, and an AI engineering internship.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const portrait = await readFile(join(process.cwd(), "public/kelvin.jpg"));
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#e6dfd2",
          color: "#141311",
        }}
      >
        <div style={{ width: 14, height: "100%", background: "#9a3412" }} />
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "68px 64px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                letterSpacing: 4,
                color: "#9a3412",
                textTransform: "uppercase",
              }}
            >
              Software engineer
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 22,
                fontSize: 84,
                lineHeight: 0.92,
                letterSpacing: -2,
              }}
            >
              Kelvin Ajayi
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 32,
                maxWidth: 560,
                fontSize: 30,
                lineHeight: 1.35,
                color: "#4a463f",
              }}
            >
              Full-time mobile and fullstack. An AI engineering internship.
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 48,
                height: 48,
                marginRight: 16,
                background: "#13241f",
                color: "#c6d86a",
                fontSize: 22,
              }}
            >
              {"</>"}
            </div>
            <div style={{ display: "flex", fontSize: 24, color: "#4a463f" }}>
              Nigeria · Remote
            </div>
          </div>
        </div>
        <img
          src={portraitSrc}
          alt=""
          width={460}
          height={630}
          style={{ objectFit: "cover", objectPosition: "center 18%" }}
        />
      </div>
    ),
    { ...size },
  );
}
