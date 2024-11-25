export const dynamic = "force-dynamic";

import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Product from "@/components/Product";
import ShopArticle from "@/components/ShopArticle";
export const generateMetadata = () => {
  return {
    title: "Shop",
  };
};
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

async function getData() {
  const response = await fetch(`${apiUrl}/shop/api`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

const page = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/shop");
  }

  const products = await getData();
  if (!apiUrl) {
    return null;
  }
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, black, white, black)",
        paddingBottom: "3rem",
      }}
    >
      <ShopArticle />
      <div className="products">
        {products?.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
