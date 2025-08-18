import React from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-yellow-400 flex flex-col items-center justify-center text-center px-6">
     
      <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
        CHOOSE YOUR OWN FLAVOR
      </h1>

      
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {[
          "https://pngimg.com/uploads/donut/donut_PNG46.png",
          "https://pngimg.com/uploads/donut/donut_PNG38.png",
          "https://pngimg.com/uploads/donut/donut_PNG63.png",
          "https://pngimg.com/uploads/donut/donut_PNG67.png",
        ].map((src, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-full shadow-xl p-6 w-40 h-40 flex items-center justify-center"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          >
            <img src={src} alt="donut" className="w-24 h-24 object-contain" />
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-white text-yellow-600 font-bold px-6 py-3 rounded-full shadow-lg flex items-center space-x-2"
      >
        <span>Visit Our Store</span>
        <span className="bg-yellow-500 text-white px-2 py-1 rounded-full">→</span>
      </motion.button>
    </div>
  );
}

export default App;
