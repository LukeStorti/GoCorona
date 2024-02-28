import { Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../assets/logo.png";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="border-t w-full flex flex-col justify-between md:flex-row sm:px-16 px-6 mt-16 bg-[#FAFBFD] py-16">
      <div className="flex flex-col gap-2 mt-6">
        <img src={logo} alt="" className="object-fit w-[150px] h-auto" />
        <div className="flex gap-4">
          <Facebook size={40} color="#EC5863" className="cursor-pointer" />
          <Instagram size={40} color="#EC5863" className="cursor-pointer" />
          <Twitter size={40} color="#EC5863" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-end gap-8 flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title} className="flex flex-col my-4 min-w-[150px]">
            <h4 className="font-raleway font-bold text-[18px]">{footerLink.title}</h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`text-gray-500 font-raleway font-normal text-[16px] cursor-pointer ${
                    index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                  } hover:text-black`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
