import React from "react";
import Heading from "./Heading";
import Flex from "./layout/Flex";
import Images from "./layout/Images";

const HappyUsers = () => {
  return (
    <div className="max-w-container mx-auto">
      <Flex>
        <div className="flex justify-center text-primary font-pops font-semibold text-lg">
          Testimonial
        </div>
        <Heading className="font-pops font-extrabold text-[54px] flex justify-center text-center mx-auto w-[533px]">
          What Our Happy User Says
        </Heading>
        <div className="flex mb-[170px]">
          <Images imgsrc="assets/card1.png" />
          <Images imgsrc="assets/card2.png" />
          <Images imgsrc="assets/card3.png" />
        </div>
      </Flex>
    </div>
  );
};

export default HappyUsers;
