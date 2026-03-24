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
async function getData() {
  const response = await fetch(`${BASE_API_URL}/testimonials/api`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

const Page = async () => {
  const testimonials = await getData();

  return (
    <div>
      <div
        className="flex flex-col items-center justify-center gap-16 h-screen bg-cover bg-no-repeat bg-center bg-fixed"
        style={{ backgroundImage: "url('/testimonial/testimonialheader.jpg')" }}
      >
        <h2 className="frontTitle">Avis d'athlètes et de passionnés</h2>
        <h3 className="frontP">Les résultats parlent d'eux-mêmes.</h3>
      </div>
      <TestimonialP testimonials={testimonials} />
    </div>
  );
};

export default Page;
