import React from "react";
import Flex from "./layout/Flex";
import Images from "./layout/Images";
import List from "./layout/List";
import ListItem from "./layout/ListItem";
import {FaAngleDown} from "react-icons/fa"


const Navbar = () => {
  return (
    <div className="max-w-container mx-auto p-2.5">
      <div className="flex items-center">
        <div className="w-[10%]">
          <Images imgsrc="assets/logo.png" />
        </div>
        <div className="w-[60%]">
          <Flex>
            <List className="flex mx-6 justify-center gap-x-7">
              <div className="flex items-center gap-2 font-pops font-normal text-sm"><ListItem  itemname="Products" className=""/>
              <FaAngleDown/>
              </div>

              <div className="flex items-center gap-2 font-pops font-normal text-sm">
              <ListItem itemname="Packages" />
              <FaAngleDown/>
              </div>
              <ListItem itemname="Blog" className="font-pops font-normal text-sm"/>
              <ListItem itemname="Tesinimonials" className="font-pops font-normal text-sm"/>
            </List>
          </Flex>
        </div>
        <div className="w-[30%] flex justify-end">
            <a className="bg-white text-primary py-4 px-9 rounded-lg border border-solid border-primary text-white font-pops font-normal text-sm hover:bg-primary hover:text-white   hover:transition  ease-in-out duration-300 mx-2">Sign In</a>

            <a className="bg-primary py-4 px-9 rounded-lg border border-solid border-primary text-white font-pops font-normal text-sm hover:bg-transparent hover:text-primary   hover:transition  ease-in-out duration-300">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
