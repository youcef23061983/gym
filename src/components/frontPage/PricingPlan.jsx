"use client";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link";

const PricingPlan = () => {
  const PricingUnit = ({ period, money }) => {
    return (
      <div className="pricingDiv">
        <h3 style={{ fontWeight: "bold" }}>{period}</h3>
        <p style={{ fontWeight: "400" }}>
          <span style={{ color: "green", fontWeight: "500" }}>{money}€</span>
          /month
        </p>
        <span
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "1px",
          }}
        >
          <IoIosCheckmarkCircleOutline
            style={{ color: "green", fontSize: "20px" }}
          />
          Tous les cours
        </span>
        <span
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "1px",
          }}
        >
          <IoIosCheckmarkCircleOutline
            style={{ color: "green", fontSize: "20px" }}
          />
          Tous les événements pour les membres
        </span>
        <span
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "1px",
          }}
        >
          <IoIosCheckmarkCircleOutline
            style={{ color: "green", fontSize: "20px" }}
          />
          Accès complet à la salle de sport
        </span>
        <Link href="contact" className="link mt-10">
          REJOIGNEZ-NOUS
        </Link>
      </div>
    );
  };
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
    <div className="pricingPlan bg-gradient-to-r from-black via-red-700 to-black">
      <motion.h2
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="frontTitle"
        viewport={{ once: true }}
      >
        Adhésion
      </motion.h2>
      <motion.h3
        variants={paragraphVariants}
        initial="hidden"
        animate="visible"
        className="frontP"
        viewport={{ once: true }}
      >
        Transformez Votre Santé et Atteignez Vos Objectifs Fitness Ici
      </motion.h3>
      <div className="unitDiv">
        <PricingUnit period={"MOIS PAR MOIS"} money={160} />
        <PricingUnit period={"ADHÉSION DE 6 MOIS"} money={140} />
        <PricingUnit period={"  ADHÉSION D'1 AN"} money={120} />
      </div>
    </div>
  );
};

export default PricingPlan;
