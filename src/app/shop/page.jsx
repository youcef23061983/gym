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

const page = async () => {
  // const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"; // Fallback for local dev

  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/shop");
  }

  const data = await fetch("http://localhost:3000/shop/api");
  // const data = await fetch(`${apiUrl}/shop/api`);

  const products = await data.json();

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
