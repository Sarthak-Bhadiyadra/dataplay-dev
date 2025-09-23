/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "./widgets/Button";
import { Icon } from "@iconify/react";

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
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="relative flex-center flex-col leading-none gap-5 text-center mb-16 ">
          <div className="inline-block bg-purple text-white px-6 py-2 rounded-full text-[22px] uppercase font-semibold">
            testimonials
          </div>
          <h2 className="text-[50px] font-bold text-black">
            Our Students Speak
          </h2>
          <p className="text-black text-lg">
            Transformative Testimonials from our Champions
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            // pagination={{
            //   clickable: true,
            //   el: ".swiper-pagination-custom",
            // }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="testimonials-swiper !px-6"
            style={{ height: "auto" }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id} className="pb-2">
                <div className="relative flex flex-col justify-between p-5 gap-5 border border-black bg-white rounded-4xl transition overflow-hidden drop-shadow-[4px_4px_0_black] h-full">
                  {/* Video or Text */}
                  {t.videoUrl ? (
                    <div className="relative h-[300px]">
                      <iframe
                        className="w-full h-full rounded-3xl border border-black"
                        src={t.videoUrl}
                        title={t.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="relative">
                      <p className="text-black text-xl font-light line-clamp-5">
                        {t.text}
                      </p>
                      <button className="text-orange font-medium transition duration-300">
                        Read More
                      </button>
                    </div>
                  )}

                  {/* Profile Section */}
                  <div className="relative">
                    <div className="flex items-center mb-4 gap-4">
                      <div className="relative flex-center" >
                        <img
                          src={"/user.png"}
                          className="size-[72px] bg-gray-300 rounded-full"
                        />
                        <Icon icon="skill-icons:linkedin" className="size-4 absolute bottom-0 right-0" />
                      </div>
                      <div className="relative flex flex-col gap-0">
                        <h4 className="text-xl font-bold">{t.name}</h4>
                        <p className="text-sm font-medium">{t.title}</p>
                      </div>
                    </div>

                    {/* Career Path */}
                    <div className="flex items-center justify-between">
                      <div className="relative text-black flex flex-col gap-0 text-center">
                        <p className="text-xl font-semibold">
                          {t.careerStart.role}
                        </p>
                        <p className="text-sm font-medium">
                          {t.careerStart.company}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <svg
                          width="51"
                          height="16"
                          viewBox="0 0 51 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M50.7071 8.70711C51.0976 8.31658 51.0976 7.68342 50.7071 7.29289L44.3431 0.928932C43.9526 0.538408 43.3195 0.538408 42.9289 0.928932C42.5384 1.31946 42.5384 1.95262 42.9289 2.34315L48.5858 8L42.9289 13.6569C42.5384 14.0474 42.5384 14.6805 42.9289 15.0711C43.3195 15.4616 43.9526 15.4616 44.3431 15.0711L50.7071 8.70711ZM0 8V9H50V8V7H0V8Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                      <div className="relative text-black flex flex-col gap-0 text-center">
                        <p className="text-xl font-semibold">
                          {t.careerNow.role}
                        </p>
                        <p className="text-sm font-medium">
                          {t.careerNow.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-orange hover:bg-darkOrange text-black w-12 h-12 rounded-full flex items-center justify-center transition duration-300 shadow-lg">
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

          <button className="swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-orange hover:bg-darkOrange text-black w-12 h-12 rounded-full flex items-center justify-center transition duration-300 shadow-lg">
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
        </div>

        <Button
          title="View More"
          icon="mdi:arrow-right"
          className="mx-auto mt-12"
        />
      </div>
    </section>
  );
};

export default Testimonials;
