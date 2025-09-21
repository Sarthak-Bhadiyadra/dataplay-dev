// components/HeroSection.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, UserCheck, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-[#F7EEFA] pt-[7.831rem] relative">
      <div className="container mx-auto px-4 my-4">
        <div className="flex flex-col lg:flex-row items-center pb-10">
          {/* Left Content */}
          <div className="w-full lg:w-7/12">
            <div className="relative">
              {/* Never Stop Learning */}
              <h5
                className="text-[#1d164f] text-[2.188rem] font-semibold mb-4"
                data-aos="fade-right"
              >
                Never Stop
                <span className="text-white font-bold pr-3 relative ml-2">
                  <span className="relative z-20 left-[1.063rem] pr-3 sm:pr-3 pr-2 text-white bg-[#8B5CF6] px-3 py-1 rounded">
                    Learning
                  </span>
                  {/* Decorative lines */}
                  <div className="absolute right-[-30px] top-[-10px] text-[#1d164f] text-xl font-bold transform rotate-12">
                    ///
                  </div>
                  <Image
                    src="/learning-vector.svg"
                    width={176}
                    height={50}
                    alt="Learning Vector"
                    className="absolute left-[0.375rem] top-[1px] z-10"
                    loading="lazy"
                  />
                  <Image
                    src="/learning-vector2.svg"
                    width={53}
                    height={53}
                    alt="Learning Vector 2"
                    className="absolute -right-[68px] -top-[45px]"
                    loading="lazy"
                  />
                </span>
              </h5>

              {/* Main Heading */}
              <h3
                className="text-[#1d164f] text-[3.25rem] font-bold leading-[58.5px] mr-0 sm:mr-0 pr-3 sm:pr-0 mb-4"
                data-aos="fade-right"
              >
                Empowering Careers In
                <br />
                <span className="text-[#3B82F6]">DATA</span> and{" "}
                <span className="text-[#8B5CF6]">Design</span>
                <span className="ml-3 sm:ml-3 ml-2 relative font-bold">
                  <Image
                    src="/level-vector.svg"
                    width={220}
                    height={50}
                    alt="Level Vector"
                    className="absolute top-[3.625rem] left-0 hidden lg:block"
                    loading="lazy"
                  />
                </span>
              </h3>

              {/* Description */}
              <p
                className="text-[#1d164f] text-[1.375rem] font-bold leading-[120%] mt-[1.563rem] mb-8 mr-0 sm:mr-0 mr-20 pr-0 sm:pr-0 pr-20"
                data-aos="fade-right"
              >
                Let&apos;s Sculpt YOUR Path To Success, YOUR Way !
                <span className="block w-16 h-1 bg-[#EF4444] mt-2"></span>
              </p>

              {/* CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 mb-12"
                data-aos="fade-up"
              >
                {/* View Curriculum Button */}
                <button className="bg-[#8073E5] text-white px-8 py-3 rounded-full font-semibold transition duration-300 flex items-center justify-center gap-2 shadow-lg">
                  <span className="text-lg">▷</span>
                  View Curriculum
                </button>

                {/* Join Upcoming Cohort Button */}
                <button className="bg-gradient-to-r from-[#EF4444] to-[#DC2626] hover:from-[#DC2626] hover:to-[#B91C1C] text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg">
                  Join Upcoming Cohort
                </button>
              </div>

              {/* Statistics Section */}
              <div
                className="flex flex-wrap items-center gap-8"
                data-aos="fade-up"
              >
                {/* 3K+ Upskilled */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 bg-[#93C5FD] rounded-full flex items-center justify-center">
                    <GraduationCap
                      className="w-7 h-7 text-[#1E40AF]"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="text-[#1d164f]">
                    <div className="font-bold text-base">3K + Upskilled</div>
                  </div>
                </div>

                {/* 4.9 ★ Google Rating */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 bg-[#FCA5A5] rounded-full flex items-center justify-center">
                    <UserCheck
                      className="w-7 h-7 text-[#DC2626]"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="text-[#1d164f]">
                    <div className="font-bold text-base">
                      4.9 ★ Google Rating
                    </div>
                  </div>
                </div>

                {/* 9K+ Community */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 bg-[#67E8F9] rounded-full flex items-center justify-center">
                    <Linkedin
                      className="w-7 h-7 text-[#0891B2]"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="text-[#1d164f]">
                    <div className="font-bold text-base">9K+ Community</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div
            className="w-full lg:w-5/12 px-4 lg:px-0 sm:px-20 lg:pt-0 pt-4 sm:pt-20 relative"
            data-aos="fade-left"
          >
            <div className="flex justify-end pl-0 sm:pl-16 relative">
              {/* Main Hero Image */}
              <div className="relative">
                <Image
                  src="/hero-img.png"
                  alt="banner-img"
                  height={520}
                  width={580}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Vector */}
      <Image
        src="/hero-vector1.svg"
        height={345}
        width={120}
        alt="Hero Vector"
        className="hidden sm:block absolute"
        style={{ top: "45%" }}
        loading="lazy"
      />
    </section>
  );
};

export default HeroSection;
