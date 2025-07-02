import About from "@/components/frontPage/About";
import Counter from "@/components/frontPage/Counter";
import Features from "@/components/frontPage/Features";
import FrontImage from "@/components/frontPage/FrontImage";
import InstaHero from "@/components/frontPage/InstaHero";
import PricingPlan from "@/components/frontPage/PricingPlan";
import { BASE_API_URL } from "@/utils/Url";

// async function getData() {
//   const response = await fetch(`${BASE_API_URL}/api/insta`);
//   if (!response.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return response.json();
// }
const db = require("../../lib/db.js");

async function getData() {
  try {
    const gallery = await db.galleryImage.findMany({
      orderBy: { createdAt: "desc" },
    });
    return gallery;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return [];
  }
}
export function generateMetadata() {
  const image = "/homepage/frontImg.jpg";
  const title = "Restez Jeune Gym – Fitness, Musculation et Cours de CrossFit";
  const description =
    "Restez Jeune est votre salle de sport de choix pour des entraînements de fitness, de musculation et des cours de crossfit de qualité. Avec des entraîneurs experts, des équipements de pointe et une communauté chaleureuse, nous vous aidons à rester en forme, fort et jeune. Rejoignez-nous dès aujourd'hui pour commencer votre parcours fitness et rester jeune, à l'intérieur comme à l'extérieur !";

  return {
    title: title,
    openGraph: {
      title: title,

      description: description,
      url: `${BASE_API_URL}`,
      images: [
        {
          url: image,
          width: 800,
          height: 600,
          alt: "Og Image Alt",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,

      description: description,
      image: image,
    },
    robots: "index, follow",
    keywords:
      "gym  ,workout, classes, shop, fitness, bodybuilding, cardio,crossfit",
    author: "Gym",
  };
}

const Home = async () => {
  // if (!BASE_API_URL) {
  //   return null;
  // }
  const squareData = await getData();

  return (
    <>
      <FrontImage />

      <Counter />

      <Features />

      <About />

      <PricingPlan />

      <InstaHero squareData={squareData} />
    </>
  );
};

export default Home;
