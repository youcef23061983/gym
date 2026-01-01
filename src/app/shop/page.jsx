import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Product from "@/components/Product";
import ShopArticle from "@/components/ShopArticle";
import { headers } from "next/headers";
const db = require("../../../lib/db.js");

const CRAWLER_USER_AGENTS = [
  "googlebot",
  "bingbot",
  "slurp",
  "duckduckbot",
  "baiduspider",
  "yandexbot",
  "facebot",
  "twitterbot",
];

function isCrawler() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "";
  return CRAWLER_USER_AGENTS.some((crawler) =>
    userAgent.toLowerCase().includes(crawler)
  );
}

async function getData() {
  try {
    const products = await db.product.findMany({
      orderBy: { createdAt: "desc" },
    });
    return products;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return [];
  }
}

const page = async () => {
  const isCrawlerRequest = isCrawler();

  if (!isCrawlerRequest) {
    const session = await getServerSession(options);
    if (!session) {
      redirect("/api/auth/signin?callbackUrl=/shop");
    }
  }
  // const session = await getServerSession(options);
  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/shop");
  // }

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
