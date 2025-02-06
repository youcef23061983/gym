import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="aboutDiv">
      <h1 className="featured1">FAITES CONNAISSANCE AVEC NOUS</h1>
      <div className="aboutImg">
        <img className="gridImg" src="/homepage/aboutImg1.jpg" />
        <img className="gridImg" src="/homepage/aboutImg2.jpg" />
        <img className="gridImg" src="/homepage/aboutImg3.jpg" />
        <img className="gridImg" src="/homepage/aboutImg4.jpg" />
      </div>
      <div className="aboutArticle">
        <h2> Notre Engagement pour Votre Aventure Fitness</h2>
        <p>
          Chez Restez Jeune, nous croyons que le fitness est un mode de vie
          accessible à tous. Notre salle moderne offre une variété d'équipements
          et de cours adaptés à chaque niveau, avec des entraîneurs certifiés
          prêts à vous guider. Nous créons un environnement accueillant et
          inclusif, où chacun peut se sentir motivé à atteindre ses objectifs.
          Rejoignez-nous et faisons de votre parcours fitness une réussite
          ensemble !
        </p>
        <Link href="about" className="link" style={{ marginRight: "auto" }}>
          DÉCOUVREZ ENCORE PLUS
        </Link>
      </div>
    </div>
  );
};

export default About;
