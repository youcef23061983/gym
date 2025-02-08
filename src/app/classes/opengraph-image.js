import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Home Page Acme";
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpg";

export default async function Image() {
  const title =
    "Cours à Restez Jeune – Bodybuilding, CrossFit, Fitness et Cardio";

  // Read font
  const interSemiBold = await readFile(
    join(process.cwd(), "fonts/inter-semi-bold.ttf")
  );

  // ✅ Corrected Image Path
  const backgroundImagePath = join(process.cwd(), "public", "classes.jpg"); // Fixed path
  const backgroundImage = await readFile(backgroundImagePath);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundImage: `url(data:image/jpeg;base64,${backgroundImage.toString(
            "base64"
          )})`,
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "white",
            padding: "16px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "8px",
          }}
        >
          <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>{title}</h1>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
