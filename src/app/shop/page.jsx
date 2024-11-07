"use client";
import UseFetch from "@/components/UseFetch";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
const page = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/shop");
    },
  });

  const { data: products } = UseFetch(
    "http://localhost:3001/products",
    "products"
  );

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
  const projectsVariants = {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: { delay: index * 0.3, ease: "easeInOut" },
    }),
  };
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, black, white, black)",
        paddingBottom: "3rem",
      }}
    >
      {/* <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p> */}
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
      <div className="products">
        {products?.map((product) => {
          const { id, title, image, price } = product;
          return (
            <motion.div
              key={id}
              variants={projectsVariants}
              initial="hidden"
              whileInView="visible"
              custom={id}
              className="product"
              viewport={{ once: true }}
            >
              <img src={image} className="img" alt={`product ${id + 1}`} />
              <h3 style={{ fontWeight: "400" }}>Nom: {title}</h3>
              <h3 style={{ fontWeight: "400" }}>Prix: {price}</h3>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
