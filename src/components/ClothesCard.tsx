"use client";

import { ClothesProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import CustomButton from "./CustomButton";

interface ClothesCardProps {
    clothes: ClothesProps;
}

const ClothesCard = ( { clothes }: ClothesCardProps ) => {

    const {id, title, price, origin, category, description } = clothes;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="clothes-card group">
            <div className="clothes-card__content">
                <h2 className="text-[22px] leading-[26px] font-bold capitalize">
                    {title} 
                </h2>
            </div>

            <div className=" relative w-full h-40 my-3 object-contain">
                <Image src="/hoodie-1.png" alt="Clothes img" fill priority
                className=" object-contain"
                />
            </div>

            <p className="flex mt-6 text-[25px] font-extrabold gap-1">
                <span className=" self-start text-[14px] font-semibold">
                    ₫
                </span>
                {price}
                <span className=" self-end text-[14px] font-medium">
                    VNĐ
                </span>
            </p>

    

            <div className=" relative flex w-full mt-2">
                <div className="flex group-hover:invisible w-full justify-between text-grey">
                    <div className=" flex justify-center items-center gap-2">
                        <Image src="/origin.png" width={20} height={20} alt="Xuất xứ"/>
                        <p className=" text-[14px]"> {origin} </p>
                    </div>

                    <div className=" flex justify-center items-center gap-2">
                        <Image src="/category.png" width={20} height={20} alt="Xuất xứ"/>
                        <p className=" text-[14px]"> {category} </p>
                    </div>

                </div>

                <div className="clothes-card__btn-container">
                    <CustomButton 
                    title="View details"
                    containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                    textStyles="text-white text-[14px] leading-[17px] font-bold"
                    rightIcon="/right-arrow.svg"
                    handleClick={() => setIsOpen(true)}
                    />
                </div>

            </div>

            

        </div>
    )
}

export default ClothesCard