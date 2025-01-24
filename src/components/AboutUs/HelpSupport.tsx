"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "../ui/button";

const HelpSupport = () => {
  useEffect(() => {
    Aos.init({
      duration: 500, 
      easing: "ease-in-out", 
      once: false, 
    });
  }, []);

  const buttons = [
    { id: 1, text: "Lymphoma" },
    { id: 2, text: "Leukemia" },
    { id: 3, text: "Health Insurance" },
    { id: 4, text: "Surgery" },
    { id: 5, text: "IVF" },
    { id: 6, text: "Cancer" },
  ];

  return (
    <section className="w-full h-full bg-slate-300 py-6">
      <div className="flex flex-col items-center justify-center gap-7">
        <h2 className="font-medium text-2xl text-center md:text-3xl text-black">
          Whatever your need, you can get Help/Support on CharitEase
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 items-center justify-center">
          {buttons.map((item, index) => (
            <Button
              className="border border-[#EF3E23] bg-transparent hover:bg-slate-400 rounded-xl font-medium px-6 py-2 text-[#EF3E23]"
              key={item.id}
              data-aos="fade-up" 
              data-aos-delay={index * 200} 
            >
              {item.text}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSupport;
