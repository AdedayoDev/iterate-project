"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

type LinkType = {
  name: string;
  path: string;
};

const links: LinkType[] = [
  { name: "home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "contact Us", path: "/contact-us" },
];

const MobileNav: React.FC = () => {
  const pathname = usePathname(); // Get the current route path
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative">
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="flex justify-center items-center text-2xl z-[10]"
        aria-label="Toggle menu"
      >
        {menuOpen ? <AiOutlineClose /> : <CiMenuFries />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 left-0 h-screen w-[80%] bg-white z-50 p-4 flex flex-col items-center gap-12 shadow-lg transform transition-transform duration-300 translate-x-0"
        >
          <nav className="flex flex-col justify-center items-center mt-28 gap-8">
            {links.map((link) => (
              <Link
                href={link.path}
                key={link.path}
                className={`${
                  link.path === pathname
                    ? "dark:text-white text-red-700"
                    : "text-blue-700"
                } capitalize font-bold text-base transition-all`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
