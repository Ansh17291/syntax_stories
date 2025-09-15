"use client";
import { motion } from "framer-motion";
import React from "react";

const codeSnippets = ["<", "{", "}", "=>", "()", ";", "const", "let", "===", "function"];

const randomPosition = () => ({
  x: Math.random() * 100 + "%",
  y: Math.random() * 100 + "%",
});

const CodeFloaters = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {codeSnippets.map((char, index) => {
        const delay = Math.random() * 5;
        const { x, y } = randomPosition();

        return (
          <motion.div
            key={index}
            className="absolute text-sm md:text-xl font-mono text-white/20"
            style={{ top: y, left: x }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: "100vh", opacity: 0.2 }}
            transition={{
              duration: 10 + Math.random() * 5,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {char}
          </motion.div>
        );
      })}
    </div>
  );
};

export default CodeFloaters;
