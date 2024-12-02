"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import "./testimonial.css";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { BASE_API_URL } from "@/utils/Url";

const Page = () => {
  useEffect(() => {
    document.title = "Testimonials";
  }, []);
  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/api/auth/signin?callbackUrl=/testimonials");
  //   },
  // });

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
    <div>
      {/* <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
      <p>{session?.user?.name}</p> */}
      {/* {session?.user?.image && (
        <Image
          src={session.user.image}
          alt="User Profile"
          width={50}
          height={50}
        />
      )} */}

      <div
        className="flex flex-col items-center justify-center gap-16 h-screen bg-cover bg-no-repeat bg-center bg-fixed "
        style={{ backgroundImage: "url('/testimonial/testimonialheader.jpg')" }}
      >
        <motion.h2
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="frontTitle"
          viewport={{ once: true }}
        >
          Avis d'athlètes et de passionnés{" "}
        </motion.h2>
        <motion.h3
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          className="frontP"
          viewport={{ once: true }}
        >
          Les résultats parlent d’eux-mêmes.
        </motion.h3>
      </div>
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
          Bienvenue sur notre page de témoignages, où nos membres partagent
          leurs parcours de transformation, de persévérance et de réussite.
          Chacun de leurs récits incarne le courage, la discipline et la
          détermination, des valeurs que nous cultivons chaque jour dans notre
          salle de sport. Ces témoignages authentiques reflètent les progrès
          réels et les objectifs atteints par ceux qui ont choisi de repousser
          leurs limites. Laissez-vous inspirer par leurs histoires et découvrez
          comment, ici, chaque effort compte et chaque victoire est célébrée.
        </motion.p>

        <TestimonilasSlider />
      </motion.div>
    </div>
  );
};
const TestimonilasSlider = () => {
  if (!BASE_API_URL) {
    return null;
  }
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await fetch("http:/localhost:3000/testimonials/api");
        const res = await fetch(`${BASE_API_URL}/testimonials/api`);

        if (!res.ok) {
          throw Error("There is no product data");
        }
        const data = await res.json();
        setTestimonials(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container}>
      {testimonials?.map((project, i) => {
        const startOffset = i / testimonials.length;
        const endOffset = startOffset + 0.2;

        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[startOffset, endOffset]}
            targetScale={1 - (testimonials.length - i) * 0.05}
          />
        );
      })}
    </main>
  );
};

const Card = ({ i, title, description, src, color, progress, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, [0, 1], [1, targetScale], {
    clamp: false,
  });

  return (
    <div ref={container} className="cardContainer">
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="card"
      >
        <h2>{title}</h2>
        <div className="body">
          <div className="description">
            <p>{description}</p>
          </div>

          <div className="imageContainer">
            <motion.div className="inner" style={{ scale: imageScale }}>
              <Image fill src={`/${src}`} alt="image" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
