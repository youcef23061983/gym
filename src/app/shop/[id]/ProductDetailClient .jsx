"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductDetailClient = ({ product }) => {
  const router = useRouter();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const stars = Array(5).fill(0);
  const rating = product.rating || 4.5;

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
    >
      {/* Hero Section with Parallax */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative h-[70vh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-black/50 z-10" />
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-10 left-10 z-20"
        >
          <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full text-white text-sm font-semibold uppercase tracking-wider">
            {product.category || "Fitness Equipment"}
          </span>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-30 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4"
          >
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl"
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-4"
              />
            </motion.div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
            >
              {product.title}
            </motion.h1>

            {/* Rating */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <div className="flex gap-1">
                {stars.map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(rating)
                        ? "text-yellow-500 fill-yellow-500"
                        : i < rating
                          ? "text-yellow-500 fill-yellow-500 opacity-50"
                          : "text-gray-600"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-400">({rating} étoiles)</span>
              <span className="text-green-500 text-sm">
                ✓ En stock ({product.stock || 50} unités)
              </span>
            </motion.div>

            {/* Price */}
            <motion.div
              variants={fadeInUp}
              className="flex items-baseline gap-3"
            >
              <span className="text-5xl font-bold text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text">
                {product.price}
              </span>
              <span className="text-gray-400 line-through">
                {Math.round(parseInt(product.price) * 1.3)} €
              </span>
              <span className="px-2 py-1 bg-red-600/20 text-red-400 rounded-lg text-sm font-semibold">
                -30%
              </span>
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h3 className="text-sm font-semibold text-white">Description</h3>
              <p className="text-gray-100 leading-relaxed">
                {product.description ||
                  "Équipement fitness de haute qualité conçu pour les athlètes exigeants. Performance et durabilité garanties pour vous accompagner dans tous vos objectifs sportifs."}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <h3 className="text-xl font-semibold text-white">
                Caractéristiques techniques
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Qualité professionnelle",
                  "Matériaux premium",
                  "Conception ergonomique",
                  "Garantie 2 ans",
                  "Livraison offerte",
                  "Retour 30 jours",
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Product Specifications Table */}
            <motion.div variants={fadeInUp} className="space-y-3 pt-4">
              <h3 className="text-xl font-semibold text-white">
                Spécifications
              </h3>
              <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700">
                <div className="divide-y divide-gray-700">
                  <div className="flex px-4 py-3">
                    <span className="w-1/3 text-gray-400">Matériau</span>
                    <span className="w-2/3 text-white">
                      Acier inoxydable / PVC haute densité
                    </span>
                  </div>
                  <div className="flex px-4 py-3">
                    <span className="w-1/3 text-gray-400">Poids</span>
                    <span className="w-2/3 text-white">
                      Variable selon modèle
                    </span>
                  </div>
                  <div className="flex px-4 py-3">
                    <span className="w-1/3 text-gray-400">Dimensions</span>
                    <span className="w-2/3 text-white">
                      Standard / Universal
                    </span>
                  </div>
                  <div className="flex px-4 py-3">
                    <span className="w-1/3 text-gray-400">Utilisation</span>
                    <span className="w-2/3 text-white">
                      Professionnel & Domestique
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Back Button */}
            <motion.div variants={fadeInUp} className="pt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/shop")}
                className="px-8 py-3 rounded-xl font-semibold text-white border border-orange-500 hover:bg-orange-500/10 transition-all duration-300"
              >
                ← Retour aux produits
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailClient;
