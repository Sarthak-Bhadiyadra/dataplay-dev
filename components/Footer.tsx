// components/Footer.jsx
import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Footer = () => {
  // Data arrays for footer links
  const informationLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Testimonial", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  const serviceLinks = [
    { label: "Courses", href: "#" },
    { label: "Consultancy", href: "#" },
    { label: "Corporate Training", href: "#" },
  ];

  const socialMediaLinks = [
    {
      icon: "uil:linkedin",
      href: "#",
    },
    {
      icon: "fa7-brands:square-twitter",
      href: "#",
    },
    {
      icon: "ant-design:facebook-filled",
      href: "#",
    },
    {
      icon: "ant-design:instagram-filled",
      href: "#",
    },
  ];

  const bottomFooterLinks = [
    { label: "Term of Use", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="relative bg-darkBlue text-white">
      {/* Main Footer Content */}
      <div className="relative  container py-20">
        <div className="grid grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="col-span-4 space-y-4">
            <Image
              src="/Brand-Logo.svg"
              alt="footer-logo"
              width={230}
              height={50}
            />
            <p className="text-white text-lg">
              At DATAPLAY, we are not just educators, we are navigators guiding
              you to your best self, where satisfaction and success intertwine
              seamlessly.
            </p>
          </div>
          <div className="col-span-8">
            <div className="grid grid-cols-3 gap-8">
              {/* Information Links */}
              <div className="relative space-y-6 ">
                <h4 className="text-xl font-bold text-purple">Information</h4>
                <ul className="relative space-y-2.5">
                  {informationLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-lg text-white hover:text-orange"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Services */}
              <div className="relative space-y-6 ">
                <h4 className="text-xl font-bold text-purple">Our Services</h4>
                <ul className="relative space-y-2.5">
                  {serviceLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-lg text-white hover:text-orange"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Get In Touch */}
              <div className="relative space-y-6 ">
                <h4 className="text-xl font-bold text-purple">Get In Touch</h4>
                <div className="relative space-y-3 text-gray-300">
                  <a
                    href="mailto:digitaldataplay@gmail.com"
                    className="flex items-center gap-2 text-white hover:text-purple"
                  >
                    <Icon
                      icon="ic:baseline-email"
                      className="size-6 text-purple shrink-0"
                    />
                    <span>digitaldataplay@gmail.com</span>
                  </a>
                  <a
                    href="tel:9876543211"
                    className="flex items-center gap-2 text-white hover:text-purple"
                  >
                    <Icon
                      icon="carbon:phone-filled"
                      className="size-6 text-purple shrink-0"
                    />
                    <span>+91 9876543211</span>
                  </a>
                  <p className="flex items-center gap-2 text-white hover:text-purple mt-8">
                    <Icon
                      icon="typcn:location"
                      className="size-6 text-purple shrink-0"
                    />
                    <span>
                      BG/02 Chitrakoot, New Mall of Galaxy, Sector, Rajkot,
                      360021
                    </span>
                  </p>
                </div>

                {/* Social Media */}
                <div className="mt-6 flex items-center gap-4">
                  <h5 className="text-lg font-semibold">Follow Us :</h5>
                  <div className="flex space-x-2">
                    {socialMediaLinks.map((social, index) => {
                      return (
                        <a
                          key={index}
                          href={social.href}
                          className={` flex-center text-purple hover:text-orange transition duration-300`}
                        >
                          <Icon icon={social.icon} className="size-6" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-white/30 py-5">
        <div className="container flex justify-between items-center">
          <div className="text-lg text-white">
            © 2024 dataplay.com. All rights reserved.
          </div>

          {/* Links */}
          <div className="flex text-lg divide-x divide-white">
            {bottomFooterLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-orange transition-all px-5 leading-none"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Bar */}
      <div className="relative block w-full bg-purple h-10"></div>
    </footer>
  );
};

export default Footer;
