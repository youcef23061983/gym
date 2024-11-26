"use client";
export const dynamic = "force-dynamic";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ShuffleGrid from "@/components/ShuffleGrid";

const page = () => {
  useEffect(() => {
    document.title = "BodyBuilding";
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
        backgroundImage: "linear-gradient(to right, black, white, black)",
        paddingBottom: "3rem",
      }}
    >
      <div
        className="flex flex-col items-center justify-center gap-16 h-screen bg-cover bg-no-repeat bg-center bg-fixed "
        style={{ backgroundImage: "url('/bodybuilding/body1.jpg')" }}
      >
        <motion.h2
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="frontTitle"
          viewport={{ once: true }}
        >
          "Construisez Votre Force et Sculptez Votre Physique"
        </motion.h2>
        <motion.h3
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          className="frontP"
          viewport={{ once: true }}
        >
          La persévérance forge la puissance, un jour à la fois.
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
          Développez Votre Force avec Nos Cours de Musculation
        </motion.h2>
        <motion.p variants={homeChidren}>
          Nos cours de musculation sont conçus pour ceux qui souhaitent
          augmenter leur force, leur endurance et sculpter leur corps. Grâce à
          des exercices ciblés et variés, tels que le travail avec haltères, les
          machines de musculation et les exercices au poids du corps, vous
          pourrez atteindre vos objectifs physiques tout en améliorant votre
          technique. Nos entraîneurs qualifiés vous guideront dans chaque
          mouvement, en adaptant le programme à vos besoins et à votre niveau.
          Que vous soyez débutant ou confirmé, notre environnement motivant vous
          aidera à repousser vos limites et à progresser efficacement.
          Rejoignez-nous pour transformer votre physique et développer une force
          durable !
        </motion.p>
      </motion.div>
      <section className="px-4 py-12 mx-2 my-2 bg-white rounded-lg border border-gray-200 grid grid-cols-1 md:grid-cols-2 items-center gap-3">
        <div className="pricingDiv">
          <h3 style={{ fontWeight: "bold" }}>
            Un Entraînement Complet pour un Corps Fort et Harmonieux
          </h3>
          <p>
            Nos séances de musculation couvrent l'ensemble des groupes
            musculaires pour un développement équilibré et puissant. Entraînez
            votre dos pour une posture solide, renforcez votre poitrine pour une
            meilleure stabilité, sculptez vos bras avec des exercices ciblés, et
            travaillez vos jambes pour un bas du corps robuste. Chaque séance
            est conçue pour améliorer votre force, votre endurance et votre
            technique, avec des mouvements variés qui incluent des exercices
            d'haltérophilie, de machines et au poids du corps. Nos coachs
            expérimentés sont là pour vous guider, ajuster les exercices selon
            vos objectifs et vous aider à progresser dans un environnement
            motivant et dynamique. Faites l'expérience d'un entraînement complet
            et transformez votre physique !
          </p>
          <Link
            href="/workout"
            className="link mt-10 mr-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            DÉCOUVREZ ENCORE PLUS
          </Link>
        </div>
        <ShuffleGrid squareData={squareData} />
      </section>
    </div>
  );
};
const squareData = [
  { id: 1, src: "/bodybuilding/body2.jpg" },
  { id: 3, src: "/bodybuilding/body3.jpg" },
  { id: 2, src: "/bodybuilding/body4.jpg" },
  { id: 4, src: "/bodybuilding/body5.jpg" },
  { id: 5, src: "/bodybuilding/body6.jpg" },
  { id: 6, src: "/bodybuilding/body7.jpg" },
  { id: 7, src: "/bodybuilding/body8.jpg" },
  { id: 8, src: "/bodybuilding/body9.jpg" },
  { id: 9, src: "/bodybuilding/body10.jpg" },
  { id: 10, src: "/bodybuilding/body11.jpg" },
  { id: 11, src: "/bodybuilding/body12.jpg" },
  { id: 12, src: "/bodybuilding/body13.jpg" },
  { id: 13, src: "/bodybuilding/body14.jpg" },
  { id: 14, src: "/bodybuilding/body15.jpg" },
  { id: 15, src: "/bodybuilding/body16.jpg" },
  { id: 16, src: "/bodybuilding/body17.jpg" },
];

export default page;
