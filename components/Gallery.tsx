/* eslint-disable @next/next/no-img-element */
import Button from "@/components/widgets/Button";

const Gallery = () => {
  const galleryData = [
    {
      id: 1,
      title: "Excel Workshop",
      image: "/blog1.png",
      span: "col-span-4", // Takes 2 columns
      rowSpan: "-", // Takes 1 row
    },
    {
      id: 2,
      title: "Art Workshop",
      image: "/blog1.png",
      span: "col-span-4", // Takes 1 column
      rowSpan: "-", // Takes 2 rows
    },
    {
      id: 3,
      title: "Design Workshop",
      image: "/blog1.png",
      span: "col-span-4", // Takes 1 column
      rowSpan: "-", // Takes 1 row
    },

    {
      id: 4,
      title: "Excel Workshop",
      image: "/blog1.png",
      span: "col-span-6", // Takes 2 columns
      rowSpan: "-", // Takes 1 row
    },
    {
      id: 5,
      title: "Art Workshop",
      image: "/blog1.png",
      span: "col-span-3", // Takes 1 column
      rowSpan: "-", // Takes 2 rows
    },
    {
      id: 6,
      title: "Design Workshop",
      image: "/blog1.png",
      span: "col-span-3", // Takes 1 column
      rowSpan: "-", // Takes 1 row
    },
  ];

  return (
    <section className="relative py-20 ">
      <div className="container">
        {/* Section Header */}
        <div className="relative flex-center flex-col leading-none gap-4 text-center mb-16">
          <div className="inline-block bg-purple text-white px-6 py-2 rounded-full text-[22px] font-semibold">
            OUR GALLERY
          </div>
          <h2 className="text-[50px] font-bold text-black">Our Gallery</h2>
          <p className="text-black text-lg">
            Visualizing knowledge through our gallery.
          </p>
        </div>

        {/* Dynamic Gallery Grid */}
        <div className="grid grid-cols-12 auto-rows-[350px] gap-4 mb-12">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className={`relative group overflow-hidden border border-purple rounded-xl p-2.5 ${item.span} ${item.rowSpan}`}
            >
              <div className="relative flex h-full w-full overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-4 -right-2 pr-4 text-lg bg-purple text-white px-3 py-1 -skew-x-12 border-l-8 border-darkPurple">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button title="View More" icon="mdi:arrow-right" className="mx-auto" />
      </div>
    </section>
  );
};

export default Gallery;
