const db = require("../../../../../lib/db.js");

export async function GET() {
  try {
    const cardioImages = await db.cardio.findMany();
    return new Response(JSON.stringify(cardioImages), {
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
