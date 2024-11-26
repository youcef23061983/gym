"use client";
export const dynamic = "force-dynamic";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ShuffleGrid from "@/components/ShuffleGrid";

const page = () => {
  useEffect(() => {
    document.title = "CrossFit";
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
        style={{ backgroundImage: "url('/crossfit/cross1.jpg')" }}
      >
        <motion.h2
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="frontTitle"
          viewport={{ once: true }}
        >
          Repoussez Vos Limites avec Nos Cours de CrossFit
        </motion.h2>
        <motion.h3
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          className="frontP"
          viewport={{ once: true }}
        >
          Le corps atteint ce que l’esprit croit.
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
          Libérez Votre Potentiel avec Nos Cours de CrossFit
        </motion.h2>
        <motion.p variants={homeChidren}>
          Nos cours de CrossFit sont conçus pour ceux qui cherchent un
          entraînement intense et complet. En combinant des exercices de force,
          de cardio et de mobilité, chaque session vous aide à gagner en
          puissance, en endurance et en agilité. Vous y retrouverez des
          mouvements fonctionnels comme les squats, les tractions, et les
          burpees, qui sollicitent tout le corps et augmentent votre performance
          globale. Avec des coachs qualifiés et une ambiance motivante, vous
          aurez le soutien nécessaire pour dépasser vos limites et atteindre de
          nouveaux objectifs. Rejoignez-nous et transformez votre condition
          physique avec le CrossFit !
        </motion.p>
      </motion.div>
      <section className="px-4 py-12 mx-2 my-2 bg-white rounded-lg border border-gray-200 grid grid-cols-1 md:grid-cols-2 items-center gap-3">
        <div className="pricingDiv">
          <h3 style={{ fontWeight: "bold" }}>
            Un Entraînement Intense pour une Force et une Endurance Totales
          </h3>
          <p>
            Nos cours de CrossFit combinent des exercices variés pour un
            entraînement complet et intense. En alternant push-ups pour
            renforcer le haut du corps, pull-ups pour la puissance du dos et des
            bras, et air squats pour des jambes solides, chaque séance vous
            permet de développer force, endurance et agilité. Ces exercices
            fonctionnels, effectués à haute intensité, sont parfaits pour brûler
            des calories et renforcer le système cardiovasculaire. Que vous
            soyez débutant ou athlète confirmé, nos coachs adaptent les
            mouvements à votre niveau, vous poussant à donner le meilleur de
            vous-même. Rejoignez-nous et découvrez un programme qui vous aidera
            à repousser vos limites !
          </p>
        </div>
        <ShuffleGrid squareData={squareData} />
      </section>
    </div>
  );
};

const squareData = [
  { id: 1, src: "/crossfit/cross2.jpg" },
  { id: 3, src: "/crossfit/cross3.jpg" },
  { id: 2, src: "/crossfit/cross4.jpg" },
  { id: 4, src: "/crossfit/cross5.jpg" },
  { id: 5, src: "/crossfit/cross6.jpg" },
  { id: 6, src: "/crossfit/cross7.jpg" },
  { id: 7, src: "/crossfit/cross8.jpg" },
  { id: 8, src: "/crossfit/cross9.jpg" },
  { id: 9, src: "/crossfit/cross10.jpg" },
  { id: 10, src: "/crossfit/cross11.jpg" },
  { id: 11, src: "/crossfit/cross12.jpg" },
  { id: 12, src: "/crossfit/cross13.jpg" },
  { id: 13, src: "/crossfit/cross14.jpg" },
  { id: 14, src: "/crossfit/cross15.jpg" },
  { id: 15, src: "/crossfit/cross16.jpg" },
  { id: 16, src: "/crossfit/cross17.jpg" },
];

export default page;
