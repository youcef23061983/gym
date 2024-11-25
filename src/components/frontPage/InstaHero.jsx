import React from "react";
import ShuffleGrid from "../ShuffleGrid";
import Link from "next/link";
async function getData() {
  const response = await fetch("http://localhost:3000/api/insta", {
    next: { revalidate: 10 }, // Revalidate data every 10 seconds (ISR)
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

const InstaHero = async () => {
  // const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // const data = await fetch("http://localhost:3000/api/insta");
  // // const data = await fetch(`${apiUrl}/api/insta`);
  // const squareData = await data.json();
  const squareData = await getData();
  return (
    <section className="w-full px-4 py-12 mx-0 grid grid-cols-1 md:grid-cols-2 items-center gap-3">
      <div className="pricingDiv">
        <h3 style={{ fontWeight: "bold" }}>
          Transformez Votre Corps, Élevez Votre Esprit !
        </h3>
        <p>
          Rejoignez notre communauté passionnée de fitness ! 💪 Suivez-nous pour
          des conseils d’entraînement, des recettes saines et une motivation
          quotidienne. Ensemble, nous allons atteindre vos objectifs de remise
          en forme et célébrer chaque victoire. Taggez-nous dans vos progrès et
          partagez votre aventure ! #Fitness #Santés
        </p>
        <Link
          href="https://www.instagram.com"
          className="link mt-10 mr-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          REJOIGNEZ-NOUS
        </Link>
      </div>
      <ShuffleGrid squareData={squareData} />
    </section>
  );
};

export default InstaHero;
