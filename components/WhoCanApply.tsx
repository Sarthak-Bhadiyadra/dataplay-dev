import Button from "./widgets/Button";

/* eslint-disable @next/next/no-img-element */
const WhoCanApply = () => {
  return (
    <section className="relative bg-purple overflow-hidden">
      <img
        src="/moon.png"
        alt="background Icon"
        className="absolute top-[10%] left-[5%]"
      />
      <img
        src="/star.png"
        alt="background Icon"
        className="absolute top-[5%] right-[15%]"
      />
      <img
        src="/book.png"
        alt="background Icon"
        className="absolute bottom-[5%] right-[10%]"
      />
      <img
        src="/paperplan.png"
        alt="background Icon"
        className="absolute top-[40%] right-[2%]"
      />
      <div className="container flex gap-20 items-center">
        <div className="relative flex-center h-full">
          <img src="/whocanapplysideImg.png" alt="Who Can Apply" />
        </div>

        <div className="text-white ">
          <h2 className="text-[70px] font-bold ">Who Can Apply?</h2>

          <p className="text-4xl font-semibold">
            Absolutely{" "}
            <span className="relative inline-flex items-center justify-center">
              <svg
                className="absolute h-full w-full scale-125"
                viewBox="0 0 201 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M200.922 10.9273C201.757 4.63083 195.704 3.75629 192.574 3.58139C137.894 -3.55458 45.2655 1.48258 6.308 5.68021C-1.20525 5.68021 -0.300874 10.7524 0.568721 13.0261L4.74274 43.9836C4.74274 49.8603 9.43852 51.1546 11.0038 51.3295C79.8751 57.2061 158.312 52.0291 188.921 48.7059C194.661 48.7059 197.443 45.9075 197.27 43.9836C197.27 32.9648 198.835 20.0221 200.922 10.9273Z"
                  fill="#FF4C3D"
                />
              </svg>
              <span className="relative z-[1]">Everyone!</span>
            </span>{" "}
            All Backgrounds, All Levels,
          </p>

          <p className="text-lg max-w-xl my-4">
            Whether you&apos;re a high school grad, college graduate, or
            industry expert. Diversity is your learning playground!
          </p>

          <Button title="Contact Us" />
        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;
