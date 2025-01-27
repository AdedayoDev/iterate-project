"use client";

import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";


interface Campaign {
  id: number;
  image: string;
  heading: string;
  paragraph: string;
  amountDonated: string;
  donor: string;
  button: string;
  aosDuration: number;
}

const DonateNow: React.FC = () => {
  const [loading, setLoading] = useState<Record<number, boolean>>({}); 

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const handleButtonClick = (id: number) => {
    setLoading((prevState) => ({ ...prevState, [id]: true }));

   
    setTimeout(() => {
      setLoading((prevState) => ({ ...prevState, [id]: false }));
      alert(`Donation process initiated for campaign ${id}`);
    }, 2000);
  };

  const donate: Campaign[] = [
    {
      id: 1,
      image: "/alexander-grey-tKnqkvFcmyM-unsplash 2.png",
      heading: "Zack Lifesaving surgery",
      paragraph:
        "Zack needs help in the battle for cancer that will soon take his life.",
      amountDonated: "NGN 20,000 raised",
      donor: "170 donors",
      button: "Donate Now",
      aosDuration: 500,
    },
    {
      id: 2,
      image: "/image 32.png",
      heading: "Mary Life saving surgery",
      paragraph:
        "Mary is fighting for her life and needs help urgently to avoid the spread of cancer to other parts of her body",
      amountDonated: "NGN 400,000 raised",
      donor: "70 donors",
      button: "Donate Now",
      aosDuration: 700,
    },
    {
      id: 3,
      image: "/image 43.png",
      heading: "David’s life saving kidney transplant",
      paragraph:
        "Four year old David is facing a race against time to get donations for a life-saving kidney transplant",
      amountDonated: "NGN 1,200,000 raised",
      donor: "100 donors",
      button: "Donate Now",
      aosDuration: 1000,
    },
    {
      id: 4,
      image: "/image 46.png",
      heading: "Chidinma needs a wheelchair",
      paragraph:
        "Chidinma despite being disabled is able to carry out few activities but she needs a wheelchair to be able to move without pain and stress.",
      amountDonated: "NGN 60,000 raised",
      donor: "10 donors",
      button: "Donate Now",
      aosDuration: 1200,
    },
    {
      id: 5,
      image: "/national-cancer-institute-eRExodEMiOE-unsplash 1 (1).png",
      heading: "Saving Lives with rare blood group donation",
      paragraph:
        "Individuals with rare blood group are often faced with challenges in finding compatible blood for transfusions. and financial constraints to buy blood.",
      amountDonated: "NGN 600,000 raised",
      donor: "20 blood donors",
      button: "Donate Now",
      aosDuration: 1400,
    },
    {
      id: 6,
      image: "/image 46.png",
      heading: "Journey to parenthood",
      paragraph:
        "Help financially constrained couples start their families through IVF and make a meaningful impact on their journey to parenthood.",
      amountDonated: "NGN 1,100,000 raised",
      donor: "200 donors",
      button: "Donate Now",
      aosDuration: 1600,
    },
  ];

  return (
    <section className="w-full h-full">
      <div className="w-10/12 mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {donate.map((item) => (
            <Card
              key={item.id}
              data-aos="fade-up"
              data-aos-duration={item.aosDuration}
              className="group relative flex flex-col w-full h-[400px] border border-gray-200 shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
            >
              {/* Image Section */}
              <div className="relative w-full mx-auto lg:w-full h-full">
                <Image
                  src={item.image}
                  alt={item.heading}
                  layout="fill"
                  className="object-cover rounded-t-lg"
                />
              </div>

              {/* Content Section */}
              <CardContent className="flex flex-col justify-between flex-1 p-4">
                <CardHeader className="text-xl font-semibold text-[#024074]">
                  {item.heading}
                </CardHeader>
                <p className="text-sm text-gray-600 mb-4">{item.paragraph}</p>
                <div className="flex items-center justify-between text-sm font-medium text-gray-700">
                  <span className="text-[#024074] font-bold text-base font-inter">
                    {item.amountDonated}
                  </span>
                  <span className="text-[#024074] font-bold text-base font-inter">
                    {item.donor}
                  </span>
                </div>
                <Button
                  onClick={() => handleButtonClick(item.id)}
                  disabled={loading[item.id]}
                  className={`bg-[#024074] hover:bg-[#022f55] my-6 shadow ${
                    loading[item.id] ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading[item.id] ? (
                    <div className="flex items-center justify-center gap-2">
                      <span className="loader w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                      Processing...
                    </div>
                  ) : (
                    item.button
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonateNow;
