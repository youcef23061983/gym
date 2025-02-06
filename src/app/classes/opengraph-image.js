// import { BASE_API_URL } from "@/utils/Url";
// import { ImageResponse } from "next/og";
// import { readFile } from "node:fs/promises";
// import { join } from "node:path";

// export const alt = "Home Page  Acme";
// export const size = {
//   width: 1200,
//   height: 630,
// };

// export const contentType = "image/jpg";

// export default async function Image() {
//   const backgroundimg = `${BASE_API_URL}/classes.jpg`;
//   const title =
//     "Cours à Restez Jeune – Bodybuilding, CrossFit, Fitness et Cardio";

//   const interSemiBold = await readFile(
//     join(process.cwd(), "assets/Inter-SemiBold.ttf")
//   );

//   const backgroundImagePath = join(process.cwd(), `public${backgroundimg}`);
//   const backgroundImage = await readFile(backgroundImagePath);

//   return new ImageResponse(
//     (
//       <div
//         className="flex items-center justify-center w-full h-full bg-cover"
//         style={{
//           backgroundImage: `url(data:image/jpeg;base64,${backgroundImage.toString(
//             "base64"
//           )})`,
//         }}
//       >
//         <div className="text-center text-white p-4 bg-black bg-opacity-50 rounded-lg">
//           <h1 className="text-4xl font-bold">{title}</h1>
//         </div>
//       </div>
//     ),
//     {
//       ...size,
//       fonts: [
//         {
//           name: "Inter",
//           data: interSemiBold,
//           style: "normal",
//           weight: 400,
//         },
//       ],
//     }
//   );
// }

import { BASE_API_URL } from "@/utils/Url";
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Metadata for the image
export const alt = "Home Page Acme";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/jpg";

// Default image function
export default async function Image() {
  const backgroundImageUrl = `${BASE_API_URL}/classes.jpg`;
  const title =
    "Cours à Restez Jeune – Bodybuilding, CrossFit, Fitness et Cardio";

  try {
    // Load the font file
    const fontPath = join(process.cwd(), "assets/Inter-SemiBold.ttf");
    const interSemiBold = await readFile(fontPath);

    // Load the background image
    const backgroundImagePath = join(
      process.cwd(),
      `public${backgroundImageUrl}`
    );
    const backgroundImage = await readFile(backgroundImagePath);

    // Generate the image response
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
              padding: "1rem",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "0.5rem",
            }}
          >
            <h1 style={{ fontSize: "3rem", fontWeight: 700 }}>{title}</h1>
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
  } catch (error) {
    // Handle errors (e.g., missing files or invalid paths)
    console.error("Error generating OpenGraph image:", error);

    // Fallback to a simple image response
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <h1 style={{ fontSize: "3rem", fontWeight: 700 }}>{title}</h1>
        </div>
      ),
      {
        ...size,
      }
    );
  }
}
