import features from "../assets/features.png";

const Features = () => {
  return (
    <section id="features" className="flex md:flex-row flex-col py-16 w-full">
      <div className="flex md:flex-row flex-col-reverse justify-evenly items-center gap-8 md:gap-40 w-full">
        <div className="my-8">
          <img src={features} alt="" />
        </div>
        <div className="flex flex-col gap-6 w-full sm:w-1/2">
          <h1 className="font-raleway font-bold text-[50px] ">
            Stay safe with <br />
            Go
            <span className="text-[#EC5863]">Corona.</span>
          </h1>
          <p className="font-raleway font-medium text-[#616161] leading-10">
            24 x 7 Support and user friendly mobile platform to bring healthcare to your fingertips.
            Signup and be a part of the new health culture.
          </p>
          <button className="font-raleway font-medium text-white bg-[#EC5863] px-3 py-3 rounded w-[150px]">
            FEATURES
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
