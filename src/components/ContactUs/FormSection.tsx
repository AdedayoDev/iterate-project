"use client";

import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaPaypal, FaGooglePay, FaAddressBook } from "react-icons/fa";
import { Button } from "../ui/button";

const FormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    amount: "",
    firstName: "",
    lastName: "",
    email: "",
    paymentMethod: "",
  });
  const [emailValidationMessage, setEmailValidationMessage] = useState("");

  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        setEmailValidationMessage("");
      } else if (emailPattern.test(value)) {
        setEmailValidationMessage("Valid Email");
      } else {
        setEmailValidationMessage("Invalid Email");
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <section className="w-full h-full md:pt-20 pb-32">
      <div className="w-10/12 mx-auto bg-[#1B5382] rounded-xl py-16 px-8 md:px-12">
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Amount */}
          <div
            data-aos="fade-up"
            className="flex flex-col bg-white py-2 rounded-lg md:w-3/12 p-4"
          >
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              name="amount"
              required
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter Amount"
              className="border border-[#333] rounded pl-2 mb-1"
            />
          </div>

          {/* First and Last Name */}
          <div className="flex md:flex-row flex-col items-center justify-between space-y-10 md:space-y-0">
            <div
              data-aos="fade-right"
              className="flex flex-col bg-white py-2 rounded-lg w-full md:w-3/12 p-4"
            >
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className="border border-[#333] rounded pl-2 mb-1"
              />
            </div>
            <div
              data-aos="fade-left"
              className="flex flex-col bg-white py-2 rounded-lg w-full md:w-3/12 p-4"
            >
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="border border-[#333] rounded pl-2 mb-1"
              />
            </div>
          </div>

          {/* Email */}
          <div
            data-aos="fade-up"
            className="flex flex-col bg-white py-2 rounded-lg w-full p-4"
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="johndoe@gmail.com"
              className="border border-[#333] rounded pl-2 mb-1"
            />
            <p className="text-sm text-white">{emailValidationMessage}</p>
          </div>

          {/* Payment Method */}
          <div className="space-y-4" data-aos="zoom-in">
            <p className="text-white text-lg font-medium">Select Payment Method:</p>
            <div className="flex flex-col md:flex-row md:space-x-4 gap-4">
              {/* PayPal */}
              <label className="flex items-center gap-2 bg-white py-2 px-4 rounded-lg w-full md:w-auto">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  onChange={handleChange}
                  className="w-5 h-5"
                />
                <FaPaypal size={24} className="text-[#0070BA]" />
                <span>PayPal</span>
              </label>

              {/* Google Pay */}
              <label className="flex items-center gap-2 bg-white py-2 px-4 rounded-lg w-full md:w-auto">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="googlepay"
                  onChange={handleChange}
                  className="w-5 h-5"
                />
                <FaGooglePay size={24} className="text-[#5F6368]" />
                <span>Google Pay</span>
              </label>

              {/* ATM Card */}
              <label className="flex items-center gap-2 bg-white py-2 px-4 rounded-lg w-full md:w-auto">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  onChange={handleChange}
                  className="w-5 h-5"
                />
                <FaAddressBook size={24} className="text-[#333]" />
                <span>Card</span>
              </label>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-0.5 bg-white"></div>

          {/* Consent Checkbox */}
          <div
            data-aos="fade-up"
            className="flex flex-col md:flex-row items-start md:items-center gap-4"
          >
            <input type="checkbox" required className="w-6 h-6" />
            <p className="text-white text-sm md:text-base">
              Please tick this box to confirm your consent for us to process your donation and 
              use your contact information to keep you updated on our charitable activities. Your support 
              makes a meaningful difference. Thank you!
            </p>
          </div>

          {/* Submit Button */}
          <div data-aos="fade-up" className="flex items-center justify-center">
            <Button className="bg-[#F79E91] rounded-md w-full md:w-7/12 py-4 hover:bg-[#e68070]">
              Complete Donation!
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
