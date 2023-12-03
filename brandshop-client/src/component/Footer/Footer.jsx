import { LuArrowRightCircle } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { BsYoutube } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-slate-950 text-white">
            {/* 1st part */}
            <div className=" grid grid-cols-4 mx-14 gap-10">
                <div className=" pt-10" >
                    <h3 className="text-lg font-bold">ABOUT US</h3>
                    <img className="w-1/3" src="https://i.ibb.co/2tbH99X/logo.png" />
                    <p className="text-sm text-slate-300">At AEMotors, we are not just about cars; we are about fostering a passion for automotive excellence and providing you with the tools and information to navigate the ever-evolving world of automobiles.</p>
                </div>
                <div className=" py-10">
                    <h3 className="text-lg font-bold mb-4">USEFUL LINKS</h3>
                    <div className=" text-sm text-slate-300">
                        <li>About</li>
                        <li>Features</li>
                        <li>Model</li>
                        <li>Find Dealers</li>
                        <li>Book Now</li>
                        <li>Shopping Cart</li>
                        <li>Accessories</li>
                    </div>
                </div>
                <div className="py-10">
                    <h3 className="text-lg font-bold mb-4">CONTACT INFO</h3>
                    <p className="text-sm text-slate-300 flex items-center gap-4"><IoCallOutline></IoCallOutline> Phone : +093-237348</p>
                    <p className="text-sm text-slate-300 flex items-center gap-4"><HiOutlineMailOpen></HiOutlineMailOpen> Email : aemotors@mail.com</p>
                    <p className="text-sm text-slate-300 flex items-center gap-4"><FaLocationDot></FaLocationDot> Address : Dhaka, Bangladesh</p>


                </div>
                <div className="py-10">
                    <div>
                        <h3 className="text-lg font-bold mb-4">SUBSCRIBE</h3>
                        <div className="flex gap-1">
                            <input className="text-black rounded-lg p-2" type="email" placeholder="Enter Email Address" />
                            <button className="  rounded-full text-4xl text-red-700 "><LuArrowRightCircle></LuArrowRightCircle></button>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold my-4">FOLLOW US</h3>
                        <li className="flex gap-2 text-slate-300">
                            <FaFacebook></FaFacebook>
                            <BsTwitterX></BsTwitterX>
                            <FiInstagram></FiInstagram>
                            <BsYoutube></BsYoutube>
                        </li>
                    </div>
                </div>
            </div>
            <div className="text-center pb-4">
                <h3 className="text-base text-white font-light">@ 2023 AEMotors</h3>
            </div>

        </div>
    );
};

export default Footer;