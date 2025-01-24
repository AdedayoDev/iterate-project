"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "../ui/button";

const UsHero: React.FC = () => {
  useEffect(() => {
    Aos.init({
      duration: 500, 
      easing: "ease-in-out", 
      once: false, 
    });
  }, []);

  return (
    <section className="w-full h-full py-4 bg-slate-100">
      <div
        data-aos="fade-right"
        className="w-10/12 mx-auto flex md:flex-row flex-col items-center justify-between"
      >
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-10 md:p-20 space-y-4">
          <h2 className="text-inter text-center md:text-start font-normal text-3xl md:text-4xl text-[#01203a]">
            Get help with medical fundraising
          </h2>
          <p className="font-medium font-inter text-center md:text-start text-lg text-[#555]">
            With CharitEase you can get immediate help with medical bills
          </p>
          <div className="flex items-center justify-center md:items-start md:justify-start">
            <Button className="border border-[#EF3E23] bg-transparent hover:bg-slate-50 rounded-xl font-medium px-6 py-2 text-[#EF3E23]">
              Start a Fundraising Campaign
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div data-aos="fade-left" className="w-full md:w-1/2">
          <Image
            src="/image 37.png"
            alt="Medical Fundraising"
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default UsHero;
