// components/Header.jsx
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="bg-[#1d164f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <Image
                  src="/Brand-Logo.svg"
                  alt="header-logo"
                  width={180}
                  height={50}
                />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#"
                className="hover:text-purple-400 px-3 py-2 text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:text-purple-400 px-3 py-2 text-sm font-medium"
              >
                About Us
              </a>
              <a
                href="#"
                className="hover:text-purple-400 px-3 py-2 text-sm font-medium"
              >
                Courses
              </a>
              <a
                href="#"
                className="hover:text-purple-400 px-3 py-2 text-sm font-medium"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="hover:text-purple-400 px-3 py-2 text-sm font-medium"
              >
                Corporate Training
              </a>
            </div>
          </nav>

          {/* Login/Signup Button */}
          <div className="flex items-center">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium transition duration-200">
              Login/Signup
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-purple-400">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
