"use client";

import { getGalleryImages } from "@/app/(components)/actions/gallery";
import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

const ShuffleGrid = () => {
  const [shuffledData, setShuffledData] = useState([]);
  const [squareData, setSquareData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const timeoutRef = useRef(null);

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getGalleryImages();
        setSquareData(data);
        setShuffledData(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setSquareData([]);
        setShuffledData([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (Array.isArray(squareData) && squareData.length > 0) {
      const shuffleAndSetData = () => {
        setShuffledData(shuffle([...squareData]));
      };
      shuffleAndSetData();
      timeoutRef.current = setInterval(shuffleAndSetData, 2000);
    }
    return () => clearInterval(timeoutRef.current);
  }, [squareData]);

  if (isLoading) return <p>Loading gallery...</p>;
  if (!Array.isArray(squareData) || squareData.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1 p-2.5">
      {shuffledData.map((sq) => (
        <motion.div
          key={sq.id}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full"
          style={{
            backgroundImage: `url(${sq.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
    </div>
  );
};

export default ShuffleGrid;
