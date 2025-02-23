"use client";

import { motion } from "framer-motion";
import { Brain, Code, Globe, Cpu } from "lucide-react";

export default function TechnologySection() {
  const cards = [
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: "Neural Networks",
      description: "Advanced neural architectures for complex decision making",
    },
    {
      icon: <Cpu className="w-8 h-8 text-white" />,
      title: "Deep Learning",
      description: "Sophisticated deep learning models for pattern recognition",
    },
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: "Advanced ML",
      description: "Cutting-edge machine learning algorithms",
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Global Scale",
      description: "Distributed AI processing across global networks",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-300 to-blue-500 text-transparent bg-clip-text">
          Powered by Advanced AI
        </h2>
        <p className="text-gray-400 mt-2 text-lg sm:text-xl">
          Built on cutting-edge neural architectures
        </p>
      </div>

      {/* Cards Container */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05, // Card lifts up slightly
              boxShadow: "0px 15px 30px rgba(168, 85, 247, 0.5)", // Soft glow effect
            }}
            whileTap={{ scale: 0.95 }} // Press effect for mobile
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="relative bg-[#111] border border-gray-800 p-6 rounded-xl shadow-lg 
                       flex flex-col items-center text-center transition-all duration-300"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0.3, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-purple-700 rounded-full blur-2xl opacity-30 -z-10"
            ></motion.div>
            <motion.div
              whileHover={{ rotate: -8, scale: 1.1 }} 
              transition={{ type: "spring", stiffness: 200, damping: 8 }}
              className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 rounded-xl shadow-md"
            >
              {card.icon}
            </motion.div>

            <h3 className="text-xl font-semibold mt-4">{card.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}