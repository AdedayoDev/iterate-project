"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in-out",
    });
  });
  const list = [
    {
      id: 1,
      circle: "1",
      paragraph: "Share and Grow",
      aosDuration: 1000,
    },
    {
      id: 2,
      circle: "2",
      paragraph: "Contribute and Communicate",
      aosDuration: 1500,
    },
    {
      id: 3,
      circle: "3",
      paragraph: "Discover and Connect",
      aosDuration: 2000,
    },
  ];

  return (
    <section className="w-full h-full py-12">
      {/* Background Container */}
      <div className="w-10/12 h-auto space-y-12 mx-auto">
        <h2 className="capitalize text-3xl text-center md:text-start font-bold py-4 md:py-8 text-[#024074]">
          How It Works
        </h2>
        {/* Steps Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-center min-h-32 w-10/12 mx-auto "
          style={{
            background: "url('/Vector 1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {list.map((item) => (
            <div
              key={item.id}
              data-aos="fade-left"
              data-aos-duration={item.aosDuration}
              className="flex items-center justify-center space-y-4 gap-6"
            >
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold  ${
                  item.circle === "2" ? "bg-[#024074]" : "bg-[#EF3E23]"
                }`}
              >
                {item.circle}
              </div>
              <span className="text-lg font-medium w-[175px] ">
                {item.paragraph}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
