import { navLinks } from "@/constants";
import logo from "../assets/logo.png";
import rectangle from "../assets/rectangle.png";
import { SideMenu } from "./SideMenu";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-4 relative z-20">
      <img src={logo} alt="logo image" className="object-contain" />
      <ul className="hidden md:flex gap-8 z-50">
        {navLinks.map((link) => (
          <li key={link.title}>
            <a href={`#${link.href}`} className="font-raleway font-bold text-[18px]">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <button className="bg-[#4285F4] text-white font-raleway font-bold text-[18px] rounded py-4 px-6 z-30 hidden lg:block">
        Download
      </button>
      <div className="md:hidden block z-50">
        <SideMenu />
      </div>
      <img src={rectangle} alt="" className="absolute top-0 -right-20 z-10 hidden md:block" />
    </nav>
  );
};

export default Navbar;
