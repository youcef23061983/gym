"use client";
import { motion } from "framer-motion";
const AnimationClass = () => {
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
    <div>
      {" "}
      <div
        className="flex flex-col items-center justify-center gap-16 h-screen bg-cover bg-no-repeat bg-center bg-fixed "
        style={{ backgroundImage: "url('/classes.jpg')" }}
      >
        <motion.h2
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="frontTitle"
          viewport={{ once: true }}
        >
          Restez en Forme avec Restez Jeune
        </motion.h2>
        <motion.h3
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          className="frontP"
          viewport={{ once: true }}
        >
          Qui veut aller loin ménage sa monture.{" "}
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
          Explorez Nos Cours : Cardio, Fitness, Musculation et FitCross
        </motion.h2>
        <motion.p variants={homeChidren}>
          Chez Restez Jeune, nous proposons une sélection de cours pour répondre
          à tous vos objectifs de forme physique. Plongez dans des sessions de
          cardio dynamiques, améliorez votre endurance avec nos cours de
          fitness, renforcez vos muscles en musculation, ou dépassez vos limites
          avec le FitCross. Nos coachs qualifiés vous accompagneront pour
          progresser dans chaque discipline, dans un cadre motivant et adapté à
          tous les niveaux. Rejoignez-nous pour une expérience fitness complète
          !
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AnimationClass;
