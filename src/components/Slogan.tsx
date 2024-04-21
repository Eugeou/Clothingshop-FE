"use-client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Slogan = () => {

  const handleScroll = () => {

  }

  return (
    <div className="slogan">
      <div className=" flex-1 pt-36 padding-x">
        <h1 className="slogan__title">
          Explore your true style!
        </h1>

        <h2 className="slogan__subtitle">
          Easily and quickly to find and buy fashion clothes you need here!
        </h2>

        <CustomButton 
          title="Start shopping now"
          containerStyles="bg-primary-blue
          text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="slogan__image-container">
        <div className="slogan__image">
          <Image src="/fashion.png" alt="Banner" 
          fill className=" object-contain" />
        </div>

        <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-[url('https://raw.githubusercontent.com/adrianhajdin/project_next13_car_showcase/main/public/hero-bg.png')] bg-repeat-round -z-10 bg-ima w-full xl:h-screen h-[590px] overflow-hidden"
        >
          
        </div>

      </div>
    </div>
  )
}

export default Slogan;