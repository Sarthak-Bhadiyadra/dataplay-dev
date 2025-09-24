/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Data Engineering",
      category: "DATA SCIENCE",
      topics: [
        "Data Collection and Storage",
        "Data Cleaning and Preprocessing",
      ],
      image: "/course.png",
      badges: ["LaunchPad", "DS Essentials"],
      discount: "100%",
    },
    {
      title: "Data Analyst",
      category: "DATA SCIENCE",
      topics: [
        "Data Collection and Storage",
        "Data Cleaning and Preprocessing",
      ],
      image: "/course.png",
      badges: ["LaunchPad", "DS Essentials"],
      discount: "100%",
    },
    {
      title: "MERN STACK",
      category: "Web Development",
      topics: [
        "Data Collection and Storage",
        "Data Cleaning and Preprocessing",
      ],
      image: "/course.png",
      badges: ["LaunchPad", "DS Essentials"],
      discount: "100%",
    },
  ];

  return (
    <section className="relative py-20">
      <div className="container">
        {/* Section Header */}
        <div className="relative flex-center flex-col leading-none gap-4 text-center mb-16">
          <div className="inline-block bg-purple text-white px-6 py-2 rounded-full text-[22px] font-semibold">
            COURSES
          </div>
          <h2 className="text-[50px] font-normal text-black">
            Industry Expert Certified
          </h2>
          <p className="text-black text-lg">
            Your ultimate comprehensive and tailored solutions.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-2xl transition-all border border-black/20 overflow-hidden"
            >
              {/* Course Image with badges */}
              <img
                src={course.image}
                alt="Course Image"
                className="relative w-full rounded-xl h-[260px] object-cover"
              />

              {/* Course Details */}
              <div className="relative mt-6">
                {/* Category Tag */}
                <div className="relative mb-3">
                  <div className="relative w-fit bg-gray-200 text-black px-3 py-2 rounded-full text-sm font-medium">
                    {course.category}
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="text-[22px] font-bold text-black mt-4 mb-3">
                  {course.title}
                </h3>

                {/* Topics List */}
                <ul className="space-y-2 mb-4">
                  {course.topics.map((topic, topicIndex) => (
                    <li
                      key={topicIndex}
                      className="flex items-start text-black text-sm"
                    >
                      <span className="size-2 bg-purple rounded-full mt-2 mr-3 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>

                {/* View More Link */}
                <div className="mb-4">
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-gray-800"
                  >
                    View more...
                  </a>
                </div>

                {/* View Course Button */}
                <button className="w-full bg-gradient-to-r from-orange to-orange/50 text-white py-3 text-xl rounded-2xl font-semibold transition duration-300">
                  View Course
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses Link */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center text-gray-900 hover:text-gray-700 font-medium"
          >
            View All Courses
            <ArrowRight className="ml-2 w-4 h-4 text-red-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
