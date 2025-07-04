import db from "../../../../lib/db.js";
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
  const { id } = params;
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
