import { LuArrowRightCircle } from "react-icons/lu";
import { LuArrowLeftCircle } from "react-icons/lu";

const Accessories = () => {
    return (
        <div className="bg-slate-50">
            <img className="rotate-180" src="https://i.ibb.co/CJnCnTQ/accessiories.png" />
            <h3 className="text-red-700 text-center text-3xl">SHOP NOW</h3>
            <div className="">
                <div className="p-10 grid grid-cols-4 gap-10">
                    <div className="border-l-2 border-t-2  rounded-tl-3xl border-black">
                        <img className="pt-4 px-4" src="logo1.png" />
                        <div>
                            <button className="w-full py-4 px-5 rounded-br-full bg-black font-bold text-white text-3xl flex items-center gap-3 hover:text-slate-400">NISSAN<LuArrowRightCircle></LuArrowRightCircle></button>
                        </div>
                    </div>
                    <div className="border-l-2 border-t-2  rounded-tl-3xl border-black">
                        <img className="pt-4 px-4" src="logo1.png" />
                        <div>
                            <button className="w-full py-4 px-5 rounded-br-full bg-black font-bold text-white text-3xl flex items-center gap-3 hover:text-orange-300">NISSAN<LuArrowRightCircle></LuArrowRightCircle></button>
                        </div>
                    </div>
                    <div className="border-l-2 border-t-2  rounded-tl-3xl border-black">
                        <img className="pt-4 px-4" src="logo1.png" />
                        <div>
                            <button className="w-full py-4 px-5 rounded-br-full bg-black font-bold hover:text-blue-300 text-white text-3xl flex items-center gap-3">NISSAN<LuArrowRightCircle></LuArrowRightCircle></button>
                        </div>
                    </div>
                    <div>
                        <h3>Buy Now</h3>
                    </div>
                </div>



                <div className="p-10 grid grid-cols-4 gap-10">
                    <div>
                        <h3>Buy Now</h3>
                    </div>
                    <div className="border-r-2 border-t-2  rounded-tr-3xl border-black">
                        <img className="pt-4 px-4" src="logo1.png" />
                        <div>
                            <button className="w-full py-4 px-5 rounded-bl-full  bg-black font-bold text-white text-3xl flex justify-end items-center gap-3 hover:text-yellow-200"><LuArrowLeftCircle></LuArrowLeftCircle> NISSAN</button>
                        </div>
                    </div>
                    <div className="border-r-2 border-t-2  rounded-tr-3xl border-black">
                        <img className="pt-4 px-4" src="logo1.png" />
                        <div>
                            <button className="w-full py-4 px-5 rounded-bl-full  bg-black font-bold text-white text-3xl flex justify-end items-center gap-3 hover:text-red-400"><LuArrowLeftCircle></LuArrowLeftCircle> NISSAN</button>
                        </div>
                    </div>
                    <div className="border-r-2 border-t-2  rounded-tr-3xl border-black">
                        <img className="pt-4 px-4" src="logo1.png" />
                        <div>
                            <button className="w-full py-4 px-5 rounded-bl-full  bg-black font-bold text-white text-3xl flex justify-end items-center gap-3 hover:text-lime-300"><LuArrowLeftCircle></LuArrowLeftCircle> NISSAN</button>
                        </div>
                    </div>


                </div>
            </div>
            <img src="https://i.ibb.co/CJnCnTQ/accessiories.png" />
        </div>
    );
};

export default Accessories;