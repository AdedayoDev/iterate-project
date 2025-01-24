"use client"

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css";

const AboutUs = () => {
 useEffect(() => {
     AOS.init({
       duration: 500, 
       easing: "ease-in-out", 
       once: false,
     });
   }, []); 

  return (
    <section className="w-full h-full py-20">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row items-start justify-between">
        {/* The Left side */}
        <div
          className="w-full md:w-1/2 space-y-6"
          data-aos="fade-rig" 
        >
          <h2 className="font-normal text-center md:text-start text-[#024074] text-4xl">
            About Us
          </h2>
          <p className="font-normal text-base text-[#2f2f2f] text-justify md:text-balance">
            At CharitEase, we believe in the power of empathy and the potential
            for positive change when people come together to support one
            another. Our platform was born from a simple yet profound idea: to
            create a space where those who have the means can make a meaningful
            difference in the lives of those in genuine need. We are driven by
            the desire to channel generosity, transparency, and innovation into
            a new era of giving.{" "}
          </p>
        </div>
        {/* The Right Side */}
        <div
          className="w-full md:w-1/2"
          data-aos="fade-left"
        >
          <Image src="/rafiki.png" alt="Logo" width={700} height={700} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
