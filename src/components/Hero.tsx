import hero from "../assets/hero.png";
import watch from "../assets/watch.png";
const Hero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col  py-6 md:py-16  w-full">
      <div className="flex md:flex-row flex-col justify-center gap-16 md:gap-[250px] w-full ">
        <div className="flex flex-col gap-6 z-50 ">
          <h1 className="font-raleway font-bold text-[50px] ">
            Take care of your <br />
            family’s
            <span className="text-[#4285F4]"> health.</span>
          </h1>
          <p className="font-raleway font-medium text-[#616161] leading-10">
            All in one destination for COVID-19 health queries.
            <br /> Consult 10,000+ health workers about your concerns.
          </p>
          <button className="font-raleway font-medium text-white bg-[#EC5863] px-3 py-3 rounded w-[150px]">
            GET STARTED
          </button>
          <img src={watch} alt="" className="w-[228px] h-[44px] mt-[20px] md:mt-[80px]" />
        </div>
        <div className="z-50">
          <img src={hero} alt="hero image" className="object-fill" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
