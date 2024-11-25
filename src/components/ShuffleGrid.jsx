// "use client";
// import { motion } from "framer-motion";
// import React, { useEffect, useRef, useState } from "react";

// const ShuffleGrid = () => {
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
//     const apiUrl = process.env.NEXT_PUBLIC_API_URL;
//     const [squareData, setSquareData] = useState([]);
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           // const res = await fetch("http:/localhost:3000/testimonials/api");
//           const res = await fetch(`${apiUrl}/api/insta`, {
//             next: { revalidate: 0 },
//           });

//           if (!res.ok) {
//             throw Error("There is no product data");
//           }
//           const data = await res.json();
//           setSquareData(data);
//         } catch (error) {
//           console.log(error.message);
//         }
//       };
//       fetchData();
//     }, []);
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
//   const apiUrl = process.env.NEXT_PUBLIC_API_URL;

//   if (!apiUrl) {
//     return null;
//   }
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

const ShuffleGrid = () => {
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

  const [squareData, setSquareData] = useState([]);
  const timeoutRef = useRef(null);

  // Fetch data once on mount
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      console.error("API URL is not defined");
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/insta`, {
          next: { revalidate: 0 },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setSquareData(shuffle(data)); // Shuffle the data once it's fetched
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();

    // Cleanup timeout on component unmount
    return () => clearTimeout(timeoutRef.current);
  }, []);

  // Periodically shuffle the grid
  useEffect(() => {
    const shuffleSquares = () => {
      setSquareData((prevData) => shuffle([...prevData]));
      timeoutRef.current = setTimeout(shuffleSquares, 2000);
    };

    if (squareData.length > 0) {
      shuffleSquares();
    }

    return () => clearTimeout(timeoutRef.current);
  }, [squareData]);

  if (!squareData.length) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1 p-2.5">
      {squareData.map((sq) => (
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
