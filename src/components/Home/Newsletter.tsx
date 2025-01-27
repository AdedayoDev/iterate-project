"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Aos from "aos"
import "aos/dist/aos.css"
import { FaPaperPlane } from "react-icons/fa"; 

const Newsletter = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  
 useEffect(() => {
     Aos.init({
       duration: 1500,
       easing: "ease-in-out",
     });
   });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("this is the form Data", formData);
  };

  return (
    <section data-aos= "zoom-in" className="w-full h-full py-12 ">
      <div
        className="w-10/12 mx-auto h-[278px] flex items-center justify-center "
        style={{
          backgroundImage: "url('/Group 355.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
         
        }}
      >
        <form action="" onSubmit={handleSubmit} className="flex items-center justify-center">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="bg-transparent border rounded-xl md:w-96 h-12 px-4 text-white "
          />
          <Button
            className="bg-[#CCD9E3] flex items-center justify-center gap-2 px-4 py-2 rounded-xl ml-2 hover:bg-slate-400"
            type="submit"
          >
            <FaPaperPlane className="text-black h-12" /> 
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
