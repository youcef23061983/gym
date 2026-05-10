import db from "../../../../lib/db.js";
import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient .jsx";

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
    return [];
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
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
};

export default page;
