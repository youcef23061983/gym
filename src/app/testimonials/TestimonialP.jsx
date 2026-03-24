"use client";
import { motion } from "framer-motion";

import TestimonilasSlider from "./TestimonilasSlider";

const TestimonialP = () => {
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
      className="testimonialArticle"
    >
      <motion.h3 variants={homeChidren} className="frontP">
        Ils ont transformé leur vie avec nous{" "}
      </motion.h3>
      <motion.p variants={homeChidren}>
        Bienvenue sur notre page de témoignages, où nos membres partagent leurs
        parcours de transformation, de persévérance et de réussite. Chacun de
        leurs récits incarne le courage, la discipline et la détermination, des
        valeurs que nous cultivons chaque jour dans notre salle de sport. Ces
        témoignages authentiques reflètent les progrès réels et les objectifs
        atteints par ceux qui ont choisi de repousser leurs limites.
        Laissez-vous inspirer par leurs histoires et découvrez comment, ici,
        chaque effort compte et chaque victoire est célébrée.
      </motion.p>

      <TestimonilasSlider />
    </motion.div>
  );
};

export default TestimonialP;
