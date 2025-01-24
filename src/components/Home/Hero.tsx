"use client"

import React, {useEffect} from 'react';
import { Button } from '../ui/button';
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {

  useEffect(() => {
      Aos.init({
        duration: 600,
        easing: "ease-in-out",
        once: false,
      });
    }, []);
  return (
    <section
      className="relative w-full h-[542px]"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dpmy3egg2/image/upload/v1737653932/close-up-volunteer-teamwork-join-hands-environment-conservation-volunteering-world-environment-day_4_sybrww.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      {/* Black Transparent Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content */}
      <div data-aos="zoom-in" className="relative z-10 w-10/12 mx-auto space-y-4 py-24">
        <h2 className="font-normal text-5xl text-red-600">CharitEase</h2>
        <p className="font-normal text-4xl text-white w-[372px]">
          Raising Funds from Lovable People.
        </p>
        <div className="flex gap-2">
          <Button className="bg-transparent border rounded-2xl border-white">
            Start a Fundraising Campaign
          </Button>
          <Button className="bg-[#024074] rounded-2xl border-white">
            Donate Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
