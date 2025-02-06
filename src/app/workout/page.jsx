import WorkoutArticle from "@/components/workout/WorkoutArticle";
import WorkoutTitle from "@/components/workout/WorkoutTitle";
import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Movement from "@/components/workout/Movement";
import { headers } from "next/headers";
import { BASE_API_URL } from "@/utils/Url";
const CRAWLER_USER_AGENTS = [
  "googlebot",
  "bingbot",
  "slurp",
  "duckduckbot",
  "baiduspider",
  "yandexbot",
  "facebot",
  "twitterbot",
];

function isCrawler() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "";
  return CRAWLER_USER_AGENTS.some((crawler) =>
    userAgent.toLowerCase().includes(crawler)
  );
}

export const generateMetadata = () => {
  const title = "Workout – Restez Jeune Gym";
  const description =
    "Explorez nos entraînements à Restez Jeune. Des séances variées pour tous les niveaux, adaptées à vos objectifs de fitness.";

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
          width: 800,
          height: 600,
          alt: "Restez Jeune Gym Workout",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      image: "/workout.jpg",
    },
    robots: "index, follow",
    keywords:
      "workout, gym, bodybuilding, crossfit, fitness, cardio, personal training, workout programs, Restez Jeune",
    author: "Gym",
  };
};

const page = async () => {
  // const session = await getServerSession(options);
  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/workout");
  // }

  const isCrawlerRequest = isCrawler();

  if (!isCrawlerRequest) {
    const session = await getServerSession(options);
    if (!session) {
      redirect("/api/auth/signin?callbackUrl=/workout");
    }
  }

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, black, #ffd9b4, black)",
        paddingBottom: "3rem",
      }}
    >
      {/* <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p> */}
      <div
        className="flex flex-col items-center justify-center gap-16 h-screen bg-cover bg-no-repeat bg-center bg-fixed "
        style={{ backgroundImage: "url('/workout.jpg')" }}
      >
        <WorkoutTitle />
      </div>

      <WorkoutArticle />
      <Movement />
    </div>
  );
};

export default page;
