"use client";
import { motion } from "framer-motion";
const page = () => {
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
    <div style={{ backgroundColor: "#ffce84" }}>
      <div
        className="flex flex-col items-center justify-center gap-16 h-screen bg-cover bg-no-repeat bg-center bg-fixed "
        style={{ backgroundImage: "url('/about.jpg')" }}
      >
        <motion.h2
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="frontTitle"
          viewport={{ once: true }}
        >
          À Propos de Restez Jeune{" "}
        </motion.h2>
        <motion.h3
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          className="frontP"
          viewport={{ once: true }}
        >
          Ensemble, nous sommes plus forts.{" "}
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
          Bienvenue chez Restez Jeune, Votre Salle de Sport à Toulouse{" "}
        </motion.h2>
        <motion.p variants={homeChidren}>
          Située au cœur de Toulouse, Restez Jeune est bien plus qu'une simple
          salle de sport. Depuis 9 ans, nous avons grandi pour devenir un pilier
          de la communauté sportive locale avec cinq emplacements à travers la
          ville et une famille de plus de 1 100 membres engagés. Notre salle
          propose quatre disciplines pour répondre à tous les objectifs de nos
          membres : des cours dynamiques de cardio et de fitness, des séances de
          crossfit pour se surpasser, et des programmes de musculation pour
          développer la force et la forme physique. Chez Restez Jeune, nous
          croyons que chaque membre mérite un accompagnement personnalisé pour
          atteindre son plein potentiel, dans une ambiance conviviale et
          motivante. Rejoignez-nous pour explorer une approche complète du
          bien-être physique et mental !
        </motion.p>
      </motion.div>
      <motion.div variants={homeChidren} className="mapResponsive">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92455.26545375441!2d1.3699753204768566!3d43.60181402276767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebd95d5165db9%3A0xa31a9406056e8b2b!2sSalle%20de%20sport%20Toulouse%20-%20Fitness%20Park%20Bayard!5e0!3m2!1sen!2sdz!4v1730739807894!5m2!1sen!2sdz"
          width="1200"
          height="450"
          title="responsive"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </div>
  );
};

export default page;
