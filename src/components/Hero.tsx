"use client";

import InputField from "./Questions";

export default function Hero() {
  return (
      <section className="text-center text-white py-16 px-4 sm:py-24 sm:px-6 bg-gradient-to-b from-black via-black to-purple-900/20 min-h-screen flex flex-col justify-center">
        
        {/* Animated Badge - Powered by Panaversity */}
        <p className="text-[15px] sm:text-xs uppercase bg-white/5 px-3 sm:px-4 py-3 rounded-full w-fit mx-auto flex items-center space-x-2">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
          </span>
          <span className="text-purple-400">Powered by Panaversity</span>
        </p>

        {/* Main Heading - Title and Highlighted Text */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-6 leading-tight sm:leading-snug">
          <span className="heading">Enterprise AI Agents</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            for the Future
          </span>
        </h1>

        {/* Input Field */}
        <div className="mt-8 max-w-md mx-auto w-full px-4 sm:px-0">
          <InputField />
        </div>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 lg:-mt-2 lg:-mb-8 flex flex-col sm:flex-row sm:gap-8 gap-4 justify-center items-center w-full">
          
          {/* Deploy Your AI Agent Button */}
          <button className="w-full sm:w-auto max-w-xs px-6 py-3 lg:py-4 bg-gradient-to-l from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-lg text-lg transition-all duration-500 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-[0_0_20px_5px_rgba(147,51,234,0.5)] flex items-center gap-2">
            Deploy Your AI Agent <span className="text-xl">&gt;</span>
          </button>

          {/* Watch Demo Button */}
          <button className="w-full sm:w-auto max-w-xs border border-purple-600 px-6 py-3 lg:py-4 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out shadow-lg hover:shadow-[0_0_20px_5px_rgba(147,51,234,0.5)] hover:bg-purple-600/10">
            Watch Demo
          </button>
        </div>
      </section>
  );
}