import { healthcareData } from "@/constants";
import HealthcareCard from "./HealthcareCard";
import google from "../assets/google.png";
import ios from "../assets/ios.png";

const Healthcare = () => {
  return (
    <section id="contact" className="relative">
      <div className="flex flex-col justify-evenly items-center gap-8 md:gap-40 relative z-10">
        <div className="flex flex-col justify-center items-center relative z-10">
          <h1 className="font-raleway font-bold text-[50px]">
            <span className="text-[#EC5863]">Healthcare </span>at your Fingertips
          </h1>
          <p className="text-center font-raleway font-medium text-[#616161] leading-10 mt-2">
            Bringing premium healthcare features to your fingertips. User-friendly mobile platform
            to bring healthcare to your fingertips.
            <br /> Signup and be a part of the new health culture.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-around items-center w-full mt-6 gap-8 relative z-10">
          {healthcareData.map((item, index) => (
            <HealthcareCard key={index} {...item} />
          ))}
        </div>

        <div className="flex flex-row items-center justify-center space-x-8 relative z-10">
          <img src={google} alt="" className="w-[160px] h-[55px] cursor-pointer" />
          <img src={ios} alt="" className="w-[165px] h-[65px] cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Healthcare;
