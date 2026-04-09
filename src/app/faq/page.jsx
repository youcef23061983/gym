"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaQuestionCircle,
  FaDumbbell,
  FaClock,
  FaCalendarAlt,
  FaDumbbell as FaEquipment,
  FaFileAlt,
  FaHeadset,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const page = () => {
  useEffect(() => {
    document.title = "FAQ - Restez Jeune";
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      icon: <FaDumbbell className="text-2xl" />,
      title: "Adhésion et Inscription",
      content:
        "Pour devenir membre de Restez Jeune, il vous suffit de remplir un formulaire d'inscription en ligne ou à l'une de nos cinq salles à Toulouse. Nous proposons différents types d'abonnements adaptés à vos besoins, qu'il s'agisse d'un accès ponctuel, mensuel ou annuel. N'hésitez pas à nous contacter pour plus d'informations sur les tarifs et les options disponibles.",
      details: [
        "Inscription en ligne ou en salle",
        "Abonnements ponctuels, mensuels ou annuels",
        "Tarifs adaptés à vos besoins",
      ],
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Horaires d'Ouverture",
      content:
        "Nos salles sont ouvertes 7 jours sur 7 pour convenir à votre emploi du temps. Les horaires peuvent varier selon les emplacements, mais en général, nous ouvrons nos portes dès 6h du matin jusqu'à 22h. Consultez notre site web pour connaître les horaires spécifiques de chaque emplacement.",
      details: [
        "Ouvert 7 jours sur 7",
        "De 6h à 22h (horaires variables selon emplacement)",
        "Consultez notre site pour les horaires spécifiques",
      ],
    },
    {
      icon: <FaCalendarAlt className="text-2xl" />,
      title: "Cours et Activités",
      content:
        "Nous offrons une variété de cours, notamment le cardio, le fitness, le crossfit et la musculation. Les cours sont disponibles à différents horaires tout au long de la semaine. Pour participer, il est conseillé de réserver à l'avance, surtout pour les cours très populaires. Des séances d'essai sont également disponibles pour vous permettre de découvrir nos programmes avant de vous engager.",
      details: [
        "Cardio, Fitness, Crossfit, Musculation",
        "Réservation recommandée",
        "Séances d'essai disponibles",
      ],
    },
    {
      icon: <FaEquipment className="text-2xl" />,
      title: "Équipements et Installations",
      content:
        "Restez Jeune est équipée d'un large éventail de machines de cardio et de musculation, ainsi que d'espaces dédiés aux cours collectifs. Tous nos équipements sont régulièrement entretenus pour garantir leur sécurité et leur efficacité. Nous encourageons nos membres à faire un usage responsable des installations et à respecter les consignes de sécurité.",
      details: [
        "Machines de cardio et musculation",
        "Espaces dédiés aux cours collectifs",
        "Équipements entretenus régulièrement",
      ],
    },
    {
      icon: <FaFileAlt className="text-2xl" />,
      title: "Politique de Résiliation",
      content:
        "Si vous souhaitez résilier votre abonnement, veuillez consulter notre politique de résiliation qui stipule les conditions à suivre. Nous demandons un préavis de 30 jours pour les résiliations mensuelles, tandis que les abonnements annuels sont soumis à des conditions spécifiques. Pour toute question, notre équipe se tient à votre disposition pour vous accompagner dans cette démarche.",
      details: [
        "Préavis de 30 jours pour les abonnements mensuels",
        "Conditions spécifiques pour les abonnements annuels",
        "Accompagnement personnalisé",
      ],
    },
    {
      icon: <FaHeadset className="text-2xl" />,
      title: "Contact et Support",
      content:
        "Pour toute question ou préoccupation, n'hésitez pas à contacter notre équipe d'assistance. Vous pouvez nous joindre par téléphone, par e-mail, ou directement à la réception de nos salles. Nous sommes là pour vous aider et nous nous engageons à vous fournir un service de qualité pour rendre votre expérience chez Restez Jeune agréable et satisfaisante.",
      details: [
        "Support téléphonique et email",
        "Accueil en salle",
        "Service client dédié",
      ],
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Full Height Image */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image - Full height */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/FAQ.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-gray-900/70" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-red-600 rounded-full mb-8 shadow-2xl"
            >
              <FaQuestionCircle className="text-5xl text-white" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Foire Aux Questions
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Un esprit éclairé est la clé d'un choix éclairé.
            </p>
            <div className="h-1 w-24 bg-red-500 mx-auto mt-8 rounded-full" />

            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
            >
              <div className="text-white text-sm">Découvrir</div>
              <div className="w-6 h-10 border-2 border-white rounded-full mx-auto mt-2">
                <div className="w-1.5 h-3 bg-white rounded-full mx-auto mt-2 animate-bounce" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto px-4 py-20"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Questions Fréquemment Posées
          </h2>
          <div className="h-1 w-20 bg-red-600 mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions sur nos services,
            nos installations et nos politiques.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="text-red-600">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 text-left">
                    {item.title}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-red-600"
                >
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {item.content}
                      </p>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Points clés :
                        </h4>
                        <ul className="space-y-1">
                          {item.details.map((detail, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-gray-600"
                            >
                              <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center"
        >
          <FaHeadset className="text-4xl mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">
            Vous avez d'autres questions ?
          </h3>
          <p className="mb-6 opacity-90">
            Notre équipe est là pour vous aider. N'hésitez pas à nous contacter
            !
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            onClick={() => (window.location.href = "/contact")}
          >
            Contactez-nous
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ↑
      </motion.button>
    </div>
  );
};

export default page;
