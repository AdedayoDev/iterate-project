"use client"
import React, {useEffect} from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Aos from "aos";
import "aos/dist/aos.css"
import Image from "next/image";

const campaigns = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dpmy3egg2/image/upload/v1737653958/alexander-grey-tKnqkvFcmyM-unsplash_2_b8idea.png",
    heading: "Zack Lifesaving surgery",
    paragraph:
      "Zack needs help in the battle for cancer that will soon take his life.",
    amountRaised: "NGN 20,000 raised",
    donors: "170 donors",
    aosDuration: 500,
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dpmy3egg2/image/upload/v1737653977/G-7ktkpTURBXy8yOWVjNGFlY2EzNzc0NGQzMDUwN2RhMzk5MjNmMTdiMy5wbmeSlQMAzOHND6DNCMqTBc0DFs0Brg_2_zdzokl.png",
    heading: "Relief Aid for EndSars VIctims",
    paragraph:
      "Help us raise funds as relief aids for victims of the End-Sars Protests across the country.",
    amountRaised: "NGN 25,235 raised",
    donors: "1700 donors",
    aosDuration: 700,
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dpmy3egg2/image/upload/v1737653965/chris-karidis-3GWLv30smng-unsplash_2_toks64.png",
    heading: "Wildfire affects the Brown’s Mansion",
    paragraph:
      "As a friend to the Brown’s family, I and some other member of an NGO is hoping to raise funds for.........",
    amountRaised: "NGN 10,785 raised",
    donors: "100 donors",
    aosDuration: 1000,
  },
];

const FeaturedCampaign = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out"
    })
  })
  return (
    <section className="w-full h-full py-12">
      <div className="w-10/12 mx-auto">
        <h2 className="font-normal font-inter text-4xl text-[#024074] mb-8">
          Featured Campaigns
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((item) => (
            <Card
              key={item.id}
              data-aos = "fade-right"
              data-aos-duration = {item.aosDuration}
              className="group relative flex flex-col w-full h-[400px] border border-gray-200 shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
            >

              {/* Image Section */}
              <div className="relative w-full mx-auto aspect-w-16 aspect-h-9 lg:w-full h-[50%]">
                <Image
                  src={item.image}
                  alt="campaign image"
                  fill
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
                  <span>{item.amountRaised}</span>
                  <span>{item.donors}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaign;
