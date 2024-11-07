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
        style={{ backgroundImage: "url('/FAQ.jpg')" }}
      >
        <motion.h2
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="frontTitle"
          viewport={{ once: true }}
        >
          Questions Fréquemment Posées (FAQ)
        </motion.h2>
        <motion.h3
          variants={paragraphVariants}
          initial="hidden"
          animate="visible"
          className="frontP"
          viewport={{ once: true }}
        >
          Un esprit éclairé est la clé d'un choix éclairé.
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
          Foire Aux Questions (FAQ) de Restez Jeune{" "}
        </motion.h2>
        <motion.p variants={homeChidren}>
          1. Adhésion et Inscription:
          <br />
          Pour devenir membre de Restez Jeune, il vous suffit de remplir un
          formulaire d'inscription en ligne ou à l'une de nos cinq salles à
          Toulouse. Nous proposons différents types d'abonnements adaptés à vos
          besoins, qu'il s'agisse d'un accès ponctuel, mensuel ou annuel.
          N’hésitez pas à nous contacter pour plus d’informations sur les tarifs
          et les options disponibles.
          <br />
          <br />
          2. Horaires d'Ouverture:
          <br />
          Nos salles sont ouvertes 7 jours sur 7 pour convenir à votre emploi du
          temps. Les horaires peuvent varier selon les emplacements, mais en
          général, nous ouvrons nos portes dès 6h du matin jusqu'à 22h.
          Consultez notre site web pour connaître les horaires spécifiques de
          chaque emplacement.
          <br />
          <br />
          3. Cours et Activités:
          <br />
          Nous offrons une variété de cours, notamment le cardio, le fitness, le
          crossfit et la musculation. Les cours sont disponibles à différents
          horaires tout au long de la semaine. Pour participer, il est conseillé
          de réserver à l’avance, surtout pour les cours très populaires. Des
          séances d’essai sont également disponibles pour vous permettre de
          découvrir nos programmes avant de vous engager.
          <br />
          <br />
          4. Équipements et Installations:
          <br />
          Restez Jeune est équipée d'un large éventail de machines de cardio et
          de musculation, ainsi que d'espaces dédiés aux cours collectifs. Tous
          nos équipements sont régulièrement entretenus pour garantir leur
          sécurité et leur efficacité. Nous encourageons nos membres à faire un
          usage responsable des installations et à respecter les consignes de
          sécurité.
          <br />
          <br />
          5. Politique de Résiliation:
          <br />
          Si vous souhaitez résilier votre abonnement, veuillez consulter notre
          politique de résiliation qui stipule les conditions à suivre. Nous
          demandons un préavis de 30 jours pour les résiliations mensuelles,
          tandis que les abonnements annuels sont soumis à des conditions
          spécifiques. Pour toute question, notre équipe se tient à votre
          disposition pour vous accompagner dans cette démarche.
          <br />
          <br />
          6. Contact et Support:
          <br />
          Pour toute question ou préoccupation, n'hésitez pas à contacter notre
          équipe d'assistance. Vous pouvez nous joindre par téléphone, par
          e-mail, ou directement à la réception de nos salles. Nous sommes là
          pour vous aider et nous nous engageons à vous fournir un service de
          qualité pour rendre votre expérience chez Restez Jeune agréable et
          satisfaisante.
          <br />
        </motion.p>
      </motion.div>
    </div>
  );
};

export default page;
