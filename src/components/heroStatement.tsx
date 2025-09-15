"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroStatement = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-24 px-4 relative">
      {/* Gradient Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
      >
        Talk is cheap,
      </motion.h1>

      {/* Main Title with hover animation */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mt-2 transition duration-500 hover:text-red-400"
      >
        Push your thoughts to prod.
      </motion.h1>

      {/* Typewriter animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="mt-6 text-lg md:text-xl text-gray-400"
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
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.6 }}
        className="mt-4 text-sm sm:text-base text-gray-500 max-w-xl hover:text-gray-300 transition duration-300"
      >
        Everything I learn, I document — so you don't debug alone.
      </motion.p>
    </section>
  );
};

export default HeroStatement;
