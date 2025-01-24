import Image from "next/image";
import Link from "next/link";
import React from "react";
import DesktopNav from "./DesktopNav";
import { ModeToggle } from "../ui/theme/theme-toggle";
import MobileNav from "./MobileNav";


const Header = () => {
  return (
    <header className="w-fulll py-4 xl:py-5 bg-white dark:bg-black dark:text-white shadow sticky">
      <div className="w-10/12 mx-auto flex items-center justify-between">
        {/* Logo */}
      
        <Link href="/" className="flex flex-col items-center justify-center">
          <Image
            src="/CharitEase Logo 1.png"
            alt="Logo"
            width={30}
            height={36}
          />
          <p className="text-[#024074] dark:text-white font-bold text-xs ">CharitEase</p>
        </Link>
       

        {/* Desktop View */}
        <div className="hidden xl:flex items-center gap-8">
          <ModeToggle/>
          <DesktopNav/>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden flex items-center gap-3 ">
          <ModeToggle/>
          <MobileNav/>
        </div>
      </div>
    </header>
  );
};

export default Header;
