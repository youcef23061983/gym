"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  FaDumbbell,
  FaShieldAlt,
  FaCreditCard,
  FaUsers,
  FaClock,
  FaHandshake,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const page = () => {
  useEffect(() => {
    document.title = "Terms & Conditions - Restez Jeune";
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const sectionVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const termsSections = [
    {
      icon: <FaDumbbell className="text-3xl" />,
      title: "Accès et Adhésion",
      content:
        "L'adhésion à Restez Jeune donne accès à nos cinq emplacements répartis dans la ville de Toulouse. Les membres peuvent utiliser nos installations durant les heures d'ouverture, et il est important de présenter une carte de membre à chaque entrée. Les forfaits sont disponibles sous forme d'abonnements mensuels ou annuels, chacun avec des avantages spécifiques. Toute souscription, suspension ou résiliation d'abonnement doit respecter les modalités contractuelles. En cas de questions, l'équipe de la réception est disponible pour fournir des informations complémentaires.",
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Utilisation des Installations et Respect des Espaces",
      content:
        "Pour garantir un environnement agréable et sûr pour tous, nous demandons à chaque membre d'utiliser les équipements correctement et de respecter les consignes d'entretien. Après chaque utilisation, veuillez nettoyer et ranger le matériel utilisé. Les vestiaires, salles de sport, et zones de repos doivent être maintenus propres et en bon état. Tout manquement aux règles d'hygiène et de respect des espaces communs peut entraîner une sanction.",
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Règles de Conduite et Sécurité",
      content:
        "Afin de préserver un environnement sain et motivant, Restez Jeune met en place des règles strictes de comportement. Tout comportement inapproprié, incluant l'intimidation, la violence ou l'abus verbal envers le personnel ou d'autres membres, est strictement interdit. Les membres sont également tenus de respecter les consignes de sécurité affichées dans chaque espace, notamment en matière de levage de charges lourdes et d'utilisation d'appareils de musculation. Le non-respect de ces consignes peut entraîner une suspension temporaire ou définitive de l'accès.",
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Participation aux Cours Collectifs",
      content:
        "Les membres ont accès à une variété de cours collectifs incluant le cardio, le fitness, le crossfit, et la musculation. Pour garantir une expérience optimale, la réservation est recommandée pour chaque cours, car les places sont limitées. Les membres doivent arriver à l'heure et suivre les instructions des entraîneurs afin d'assurer une session productive et sécurisée pour tous les participants. Le non-respect des horaires ou l'abandon fréquent des sessions réservées peut limiter l'accès aux cours.",
    },
    {
      icon: <FaCreditCard className="text-3xl" />,
      title: "Politique de Paiement et Résiliation",
      content:
        "Les abonnements à Restez Jeune sont facturés mensuellement ou annuellement, en fonction de la formule choisie. Toute demande de suspension ou d'annulation d'abonnement doit être faite au moins 30 jours à l'avance pour éviter des frais supplémentaires. En cas de résiliation anticipée, des frais de pénalité peuvent s'appliquer, sauf en cas de motifs sérieux et justifiés, tels qu'un problème de santé. Pour plus de détails sur les conditions de paiement et de résiliation, veuillez consulter notre politique de remboursement et nos termes financiers.",
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Responsabilité et Assurance",
      content:
        "Restez Jeune prend des mesures pour assurer la sécurité de ses membres, mais chaque adhérent est responsable de ses propres actions et doit s'assurer de respecter les normes de sécurité. Nous encourageons tous les membres à souscrire une assurance personnelle en cas de blessures ou d'accidents. Restez Jeune décline toute responsabilité pour les pertes d'objets personnels ou les blessures résultant d'un usage inapproprié des équipements.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Full Height Image */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image - Full height */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/terms.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-gray-900/70" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-red-600 rounded-full mb-8 shadow-2xl"
            >
              <FaDumbbell className="text-5xl text-white" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Conditions Générales
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Avis d'athlètes et de passionnés
            </p>
            <div className="h-1 w-24 bg-red-500 mx-auto mt-8 rounded-full" />

            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="text-white text-sm">Scroll</div>
              <div className="w-6 h-10 border-2 border-white rounded-full mx-auto mt-2">
                <div className="w-1.5 h-3 bg-white rounded-full mx-auto mt-2 animate-bounce" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-4 py-20"
      >
        {/* Introduction Card */}
        <motion.div
          variants={sectionVariants}
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 mb-12 text-white shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <FaCheckCircle className="text-3xl" />
            <h2 className="text-2xl font-bold">Notre Engagement</h2>
          </div>
          <p className="text-lg leading-relaxed">
            Le respect des règles est la clé d'une expérience réussie. Chez
            Restez Jeune, nous nous engageons à fournir un environnement sûr,
            motivant et respectueux pour tous nos membres.
          </p>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {termsSections.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Icon Sidebar */}
                <div className="bg-gradient-to-br from-red-600 to-red-700 md:w-32 p-6 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-4xl mb-2">{section.icon}</div>
                    <div className="text-sm font-semibold hidden md:block">
                      Section {index + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>

                  {/* Decorative element */}
                  <div className="mt-4 flex items-center gap-2 text-red-600 group cursor-pointer">
                    <span className="text-sm font-medium">Lire plus</span>
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          variants={sectionVariants}
          className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">
                En acceptant ces conditions
              </h3>
              <p className="text-gray-300">
                Chaque membre de Restez Jeune contribue à créer un espace
                harmonieux et motivant pour tous. Merci de votre engagement à
                respecter ces règles pour une expérience sportive enrichissante
                !
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-colors shadow-lg"
            >
              J'accepte les conditions
            </motion.button>
          </div>
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
