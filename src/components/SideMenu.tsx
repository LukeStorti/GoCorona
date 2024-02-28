import logo from "../assets/logo.png";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { navLinks } from "@/constants";
export const SideMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu color="black" size={35} />
      </SheetTrigger>
      <SheetContent>
        <img src={logo} alt="logo image" className="object-contain" />
        <div className="w-full py-6">
          <ul className="flex flex-col text-center gap-8 z-50">
            {navLinks.map((link) => (
              <li key={link.title}>
                <a href={`#${link.href}`} className="font-raleway font-medium text-[18px]">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};
