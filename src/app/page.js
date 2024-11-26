import About from "@/components/frontPage/About";
import Counter from "@/components/frontPage/Counter";
import Features from "@/components/frontPage/Features";
import FrontImage from "@/components/frontPage/FrontImage";
import InstaHero from "@/components/frontPage/InstaHero";
import PricingPlan from "@/components/frontPage/PricingPlan";
import { BASE_API_URL } from "@/utils/Url";
export const dynamic = "force-dynamic";

async function getData() {
  const response = await fetch(`${BASE_API_URL}/api/insta`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

const Home = async () => {
  const squareData = await getData();
  if (!BASE_API_URL) {
    return null;
  }

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
