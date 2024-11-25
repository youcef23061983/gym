import About from "@/components/frontPage/About";
import Counter from "@/components/frontPage/Counter";
import Features from "@/components/frontPage/Features";
import FrontImage from "@/components/frontPage/FrontImage";
import InstaHero from "@/components/frontPage/InstaHero";
import PricingPlan from "@/components/frontPage/PricingPlan";

const Home = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const data = await fetch("http://localhost:3000/api/insta");
  // const data = await fetch(`${apiUrl}/api/insta`);
  const squareData = await data.json();
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
