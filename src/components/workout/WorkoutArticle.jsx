"use client";
import { motion } from "framer-motion";

const WorkoutArticle = () => {
  const homeContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
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
    <motion.div
      variants={homeContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="contactDiv"
    >
      <motion.h2 className="contactHeader" variants={homeChidren}>
        Bienvenue chez Restez Jeune – Votre Destination Fitness
      </motion.h2>
      <motion.p variants={homeChidren}>
        Chez Restez Jeune, nous croyons que chacun mérite de se sentir fort, en
        bonne santé et plein d'énergie. Notre salle de sport propose une gamme
        variée de cours adaptés à tous les niveaux : cardio, fitness,
        musculation, et fitcross. Que vous débutiez votre parcours ou cherchiez
        à relever de nouveaux défis, nos coachs passionnés sont là pour vous
        guider et vous motiver.
        <br />
        <br />
        Pour maximiser vos efforts et atteindre vos objectifs, n'oubliez pas ces
        conseils essentiels :<br />* Entraînez-vous aujourd'hui et reposez-vous
        demain : le repos est aussi important que l'entraînement pour bien
        récupérer.
        <br />* Buvez beaucoup d'eau pour rester hydraté et performant pendant
        vos séances. Dormez bien pour permettre à votre corps de se régénérer et
        renforcer vos muscles. Mangez des aliments sains pour nourrir votre
        corps et optimiser votre énergie. <br />* Rejoignez-nous chez Restez
        Jeune pour transformer votre corps, revitaliser votre esprit et adopter
        des habitudes de vie saines dans une ambiance dynamique et accueillante
        !
      </motion.p>
    </motion.div>
  );
};

export default WorkoutArticle;
