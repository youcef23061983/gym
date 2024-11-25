"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const page = () => {
  useEffect(() => {
    document.title = "Cardio";
  }, []);
  const [cardio, setTCardio] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await fetch("http://localhost:3000/classes/cardio/api");
        const res = await fetch(`${apiUrl}/classes/cardio/api`);
        if (!res.ok) {
          throw Error("There is no product data");
        }
        const data = await res.json();
        setTCardio(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const headerVariants = {
    hidden: { x: "20vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
    },
  };
  const paragraphVariants = {
    hidden: { x: "20vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.8, duration: 1.5, ease: "easeInOut" },
    },
  };
  const homeContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  const homeChidren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  if (!apiUrl) {
    return null;
  }
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, black, white, black)",
        paddingBottom: "3rem",
      }}
    >
      <div
        className="flex flex-col items-center justify-center gap-16 h-screen bg-cover bg-no-repeat bg-center bg-fixed "
        style={{ backgroundImage: `url(${cardio ? cardio[0]?.src : null})` }}
      >
        <motion.h2
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="frontTitle"
          viewport={{ once: true }}
        >
          Énergie et Endurance avec Nos Cours de Cardio
        </motion.h2>
        <motion.h3
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          className="frontP"
          viewport={{ once: true }}
        >
          Un esprit sain dans un corps en mouvement.
        </motion.h3>
      </div>
      <motion.div
        variants={homeContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="contactDiv"
      >
        <motion.h2 className="contactHeader" variants={homeChidren}>
          Boostez Votre Énergie avec Nos Cours de Cardio
        </motion.h2>
        <motion.p variants={homeChidren}>
          Les cours de cardio en salle de sport sont conçus pour améliorer
          l'endurance cardiovasculaire, brûler des calories et renforcer le
          système cardiovasculaire. Ces séances, qui combinent intensité et
          mouvements dynamiques, sont idéales pour ceux qui cherchent à
          améliorer leur forme physique générale tout en augmentant leur énergie
          et leur résistance. En travaillant à des intensités variées, les cours
          de cardio permettent de stimuler le cœur et les poumons, augmentant
          ainsi la capacité du corps à fournir de l'oxygène aux muscles.
        </motion.p>
      </motion.div>
      <div className="classCardio">
        <div className="cardioArticle">
          <h2 className="contactHeader">Intervalles sur tapis de course:</h2>
          <p>
            Les intervalles sur tapis de course sont une excellente méthode pour
            améliorer votre endurance et brûler des calories en un minimum de
            temps. En alternant des phases d’effort intense avec des périodes de
            récupération, vous stimulez votre métabolisme et renforcez votre
            système cardiovasculaire. Que vous soyez débutant ou sportif
            expérimenté, les intervalles vous permettent d’adapter la vitesse et
            l’inclinaison pour progresser à votre rythme. Relevez le défi,
            boostez votre énergie et transformez votre séance de cardio en un
            entraînement efficace et stimulant !
          </p>
        </div>
        <div className="cardioImages">
          {cardio
            ? cardio.slice(1, 5).map((picture) => {
                const { id, src } = picture;

                return (
                  <img
                    key={id}
                    src={`${src}`}
                    alt={`Cardio ${id}`}
                    className="img"
                  />
                );
              })
            : null}
        </div>
      </div>
      <div className="classCardio">
        <div className="cardioArticle">
          <h2 className="contactHeader">Rameur:</h2>
          <p>
            Le rameur est une machine idéale pour un entraînement complet du
            corps, sollicitant à la fois les muscles du haut et du bas du corps
            tout en renforçant le système cardiovasculaire. Ce mouvement fluide
            imite l’aviron et améliore l'endurance, la force et la coordination.
            Le rameur est parfait pour brûler des calories tout en réduisant
            l'impact sur les articulations, ce qui en fait une option accessible
            à tous les niveaux. Que vous cherchiez à améliorer votre condition
            physique, perdre du poids ou renforcer vos muscles, le rameur vous
            offre un exercice efficace et stimulant !
          </p>
        </div>

        <div className="cardioImages">
          {cardio
            ? cardio.slice(5, 9).map((picture) => {
                const { id, src } = picture;

                return (
                  <img
                    key={id}
                    src={`${src}`}
                    alt={`Cardio ${id}`}
                    className="img"
                  />
                );
              })
            : null}
        </div>
      </div>
      <div className="classCardio">
        <div className="cardioArticle">
          <h2 className="contactHeader">Vélo:</h2>
          <p>
            Le vélo en salle est un excellent moyen de booster votre cardio tout
            en tonifiant vos jambes et vos muscles centraux. Avec des séances
            intenses et rythmées, vous travaillez votre endurance, brûlez des
            calories et renforcez votre système cardiovasculaire. Adaptable à
            tous les niveaux, le cycling vous permet de contrôler la résistance
            pour ajuster l’intensité selon vos objectifs. Que ce soit pour vous
            défouler, améliorer votre forme ou simplement profiter de l’énergie
            du groupe, le vélo est un choix idéal pour un entraînement stimulant
            et efficace !
          </p>
        </div>

        <div className="cardioImages">
          {cardio
            ? cardio.slice(9, 13).map((picture) => {
                const { id, src } = picture;

                return (
                  <img
                    key={id}
                    src={`${src}`}
                    alt={`Cardio ${id}`}
                    className="img"
                  />
                );
              })
            : null}
        </div>
      </div>
      <div className="classCardio">
        <div className="cardioArticle">
          <h2 className="contactHeader">Escalier Énergisan:</h2>
          <p>
            Le stair climber est un appareil puissant pour renforcer les jambes,
            les fessiers et améliorer votre cardio. En simulant la montée
            d’escaliers, il offre un entraînement à faible impact qui sollicite
            intensément les muscles du bas du corps, tout en brûlant un maximum
            de calories. Parfait pour augmenter votre endurance et tonifier vos
            jambes, le stair climber vous permet de progresser à votre rythme en
            ajustant la vitesse et la résistance. Intégrez-le dans votre routine
            pour des résultats visibles et une condition physique optimisée !
          </p>
        </div>

        <div className="cardioImages">
          {cardio
            ? cardio.slice(13, 17).map((picture) => {
                const { id, src } = picture;

                return (
                  <img
                    key={id}
                    src={`${src}`}
                    alt={`Cardio ${id}`}
                    className="img"
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default page;
