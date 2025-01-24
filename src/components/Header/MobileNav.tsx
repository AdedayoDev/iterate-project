"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const links = [
  { name: "home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "contact Us", path: "/contact-us" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Close the menu if the click is outside the menu
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      // Close the menu if the Escape key is pressed
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listeners on unmount
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
            {links.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className={`${link.path === pathname ? "dark:text-white text-red-700" : "text-blue-700 capitalize font-bold text-base"} transition-all`}
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
