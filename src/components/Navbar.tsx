"use client";

import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import router from "next/router";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1500px] mx-auto
        flex justify-between items-center
        sm:px-16 px-6 py-4 shadow-xl">
            <Link href="/" className="flex justify-center items-center">
                <Image 
                    src="/logo.png"
                    alt="Fashion shop logo"
                    width={100}
                    height={18}
                    className=" object-contain"
                />
            </Link>

            <div className="flex justify-center items-center">
                <Link href="/" className="flex mr-8 justify-center items-center transition duration-500 ease-in-out border-b-2 border-b-blue-500 min-h-[50px] min-w-[80px] drop-shadow-xl hover:text-blue-500 hover:border-b-4 hover:font-bold">
                    Home
                </Link>

                <Link href="/" className="flex mr-8 justify-center items-center transition duration-500 ease-in-out border-b-2 border-b-blue-500 min-h-[50px] min-w-[80px] drop-shadow-xl hover:text-blue-500 hover:border-b-4 hover:font-bold">
                    Products
                </Link>

                <Link href="/" className="flex mr-8 justify-center items-center transition duration-500 ease-in-out border-b-2 border-b-blue-500 min-h-[50px] min-w-[80px] drop-shadow-xl hover:text-blue-500 hover:border-b-4 hover:font-bold">
                    Blogs
                </Link>

                <Link href="/" className="flex mr-8 justify-center items-center transition duration-500 ease-in-out border-b-2 border-b-blue-500 min-h-[50px] min-w-[80px] drop-shadow-xl hover:text-blue-500 hover:border-b-4 hover:font-bold">
                    About
                </Link>
            </div>
            <div className="flex justify-center items-center space-x-4">
                
                <Link className="text-white py-3 text-center transition duration-500 ease-in-out
                    rounded-full border border-white drop-shadow-xl bg-black min-w-[110px] hover:border-black hover:bg-white hover:text-black" href={"/login"}>Sign in</Link>

                <Link className="text-black py-3 text-center transition duration-500 ease-in-out
                    rounded-full border border-black drop-shadow-xl bg-white min-w-[110px] hover:border-white hover:bg-black hover:text-white" href={"/login"}>Sign up</Link>


                <ModeToggle />
            </div>
        </nav>
    </header>
  )
}

export default Navbar