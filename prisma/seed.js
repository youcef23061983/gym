const db = require("../lib/db.js");
// const { data: galleryImages } = require("../src/app/api/insta/data.js");
// const { Products } = require("../src/app/api/shop/data.js");

async function main() {
  const galleryImages = [
    { id: 1, src: "/homepage/frontinsta1.jpg" },
    { id: 2, src: "/homepage/frontinsta2.jpg" },
    { id: 3, src: "/homepage/frontinsta3.jpg" },
    { id: 4, src: "/homepage/frontinsta4.jpg" },
    { id: 5, src: "/homepage/frontinsta5.jpg" },
    { id: 6, src: "/homepage/frontinsta6.jpg" },
    { id: 7, src: "/homepage/frontinsta7.jpg" },
    { id: 8, src: "/homepage/frontinsta8.jpg" },
    { id: 9, src: "/homepage/frontinsta9.jpg" },
    { id: 10, src: "/homepage/frontinsta10.jpg" },
    { id: 11, src: "/homepage/frontinsta11.jpg" },
    { id: 12, src: "/homepage/frontinsta12.jpg" },
    { id: 13, src: "/homepage/frontinsta13.jpg" },
    { id: 14, src: "/homepage/frontinsta14.jpg" },
    { id: 15, src: "/homepage/frontinsta15.jpg" },
    { id: 16, src: "/homepage/frontinsta16.jpg" },
  ];
  const Products = [
    {
      id: 1,
      title: "Roue Abdominale",
      image: "/shop/abRoller.jpg",
      price: "20 €",
    },
    {
      id: 2,
      title: "aduroRésistance",
      image: "/shop/aduroResistance.jpg",
      price: "18 €",
    },
    {
      id: 3,
      title: "Tapis de sol fitness",
      image: "/shop/carpet.jpg",
      price: "17 €",
    },
    {
      id: 4,
      title: "Rouleau en mousse",
      image: "/shop/Foam Roller.jpg",
      price: "25 €",
    },
    { id: 5, title: "Shaker", image: "/shop/GymFitXShaker.jpg", price: "20 €" },
    {
      id: 6,
      title: "pince musculation",
      image: "/shop/handGrip.jpg",
      price: "2 €",
    },
    { id: 7, title: "kettlebell", image: "/shop/kettle.jpg", price: "24 €" },
    {
      id: 8,
      title: "mediclaBall",
      image: "/shop/mediclaBall.jpg",
      price: "30 €",
    },
    {
      id: 9,
      title: "montre de sport",
      image: "/shop/sportWatch.jpg",
      price: "34 €",
    },
    {
      id: 10,
      title: "Ballon de stabilité",
      image: "/shop/stabilityBall.jpg",
      price: "14 €",
    },
  ];
  const testimonials = [
    {
      title: "Matthias Leidinger",
      description:
        "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
      src: "testimonial/testimonial1.jpg",
      color: "#BBACAF",
    },
    {
      title: "Clément Chapillon",
      description:
        "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
      src: "testimonial/testimonial2.jpg",
      color: "#977F6D",
    },
    {
      title: "Zissou",
      description:
        "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
      src: "testimonial/testimonial3.jpg",
      color: "#C2491D",
    },
    {
      title: "Mathias Svold and Ulrik Hasemann",
      description:
        "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
      src: "testimonial/testimonial4.jpg",
      color: "#B62429",
    },
    {
      title: "Marie Dupont",
      description:
        "Cela faisait des années que j'essayais de me remettre en forme, sans succès. Depuis que j'ai rejoint cette salle de sport, j'ai enfin retrouvé la motivation. Ce que j'apprécie particulièrement, c'est l'accueil chaleureux de toute l'équipe. Les coachs prennent le temps de bien expliquer les exercices et sont toujours disponibles pour corriger nos postures. En seulement quelques mois, j’ai vu une amélioration notable de ma condition physique. Je ne pourrais plus me passer de mes entraînements ici !",
      src: "testimonial/testimonial5.jpg",
      color: "#D4A5A5",
    },
    {
      title: "Lucas Petit",
      description:
        "Je suis venu pour un programme de remise en forme, et les résultats sont au-delà de mes attentes. Les coachs m’ont aidé à fixer des objectifs réalistes et à progresser sans me blesser. C'est plus qu’une salle de sport, c’est un lieu pour se surpasser et reprendre confiance. Merci à l’équipe pour leur soutien !",
      src: "testimonial/testimonial6.jpg",
      color: "#AEC6CF",
    },
    {
      title: "Sophie Laurent",
      description:
        "Depuis que je m'entraîne ici, ma vie a changé. J'ai perdu du poids et gagné en énergie et en confiance. Les cours collectifs sont motivants et créent un esprit de camaraderie. Les coachs nous encouragent sans pression, et chaque séance est un plaisir. C'est devenu mon rendez-vous bien-être !",
      src: "testimonial/testimonial7.jpg",
      color: "#FFB6C1",
    },
    {
      title: "Thomas Dubois",
      description:
        "J'ai rejoint pour un programme de remise en forme, et les résultats dépassent mes attentes. Les coachs m’ont aidé à définir des objectifs réalistes et à progresser sans me blesser. Bien plus qu’une salle de sport, c’est un lieu pour se surpasser et reprendre confiance. Merci à toute l’équipe !",
      src: "testimonial/testimonial8.jpg",
      color: "#FF6961",
    },
    {
      title: "Chloé Martin",
      description:
        "Ce que j'apprécie le plus ici, c'est l'attention portée à l'hygiène et à la propreté des lieux. Dans d'autres salles, on peut parfois être dérangé par des équipements négligés, mais ici, tout est parfaitement entretenu. Cela crée une ambiance agréable et motivante. De plus, les coachs sont à l'écoute et toujours prêts à nous aider, que ce soit pour choisir un exercice ou pour ajuster notre programme. Je me sens bien encadrée et en sécurité, ce qui est essentiel pour moi.",
      src: "testimonial/testimonial10.jpg",
      color: "#C2B280",
    },
  ];
  const cardioImages = [
    { id: 1, src: "/cardio/cardio1.jpg" },
    { id: 2, src: "/cardio/cardio2.jpg" },
    { id: 3, src: "/cardio/cardio3.jpg" },
    { id: 4, src: "/cardio/cardio4.jpg" },
    { id: 5, src: "/cardio/cardio5.jpg" },
    { id: 6, src: "/cardio/cardio6.jpg" },
    { id: 7, src: "/cardio/cardio7.jpg" },
    { id: 8, src: "/cardio/cardio8.jpg" },
    { id: 9, src: "/cardio/cardio9.jpg" },
    { id: 10, src: "/cardio/cardio10.jpg" },
    { id: 11, src: "/cardio/cardio11.jpg" },
    { id: 12, src: "/cardio/cardio12.jpg" },
    { id: 13, src: "/cardio/cardio13.jpg" },
    { id: 14, src: "/cardio/cardio14.jpg" },
    { id: 15, src: "/cardio/cardio15.jpg" },
    { id: 16, src: "/cardio/cardio16.jpg" },
    { id: 17, src: "/cardio/cardio17.jpg" },
  ];
  const exerciseData = [
    {
      bodyPart: "cuisses",
      equipment: "barre",
      gifUrl:
        "https://drive.google.com/uc?id=16To7ZKpunF0vQugU4oPsrm3NAjA1Fzzf",
      id: 1,
      name: "soulevé de terre à la barre",
      target: "fessiers",
      secondaryMuscles: ["ischio-jambiers", "bas du dos"],
      instructions: [
        "Placez vos pieds à la largeur des épaules avec la barre devant vous.",
        "Pliez les genoux et abaissez les hanches pour saisir la barre avec une prise pronation, les mains légèrement plus larges que les épaules.",
        "Gardez le dos droit et le torse relevé en poussant à travers les talons pour soulever la barre du sol.",
        "En position debout, contractez les fessiers et maintenez la région centrale engagée.",
        "Abaissez la barre au sol en pliant les hanches et les genoux, en gardant le dos droit.",
        "Répétez pour le nombre de répétitions souhaité.",
      ],
    },
    {
      bodyPart: "dos",
      equipment: "haltère",
      gifUrl:
        "https://drive.google.com/uc?id=1pwzE_-UdO3P9l21sJDv07PvvfYEJuUbh",
      id: 2,
      name: "row penché à un bras avec haltère",
      target: "haut du dos",
      secondaryMuscles: ["biceps", "avant-bras"],
      instructions: [
        "Placez vos pieds à la largeur des épaules et tenez un haltère dans une main, paume tournée vers le corps.",
        "Pliez légèrement les genoux et penchez-vous en avant au niveau des hanches, en gardant le dos droit.",
        "Laissez l'haltère pendre vers le sol, bras complètement étendu.",
        "Tirez l'haltère vers votre poitrine en gardant le coude proche du corps et en contractant les omoplates.",
        "Faites une pause en haut, puis abaissez l'haltère à la position de départ.",
        "Répétez le nombre de répétitions souhaité, puis changez de côté.",
      ],
    },
    {
      bodyPart: "cuisses",
      equipment: "barre",
      gifUrl:
        "https://drive.google.com/uc?id=1DlfT956EB2ORfTnSF_Dr7z1pI75EuFR7",
      id: 3,
      name: "hack squat à la barre",
      target: "fessiers",
      secondaryMuscles: ["quadriceps", "ischio-jambiers", "mollets"],
      instructions: [
        "Tenez-vous debout, pieds à la largeur des épaules et orteils légèrement tournés vers l'extérieur.",
        "Tenez la barre derrière les jambes, positionnée contre les cuisses.",
        "Abaissez le corps en pliant les genoux et les hanches, en gardant le dos droit et la poitrine relevée.",
        "Descendez jusqu'à ce que les cuisses soient parallèles au sol ou aussi bas que confortable.",
        "Poussez à travers les talons pour revenir à la position de départ.",
        "Répétez pour le nombre de répétitions souhaité.",
      ],
    },
    {
      bodyPart: "dos",
      equipment: "barre",
      gifUrl:
        "https://drive.google.com/uc?id=1OmmwYpKMEoYIwO4ip-KI4oxSqSWw1H20",
      id: 4,
      name: "row penché à la barre avec prise inversée",
      target: "haut du dos",
      secondaryMuscles: ["biceps", "avant-bras"],
      instructions: [
        "Placez vos pieds à la largeur des épaules avec les genoux légèrement fléchis.",
        "Tenez la barre avec une prise inversée, les mains un peu plus larges que les épaules.",
        "Penchez-vous en avant au niveau des hanches, en gardant le dos droit.",
        "Tirez la barre vers le bas de la poitrine en contractant les omoplates.",
        "Faites une pause en haut, puis abaissez lentement la barre à la position de départ.",
        "Répétez pour le nombre de répétitions souhaité.",
      ],
    },
    {
      bodyPart: "dos",
      equipment: "machine à levier",
      gifUrl:
        "https://drive.google.com/uc?id=19PltxUyP5cxoDKtoKhZ8XG09avbJmcO1",
      id: 5,
      name: "row inversé à la machine T-bar",
      target: "haut du dos",
      secondaryMuscles: ["biceps", "avant-bras"],
      instructions: [
        "Ajustez la hauteur du siège et placez-vous sur la machine, poitrine contre le coussin.",
        "Saisissez les poignées avec une prise en pronation, légèrement plus large que les épaules.",
        "Gardez le dos droit et tirez les poignées vers la poitrine en serrant les omoplates.",
        "Faites une pause en haut, puis relâchez lentement pour revenir à la position de départ.",
        "Répétez pour le nombre de répétitions souhaité.",
      ],
    },
    {
      bodyPart: "dos",
      equipment: "poids du corps",
      gifUrl:
        "https://drive.google.com/uc?id=1RB4RSy5nIYQqt5oYQfhJdRT95pdShI0M",
      id: 6,
      name: "tractions sur banc",
      target: "lats",
      secondaryMuscles: ["biceps", "avant-bras"],
      instructions: [
        "Placez-vous sous une barre solide, hauteur de poitrine.",
        "Saisissez la barre avec une prise pronation, légèrement plus large que les épaules.",
        "Suspendez-vous avec les bras tendus et le corps droit.",
        "Tirez la poitrine vers la barre en serrant les omoplates.",
        "Continuez à tirer jusqu'à ce que votre menton soit au-dessus de la barre.",
        "Abaissez-vous lentement à la position de départ.",
        "Répétez pour le nombre de répétitions souhaité.",
      ],
    },
    {
      bodyPart: "cuisses",
      equipment: "barre",
      gifUrl:
        "https://drive.google.com/uc?id=1vqA6d5AQw336tvhRuY3SeizWK7GZtyVx",
      id: 7,
      name: "squat complet à la barre",
      target: "fessiers",
      secondaryMuscles: ["quadriceps", "ischio-jambiers", "mollets", "core"],
      instructions: [
        "Placez vos pieds à la largeur des épaules, orteils légèrement vers l'extérieur.",
        "Tenez la barre sur le haut du dos, posée sur les épaules.",
        "Gardez la poitrine haute en abaissant le corps.",
        "Pliez les genoux et les hanches, en abaissant comme si vous vous asseyiez.",
        "Descendez jusqu'à ce que les cuisses soient parallèles au sol.",
        "Poussez à travers les talons pour revenir à la position de départ.",
        "Répétez pour le nombre de répétitions souhaité.",
      ],
    },
    {
      bodyPart: "cuisses",
      equipment: "poids du corps",
      gifUrl:
        "https://drive.google.com/uc?id=1jtF3n1J10rVRkosHV_XVEwuLmhRHhXKD",
      id: 8,
      name: "fentes marchées",
      target: "fessiers",
      secondaryMuscles: ["quadriceps", "ischio-jambiers", "mollets"],
      instructions: [
        "Placez vos pieds à la largeur des épaules.",
        "Faites un pas en avant avec le pied droit et abaissez le corps en position de fente.",
        "Gardez le buste droit et le genou avant aligné avec la cheville.",
        "Poussez avec le pied droit et avancez avec le pied gauche en position de fente.",
        "Continuez en alternant les jambes.",
        "Répétez pour le nombre de répétitions souhaité.",
      ],
    },
    {
      bodyPart: "cuisses",
      equipment: "barre",
      gifUrl:
        "https://drive.google.com/uc?id=1Unq0lDD8clbrITefrzWVu-vcZPCz9h2s",
      id: 9,
      name: "soulevé de terre roumain",
      target: "fessiers",
      secondaryMuscles: ["ischio-jambiers", "bas du dos"],
      instructions: [
        "Placez vos pieds à la largeur des hanches et tenez la barre devant les cuisses.",
        "Abaissez la barre en pliant les hanches, en gardant le dos droit.",
        "Descendez jusqu'à ce que vous sentiez un étirement dans les ischio-jambiers.",
        "Contractez les fessiers et remontez à la position de départ.",
        "Répétez pour le nombre de répétitions souhaité.",
      ],
    },
    {
      bodyPart: "Poitrine",
      equipment: "barre",
      gifUrl:
        "https://drive.google.com/uc?id=1LBYT7EFiO89wjgdv1LOPgwqMubCMfbP4",
      id: 10,
      name: "Développé incliné avec barre",
      target: "pectoraux",
      secondaryMuscles: ["épaules", "triceps"],
      instructions: [
        "Inclinez un banc à 45 degrés.",
        "Allongez-vous sur le banc avec les pieds à plat sur le sol.",
        "Saisissez la barre en prise large, un peu plus large que la largeur des épaules.",
        "Retirez la barre et abaissez-la lentement vers la poitrine, les coudes à 45 degrés.",
        "Faites une pause, puis repoussez la barre à la position initiale.",
      ],
    },
    {
      bodyPart: "Poitrine",
      equipment: "barre",
      gifUrl:
        "https://drive.google.com/uc?id=13ibeDSBV0wx7lpYJI9f2N2xc85ky0ztc",
      id: 11,
      name: "Développé couché avec barre",
      target: "pectoraux",
      secondaryMuscles: ["triceps", "épaules"],
      instructions: [
        "Allongez-vous sur le banc avec les pieds à plat sur le sol et le dos contre le banc.",
        "Saisissez la barre avec une prise un peu plus large que la largeur des épaules.",
        "Retirez la barre du support et maintenez-la au-dessus de la poitrine avec les bras tendus.",
        "Abaissez lentement la barre vers la poitrine, les coudes proches du corps.",
        "Faites une pause lorsque la barre touche la poitrine, puis repoussez-la en étendant les bras.",
      ],
    },
    {
      bodyPart: "Dos",
      equipment: "barre",
      gifUrl:
        "https://drive.google.com/uc?id=1QLTcyo2pukTDlr4kCnJyezRzVZ3ztt_r",
      id: 12,
      name: "Haussements d'épaules avec barre",
      target: "trapèzes",
      secondaryMuscles: ["épaules"],
      instructions: [
        "Tenez-vous debout, les pieds à la largeur des épaules, en tenant une barre devant vous en prise large.",
        "Gardez les bras et le dos droits pendant l'exercice.",
        "Levez les épaules vers les oreilles aussi haut que possible, en serrant les trapèzes.",
        "Faites une pause, puis abaissez les épaules à la position initiale.",
      ],
    },
    {
      bodyPart: "Poitrine",
      equipment: "haltère",
      gifUrl:
        "https://drive.google.com/uc?id=1XurMkWlPS3nE0g-e6G75iKJN4uevjxKb",
      id: 13,
      name: "Écarté couché avec haltères",
      target: "pectoraux",
      secondaryMuscles: ["épaules"],
      instructions: [
        "Allongez-vous sur un banc en tenant un haltère dans chaque main, paumes face à face.",
        "Tendez les bras au-dessus de la poitrine avec un léger pli au niveau des coudes.",
        "Abaissez les bras en arc de cercle jusqu'à sentir une tension dans la poitrine.",
        "Faites une pause, puis ramenez les haltères à la position initiale.",
      ],
    },
    {
      bodyPart: "Épaules",
      equipment: "haltère",
      gifUrl:
        "https://drive.google.com/uc?id=1FAt5Td3Q-62jrpqm1jwgO_q-7yOikhQW",
      id: 14,
      name: "Tirage vertical avec haltères",
      target: "deltoïdes",
      secondaryMuscles: ["trapèzes", "biceps"],
      instructions: [
        "Tenez-vous debout, les pieds à la largeur des épaules, chaque main tenant un haltère.",
        "Laissez les haltères pendre devant les cuisses, bras tendus.",
        "Soulevez les haltères vers le menton en guidant avec les coudes.",
        "Faites une pause en haut, puis abaissez les haltères à la position initiale.",
      ],
    },
    {
      bodyPart: "Épaules",
      equipment: "haltère",
      gifUrl:
        "https://drive.google.com/uc?id=1GliYfgW4vaVdPOwLh4cwaKvZjoKtycOi",
      id: 15,
      name: "Élévation latérale avec haltères",
      target: "deltoïdes",
      secondaryMuscles: ["trapèzes"],
      instructions: [
        "Tenez-vous debout, les pieds à la largeur des épaules, en tenant un haltère dans chaque main, paumes tournées vers le corps.",
        "Levez les bras sur les côtés jusqu'à ce qu'ils soient parallèles au sol, en gardant un léger pli dans les coudes.",
        "Faites une pause en haut, puis abaissez les bras à la position de départ.",
      ],
    },
    {
      bodyPart: "Cuisses",
      equipment: "barre",
      gifUrl:
        "https://drive.google.com/uc?id=1vqA6d5AQw336tvhRuY3SeizWK7GZtyVx",
      id: 16,
      name: "Squat complet avec barre",
      target: "fessiers",
      secondaryMuscles: ["quadriceps", "ischio-jambiers", "mollets", "core"],
      instructions: [
        "Tenez-vous debout, les pieds écartés à la largeur des épaules, avec les orteils légèrement tournés vers l'extérieur.",
        "Placez la barre sur le haut du dos, soit sur les trapèzes, soit légèrement plus bas sur les épaules.",
        "Maintenez la poitrine haute et concentrez-vous sur le maintien du tronc droit pendant que vous descendez.",
        "Pliez les genoux et les hanches, en poussant les hanches vers l'arrière, comme si vous vous asseyiez sur une chaise.",
        "Descendez jusqu'à ce que les cuisses soient parallèles au sol ou légèrement plus bas.",
        "Assurez-vous que les genoux restent alignés avec les orteils, et que le poids est transféré sur les talons.",
        "Poussez avec les talons pour revenir à la position de départ, en tendant les hanches et les genoux.",
        "Répétez les répétitions souhaitées.",
      ],
    },
    {
      bodyPart: "Cuisses",
      equipment: "barre",
      gifUrl:
        "https://drive.google.com/uc?id=1JTtHmYFrHGFv8_g0wIPDcKacLOBOVRqb",
      id: 17,
      name: "Pont fessier avec barre",
      target: "fessiers",
      secondaryMuscles: ["ischio-jambiers", "bas du dos"],
      instructions: [
        "Allongez-vous sur le dos, les genoux pliés et les pieds à plat sur le sol.",
        "Placez une barre sur vos hanches, en la maintenant fermement avec les deux mains.",
        "Activez les fessiers et le core, puis soulevez les hanches du sol jusqu'à ce que votre corps forme une ligne droite des genoux aux épaules.",
        "Faites une pause en haut, en contractant les fessiers.",
        "Redescendez lentement les hanches à la position de départ.",
        "Répétez les répétitions souhaitées.",
      ],
    },
    {
      bodyPart: "Cuisses",
      equipment: "kettlebell",
      gifUrl:
        "https://drive.google.com/uc?id=1deDrrUnieY9aY5GFu_eDrGAAfHEw_z7_",
      id: 18,
      name: "Kettlebell swing",
      target: "fessiers",
      secondaryMuscles: ["ischio-jambiers", "core"],
      instructions: [
        "Tenez-vous debout, les pieds à la largeur des épaules, les orteils légèrement tournés vers l'extérieur.",
        "Tenez le kettlebell avec les deux mains devant vous, les bras tendus.",
        "Pliez légèrement les genoux et faites pivoter les hanches, en poussant les fesses vers l'arrière.",
        "Balancez le kettlebell derrière vous entre vos jambes, gardez les bras tendus et le dos droit.",
        "Poussez les hanches vers l'avant et balancez le kettlebell jusqu'à la hauteur des épaules, en utilisant l'élan des hanches.",
        "Laissez le kettlebell revenir entre vos jambes et répétez le mouvement avec les répétitions souhaitées.",
      ],
    },
    {
      bodyPart: "Mollets",
      equipment: "machine à levier",
      gifUrl:
        "https://drive.google.com/uc?id=1KR2hXyUKJiwIPMRqciCIVsIRrk_sD2Jb",
      id: 19,
      name: "Élévation des mollets assis avec machine à levier",
      target: "mollets",
      secondaryMuscles: ["soléaire", "stabilisateurs de la cheville"],
      instructions: [
        "Réglez la hauteur du siège de manière à ce que vos genoux soient légèrement pliés et que vos pieds soient à plat sur la plaque de repos.",
        "Placez la plante des pieds sur la plateforme, les talons pendants en dehors du bord.",
        "Attrapez les poignées ou les bords du siège pour vous stabiliser.",
        "Poussez avec le haut des pieds pour soulever les talons aussi haut que possible.",
        "Faites une pause en haut, puis redescendez lentement les talons à la position de départ.",
        "Répétez les répétitions souhaitées.",
      ],
    },
    {
      bodyPart: "Mollets",
      equipment: "barre",
      gifUrl:
        "https://drive.google.com/uc?id=1p3c-WVesvuj3Bn6o3XyrRRe4sDw4blQO",
      id: 20,
      name: "Élévation des mollets assis avec barre",
      target: "mollets",
      secondaryMuscles: ["ischio-jambiers"],
      instructions: [
        "Asseyez-vous sur un banc avec les pieds à plat sur le sol et la barre reposant sur vos cuisses.",
        "Placez la partie avant de vos pieds sur un support élevé, tel qu'un bloc ou une marche.",
        "Descendez les talons aussi bas que possible, en sentant les mollets s'étirer.",
        "Soulevez les talons aussi haut que possible, en contractant les mollets.",
        "Répétez les répétitions souhaitées.",
      ],
    },

    {
      bodyPart: "biceps",
      equipment: "haltères",
      gifUrl:
        "https://drive.google.com/uc?id=15SKydtg-ETJlxzmlqPOQCpYlE-asvhbW",
      id: 25,
      name: "curl marteau croisé avec haltères",
      target: "biceps",
      secondaryMuscles: ["avant-bras"],
      instructions: [
        "Tenez-vous debout avec un haltère dans chaque main, les paumes tournées vers l'intérieur.",
        "Gardez les coudes près du corps et les bras supérieurs fixes.",
        "Expirez et soulevez les haltères en croisant le corps vers l'épaule opposée.",
        "Continuez à soulever les haltères jusqu'à ce que vos biceps soient complètement contractés et que les haltères soient à hauteur des épaules.",
        "Maintenez brièvement la contraction, puis inspirez et abaissez lentement les haltères à la position de départ.",
        "Répétez le nombre de répétitions souhaité.",
      ],
    },
    {
      bodyPart: "trapezes",
      equipment: "barre",
      gifUrl:
        "https://drive.google.com/uc?id=1QLTcyo2pukTDlr4kCnJyezRzVZ3ztt_r",
      id: 95,
      name: "haussements d'épaules avec barre",
      target: "trapèzes",
      secondaryMuscles: ["épaules"],
      instructions: [
        "Tenez-vous debout, les pieds écartés à la largeur des épaules, en tenant une barre devant vous avec les paumes tournées vers l'avant.",
        "Gardez les bras tendus et le dos droit pendant tout l'exercice.",
        "Haussez les épaules le plus haut possible, en contractant les trapèzes au sommet.",
        "Maintenez la position en haut, puis abaissez lentement les épaules à la position de départ.",
        "Répétez le nombre de répétitions souhaité.",
      ],
    },
    {
      bodyPart: "biceps",
      equipment: "barre",
      gifUrl:
        "https://drive.google.com/uc?id=1dB2smlFaStUnJiAjG0vsTcp6HowlT1fC",
      id: 26,
      name: "curl barre tiré",
      target: "biceps",
      secondaryMuscles: ["avant-bras"],
      instructions: [
        "Tenez-vous debout, les pieds écartés à la largeur des épaules, en tenant une barre avec les paumes vers le haut.",
        "Laissez la barre pendre devant vous, les bras tendus.",
        "Gardez les bras fixes et tirez la barre vers votre poitrine en contractant les biceps.",
        "Faites une pause en haut, puis abaissez lentement la barre à la position de départ.",
        "Répétez le nombre de répétitions souhaité.",
      ],
    },
    {
      bodyPart: "avant-bras",
      equipment: "barre",
      gifUrl:
        "https://drive.google.com/uc?id=1qfquzDJYBXIqzd60ClBePfBU1QM-4QX2",
      id: 27,
      name: "curl poignet paumes vers le haut avec barre",
      target: "avant-bras",
      secondaryMuscles: ["biceps", "épaules"],
      instructions: [
        "Asseyez-vous sur un banc avec les pieds à plat sur le sol, en tenant une barre avec les paumes vers le haut.",
        "Placez vos avant-bras sur le banc de façon à ce que vos poignets pendent du bord.",
        "Gardez les avant-bras fixes et soulevez la barre en contractant vos poignets.",
        "Maintenez brièvement la contraction, puis abaissez lentement la barre à la position de départ.",
        "Répétez le nombre de répétitions souhaité.",
      ],
    },
  ];

  await db.galleryImage.createMany({
    data: galleryImages.map(({ src }) => ({ src })),
    skipDuplicates: true,
  });

  await db.product.createMany({
    data: Products.map((product) => ({
      title: product.title,
      image: product.image,
      price: product.price,
    })),
    skipDuplicates: true,
  });
  await db.testimonial.createMany({
    data: testimonials.map((testimonial) => ({
      title: testimonial.title,
      description: testimonial.description,
      src: testimonial.src,
      color: testimonial.color,
    })),
    skipDuplicates: true,
  });
  await db.cardio.createMany({
    data: cardioImages.map(({ src }) => ({ src })),
    skipDuplicates: true,
  });
  await db.exercise.createMany({
    data: exerciseData.map((exercise) => ({
      bodyPart: exercise.bodyPart,
      equipment: exercise.equipment,
      gifUrl: exercise.gifUrl,
      name: exercise.name,
      target: exercise.target,
      secondaryMuscles: exercise.secondaryMuscles,
      instructions: exercise.instructions,
    })),
    skipDuplicates: true,
  });

  console.log("✅ Data seeded successfully!");
}

main()
  .catch((e) => {
    console.error("Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
