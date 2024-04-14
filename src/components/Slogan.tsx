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

        <p className="slogan__subtitle">
          Easily and quickly to find and buy fashion clothes you need here!
        </p>

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

        <div className="slogan__image-overlay"/>

      </div>
    </div>
  )
}

export default Slogan;