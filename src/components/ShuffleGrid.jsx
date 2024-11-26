// "use client";
// import { motion } from "framer-motion";
// import React, { useEffect, useRef, useState } from "react";

// const ShuffleGrid = ({ squareData }) => {
//   const shuffle = (array) => {
//     let currentIndex = array.length,
//       randomIndex;

//     while (currentIndex !== 0) {
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;

//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex],
//         array[currentIndex],
//       ];
//     }

//     return array;
//   };
//   const generateSquares = () => {
//     // Check if squareData is an array
//     if (!Array.isArray(squareData)) {
//       return <p>No data available</p>; // or handle this case as needed
//     }

//     return shuffle([...squareData]).map((sq) => (
//       <motion.div
//         key={sq.id}
//         layout
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//         className="w-full h-full"
//         style={{
//           backgroundImage: `url(${sq.src})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       ></motion.div>
//     ));
//   };

//   const timeoutRef = useRef(null);
//   const [squares, setSquares] = useState([]); // Initialize as an empty array

//   useEffect(() => {
//     shuffleSquares();
//     return () => clearTimeout(timeoutRef.current);
//   }, []);

//   const shuffleSquares = () => {
//     const generatedSquares = generateSquares();
//     if (Array.isArray(generatedSquares)) {
//       setSquares(generatedSquares);
//     }
//     timeoutRef.current = setTimeout(shuffleSquares, 2000); // Faster interval to reduce "crumble"
//   };

//   return (
//     <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1 p-2.5">
//       {Array.isArray(squares) && squares.map((sq) => sq)}{" "}
//       {/* Ensure squares is an array */}
//     </div>
//   );
// };

// export default ShuffleGrid;
"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

const ShuffleGrid = ({ squareData }) => {
  console.log(squareData);

  const [shuffledData, setShuffledData] = useState([]); // Store raw shuffled data
  const timeoutRef = useRef(null);

  // Function to shuffle the array
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

  // Shuffle and update the grid every 2 seconds
  useEffect(() => {
    if (Array.isArray(squareData)) {
      shuffleAndSetData(); // Initial shuffle
      timeoutRef.current = setInterval(shuffleAndSetData, 2000); // Shuffle every 2 seconds
    }

    return () => clearInterval(timeoutRef.current); // Cleanup interval on unmount
  }, [squareData]);

  const shuffleAndSetData = () => {
    if (Array.isArray(squareData)) {
      setShuffledData(shuffle([...squareData])); // Shuffle and update state
    }
  };

  // If no valid data, show a fallback message
  if (!Array.isArray(squareData) || squareData.length === 0) {
    return <p>No data available</p>;
  }

  // Render the grid with animations
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
        ></motion.div>
      ))}
    </div>
  );
};

export default ShuffleGrid;
