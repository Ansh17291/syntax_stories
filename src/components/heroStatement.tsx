"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroStatement = () => {
  return (
    <section className="flex flex-col items-center justify-start text-center px-4 md:px-8 lg:px-16 pt-[12vh] md:pt-[15vh] min-h-[calc(90vh-80px)] space-y-6 md:space-y-8">
      {/* Gradient Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
      >
        Talk is cheap,
      </motion.h1>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white transition duration-500 hover:text-red-400"
      >
        Push your thoughts to prod.
      </motion.h1>

      {/* Typewriter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="text-base md:text-lg lg:text-xl text-gray-400"
      >
        <TypeAnimation
          sequence={[
            "Full-stack dev in progress...",
            1500,
            "I document everything I learn!",
            1500,
            "From errors to epiphanies.",
            1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.div>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.6 }}
        className="text-sm sm:text-base md:text-lg text-gray-500 max-w-xl hover:text-gray-300 transition duration-300"
      >
        Everything I learn, I document — so you don't debug alone.
      </motion.p>
    </section>
  );
};

export default HeroStatement;
