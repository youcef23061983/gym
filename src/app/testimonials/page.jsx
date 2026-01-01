// import { redirect } from "next/navigation";
// import "./testimonial.css";
// import { getServerSession } from "next-auth";
// import { headers } from "next/headers";
// import { options } from "../api/auth/[...nextauth]/options";
// import TestimonialP from "./TestimonialP";
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
//   return {
//     title: "Témoignages – Restez Jeune Gym",
//     description:
//       "Découvrez les témoignages inspirants de nos membres ayant transformé leur vie avec nos programmes d'entraînement à Restez Jeune Gym. Leur persévérance et réussite sont un témoignage du travail acharné.",
//     openGraph: {
//       title: "Témoignages – Restez Jeune Gym",
//       description:
//         "Découvrez les témoignages inspirants de nos membres ayant transformé leur vie avec nos programmes d'entraînement à Restez Jeune Gym. Leur persévérance et réussite sont un témoignage du travail acharné.",
//       url: `${BASE_API_URL}/testimonials`,

//       images: [
//         {
//           url: "/testimonial/testimonialheader.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Témoignages Restez Jeune Gym",
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: "Témoignages – Restez Jeune Gym",
//       description:
//         "Découvrez les témoignages inspirants de nos membres ayant transformé leur vie avec nos programmes d'entraînement à Restez Jeune Gym.",
//       image: "/testimonial/testimonialheader.jpg",
//     },
//     robots: "index, follow",
//     keywords:
//       "gym, workout, testimonials, fitness, transformation, training, success stories",
//     author: "Restez Jeune Gym",
//   };
// };

// const Page = async () => {
//   // const { data: session } = useSession({
//   //   required: true,
//   //   onUnauthenticated() {
//   //     redirect("/api/auth/signin?callbackUrl=/testimonials");
//   //   },
//   // });

//   const isCrawlerRequest = isCrawler();

//   if (!isCrawlerRequest) {
//     const session = await getServerSession(options);
//     if (!session) {
//       redirect("/api/auth/signin?callbackUrl=/testimonials");
//     }
//   }

//   const headerVariants = {
//     hidden: { x: "20vw", opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
//     },
//   };
//   const paragraphVariants = {
//     hidden: { x: "20vw", opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: { delay: 0.8, duration: 1.5, ease: "easeInOut" },
//     },
//   };

//   return (
//     <div>
//       {/* <p>{session?.user?.email}</p>
//       <p>{session?.user?.role}</p>
//       <p>{session?.user?.name}</p> */}
//       {/* {session?.user?.image && (
//         <Image
//           src={session.user.image}
//           alt="User Profile"
//           width={50}
//           height={50}
//         />
//       )} */}

//       <div
//         className="flex flex-col items-center justify-center gap-16 h-screen bg-cover bg-no-repeat bg-center bg-fixed "
//         style={{ backgroundImage: "url('/testimonial/testimonialheader.jpg')" }}
//       >
//         <h2
//           variants={headerVariants}
//           initial="hidden"
//           animate="visible"
//           className="frontTitle"
//           viewport={{ once: true }}
//         >
//           Avis d'athlètes et de passionnés{" "}
//         </h2>
//         <h3
//           variants={paragraphVariants}
//           initial="hidden"
//           animate="visible"
//           className="frontP"
//           viewport={{ once: true }}
//         >
//           Les résultats parlent d’eux-mêmes.
//         </h3>
//       </div>
//       <TestimonialP />
//     </div>
//   );
// };

// export default Page;
import "./testimonial.css";
import TestimonialP from "./TestimonialP";
import { BASE_API_URL } from "@/utils/Url";

export const generateMetadata = () => {
  return {
    title: "Témoignages – Restez Jeune Gym",
    description:
      "Découvrez les témoignages inspirants de nos membres ayant transformé leur vie avec nos programmes d'entraînement à Restez Jeune Gym. Leur persévérance et réussite sont un témoignage du travail acharné.",
    openGraph: {
      title: "Témoignages – Restez Jeune Gym",
      description:
        "Découvrez les témoignages inspirants de nos membres ayant transformé leur vie avec nos programmes d'entraînement à Restez Jeune Gym. Leur persévérance et réussite sont un témoignage du travail acharné.",
      url: `${BASE_API_URL}/testimonials`,
      images: [
        {
          url: "/testimonial/testimonialheader.jpg",
          width: 1200,
          height: 630,
          alt: "Témoignages Restez Jeune Gym",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Témoignages – Restez Jeune Gym",
      description:
        "Découvrez les témoignages inspirants de nos membres ayant transformé leur vie avec nos programmes d'entraînement à Restez Jeune Gym.",
      image: "/testimonial/testimonialheader.jpg",
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
      "gym",
      "workout",
      "testimonials",
      "fitness",
      "transformation",
      "training",
      "success stories",
    ],
    authors: [{ name: "Restez Jeune Gym" }],
  };
};

const Page = async () => {
  // ✅ No authentication - page is public for SEO!
  // ✅ No crawler detection needed - everyone sees same content

  return (
    <div>
      <div
        className="flex flex-col items-center justify-center gap-16 h-screen bg-cover bg-no-repeat bg-center bg-fixed"
        style={{ backgroundImage: "url('/testimonial/testimonialheader.jpg')" }}
      >
        <h2 className="frontTitle">Avis d'athlètes et de passionnés</h2>
        <h3 className="frontP">Les résultats parlent d'eux-mêmes.</h3>
      </div>
      <TestimonialP />
    </div>
  );
};

export default Page;
