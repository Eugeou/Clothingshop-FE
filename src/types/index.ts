import { MouseEventHandler } from "react";
import { Tracing } from "trace_events";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisable?: boolean;
}

export interface SearchClothesTypeProps {
    clothestype: string;
    setClothesType: (clothestype: string) => void
}

export interface ClothesProps {
    id: number,
    title: string;
    price: number;
    origin: number;
    category: string;
    description: string;
    image: string;
}