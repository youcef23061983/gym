"use client";
import { motion } from "framer-motion";

const WorkoutTitle = () => {
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
      <motion.h2
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="frontTitle"
        viewport={{ once: true }}
      >
        Restez Jeune : Force, Santé et Énergie{" "}
      </motion.h2>
      <motion.h3
        variants={paragraphVariants}
        initial="hidden"
        animate="visible"
        className="frontP"
        viewport={{ once: true }}
      >
        Qui veut aller loin ménage sa monture{" "}
      </motion.h3>
    </>
  );
};

export default WorkoutTitle;
