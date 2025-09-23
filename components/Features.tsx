/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

const Features = () => {
  const features = [
    {
      icon: "/lifetime.png",
      title: "Lifetime Access to Live Classes",
    },
    {
      icon: "/bytheindustry.png",
      title: "By the Industry For the  Industry",
    },
    {
      icon: "/resume.png",
      title: "Resume Refactoring & Mock Interviews",
    },
    {
      icon: "/money.png",
      title: "Affordability meets Quality",
    },
  ];

  return (
    <section className="relative pt-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="relative p-8 flex flex-col gap-6 bg-gradient-to-b from-[#FF9393] to-[#8073E5] rounded-3xl text-white transition-all"
              >
                <img
                  src={feature.icon}
                  className="size-[86px] bg-white flex-center rounded-xl shadow-2xl"
                />
                <h3 className="text-[28px] font-bold">{feature.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
