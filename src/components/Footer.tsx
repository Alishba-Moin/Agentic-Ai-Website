import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Bot } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo and Tagline */}
        <div>
          <h2 className="text-white text-xl font-semibold flex items-center space-x-2">
            <Bot className="text-purple-500 w-6 h-6" />
            <span>Agentia World</span>
          </h2>
          <p className="text-sm mt-4">
            Next-generation AI agents powering the future of enterprise intelligence.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <Link
              href="https://github.com/Alishba-Moin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="text-gray-400 hover:text-purple-400 transition duration-300 transform hover:scale-110"
            >
              <FaGithub className="w-6 h-6" />
            </Link>
            <Link
              href=" https://www.linkedin.com/in/alishba-moin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="text-gray-400 hover:text-purple-400 transition duration-300 transform hover:scale-110"
            >
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              title="Twitter"
              className="text-gray-400 hover:text-purple-400 transition duration-300 transform hover:scale-110"
            >
              <FaTwitter className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-white font-semibold text-lg">Product</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <Link
                href="#"
                className="hover:text-purple-400 transition duration-300"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-purple-400 transition duration-300"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-purple-400 transition duration-300"
              >
                Documentation
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-purple-400 transition duration-300"
              >
                API
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Information */}
        <div>
          <h3 className="text-white font-semibold text-lg">Company</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <Link
                href="#"
                className="hover:text-purple-400 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-purple-400 transition duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-purple-400 transition duration-300"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-purple-400 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal and Compliance Links */}
        <div>
          <h3 className="text-white font-semibold text-lg">Legal</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <Link
                href="#"
                className="hover:text-purple-400 transition duration-300"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-purple-400 transition duration-300"
              >
                Terms
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-purple-400 transition duration-300"
              >
                Security
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-purple-400 transition duration-300"
              >
                Compliance
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="text-center text-sm mt-12 text-gray-500 border-t border-gray-800 pt-8">
        © 2025 Agentia World. Powered by Panaversity. All rights reserved.
      </div>
    </footer>
  );
}