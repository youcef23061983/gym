const db = require("../../../../lib/db.js");

export async function GET() {
  try {
    const galleryImages = await db.galleryImage.findMany();
    return new Response(JSON.stringify(galleryImages), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch gallery images" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
