"use client";
export const dynamic = "force-dynamic";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ShuffleGrid from "@/components/ShuffleGrid";

const page = () => {
  useEffect(() => {
    document.title = "Fitness";
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
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, black, #ffe8d0, black)",
        paddingBottom: "3rem",
      }}
    >
      <div
        className="flex flex-col items-center justify-center gap-16 h-screen bg-cover bg-no-repeat bg-center bg-fixed "
        style={{ backgroundImage: "url('/fitness/fitness1.jpg')" }}
      >
        <motion.h2
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="frontTitle"
          viewport={{ once: true }}
        >
          Transformez Votre Corps avec Nos Cours de Fitness
        </motion.h2>
        <motion.h3
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          className="frontP"
          viewport={{ once: true }}
        >
          Le plus difficile est de commencer ; le reste n'est que persévérance.
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
          Atteignez Votre Meilleure Forme avec Nos Cours de Fitness
        </motion.h2>
        <motion.p variants={homeChidren}>
          Nos cours de fitness sont conçus pour vous aider à renforcer votre
          corps, améliorer votre endurance et atteindre vos objectifs de santé.
          Avec une variété d'exercices mêlant cardio, renforcement musculaire et
          souplesse, nos séances sont adaptées à tous les niveaux et encadrées
          par des entraîneurs qualifiés. Que vous souhaitiez tonifier votre
          silhouette, augmenter votre énergie, ou simplement vous sentir mieux
          dans votre peau, notre environnement motivant et convivial vous
          accompagnera dans chaque étape de votre parcours. Rejoignez-nous et
          transformez votre routine de fitness en une expérience dynamique et
          inspirante !
        </motion.p>
      </motion.div>
      <section className="px-4 py-12 mx-2 my-2 bg-white rounded-lg border border-gray-200 grid grid-cols-1 md:grid-cols-2 items-center gap-3">
        <div className="pricingDiv">
          <h3 style={{ fontWeight: "bold" }}>
            Un Programme Complet de Fitness pour un Corps Fort et Équilibré
          </h3>
          <p>
            Nos cours de fitness combinent des exercices efficaces pour chaque
            groupe musculaire. Avec des squats avec haltères pour les jambes,
            des pompes pour le haut du corps, et des tirages pour le dos, chaque
            séance vous aide à gagner en force et en équilibre. Les fentes et
            twists russes ciblent les abdominaux, et le gainage renforce votre
            endurance. Guidés par nos coachs, ces entraînements vous permettent
            de tonifier, renforcer et améliorer votre condition physique.
            Rejoignez-nous pour un programme stimulant et complet !
          </p>
        </div>
        <ShuffleGrid squareData={squareData} />
      </section>
    </div>
  );
};

const squareData = [
  { id: 1, src: "/fitness/fitness2.jpg" },
  { id: 3, src: "/fitness/fitness3.jpg" },
  { id: 2, src: "/fitness/fitness4.jpg" },
  { id: 4, src: "/fitness/fitness5.jpg" },
  { id: 5, src: "/fitness/fitness6.jpg" },
  { id: 6, src: "/fitness/fitness7.jpg" },
  { id: 7, src: "/fitness/fitness8.jpg" },
  { id: 8, src: "/fitness/fitness9.jpg" },
  { id: 9, src: "/fitness/fitness10.jpg" },
  { id: 10, src: "/fitness/fitness11.jpg" },
  { id: 11, src: "/fitness/fitness12.jpg" },
  { id: 12, src: "/fitness/fitness13.jpg" },
  { id: 13, src: "/fitness/fitness14.jpg" },
  { id: 14, src: "/fitness/fitness15.jpg" },
  { id: 15, src: "/fitness/fitness16.jpg" },
  { id: 16, src: "/fitness/fitness17.jpg" },
];

export default page;
