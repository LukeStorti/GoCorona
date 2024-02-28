import experts1 from "../assets/experts1.png";
import expertsData from "../assets/expertsData.png";
import expertsImg from "../assets/expertsImg.png";
const Experts = () => {
  return (
    <section id="support" className="flex flex-col justify-center items-center py-16 w-full">
      <div className="relative my-4">
        <img src={experts1} alt="" className="z-10" />
        <img src={expertsData} alt="" className="absolute top-4" />
      </div>
      <div className="flex md:flex-row flex-col justify-evenly items-center gap-8 w-full ">
        <div className="flex flex-col gap-6 w-full sm:w-1/2 my-4">
          <h1 className="font-raleway font-bold text-[50px] ">
            Talk to <span className="text-[#587EEC]">Experts</span>
          </h1>
          <p className="font-raleway font-medium text-[#616161] leading-10 w-3/4">
            Book appointments or submit queries into thousands of forums concerning health issues
            and prevention against noval Corona Virus..
          </p>
          <button className="font-raleway font-medium text-white bg-[#EC5863] px-3 py-3 rounded w-[150px]">
            FEATURES
          </button>
        </div>
        <div className="my-8">
          <img src={expertsImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Experts;
