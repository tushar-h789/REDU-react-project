import React from "react";
import Heading from "./Heading";
import SubHeading from "./SubHeading";

const CreativePeople = () => {
  return (
    <div className="bg-[#1B1C31] pt-[172px]">
      <h1 className="font-pops font-normal text-[53px] w-[817px] flex mx-auto text-center text-white">
        Join millions of creative people with Redu
      </h1>

      <div className="flex justify-center mt-8">
      <a className="bg-[#F9896B] py-4 px-9 rounded-lg border border-solid border-primary text-white font-pops font-normal text-sm hover:bg-[#2C2A4E]   hover:transition  ease-in-out duration-300 cursor-pointer">
      Join The Waitlist
      </a>
      </div>
      <div className="border-b-2 border-[#404444] pb-[90px]"></div>

    <div className="max-w-container mx-auto mt-10">
        <div className="flex">
        <div className="w-[40%]">
            <Heading className="font-pops font-bold text-xl text-white">AR Shakir</Heading>
            <SubHeading className="font-pops font-medium text-[#A8A8A8] text-lg mt-5 mr-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </SubHeading>
        </div>
        <div className="w-[20%]">
            <Heading className="font-pops font-bold text-xl text-white">Company</Heading>
            <ul className="font-pops font-normal text-base text-[#A8A8A8] mt-9">
                <li >About Us</li>
                <li className="my-4">Careers</li>
                <li>Blog</li>
                <li className="my-4">Pricing</li>
            </ul>
        </div>
        
        <div className="w-[20%]">
            <Heading className="font-pops font-bold text-xl text-white">Product</Heading>
            <ul className="font-pops font-normal text-base text-[#A8A8A8] mt-9">
                <li >Facebook Followers</li>
                <li className="my-4">Instagram Followers</li>
                <li>Twitter Followers</li>
                <li className="my-4">TikTok Followers</li>
            </ul>
        </div>
        
        <div className="w-[20%]">
            <Heading className="font-pops font-bold text-xl text-white">Resources</Heading>
            <ul className="font-pops font-normal text-base text-[#A8A8A8] mt-9">
                <li >Proposal Template</li>
                <li className="my-4">Invoices</li>
                <li>Tuturoial</li>
                <li className="my-4">How to increase activity</li>
            </ul>
        </div>
        </div>
        
    </div>
        <div className="border-b-2 border-[#404444] pt-[106px]"></div>


        <div className="max-w-container flex justify-between mx-auto py-10">
            <SubHeading className="font-pops font-reglar text-sm text-white">
            2022 Redu Inc. All rights reserved. -- Privacy Policy - Terms of Services
            </SubHeading>
            <SubHeading className="font-pops font-reglar text-sm text-white">
            Supported by Microsoft Startup
            </SubHeading>
        </div>

    </div>

    
  );
};

export default CreativePeople;
