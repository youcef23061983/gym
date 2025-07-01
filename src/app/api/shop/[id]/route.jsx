const db = require("../../../../../lib/db.js");

// export async function GET(request, { params }) {
//   try {
//     const product = await db.product.findUnique({
//       where: { id: parseInt(params.id) },
//     });

//     if (!product) {
//       return Response.json({ error: "Product not found" }, { status: 404 });
//     }

//     return Response.json(product);
//   } catch (error) {
//     return Response.json(
//       { error: "Failed to fetch product details" },
//       { status: 500 }
//     );
//   }
// }

export async function GET(request, { params }) {
  const product = await db.product.findUnique({
    where: { id: parseInt(params.id) },
  });
  return Response.json(product);
}
