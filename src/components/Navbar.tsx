import Link from "next/link"
import Image from "next/image"
import CustomButton from "./CustomButton"

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
                <Link href="/" className="flex mr-8 justify-center items-center border-b-2 border-b-blue-500 min-h-[50px] min-w-[80px] drop-shadow-xl hover:border-b-4">
                    Home
                </Link>

                <Link href="/" className="flex mr-8 justify-center items-center border-b-2 border-b-blue-500 min-h-[50px] min-w-[80px] drop-shadow-xl hover:border-b-4">
                    Products
                </Link>

                <Link href="/" className="flex mr-8 justify-center items-center border-b-2 border-b-blue-500 min-h-[50px] min-w-[80px] drop-shadow-xl hover:border-b-4">
                    Blogs
                </Link>

                <Link href="/" className="flex mr-8 justify-center items-center border-b-2 border-b-blue-500 min-h-[50px] min-w-[80px] drop-shadow-xl hover:border-b-4">
                    About
                </Link>
            </div>
            <div className="flex justify-center items-center space-x-4">
                <CustomButton 
                    title="Sign in"
                    btnType="button"
                    containerStyles="text-white
                    rounded-full border border-white drop-shadow-xl bg-black min-w-[110px]"

                />

                <CustomButton 
                    title="Sign up"
                    btnType="button"
                    containerStyles="text-primary-blue
                    rounded-full border border-black drop-shadow-xl bg-white min-w-[110px]"

                />
            </div>
        </nav>
    </header>
  )
}

export default Navbar