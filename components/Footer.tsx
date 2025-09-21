// components/Footer.jsx
import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#1d164f] text-white">
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <Image
                  src="/Brand-Logo.svg"
                  alt="footer-logo"
                  width={230}
                  height={50}
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                At DATAPLAY, we are not just educators, we are navigators
                guiding you to your best self, where satisfaction and success
                intertwine seamlessly.
              </p>
            </div>

            {/* Information Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Information</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition duration-300 text-sm"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition duration-300 text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition duration-300 text-sm"
                  >
                    Teams
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition duration-300 text-sm"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition duration-300 text-sm"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition duration-300 text-sm"
                  >
                    Study
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition duration-300 text-sm"
                  >
                    Consultancy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition duration-300 text-sm"
                  >
                    Corporate Training
                  </a>
                </li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
              <div className="space-y-3 text-sm text-gray-300">
                <p>📧 digitaldataplay@gmail.com</p>
                <p>📞 +91 9876543211</p>
                <p>📞 +91 9876543211</p>
                <p className="leading-relaxed">
                  📍 BG/02 Chitrakoot, New Mall of Galaxy, Sector, Rajkot,
                  360021
                </p>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <h5 className="text-sm font-semibold mb-3">Follow Us :</h5>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition duration-300"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-pink-600 rounded flex items-center justify-center hover:bg-pink-700 transition duration-300"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center hover:bg-blue-800 transition duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-red-600 rounded flex items-center justify-center hover:bg-red-700 transition duration-300"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-300">
              © 2024 dataplay.com. All rights reserved.
            </div>

            {/* Links */}
            <div className="flex space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition duration-300">
                Term of Use
              </a>
              <a href="#" className="hover:text-white transition duration-300">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Bar */}
      <div className="bg-[#8B5CF6] py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-white font-semibold">
              Call Our Course Advisors
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-white">
                <span className="font-semibold">IND</span>
                <span>+91-7427071631</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
