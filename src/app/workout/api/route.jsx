const db = require("../../../../lib/db.js");

// GET all exercises
export async function GET() {
  try {
    const exercises = await db.exercise.findMany();
    return new Response(JSON.stringify(exercises), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch exercises" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
