import React from "react";
import { motion } from "framer-motion";

function App() {
  const donuts = [
    "https://pngimg.com/uploads/donut/donut_PNG46.png",
    "https://pngimg.com/uploads/donut/donut_PNG38.png",
    "https://pngimg.com/uploads/donut/donut_PNG63.png",
    "https://pngimg.com/uploads/donut/donut_PNG67.png",
  ];

  const sprinkles = Array.from({ length: 15 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-400 to-yellow-500 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      
      {sprinkles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: ["#ff6b6b", "#ffcc00", "#4ecdc4", "#ff99cc"][i % 4],
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, -20, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-white text-4xl md:text-6xl font-extrabold mb-10 drop-shadow-lg relative z-10"
      >
        CHOOSE YOUR OWN FLAVOR
      </motion.h1>

      {/* Donuts in one line */}
      <div className="flex justify-center gap-10 mb-12 relative z-10">
        {donuts.map((src, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-full shadow-xl p-6 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"
            initial={{ y: -200, opacity: 0 }}
            animate={{
              y: [0, -15, 0], // floating
              opacity: 1,
              rotate: [0, 8, -8, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 1.5,
              delay: index * 0.5, // stagger drop
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <img
              src={src}
              alt="donut"
              className="w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-md"
            />
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.15, rotate: 3 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 0 0px #fff",
            "0 0 20px #fff",
            "0 0 0px #fff"
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 text-lg"
      >
        <span>🍩 Visit Our Store</span>
      </motion.button>
    </div>
  );
}

export default App;
