import About from "@/components/frontPage/About";
import Counter from "@/components/frontPage/Counter";
import Features from "@/components/frontPage/Features";
import FrontImage from "@/components/frontPage/FrontImage";
import InstaHero from "@/components/frontPage/InstaHero";
import PricingPlan from "@/components/frontPage/PricingPlan";

const Home = () => {
  return (
    <>
      <FrontImage />

      <Counter />

      <Features />

      <About />

      <PricingPlan />

      <InstaHero />
    </>
  );
};

export default Home;
