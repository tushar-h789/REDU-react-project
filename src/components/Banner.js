import React from 'react'
import Heading from './Heading'
import Flex from './layout/Flex'
import Images from './layout/Images'
import SubHeading from './SubHeading'

const Banner = () => {
  return (
    <>
        <div className='max-w-container mx-auto'>
        <Flex className="flex mt-[52px]">
            <div className='w-3/6 '>
                <Heading className="font-pops font-extrabold text-[60px]">
                Increase your knowledge on favourite Topic
                </Heading>
                <SubHeading className="font-pops text-lg font-medium w-[520px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </SubHeading>
                <div className='mt-5'>
                <a className="bg-primary py-4 px-9 rounded-lg border border-solid border-primary text-white font-pops font-normal text-sm hover:bg-[#2C2A4E]   hover:transition  ease-in-out duration-300 cursor-pointer">Get Started --</a>
                </div>
                <div className='mt-12'>
                <Images imgsrc="assets/social.png"/>
                </div>
            </div>
            <div className='w-3/6 '>
                <Images imgsrc="assets/knowledge.png"/>
            </div>
        </Flex>
    </div>
        <div className='font-pops text-[48px] font-normal flex justify-center mt-[146px] mb-[98px]'>
        Trusted By Over 100+ Publishers
        </div>
    </>
  )
}

export default Banner