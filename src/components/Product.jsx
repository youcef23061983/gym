"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Product = ({ product }) => {
  const projectsVariants = {
    hidden: { opacity: 0 },
    visible: (index) => ({
      opacity: 1,
      transition: { delay: index * 0.3, ease: "easeInOut" },
    }),
  };
  const { image, id, title, price } = product;
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
      <Image
        src={image}
        className="img"
        width={300}
        height={300}
        alt={`product ${id + 1}`}
      />
      <h3 style={{ fontWeight: "400" }}>Nom: {title}</h3>
      <h3 style={{ fontWeight: "400" }}>Prix: {price}</h3>
    </motion.div>
  );
};

export default Product;
