import db from "../../../../lib/db.js";

// Tell Next.js which product IDs to pre-render at build time
export async function generateStaticParams() {
  try {
    const products = await db.product.findMany({
      select: { id: true },
    });

    return products.map((product) => ({
      id: product.id.toString(),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return []; // Return empty array if no products found
  }
}

const getProductById = async (id) => {
  try {
    const product = await db.product.findUnique({
      where: { id: parseInt(id) },
    });
    return product || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

const page = async ({ params }) => {
  // In Next.js 15+, params is a Promise that needs to be awaited
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <h1>{product.price}</h1>
    </div>
  );
};

export default page;
