import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function ContactForm() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        
        {/* Heading Section */}
        <h2 className="text-center text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-300 to-blue-500 text-transparent bg-clip-text">
          Get in Touch
        </h2>
        <p className="text-center text-gray-400 mt-2 text-lg sm:text-xl">
          Ready to transform your business with AI?
        </p>

        {/* Main Content Container: Contact Info and Form */}
        <div className="flex flex-col md:flex-row md:items-start mt-8 gap-8 md:gap-20">
          
          {/* Left Side: Contact Information */}
          <div className="text-white md:w-1/3">
            <h3 className="font-semibold text-xl">Contact Information</h3>
            
            {/* Contact Details */}
            <div className="mt-6 space-y-4 text-gray-300">
              <p className="flex items-center">
                <span className="text-purple-500 mr-2">✉</span>
                contact@agentiaworld.com
              </p>
              <p className="flex items-center">
                <span className="text-purple-500 mr-2">🌐</span>
                www.agentiaworld.com
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4 mt-6">
                <Link
                  href="https://github.com/Alishba-Moin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition duration-300"
                >
                  {/* GitHub Icon */}
                  <FaGithub className="w-6 h-6" />
                </Link>
                <Link
                  href=" https://www.linkedin.com/in/alishba-moin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition duration-300"
                >
                  {/* LinkedIn Icon */}
                  <FaLinkedin className="w-6 h-6" />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition duration-300"
                >
                  {/* Twitter Icon */}
                  <FaTwitter className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full md:w-2/3">
            <form className="space-y-6">
              {/* Name Fields*/}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full sm:w-1/2 p-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full sm:w-1/2 p-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Email Field */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {/* Message Textarea */}
              <textarea
                placeholder="Your Message"
                className="w-full p-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-36"
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full p-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:opacity-90 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}