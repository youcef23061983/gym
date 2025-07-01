const db = require("../../../../lib/db.js");

// GET all testimonials
export async function GET() {
  try {
    const testimonials = await db.testimonial.findMany();
    return new Response(JSON.stringify(testimonials), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch testimonials" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
