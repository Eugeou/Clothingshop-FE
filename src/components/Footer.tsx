import Image from "next/image"
import Link from "next/link"


const Footer = () => {
  return (
    <footer className="flex flex-col bg-black
    text-black-100 mt-5 border-t border-gray-300">
        <div className="flex max-md:flex-col
        flex-wrap justify-between gap-5 sm:px-16 px-6 py-10 ">
            <div className="flex flex-col justify-start items-start gap-6">
                <Image src="/logo.png" alt="Fashion shop logo" width={110} height={18}
                className=" object-contain"/>
                <p className=" text-base text-white">
                    Online fashion shop <br/>
                    All rights reserved &copy;
                </p>
            </div>

            <div className="footer__links">
                
                <div className="footer__link">
                    <h3 className="font-bold text-gray-300">Contact us</h3>

                    <div className="flex space-x-2 items-center">
                        <Image src="/facebook.png" alt="Facebook" width={20} height={20} />
                        <h3 className=" text-gray-200">You & me store </h3>
                    </div>
                    
                    <div className="flex space-x-2 items-center">
                        <Image src="/gmail.png" alt="Email" width={20} height={25} />
                        <h3 className=" text-gray-200">You&Meshop@gmail.com </h3>
                    </div>

                    <div className="flex space-x-1 items-center">
                        <Image src="/tik-tok.png" alt="Tiktok" width={25} height={25} />
                        <h3 className=" text-gray-200">@You&Me </h3>
                    </div>

                    <div className="flex space-x-2 items-center">
                        <Image src="/whatsapp.png" alt="Phone" width={25} height={25} />
                        <h3 className=" text-gray-200">0123456789 </h3>
                    </div>
                        
                </div>
                
            </div>

            <div className="footer__links">
                
                <div className="footer__link">
                    <h3 className="font-bold text-gray-300">Contact us</h3>

                    <div className="flex space-x-2 items-center">
                        <Image src="/facebook.png" alt="Facebook" width={20} height={20} />
                        <h3 className=" text-gray-200">You & me store </h3>
                    </div>
                    
                    <div className="flex space-x-2 items-center">
                        <Image src="/gmail.png" alt="Email" width={20} height={20} />
                        <h3 className=" text-gray-200">You&Meshop@gmail.com </h3>
                    </div>

                    <div className="flex space-x-1 items-center">
                        <Image src="/tik-tok.png" alt="Tiktok" width={25} height={25} />
                        <h3 className=" text-gray-200">@You&Me </h3>
                    </div>

                    <div className="flex space-x-2 items-center">
                        <Image src="/whatsapp.png" alt="Phone" width={25} height={25} />
                        <h3 className=" text-gray-200">0123456789 </h3>
                    </div>
                        
                </div>
                
            </div>

            <div className="footer__links">
                
                <div className="footer__link">
                    <h3 className="font-bold text-gray-300">Contact us</h3>

                    <div className="flex space-x-2 items-center">
                        <Image src="/facebook.png" alt="Facebook" width={20} height={20} />
                        <h3 className=" text-gray-200">You & me store </h3>
                    </div>
                    
                    <div className="flex space-x-2 items-center">
                        <Image src="/gmail.png" alt="Email" width={20} height={20} />
                        <h3 className=" text-gray-200">You&Meshop@gmail.com </h3>
                    </div>

                    <div className="flex space-x-1 items-center">
                        <Image src="/tik-tok.png" alt="Tiktok" width={25} height={25} />
                        <h3 className=" text-gray-200">@You&Me </h3>
                    </div>

                    <div className="flex space-x-2 items-center">
                        <Image src="/whatsapp.png" alt="Phone" width={25} height={25} />
                        <h3 className=" text-gray-200">0123456789 </h3>
                    </div>
                        
                </div>
                
            </div>

        </div>
    </footer>
  )
}

export default Footer