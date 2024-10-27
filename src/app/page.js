"use client";
import { ReactLenis } from "lenis/dist/lenis-react";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div>
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <FrontImage />
      </ReactLenis>
      <Counter />
      <Features />
      <About />
    </div>
  );
};
const FrontImage = () => {
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
      <div className="frontDiv">
        <motion.h2
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="frontTitle"
          viewport={{ once: true }}
        >
          Puissance et Passion{" "}
        </motion.h2>
        <motion.h3
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          className="frontP"
          viewport={{ once: true }}
        >
          Le chemin du succès est pavé de volonté.
        </motion.h3>
      </div>
    </>
  );
};
const Counter = () => {
  const counter1 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1, duration: 1 },
    },
  };
  const counter2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1.1, duration: 1 },
    },
  };
  const counter3 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1.2, duration: 1 },
    },
  };
  return (
    <main className="countsDiv">
      <motion.div
        variants={counter1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="countDiv"
      >
        <p>FIDÈLE À PLUS DE</p>
        <AnimatedCounter from={0} to={1100} duration={5} />
        <p>MEMBRES</p>
      </motion.div>
      <motion.div
        variants={counter2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="countDiv"
      >
        <p>JOUEZ À PLUS DE </p>
        <AnimatedCounter from={0} to={5} duration={3} />
        <p>LOCAUX</p>
      </motion.div>
      <motion.div
        variants={counter3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="countDiv"
      >
        <p>À VOTRE SERVICE DEPUIS</p>
        <AnimatedCounter from={0} to={9} duration={4} />
        <p>ANS</p>
      </motion.div>
    </main>
  );
};
const Features = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-black via-black to-red-700 p-4 md:p-8">
        {/* <section className="bg-gradient-to-r from-black via-black to-red-700 p-4 md:p-8 flex flex-col items-center justify-center w-full h-screen"> */}
        <h1 className="featured1">FEATURED CLASSES</h1>
        {/* <h1 className="featured2">FEATURED CLASSES</h1> */}
        <div className="mx-auto max-w-5xl mt-5">
          <Link
            heading="Cardio"
            imgSrc="/homepage/cardio.jpg"
            href="/classes/cardio"
          />
          <Link
            heading="Fitness"
            imgSrc="/homepage/fitness.jpg"
            href="/classes/fitness"
          />
          <Link
            heading="Body Building"
            imgSrc="/homepage/bodybuilding.jpg"
            href="/classes/bodybuilding"
          />
          <Link
            heading="Crossfit"
            imgSrc="/homepage/crossfit.jpg"
            href="/classes/crossfit"
          />
        </div>
      </section>
    </>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};
const About = () => {
  return (
    <div className="aboutDiv">
      <div className="aboutImg">hjfiohfô</div>
      <div className="aboutArticle">
        <h2>GET TO KNOW US BETTER translate to french</h2>
      </div>
    </div>
  );
};

export default Home;
