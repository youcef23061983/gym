// import { redirect } from "next/navigation";
// import Product from "@/components/Product";
// import ShopArticle from "@/components/ShopArticle";
// import { headers } from "next/headers";
// import { auth } from "../../../auth.js";
// import { Suspense } from "react";
// const db = require("../../../lib/db.js");

// const CRAWLER_USER_AGENTS = [
//   "googlebot",
//   "bingbot",
//   "slurp",
//   "duckduckbot",
//   "baiduspider",
//   "yandexbot",
//   "facebot",
//   "twitterbot",
// ];

// async function isCrawler() {
//   const headersList = await headers();
//   const userAgent = headersList.get("user-agent") || "";
//   return CRAWLER_USER_AGENTS.some((crawler) =>
//     userAgent.toLowerCase().includes(crawler),
//   );
// }

// async function getData() {
//   try {
//     const products = await db.product.findMany({
//       orderBy: { createdAt: "desc" },
//
//     });
//     return products;
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//     return [];
//   }
// }

// export default async function ShopPage({ searchParams }) {
//   const isCrawlerRequest = await isCrawler();

//   if (!isCrawlerRequest) {
//     const session = await auth();
//     if (!session) {
//       redirect("/api/auth/signin?callbackUrl=/shop");
//     }
//   }

//   const products = await getData();
//   const params = await searchParams;
//   const q = (params.q ?? "").trim();

//   return (
//     <div
//       style={{
//         backgroundImage: "linear-gradient(to right, black, white, black)",
//         paddingBottom: "3rem",
//       }}
//     >
//       <ShopArticle />
//       <div className="products">
//         {products?.map((product) => (
//           <Suspense key={product.id} fallback={<div>Loading...</div>}>
//             <Product key={product.id} product={product} />
//           </Suspense>
//         ))}
//       </div>
//     </div>
//   );
// }

import { redirect } from "next/navigation";
import Product from "@/components/Product";
import ShopArticle from "@/components/ShopArticle";
import { headers } from "next/headers";
import { auth } from "../../../auth.js";
import { Suspense } from "react";
import SearchForm from "./SearchForm.jsx.jsx";
const db = require("../../../lib/db.js");
export const instant = false;
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

async function isCrawler() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  return CRAWLER_USER_AGENTS.some((crawler) =>
    userAgent.toLowerCase().includes(crawler),
  );
}

export default async function ShopPage({ searchParams }) {
  const isCrawlerRequest = await isCrawler();

  if (!isCrawlerRequest) {
    const session = await auth();
    if (!session) {
      // uncontrolled auto next-auth v5:
      // redirect("/api/auth/signin?callbackUrl=/shop");
      redirect("/login?callbackUrl=/shop");
    }
  }
  const params = await searchParams;
  const q = (params.q ?? "").trim();
  async function getData() {
    try {
      const products = await db.product.findMany({
        orderBy: { createdAt: "desc" },
        where: {
          title: {
            contains: q ?? "",
            mode: "insensitive",
          },
        },
      });
      return products;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      return [];
    }
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
      <SearchForm defaultValue={q} />
      <div className="products">
        {products?.map((product) => (
          <Suspense key={product.id} fallback={<div>Loading...</div>}>
            <Product key={product.id} product={product} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}
