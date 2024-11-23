import React from "react";
import ShuffleGrid from "../ShuffleGrid";
import Link from "next/link";

const InstaHero = async () => {
  const data = await fetch("http://localhost:3001/squareData");
  const squareData = await data.json();
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
