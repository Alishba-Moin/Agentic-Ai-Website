"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Brain, MessageSquare, Terminal, Shield } from "lucide-react";

export default function FeaturesSection() {
  // Card Data
  const cards = [
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: "Autonomous Learning",
      description: "Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: "Multi-Modal Intelligence",
      description: "Advanced agents capable of processing text, voice, and visual data for comprehensive understanding.",
    },
    {
      icon: <Terminal className="w-6 h-6 text-white" />,
      title: "Cognitive Integration",
      description: "Seamless integration with existing systems through advanced cognitive APIs and neural bridges.",
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Ethical AI Framework",
      description: "Built-in ethical guidelines and safety protocols ensuring responsible AI deployment.",
    },
  ];

  // Highlighted Card State
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  // Glowing Effect Cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prev) => (prev + 1) % cards.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6">
      {/* Heading Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-300 to-blue-500 text-transparent bg-clip-text">
          Neural Capabilities
        </h2>
        <p className="text-gray-400 mt-2 text-lg sm:text-xl">
          Powered by next-generation artificial intelligence
        </p>
      </div>

      {/* Cards Container */}
      <motion.div
        className="mt-12 flex flex-wrap justify-center gap-6 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.07,
              rotate: 3,
              boxShadow: "0px 10px 30px rgba(168, 85, 247, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className={`relative bg-[#111] border border-gray-800 p-6 rounded-xl shadow-lg w-full sm:w-64 
              flex flex-col items-start text-left transition-all duration-300 hover:border-purple-600 ${
                index === highlightedIndex
                  ? "shadow-[0_0_25px_#6B21A8] border-[#6B21A8]"
                  : ""
              }`}
          >
            <motion.div
              whileHover={{ rotate: -10, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 8 }}
              className="bg-gradient-to-r from-purple-600 to-blue-500 p-2 rounded-lg shadow-md mb-4"
            >
              {card.icon}
            </motion.div>

            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}