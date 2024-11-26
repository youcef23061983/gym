import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Product from "@/components/Product";
import ShopArticle from "@/components/ShopArticle";
import { BASE_API_URL } from "@/utils/Url";
export const generateMetadata = () => {
  return {
    title: "Shop",
  };
};

async function getData() {
  const response = await fetch(`${BASE_API_URL}/shop/api`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

const page = async () => {
  if (!BASE_API_URL) {
    return null;
  }
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/shop");
  }

  const products = await getData();

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
