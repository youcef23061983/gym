import Link from "next/link";
import AnimationClass from "./AnimationClass";
export const metadata = {
  title: "Classes",
  description: "This is the classes page of the gym application",
};

const page = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, black, beige , black)",
        paddingBottom: "3rem",
      }}
    >
      <AnimationClass />

      <div className="classCardio">
        <div className="cardioArticle">
          <h2 className="contactHeader">Cours de cardio</h2>
          <p>
            Le cardio est une forme d'exercice qui vise à améliorer l'endurance
            cardiovasculaire en augmentant le rythme cardiaque et en stimulant
            la respiration. Il inclut des activités comme la course, le cyclisme
            et le rameur, qui sollicitent le cœur et les poumons pour améliorer
            leur efficacité. En plus de brûler des calories, le cardio renforce
            le cœur, aide à réguler la pression artérielle et améliore la
            circulation, offrant ainsi de nombreux bienfaits pour la santé
            globale et le bien-être.
          </p>
          <Link href="classes/cardio" className="overlayText">
            soumettre
          </Link>
        </div>
        <div className="imageContainer">
          <img src="/cardio/cardio1.jpg" alt="" className="img" />
        </div>
      </div>
      <div className="classCardio">
        <div className="cardioArticle">
          <h2 className="contactHeader">Cours de Fitness</h2>
          <p>
            Rejoignez nos cours de fitness adaptés à tous les niveaux et
            objectifs. Nos entraîneurs certifiés vous guideront à travers des
            séances qui combinent entraînement en force, cardio et étirements.
            Que vous soyez débutant ou athlète confirmé, vous trouverez un
            environnement motivant pour vous aider à atteindre vos objectifs.
            Avec des options variées, allant des cours de groupe énergiques aux
            circuits d'entraînement, chaque session est une occasion de vous
            dépasser et de faire partie d'une communauté dynamique !
          </p>
          <Link href="classes/fitness" className="overlayText">
            explorez davantage
          </Link>
        </div>
        <div className="imageContainer">
          <img src="/fitness/fitness1.jpg" alt="" className="img" />
        </div>
      </div>
      <div className="classCardio">
        <div className="cardioArticle">
          <h2 className="contactHeader">Cours de Musculation </h2>
          <p>
            Rejoignez nos cours de musculation pour développer votre force et
            votre masse musculaire. Nos entraîneurs expérimentés vous guideront
            à travers des séances personnalisées, utilisant des poids libres et
            des machines. Que vous soyez débutant ou athlète avancé, vous
            trouverez un environnement motivant et convivial. En intégrant notre
            communauté, vous bénéficierez de conseils professionnels et d’un
            programme adapté à vos objectifs. Relevez le défi et transformez
            votre physique avec nous !
          </p>
          <Link href="classes/bodybuilding" className="overlayText">
            explorez davantage
          </Link>
        </div>
        <div className="imageContainer">
          <img src="/bodybuilding/body1.jpg" alt="" className="img" />
        </div>
      </div>
      <div className="classCardio">
        <div className="cardioArticle">
          <h2 className="contactHeader">Cours de CrossFit</h2>
          <p>
            Rejoignez nos cours de CrossFit, où des entraînements dynamiques
            combinent musculation, cardio et agilité pour améliorer votre force
            et votre endurance. Nos entraîneurs certifiés vous guideront à
            travers des WOD (Workouts of the Day) adaptés à tous les niveaux,
            des débutants aux athlètes confirmés. Dans un environnement motivant
            et solidaire, vous pourrez relever des défis et atteindre vos
            objectifs de fitness tout en vous amusant. Venez découvrir l'énergie
            du CrossFit et transformez votre condition physique avec nous !
          </p>
          <Link href="classes/crossfit" className="overlayText">
            explorez davantage
          </Link>
        </div>
        <div className="imageContainer">
          <img src="/crossfit/cross1.jpg" alt="" className="img" />
        </div>
      </div>
    </div>
  );
};

export default page;
