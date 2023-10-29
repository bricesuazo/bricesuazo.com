import { ImageResponse } from "next/og";

import { meta } from "@bricesuazo/constant/config";

export const runtime = "edge";

export const alt = meta.title;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const fontBold = await fetch(
    new URL("/public/fonts/bold.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());
  const fontRegular = await fetch(
    new URL("/public/fonts/regular.ttf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#101110",
          fontFamily: "PoppinsBold",
          fontSize: 100,
          fontWeight: 900,
          lineHeight: 0.75,
          boxShadow: "inset 0px 0px 277px 3px #101110",
          backgroundImage:
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255,255,255,0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        }}
      >
        <div style={{ color: "#fff", fontFamily: "PoppinsBold" }}>
          {meta.title}
        </div>
        <div
          style={{
            color: "rgba(255, 255, 255, 0.5)",
            fontFamily: "PoppinsRegular",
            fontSize: 48,
            marginTop: "15px",
          }}
        >
          Full-stack Developer
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "PoppinsBold",
          data: fontBold,
          style: "normal",
          weight: 900,
        },
        {
          name: "PoppinsRegular",
          data: fontRegular,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
