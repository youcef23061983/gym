// import WorkoutArticle from "@/components/workout/WorkoutArticle";
// import WorkoutTitle from "@/components/workout/WorkoutTitle";
// import { getServerSession } from "next-auth";
// import React from "react";
// import { options } from "../api/auth/[...nextauth]/options";
// import { redirect } from "next/navigation";
// import Movement from "@/components/workout/Movement";
// import { headers } from "next/headers";
// import { BASE_API_URL } from "@/utils/Url";
// const CRAWLER_USER_AGENTS = [
//   "googlebot",
//   "bingbot",
//   "slurp",
//   "duckduckbot",
//   "baiduspider",
//   "yandexbot",
//   "facebot",
//   "twitterbot",
// ];

// function isCrawler() {
//   const headersList = headers();
//   const userAgent = headersList.get("user-agent") || "";
//   return CRAWLER_USER_AGENTS.some((crawler) =>
//     userAgent.toLowerCase().includes(crawler)
//   );
// }

// export const generateMetadata = () => {
//   const title = "Workout – Restez Jeune Gym";
//   const description =
//     "Explorez nos entraînements à Restez Jeune. Des séances variées pour tous les niveaux, adaptées à vos objectifs de fitness.";

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       url: `${BASE_API_URL}/workout`,
//       images: [
//         {
//           url: "/workout.jpg",
//           width: 800,
//           height: 600,
//           alt: "Restez Jeune Gym Workout",
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       image: "/workout.jpg",
//     },
//     robots: "index, follow",
//     keywords:
//       "workout, gym, bodybuilding, crossfit, fitness, cardio, personal training, workout programs, Restez Jeune",
//     author: "Gym",
//   };
// };

// const page = async () => {
//   // const session = await getServerSession(options);
//   // if (!session) {
//   //   redirect("/api/auth/signin?callbackUrl=/workout");
//   // }

//   const isCrawlerRequest = isCrawler();

//   if (!isCrawlerRequest) {
//     const session = await getServerSession(options);
//     if (!session) {
//       redirect("/api/auth/signin?callbackUrl=/workout");
//     }
//   }

//   return (
//     <div
//       style={{
//         backgroundImage: "linear-gradient(to right, black, #ffd9b4, black)",
//         paddingBottom: "3rem",
//       }}
//     >
//       {/* <p>{session?.user?.email}</p>
//       <p>{session?.user?.role}</p> */}
//       <div
//         className="flex flex-col items-center justify-center gap-16 h-screen bg-cover bg-no-repeat bg-center bg-fixed "
//         style={{ backgroundImage: "url('/workout.jpg')" }}
//       >
//         <WorkoutTitle />
//       </div>

//       <WorkoutArticle />
//       <Movement />
//     </div>
//   );
// };

// export default page;

import WorkoutArticle from "@/components/workout/WorkoutArticle";
import WorkoutTitle from "@/components/workout/WorkoutTitle";
import Movement from "@/components/workout/Movement";
import { BASE_API_URL } from "@/utils/Url";

export const generateMetadata = () => {
  const title = "Workout Programs – Restez Jeune Gym";
  const description =
    "Explorez nos programmes d'entraînement à Restez Jeune Gym. Séances variées pour tous niveaux : bodybuilding, crossfit, cardio, training personnel.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_API_URL}/workout`,
      images: [
        {
          url: "/workout.jpg",
          width: 1200,
          height: 630,
          alt: "Programmes d'entraînement Restez Jeune Gym",
        },
      ],
      type: "website",
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/workout.jpg"],
      site: "@RestezJeuneGym",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
      },
    },
    keywords: [
      "entraînement",
      "gym",
      "bodybuilding",
      "crossfit",
      "fitness",
      "cardio",
      "training personnel",
      "programme sportif",
      "salle de sport",
      "musculation",
    ],
    authors: [{ name: "Restez Jeune Gym" }],
    category: "fitness",
  };
};

const WorkoutPage = async () => {
  // ✅ No authentication - workout page is public marketing content
  // ✅ This helps with SEO and attracting new members

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, black, #ffd9b4, black)",
        paddingBottom: "3rem",
      }}
    >
      <div
        className="flex flex-col items-center justify-center gap-16 h-screen bg-cover bg-no-repeat bg-center bg-fixed"
        style={{ backgroundImage: "url('/workout.jpg')" }}
      >
        <WorkoutTitle />
      </div>

      <WorkoutArticle />
      <Movement />

      {/* Optional: Add a CTA for members-only content */}
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold mb-4">
          Devenez membre pour accéder à tous nos programmes !
        </h2>
        <a
          href="/pricing"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Voir nos abonnements
        </a>
      </div>
    </div>
  );
};

export default WorkoutPage;
