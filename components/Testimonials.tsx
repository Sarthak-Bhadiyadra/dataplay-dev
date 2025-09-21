"use client";
import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Konstantin Lekomtsev",
    title: "Our Career Tech Achiever",
    careerStart: {
      role: "Research Associate",
      company: "University of London",
    },
    careerNow: {
      role: "Senior Data Scientist",
      company: "Walmart • Bangalore",
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    text: null,
  },
  {
    id: 2,
    name: "Sophia Williams",
    title: "Machine Learning Expert",
    careerStart: { role: "Intern", company: "Microsoft" },
    careerNow: { role: "Lead ML Engineer", company: "Google • California" },
    videoUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    text: null,
  },
  {
    id: 3,
    name: "Rahul Mehta",
    title: "Our Career Tech Achiever",
    careerStart: { role: "Research Associate", company: "IIT Delhi" },
    careerNow: { role: "Senior Data Scientist", company: "Amazon • Bangalore" },
    videoUrl: null,
    text: `"I enrolled in multiple courses earlier for Data Science but I found Dataplay’s course to be the most comprehensive. Every topic is covered in depth with real-life projects. PPTs are short, clear and concise. Now I am confident..."`,
  },
  {
    id: 4,
    name: "Emily Johnson",
    title: "AI Specialist",
    careerStart: { role: "Junior Analyst", company: "Accenture" },
    careerNow: { role: "AI Lead", company: "Meta • London" },
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
    text: null,
  },
  {
    id: 5,
    name: "David Kim",
    title: "Data Engineer",
    careerStart: { role: "Trainee", company: "Oracle" },
    careerNow: { role: "Lead Data Engineer", company: "Netflix • LA" },
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    text: null,
  },
  {
    id: 6,
    name: "Anna Lee",
    title: "Deep Learning Researcher",
    careerStart: { role: "Assistant", company: "Stanford" },
    careerNow: { role: "AI Scientist", company: "OpenAI • SF" },
    videoUrl: null,
    text: `"This program helped me get into cutting-edge AI research with confidence and clarity. The real-world projects were game changers."`,
  },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 3;

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - cardsPerPage < 0
        ? testimonials.length - cardsPerPage
        : prev - cardsPerPage
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + cardsPerPage >= testimonials.length ? 0 : prev + cardsPerPage
    );
  };

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#8B5CF6] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Students Speak
          </h2>
          <p className="text-[#3B82F6] text-lg underline cursor-pointer hover:text-blue-700 transition duration-300">
            Transformative testimonials from our champions
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#FF4C3D] hover:bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition duration-300 shadow-lg"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#FF4C3D] hover:bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition duration-300 shadow-lg"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {visibleTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100"
              >
                {/* Video or Text */}
                {t.videoUrl ? (
                  <div className="relative h-48 bg-gray-200">
                    <iframe
                      className="w-full h-full"
                      src={t.videoUrl}
                      title={t.name}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="p-6">
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {t.text}
                    </p>
                    <button className="text-[#EF4444] text-sm font-medium hover:text-red-600 transition duration-300">
                      Read More
                    </button>
                  </div>
                )}

                {/* Profile Section */}
                <div className="p-6 border-t">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <h4 className="font-bold text-gray-900">{t.name}</h4>
                      <p className="text-sm text-gray-600">{t.title}</p>
                    </div>
                  </div>

                  {/* Career Path */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-center">
                      <p className="font-semibold text-gray-900">
                        {t.careerStart.role}
                      </p>
                      <p className="text-gray-600">{t.careerStart.company}</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-0.5 bg-gray-400"></div>
                      <svg
                        className="w-4 h-4 text-gray-400 mx-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <div className="w-8 h-0.5 bg-gray-400"></div>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-gray-900">
                        {t.careerNow.role}
                      </p>
                      <p className="text-gray-600">{t.careerNow.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
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
  );
};

export default Testimonials;
