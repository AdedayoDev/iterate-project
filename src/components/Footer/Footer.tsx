import React from "react";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full h-full">
      <div className="w-10/12 mx-auto grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-5 items-start justify-between mb-4">
        <div>
          {/* Logo */}

          <Link href="/" className="flex flex-col items-center justify-center">
            <Image
              src="/CharitEase Logo 1.png"
              alt="Logo"
              width={30}
              height={36}
            />
            <p className="text-[#024074] dark:text-white font-bold text-xs ">
              CharitEase
            </p>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h2 className="uppercase text-[#024074] font-normal text-base ">
            quick links
          </h2>
          <ul className="space-y-4 capitalize text-[#5680A2] font-bold text-base">
            <li>Campaign Categories</li>
            <li>Donations</li>
            <li>Fundraisers</li>
            <li>Charity Organisations</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="space-y-6">
          <h2 className="uppercase text-[#024074] font-normal text-base ">
            resources
          </h2>
          <ul className="space-y-4 capitalize text-[#5680A2] font-bold text-base">
            <li>Blog updates</li>
            <li>pricing</li>
            <li>transparency</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h2 className="uppercase text-[#024074] font-normal text-base ">
            help
          </h2>
          <ul className="space-y-4 capitalize text-[#5680A2] font-bold text-base">
            <li>payment queries</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="space-y-6">
          <h2 className="uppercase text-[#024074] font-normal text-base ">
            contact us
          </h2>
          <div className=" flex items-center  gap-6 justify-center capitalize text-[#5680A2] font-bold text-base">
            {/* Twitter */}
            <div>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaTwitter size={24} />
              </a>
            </div>
            {/* FaceBook */}
            <div>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaFacebook size={24} />
              </a>
            </div>
            {/* Instagram */}
            <div>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
