"use client";
import { motion } from "framer-motion";
const ShopArticle = () => {
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
    <>
      <div
        className="flex flex-col items-center justify-center gap-16 h-screen bg-cover bg-no-repeat bg-center bg-fixed "
        style={{ backgroundImage: "url('/shop.jpg')" }}
      >
        <motion.h2
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="frontTitle"
          viewport={{ once: true }}
        >
          Restez Jeune : Votre Destination Forme et Bien-être{" "}
        </motion.h2>
        <motion.h3
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          className="frontP"
          viewport={{ once: true }}
        >
          Le corps est le temple de l'esprit, entretenez-le{" "}
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
          Bienvenue à la Boutique Restez Jeune{" "}
        </motion.h2>
        <motion.p variants={homeChidren}>
          Découvrez notre gamme de produits de fitness spécialement sélectionnés
          pour accompagner vos séances de cardio, de musculation, et de
          fitcross. Chez Restez Jeune, nous vous proposons des équipements et
          accessoires de qualité pour optimiser vos performances et atteindre
          vos objectifs. Explorez notre boutique et trouvez tout ce dont vous
          avez besoin pour rester actif et en forme.
        </motion.p>
      </motion.div>
    </>
  );
};

export default ShopArticle;
