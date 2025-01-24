"use client";

import React, { useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Reviews = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in-out",
    });
  });
  const review = [
    {
      id: 1,
      text: "“A refreshing take on crowdfunding. Transparentuser-freindly and Insightful,CharitEase has truly set  the golden standard.”",
      image: "/Ellipse 34.png",
      name: "Finlay Kirk",
      role: "Donor",
      aosDuration: 1000,
    },
    {
      id: 2,
      text: "“Found meaningful cause that resonateswith me donated with ease.It is morethan just a platform. It is a community. Highly recommend!”",
      image: "/Ellipse 34.png",
      name: "Dannetter P. Cervantes",
      role: "Donor",
      aosDuration: 1500,
    },
    {
      id: 3,
      text: "“Never has giving felt so good and beenso simple. CharitEase bridges the gap between donors and real Impact!”",
      image: "/Ellipse 35.png",
      name: "Clara R. Altman",
      role: "Fundraiser for Ophanages",
      aosDuration: 2000,
    },
  ];
  return (
    <section className="w-10/12 mx-auto space-y-10">
      <h2 className="font-normal text-4xl text-[#024074]">Review</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center  justify-center  space-y-6 space-x-6">
        {review.map((items, id) => (
          <div>
            <Card
              key={id}
              data-aos="fade-right"
              data-aos-duration={items.aosDuration}
              className="group relative flex flex-col  mx-auto md:w-full h-[255px]  md:px-3 pt-8 pb-2 border border-gray-50 shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
            >
              <CardContent className="space-y-8">
                <div>
                  <p className="text-balance">{items.text}</p>
                </div>
                <div className="flex gap-3">
                  <Image
                    src={items.image}
                    alt="review image"
                    width={47}
                    height={47}
                  />
                  <div className="font-inter">
                    <p className="font-bold text-base text-[#ef3e23]">
                      {items.name}
                    </p>
                    <p className="font-medium text-xs text-[#595959] ">
                      {items.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
