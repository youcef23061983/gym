"use client";
import { ReactLenis } from "lenis/dist/lenis-react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <FrontImage />
      </ReactLenis>
    </div>
  );
};
const FrontImage = () => {
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
  return (
    <>
      <div className="frontDiv">
        <motion.h2
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="frontTitle"
        >
          hi
        </motion.h2>
        <motion.p
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          className="frontP"
        >
          Depuis plus d'un siècle, El Bahja incarne l'âme culinaire de
          l'Algérie,
        </motion.p>
      </div>
      <p>
        Depuis plus d'un siècle, El Bahja incarne l'âme culinaire de l'Algérie,
        perpétuant les traditions gastronomiques avec passion et excellence.
        Fondé en 1902 au cœur d'Alger, ce restaurant a su conquérir le cœur des
        amateurs de cuisine authentique grâce à un savoir-faire transmis de
        génération en génération.
        <br />
        <br />
        L'histoire d'El Bahja commence dans une modeste ruelle d'Alger, où son
        fondateur, un maître cuisinier dévoué à son art, a ouvert les portes de
        ce qui allait devenir une véritable institution. Sa vision était simple
        : offrir aux habitants de la ville une cuisine qui célèbre la richesse
        des saveurs et des traditions algériennes. Dès ses débuts, le restaurant
        a attiré une clientèle fidèle, séduite par la qualité des plats et
        l’ambiance chaleureuse des lieux.
        <br />
        <br />
        Au fil des décennies, El Bahja a su préserver l'authenticité de sa
        cuisine tout en s'adaptant aux goûts et aux attentes d'une clientèle
        toujours plus exigeante. Les recettes, soigneusement élaborées,
        respectent les techniques ancestrales tout en intégrant les meilleurs
        ingrédients locaux. Du couscous parfumé aux épices fines, aux tajines
        mijotés avec amour, chaque plat raconte l'histoire d'un pays riche en
        traditions.
        <br />
        <br />
        Le succès d'El Bahja ne s'est pas limité à Alger. Aujourd'hui, le
        restaurant compte 35 succursales à travers tout le pays, de la
        Méditerranée aux confins du Sahara. Chaque établissement, bien que
        moderne dans son agencement, reste fidèle à l’esprit d’origine, offrant
        à ses clients une expérience culinaire qui est à la fois un voyage dans
        le temps et une célébration des saveurs d’Algérie.
        <br />
        <br />
        Chaque jour, les équipes d'El Bahja perpétuent cet héritage, avec un
        engagement sans faille envers la qualité et l'authenticité. Les chefs,
        formés selon les méthodes traditionnelles, préparent les plats avec une
        passion qui se ressent dans chaque bouchée. Que ce soit pour un repas
        familial, une célébration ou un simple déjeuner entre amis, El Bahja est
        le lieu où l'on se retrouve pour partager bien plus qu'un repas : une
        véritable immersion dans l'âme de la cuisine algérienne.
        <br />
        <br />
        Ainsi, El Bahja ne se contente pas de nourrir ses clients, il leur offre
        une part de l'histoire de l'Algérie, un héritage culinaire préservé avec
        soin depuis plus de 120 ans. Avec ses 35 branches à travers le pays, El
        Bahja continue de grandir tout en restant fidèle à ses racines, rendant
        hommage à la richesse de la culture culinaire algérienne, une assiette à
        la fois.
        loremohodfhFFFFFFFFFFFFFFoicocfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      </p>
    </>
  );
};

export default Home;
