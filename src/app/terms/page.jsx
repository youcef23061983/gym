"use client";
import { motion } from "framer-motion";
const page = () => {
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
      <div
        className="flex flex-col items-center justify-center gap-16 h-screen bg-cover bg-no-repeat bg-center bg-fixed "
        style={{ backgroundImage: "url('/terms.jpg')" }}
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
          Le respect des règles est la clé d'une expérience réussie.{" "}
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
          Conditions Générales d'Utilisation de Restez Jeune{" "}
        </motion.h2>
        <motion.p variants={homeChidren}>
          1. Accès et Adhésion:
          <br />
          L’adhésion à Restez Jeune donne accès à nos cinq emplacements répartis
          dans la ville de Toulouse. Les membres peuvent utiliser nos
          installations durant les heures d'ouverture, et il est important de
          présenter une carte de membre à chaque entrée. Les forfaits sont
          disponibles sous forme d’abonnements mensuels ou annuels, chacun avec
          des avantages spécifiques. Toute souscription, suspension ou
          résiliation d’abonnement doit respecter les modalités contractuelles.
          En cas de questions, l’équipe de la réception est disponible pour
          fournir des informations complémentaires.
          <br />
          <br />
          2. Utilisation des Installations et Respect des Espaces:
          <br />
          Pour garantir un environnement agréable et sûr pour tous, nous
          demandons à chaque membre d’utiliser les équipements correctement et
          de respecter les consignes d’entretien. Après chaque utilisation,
          veuillez nettoyer et ranger le matériel utilisé. Les vestiaires,
          salles de sport, et zones de repos doivent être maintenus propres et
          en bon état. Tout manquement aux règles d’hygiène et de respect des
          espaces communs peut entraîner une sanction.
          <br />
          <br />
          3. Règles de Conduite et Sécurité:
          <br />
          Afin de préserver un environnement sain et motivant, Restez Jeune met
          en place des règles strictes de comportement. Tout comportement
          inapproprié, incluant l'intimidation, la violence ou l’abus verbal
          envers le personnel ou d'autres membres, est strictement interdit. Les
          membres sont également tenus de respecter les consignes de sécurité
          affichées dans chaque espace, notamment en matière de levage de
          charges lourdes et d’utilisation d’appareils de musculation. Le
          non-respect de ces consignes peut entraîner une suspension temporaire
          ou définitive de l’accès.
          <br />
          <br />
          4. Participation aux Cours Collectifs:
          <br />
          Les membres ont accès à une variété de cours collectifs incluant le
          cardio, le fitness, le crossfit, et la musculation. Pour garantir une
          expérience optimale, la réservation est recommandée pour chaque cours,
          car les places sont limitées. Les membres doivent arriver à l'heure et
          suivre les instructions des entraîneurs afin d’assurer une session
          productive et sécurisée pour tous les participants. Le non-respect des
          horaires ou l’abandon fréquent des sessions réservées peut limiter
          l’accès aux cours.
          <br />
          <br />
          5. Politique de Paiement et Résiliation:
          <br />
          Les abonnements à Restez Jeune sont facturés mensuellement ou
          annuellement, en fonction de la formule choisie. Toute demande de
          suspension ou d’annulation d’abonnement doit être faite au moins 30
          jours à l’avance pour éviter des frais supplémentaires. En cas de
          résiliation anticipée, des frais de pénalité peuvent s’appliquer, sauf
          en cas de motifs sérieux et justifiés, tels qu’un problème de santé.
          Pour plus de détails sur les conditions de paiement et de résiliation,
          veuillez consulter notre politique de remboursement et nos termes
          financiers.
          <br />
          <br />
          6. Responsabilité et Assurance:
          <br />
          Restez Jeune prend des mesures pour assurer la sécurité de ses
          membres, mais chaque adhérent est responsable de ses propres actions
          et doit s’assurer de respecter les normes de sécurité. Nous
          encourageons tous les membres à souscrire une assurance personnelle en
          cas de blessures ou d’accidents. Restez Jeune décline toute
          responsabilité pour les pertes d’objets personnels ou les blessures
          résultant d’un usage inapproprié des équipements.
          <br />
        </motion.p>
        <hr class="border-t-2 border-gray-400 my-6 w-full" />
        <motion.p variants={homeChidren}>
          En acceptant ces conditions, chaque membre de Restez Jeune contribue à
          créer un espace harmonieux et motivant pour tous. Merci de votre
          engagement à respecter ces règles pour une expérience sportive
          enrichissante !
        </motion.p>
      </motion.div>
    </div>
  );
};

export default page;
