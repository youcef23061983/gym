"use client";
import { ReactLenis } from "lenis/dist/lenis-react";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

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
      <PricingPlan />
      <InstaHero />
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
          FORCE ET PÉRSEVÉRANCE{" "}
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
      transition: { delay: 0.5, duration: 1 },
    },
  };
  const counter2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.7, duration: 1 },
    },
  };
  const counter3 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1, duration: 1 },
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
const FeatureLink = ({ heading, imgSrc, subheading, href }) => {
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
const Features = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-black via-black to-red-700 p-4 md:p-8">
        <h1 className="featured1">FEATURED CLASSES</h1>
        <div className="mx-auto max-w-5xl mt-5">
          <FeatureLink
            heading="Cardio"
            imgSrc="/homepage/cardio.jpg"
            href="/classes/cardio"
          />
          <FeatureLink
            heading="Fitness"
            imgSrc="/homepage/fitness.jpg"
            href="/classes/fitness"
          />
          <FeatureLink
            heading="Body Building"
            imgSrc="/homepage/bodybuilding.jpg"
            href="/classes/bodybuilding"
          />
          <FeatureLink
            heading="Crossfit"
            imgSrc="/homepage/crossfit.jpg"
            href="/classes/crossfit"
          />
        </div>
      </section>
    </>
  );
};

const About = () => {
  return (
    <div className="aboutDiv">
      <h1 className="featured1">FAITES CONNAISSANCE AVEC NOUS</h1>
      <div className="aboutImg">
        <img className="gridImg" src="/homepage/aboutImg1.jpg" />
        <img className="gridImg" src="/homepage/aboutImg2.jpg" />
        <img className="gridImg" src="/homepage/aboutImg3.jpg" />
        <img className="gridImg" src="/homepage/aboutImg4.jpg" />
      </div>
      <div className="aboutArticle">
        <h2> Notre Engagement pour Votre Aventure Fitness</h2>
        <p>
          Chez Rester Jeune, nous croyons que le fitness est un mode de vie
          accessible à tous. Notre salle moderne offre une variété d'équipements
          et de cours adaptés à chaque niveau, avec des entraîneurs certifiés
          prêts à vous guider. Nous créons un environnement accueillant et
          inclusif, où chacun peut se sentir motivé à atteindre ses objectifs.
          Rejoignez-nous et faisons de votre parcours fitness une réussite
          ensemble !
        </p>
        <Link href="about" className="link" style={{ marginRight: "auto" }}>
          DÉCOUVREZ ENCORE PLUS
        </Link>
      </div>
    </div>
  );
};
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
const PricingPlan = () => {
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

const InstaHero = () => {
  return (
    <section className="w-full px-4 py-12 mx-4 grid grid-cols-1 md:grid-cols-2 items-center gap-3 max-w-6xl md:max-w-[100em]">
      <div className="pricingDiv">
        <h3 style={{ fontWeight: "bold" }}>
          Transformez Votre Corps, Élevez Votre Esprit !
        </h3>
        <p>
          Rejoignez notre communauté passionnée de fitness ! 💪 Suivez-nous pour
          des conseils d’entraînement, des recettes saines et une motivation
          quotidienne. Ensemble, nous allons atteindre vos objectifs de remise
          en forme et célébrer chaque victoire. Taggez-nous dans vos progrès et
          partagez votre aventure ! #Fitness #Santés
        </p>
        <Link
          href="https://www.instagram.com"
          className="link mt-10 mr-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          REJOIGNEZ-NOUS
        </Link>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/homepage/frontinsta1.jpg",
  },
  {
    id: 2,
    src: "/homepage/frontinsta2.jpg",
  },
  {
    id: 3,
    src: "/homepage/frontinsta3.jpg",
  },
  {
    id: 4,
    src: "/homepage/frontinsta4.jpg",
  },
  {
    id: 5,
    src: "/homepage/frontinsta5.jpg",
  },
  {
    id: 6,
    src: "/homepage/frontinsta6.jpg",
  },
  {
    id: 7,
    src: "/homepage/frontinsta7.jpg",
  },
  {
    id: 8,
    src: "/homepage/frontinsta8.jpg",
  },
  {
    id: 9,
    src: "/homepage/frontinsta9.jpg",
  },
  {
    id: 10,
    src: "/homepage/frontinsta10.jpg",
  },
  {
    id: 11,
    src: "/homepage/frontinsta11.jpg",
  },
  {
    id: 12,
    src: "/homepage/frontinsta12.jpg",
  },
  {
    id: 13,
    src: "/homepage/frontinsta13.jpg",
  },
  {
    id: 14,
    src: "/homepage/frontinsta14.jpg",
  },
  {
    id: 15,
    src: "/homepage/frontinsta15.jpg",
  },
  {
    id: 16,
    src: "/homepage/frontinsta16.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1 p-2.5">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Home;
