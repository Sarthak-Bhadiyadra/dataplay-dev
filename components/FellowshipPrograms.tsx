const FellowshipPrograms = () => {
  return (
    <section className="relative py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative h-[500px]">
            <iframe
              className="w-full h-full rounded-3xl border border-black drop-shadow-[8px_8px_0_#1C1A4A] "
              src="https://www.youtube.com/embed/3JZ_D3ELwOQ"
              title="WELCOME TO DATAPLAY"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="relative flex flex-col items-start leading-none gap-6">
            <div className="inline-block bg-purple text-white px-6 py-2 rounded-full text-[22px] font-semibold">
              COURSES
            </div>
            <h2 className="text-[50px] font-bold text-black pr-20">
              Your Compass On The
              <span className="relative inline-flex items-center justify-center">
                <svg
                  className="absolute h-full w-full scale-[115%]"
                  viewBox="0 0 349 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M348.864 11.1296C350.314 4.71659 339.805 3.82585 334.369 3.64771C239.428 -3.62041 78.5954 1.51004 10.9527 5.7854C-2.0927 5.7854 -0.522414 10.9515 0.987481 13.2673L8.23491 44.7981C8.23491 50.7836 16.3883 52.1019 19.1061 52.28C138.689 58.2655 274.88 52.9926 328.028 49.6079C337.993 49.6079 342.825 46.7577 342.523 44.7981C342.523 33.5753 345.24 20.3929 348.864 11.1296Z"
                    fill="#FF4C3D"
                  />
                </svg>

                <span className="relative z-[1] font-black text-white">Data Science</span>
              </span>{" "}
              Journey. 
            </h2>
            <div className="text-black text-lg font-light space-y-5">
              <p>
                At DataPlay, we believe that success in data science isn’t
                one-size-fits-all—it’s personal. Like Arjuna guided on his path,
                we aim to help you find yours, combining academic wisdom with
                real-world insight.{" "}
              </p>

              <p>
                Whether you&apos;re just starting or deepening your journey, our
                supportive ecosystem—built on individuality, passion, and
                purpose—guides you toward becoming not just job-ready, but truly
                fulfilled.
              </p>

              <p>
                Through tools like DPPs and a vibrant community, we help you
                learn, grow, and thrive in your own unique way. Welcome to a
                space where your brilliance can truly flourish. ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FellowshipPrograms;
