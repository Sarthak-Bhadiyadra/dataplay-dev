import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import {
  Users,
  Clock,
  Search,
  Newspaper,
  GraduationCap,
  MessageCircle,
  Linkedin,
} from "lucide-react";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const programs = [
    {
      title: "Data Science June 2025",
      participants: "5/30",
      duration: "8 Week",
      status: "Available",
      statusColor: "bg-green-100 text-green-700 border border-green-200",
      joinButton: "bg-green-500 hover:bg-green-600",
      image: "/blog1.png", // Replace with actual image
    },
    {
      title: "Data Science June 2025",
      participants: "5/30",
      duration: "8 Week",
      status: "Available",
      statusColor: "bg-green-100 text-green-700 border border-green-200",
      joinButton: "bg-green-500 hover:bg-green-600",
      image: "/blog1.png",
    },
    {
      title: "Data Science June 2025",
      participants: "5/30",
      duration: "8 Week",
      status: "Full",
      statusColor: "bg-red-100 text-red-700 border border-red-200",
      joinButton: "bg-gray-400 cursor-not-allowed",
      image: "/blog1.png",
    },
  ];

  const features = [
    {
      icon: Search,
      title: "Real Industry Data",
      subtitle: "Real world cases with industry insights",
      bgColor: "bg-[#8B5CF6]",
    },
    {
      icon: Newspaper,
      title: "Daily Practice Problems",
      subtitle: "To reinforce Previous Concepts!",
      bgColor: "bg-[#8B5CF6]",
    },
    {
      icon: GraduationCap,
      title: "Tailored Course",
      subtitle: "Your Unique Talents And Interested!",
      bgColor: "bg-[#8B5CF6]",
    },
    {
      icon: MessageCircle,
      title: "Ace Your Interviews",
      subtitle: "With Unlimited Mock Interviews!",
      bgColor: "bg-[#8B5CF6]",
    },
  ];

  const mentors = [
    {
      name: "Nishant Gupta",
      title: "Senior Data Scientist @ EXL",
      subtitle: "Ex Senior Data Scientist @ MediaCorp, Singapore",
      description:
        "With 8 years of experience, he excels at simplifying complex concepts, ensuring comprehensive understanding from the very roots.",
      bgColor: "bg-gradient-to-br from-[#EC4899] to-[#8B5CF6]",
      image: "/mentor1.png", // Replace with actual image
    },
    {
      name: "Mahima Gupta",
      title: "Data Scientist @ Target, Bangalore",
      subtitle: "",
      description:
        "With 4 years of expertise, she adeptly identifies students' weak points, introducing effective techniques to help them excel by addressing their shortcomings",
      bgColor: "bg-gradient-to-br from-[#EC4899] to-[#8B5CF6]",
      image: "/mentor2.png", // Replace with actual image
    },
  ];

  const galleryData = [
    {
      id: 1,
      title: "Excel Workshop",
      image: "/blog1.png",
      span: "col-span-2", // Takes 2 columns
      rowSpan: "row-span-1", // Takes 1 row
    },
    {
      id: 2,
      title: "Art Workshop",
      image: "/blog1.png",
      span: "col-span-1", // Takes 1 column
      rowSpan: "row-span-2", // Takes 2 rows
    },
    {
      id: 3,
      title: "Design Workshop",
      image: "/blog1.png",
      span: "col-span-1", // Takes 1 column
      rowSpan: "row-span-1", // Takes 1 row
    },
    {
      id: 4,
      title: "Creative Workshop",
      image: "/blog1.png",
      span: "col-span-1", // Takes 1 column
      rowSpan: "row-span-1", // Takes 1 row
    },
  ];

  return (
    <div>
      <HeroSection />

      {/* Fellowship Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-[#EF4444] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              UPCOMING DATAPLAY COHORTS
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              DATAPLAY
              <br />
              Fellowship Programs
            </h2>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 flex items-stretch gap-4"
              >
                {/* Program Image - Fixed Width with Full Height */}
                <div className="w-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl flex items-center justify-center shrink-0">
                  <Image
                    src={program.image}
                    width={100}
                    height={100}
                    alt="Program Image"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Program Details - Takes remaining space with full height */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-gray-900">
                      {program.title}
                    </h3>

                    {/* Participants */}
                    <div className="flex items-center text-gray-600 text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{program.participants}</span>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{program.duration}</span>
                    </div>
                  </div>

                  {/* Status and Join Button - Always at bottom */}
                  <div className="flex items-center gap-4 pt-2 mt-auto">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${program.statusColor}`}
                    >
                      {program.status}
                    </span>
                    <button
                      className={`px-4 py-1 rounded-full text-white text-xs font-semibold transition duration-200 ${program.joinButton}`}
                      disabled={program.status === "Full"}
                    >
                      JOIN
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <button className="bg-[#EF4444] hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300">
              View More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-[#F8F9FF] rounded-2xl p-8 text-center hover:shadow-lg transition duration-300 border border-purple-100"
                >
                  <div
                    className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <IconComponent
                      className="w-8 h-8 text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20 bg-gray-50 overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-[#8B5CF6] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              MENTORS
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Mentors
            </h2>
            <p className="text-gray-600 text-lg">
              Guiding minds towards brilliance and success.
            </p>
          </div>

          {/* Mentors Grid - Added overflow-visible and increased gap */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12 overflow-visible py-8">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-[#FF9393] to-[#8073E5] rounded-3xl text-white relative overflow-visible min-h-[400px] flex"
              >
                {/* Image Section - Left Half */}
                <div className="w-1/2 relative overflow-visible">
                  {/* Image Container with Vertical Overflow */}
                  <div className="absolute inset-0 -top-16 -bottom-0 w-full overflow-visible">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Content Section - Right Half */}
                <div className="w-1/2 p-8 flex flex-col justify-center relative z-20">
                  <h3 className="text-3xl font-bold mb-2">{mentor.name}</h3>
                  <h4 className="text-lg font-semibold mb-1 opacity-95">
                    {mentor.title}
                  </h4>
                  {mentor.subtitle && (
                    <h5 className="text-sm font-medium mb-4 opacity-90">
                      {mentor.subtitle}
                    </h5>
                  )}
                  <p className="text-sm opacity-90 mb-6 leading-relaxed">
                    {mentor.description}
                  </p>
                  <button className="bg-[#EF4444] hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition duration-300 flex items-center gap-2 w-fit">
                    View Profile
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-white rounded-full"></div>
                  <div className="absolute top-1/2 left-4 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <button className="bg-[#EF4444] hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300 flex items-center gap-2 mx-auto">
              View More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Data Science Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Video Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-3xl p-8 text-white relative overflow-hidden">
                {/* Edureka Logo */}
                <div className="mb-6">
                  <div className="text-white text-lg font-semibold">
                    edureka!
                  </div>
                </div>

                {/* Main Content */}
                <div className="mb-8">
                  <h3 className="text-4xl font-bold mb-2">DATA</h3>
                  <h3 className="text-4xl font-bold mb-2">SCIENCE</h3>
                  <h4 className="text-xl font-semibold mb-2">FULL COURSE</h4>
                  <h4 className="text-xl font-semibold">IN 10 HOURS</h4>
                </div>

                {/* Million+ Badge */}
                <div className="absolute top-8 right-8">
                  <div className="bg-yellow-400 text-black px-3 py-1 rounded-lg font-bold text-sm">
                    Million+
                  </div>
                </div>

                {/* 3D Number */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="text-[8rem] font-bold opacity-20 leading-none">
                    3
                  </div>
                </div>

                {/* Play Button */}
                <div className="flex justify-center mt-8">
                  <div className="w-16 h-16 bg-[#EF4444] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition duration-300 shadow-xl">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/20 rounded-full"></div>
                <div className="absolute top-1/4 left-8 w-2 h-2 bg-white/30 rounded-full"></div>
                <div className="absolute bottom-1/4 right-8 w-3 h-3 bg-white/20 rounded-full"></div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-6">
              {/* Welcome Badge */}
              <div className="inline-block bg-[#8B5CF6] text-white px-4 py-2 rounded-full text-sm font-semibold">
                WELCOME TO DATAPLAY
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Your Compass On The{" "}
                <span className="bg-[#EF4444] text-white px-2 py-1 rounded">
                  Data Science
                </span>{" "}
                Journey.
              </h2>

              {/* Description Paragraphs */}
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Whether you are a recent student just starting with this
                  course and new-to-all—or personal. Like Arjuna guided on his
                  path, we aim to help you find yours, combining academic,
                  wisdom with real-world insight.
                </p>

                <p>
                  Whether you're just starting or deepening your journey, our
                  supportive ecosystem—built on individuality, passion, and
                  purpose—guides you toward becoming not just job-ready, but
                  truly fulfilled.
                </p>

                <p>
                  Through tools like GPTs and a vibrant community, we help you
                  learn, grow, and thrive in your own unique way. Welcome to a
                  space where your brilliance can truly flourish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What You will Learn in the Data
              <br />
              Science Bootcamp?
            </h2>
          </div>

          {/* Curriculum Timeline */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-[640px] w-1 bg-gray-200"></div>

            {/* Module 1 - Left Side */}
            <div className="relative mb-16">
              <div className="flex items-center">
                <div className="w-1/2 pr-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ml-auto max-w-md">
                    {/* Module Badge */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-[#8B5CF6] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        MODULE 1
                      </div>
                      <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                        6 Hours
                      </div>
                    </div>

                    {/* Module Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Introduction to RDBMS
                    </h3>

                    {/* Module Content */}
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          It has survived not only five centuries, but also the
                          leap into electronic typesetting, remaining
                          essentially unchanged.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Timeline Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#8B5CF6] rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="w-1/2 pl-8"></div>
              </div>
            </div>

            {/* Module 2 - Right Side */}
            <div className="relative mb-16">
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>

                {/* Timeline Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#8B5CF6] rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="w-1/2 pl-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-md">
                    {/* Module Badge */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-[#8B5CF6] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        MODULE 2
                      </div>
                      <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                        6 Hours
                      </div>
                    </div>

                    {/* Module Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Introduction to RDBMS
                    </h3>

                    {/* Module Content */}
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                          It has survived not only five centuries, but also the
                          leap into electronic typesetting, remaining
                          essentially unchanged.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* View Complete Curriculum Button */}
            <div className="text-center mt-12">
              <button className="bg-[#EF4444] hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300">
                View Complete Curriculum
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Apply Section */}
      <section
        className="bg-contain bg-center bg-no-repeat w-full relative overflow-hidden"
        style={{ backgroundImage: "url('/apply-bg.png')" }}
      >
        {/* Full width container without side padding */}
        <div className="relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            {/* Left Side - Empty (background image shows through) */}
            <div className="relative h-96 lg:h-[500px]">
              {/* This div is intentionally left empty to show background image */}
            </div>

            {/* Right Side - Content with proper spacing */}
            <div className="text-white space-y-6 px-8 sm:px-12 lg:px-16 py-20">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Who Can Apply?
              </h2>

              <p className="text-xl lg:text-2xl">
                Absolutely{" "}
                <span className="bg-[#EF4444] px-3 py-1 rounded text-white font-bold">
                  Everyone!
                </span>{" "}
                All Backgrounds, All Levels,
              </p>

              <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                Whether you're a high school grad, college graduate, or industry
                expert. Diversity is your learning playground!
              </p>

              <button className="bg-[#EF4444] hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300 mt-8">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-[#8B5CF6] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              OUR GALLERY
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Gallery
            </h2>
            <p className="text-gray-600 text-lg">
              Visualizing knowledge through our gallery.
            </p>
          </div>

          {/* Dynamic Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-6 mb-12">
            {galleryData.map((item) => (
              <div
                key={item.id}
                className={`relative group overflow-hidden rounded-2xl ${item.span} ${item.rowSpan}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
                  {item.title}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <button className="bg-[#8B5CF6] hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition duration-300 flex items-center gap-2 mx-auto">
              View More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
