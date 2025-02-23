"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Server, ShieldCheck, Globe } from "lucide-react";

export default function AISolutions() {
  // Array of AI solution 
  const solutions = [
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Enterprise AI",
      description: "Custom AI agents designed for enterprise-scale operations and decision-making.",
    },
    {
      icon: <Server className="w-6 h-6 text-white" />,
      title: "Neural Operations",
      description: "Automated workflow optimization through distributed neural networks.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "Secure Intelligence",
      description: "Privacy-first AI solutions with military-grade security protocols.",
    },
  ];

  // State to manage highlighted solution and device type
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Track screen size changes to adjust hover effects
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Automatically cycle through solutions
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prev) => (prev + 1) % solutions.length);
    }, 2000);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 w-full">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-300 to-blue-500 text-transparent bg-clip-text">
          AI Solutions
        </h2>
        <p className="text-gray-400 mt-2 text-lg sm:text-xl">
          Transforming industries with intelligent agents
        </p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            // Apply hover and tap effects for desktop and mobile
            whileHover={!isMobile ? { borderColor: "#6B21A8", scale: 1.05 } : {}}
            whileTap={isMobile ? { scale: 0.95, borderColor: "#6B21A8" } : {}}
            transition={{ duration: 0.3 }}
            className={`bg-[#111] border border-transparent p-6 rounded-xl shadow-lg w-full sm:w-72 flex flex-col items-start text-left transition-all 
              ${
                index === highlightedIndex
                  ? "shadow-[0_0_15px_#6B21A8] border-[#6B21A8]"
                  : ""
              }`}
            // Update highlighted index on click
            onClick={() => setHighlightedIndex(index)}
          >
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-2 rounded-lg shadow-md mb-4">
              {solution.icon}
            </div>
            <h3 className="text-xl font-semibold">{solution.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{solution.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}