import WorkoutArticle from "@/components/workout/WorkoutArticle";
import WorkoutTitle from "@/components/workout/WorkoutTitle";
import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Movement from "@/components/workout/Movement";
export const dynamic = "force-dynamic";

export const generateMetadata = () => {
  return {
    title: "Workout",
  };
};

const page = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/workout");
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
