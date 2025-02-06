"use client";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { BASE_API_URL } from "@/utils/Url";
import Image from "next/image";
import "./testimonial.css";

const TestimonilasSlider = () => {
  if (!BASE_API_URL) {
    return null;
  }
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await fetch("http:/localhost:3000/testimonials/api");
        const res = await fetch(`${BASE_API_URL}/testimonials/api`);

        if (!res.ok) {
          throw Error("There is no product data");
        }
        const data = await res.json();
        setTestimonials(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container}>
      {testimonials?.map((project, i) => {
        const startOffset = i / testimonials.length;
        const endOffset = startOffset + 0.2;

        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[startOffset, endOffset]}
            targetScale={1 - (testimonials.length - i) * 0.05}
          />
        );
      })}
    </main>
  );
};

const Card = ({ i, title, description, src, color, progress, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, [0, 1], [1, targetScale], {
    clamp: false,
  });

  return (
    <div ref={container} className="cardContainer">
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="card"
      >
        <h2>{title}</h2>
        <div className="body">
          <div className="description">
            <p>{description}</p>
          </div>

          <div className="imageContainer">
            <motion.div className="inner" style={{ scale: imageScale }}>
              <Image fill src={`/${src}`} alt="image" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonilasSlider;
