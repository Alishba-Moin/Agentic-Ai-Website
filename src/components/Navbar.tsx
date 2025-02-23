"use client";

import { useState } from "react";
import Link from "next/link";
import { Bot, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Function to scroll smoothly to the desired section
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Close the mobile menu after clicking a link
    setOpen(false);
  };

  return (
    // Main navigation container
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-black text-white shadow-lg z-50">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        {/* Bot icon as a logo */}
        <Bot className="w-7 h-7 text-purple-500" />
        <Link href="/" className="text-lg font-bold hover:text-purple-400 transition duration-300">
          Agentia World
        </Link>
      </div>

      {/* Hamburger Button - Visible only on small screens */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden absolute right-6 top-5 focus:outline-none"
        aria-label="Toggle Menu"
      >
        {/* Toggle between Menu and Close icons */}
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Desktop Menu - Hidden on small screens */}
      <div className="hidden md:flex items-center space-x-6">
        <ul className="flex space-x-6">
          {/* Navigation Links */}
          {["Features", "Technology", "Agents", "Pricing", "Contact"].map((item) => (
            <li key={item} className="hover:text-purple-400 transition duration-300 cursor-pointer">
              <button
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 focus:outline-none focus:text-purple-400"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* 🚀 Launch Console Button for Desktop */}
        <Link
          href="/"
          className="bg-gradient-to-l from-purple-600 to-blue-600 hover:from-purple-900 hover:to-blue-700 
            text-white px-5 py-2 rounded-lg font-bold transition-all duration-300 shadow-md 
            hover:shadow-[0_0_15px_5px_rgba(147,51,234,0.5)] transform hover:scale-105"
        >
          Launch Console
        </Link>
      </div>

      {/* Mobile Menu - Only visible when the Hamburger Button is clicked */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] p-6 bg-black text-white 
          transform ${open ? "translate-x-0" : "translate-x-full"} 
          transition-transform duration-500 ease-in-out md:hidden z-50`}
      >
        {/* Close Button for Mobile Menu */}
        <button onClick={() => setOpen(false)} className="absolute top-4 right-4 focus:outline-none">
          <X className="h-6 w-6 text-purple-500" />
        </button>

        <nav className="flex flex-col space-y-6 text-lg text-center mt-12">
          {/* Mobile Navigation Links */}
          {["Features", "Technology", "Agents", "Pricing", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:text-purple-500 text-white transition duration-300 focus:outline-none focus:text-purple-400"
            >
              {item}
            </button>
          ))}

          {/* 🚀 Launch Console Button Inside Mobile Menu */}
          <Link
            href="/"
            className="bg-gradient-to-l from-purple-800 to-blue-600 hover:from-purple-900 hover:to-blue-700 
              text-white px-4 py-2 rounded-lg transition-all block mt-4 shadow-md 
              hover:shadow-[0_0_15px_5px_rgba(147,51,234,0.5)] transform hover:scale-105"
          >
            Launch Console
          </Link>
        </nav>
      </div>
    </nav>
  );
}