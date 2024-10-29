"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";

const Page = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/testimonials");
    },
  });

  return (
    <div>
      <h1>Client Testimonial Page</h1>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
      <p>{session?.user?.name}</p>
      {session?.user?.image && (
        <Image
          src={session.user.image}
          alt="User Profile"
          width={50}
          height={50}
        />
      )}
    </div>
  );
};

export default Page;
