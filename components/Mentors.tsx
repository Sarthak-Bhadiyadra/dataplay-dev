import Image from "next/image";
import { Linkedin } from "lucide-react";
import Button from "./widgets/Button";

const Mentors = () => {
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

  return (
    <section className="relative py-20 ">
      <div className="container">
        <div className="relative flex-center flex-col leading-none gap-5 text-center mb-26 ">
          <div className="inline-block bg-purple text-white px-6 py-2 rounded-full text-[22px] uppercase font-semibold">
            Mentors
          </div>
          <h2 className="text-[50px] font-bold text-black">Our Mentors</h2>
          <p className="text-black text-lg">
            Guiding minds towards brilliance and success.
          </p>
        </div>



        {/* Mentors Grid - Added overflow-visible and increased gap */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 ">
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
                    className="object-scale-down object-bottom"
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

                <Button title="View Profile" icon="mdi:linkedin" className="w-fit" variant="lightOrange" />
              </div>
            </div>
          ))}
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

export default Mentors;
