import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Product from "@/components/Product";
import ShopArticle from "@/components/ShopArticle";
import { BASE_API_URL } from "@/utils/Url";
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

export const generateMetadata = () => {
  return {
    title: "Shop - Restez Jeune",
    description:
      "Découvrez les produits de Restez Jeune, votre salle de sport de choix. Trouvez des équipements, accessoires et vêtements pour vos entraînements.",
    openGraph: {
      title: "Shop - Restez Jeune",
      description:
        "Découvrez les produits de Restez Jeune, votre salle de sport de choix. Trouvez des équipements, accessoires et vêtements pour vos entraînements.",
      url: `${BASE_API_URL}/shop`,
      images: [
        {
          url: "/shop.jpg",
          width: 800,
          height: 600,
          alt: "Shop Banner",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Shop - Restez Jeune",
      description:
        "Découvrez les produits de Restez Jeune pour améliorer vos performances sportives.",
      image: "/shop.jpg",
    },
    robots: "index, follow",
    keywords:
      "shop, gym products, fitness equipment, workout gear, Restez Jeune",
    author: "Restez Jeune Gym",
  };
};

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
