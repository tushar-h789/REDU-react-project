import React from "react";
import Flex from "./layout/Flex";
import Images from "./layout/Images";
import Heading from "./Heading";
import SubHeading from "./SubHeading";

const ActiveUsers = () => {
  return (
    <div className="max-w-container mx-auto">
      <Flex className="flex">
        <div className="w-3/6">
          <Images imgsrc="assets/library.png" />
        </div>

        <div className="w-3/6 mt-[100px]">
          <Heading className="font-pops font-extrabold text-[54px]">
            Daily active users on Our Library
          </Heading>
          <SubHeading className="font-pops text-lg font-medium w-[520px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </SubHeading>
          <div className="mt-10">
            <a className="bg-primary py-4 px-9 rounded-lg border border-solid border-primary text-white font-pops font-normal text-sm hover:bg-[#2C2A4E]   hover:transition  ease-in-out duration-300 cursor-pointer">
              Get Started
            </a>
          </div>
        </div>
      </Flex>
    </div>
  );
};

export default ActiveUsers;
