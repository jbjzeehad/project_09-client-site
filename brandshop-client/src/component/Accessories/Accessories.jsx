import { LuArrowRightCircle } from "react-icons/lu";
import { LuArrowLeftCircle } from "react-icons/lu";
import { Link } from "react-router-dom";

const Accessories = () => {
    return (
        <div className="bg-slate-50">
            <img className="rotate-180" src="https://i.ibb.co/CJnCnTQ/accessiories.png" />
            <h3 className="text-red-700 text-center text-3xl">SHOP NOW</h3>
            <div className="">
                <div className="p-10 grid grid-cols-4 gap-10">
                    <div >
                        <img className="border-l-2 border-t-2  rounded-tl-3xl border-black pt-4 px-4" src="https://i.ibb.co/GpbPF4S/logo1.png" />
                        <div>
                            <Link to='/nissan'><button className="w-full py-4 px-5 rounded-br-full bg-black font-bold text-white text-3xl flex items-center gap-3 hover:text-slate-400">NISSAN<LuArrowRightCircle></LuArrowRightCircle></button></Link>
                        </div>
                    </div>
                    <div>
                        <img className="border-l-2 border-t-2  rounded-tl-3xl border-black pt-4 px-4" src="https://i.ibb.co/3yjSMNs/logo2.png" />
                        <div>
                            <Link to='/toyota'><button className="w-full py-4 px-5 rounded-br-full bg-black font-bold text-white text-3xl flex items-center gap-3 hover:text-orange-300">TOYOTA<LuArrowRightCircle></LuArrowRightCircle></button></Link>
                        </div>
                    </div>
                    <div>
                        <img className="border-l-2 border-t-2  rounded-tl-3xl border-black pt-4 px-4" src="https://i.ibb.co/HHppHLm/logo4.png" />
                        <div>
                            <Link to="/bmw"><button className="w-full py-4 px-5 rounded-br-full bg-black font-bold hover:text-blue-300 text-white text-3xl flex items-center gap-3">BMW<LuArrowRightCircle></LuArrowRightCircle></button></Link>
                        </div>
                    </div>
                    <div className=" text-center py-10">
                        <h3 className="text-5xl font-bold">Buy with confidence and <span className="text-red-700">zero</span> pressure.</h3>
                    </div>
                </div>



                <div className="p-10 grid grid-cols-4 gap-10">
                    <div className=" text-center grid justify-items-center py-10">
                        <h3 className="text-5xl font-bold">Yep. We buy cars, <span className="text-red-700">too</span>.</h3>
                        <p className="py-3 text-2xl font-semibold">No haggle, no hassle</p>
                        <Link to='/addproduct'><button className=" bg-red-600 text-white text-xl font-bold rounded-full py-2 px-4 flex items-center gap-2 hover:text-black">TRADE/SELL<LuArrowRightCircle></LuArrowRightCircle></button></Link>
                    </div>
                    <div>
                        <img className="border-t-2 border-r-2 rounded-tr-3xl border-black pt-4 px-4" src="https://i.ibb.co/4WssRb8/logo5.png" />
                        <div>
                            <Link to='/chevrolet'><button className="w-full py-4 px-5 rounded-bl-full  bg-black font-bold text-white text-3xl flex justify-end items-center gap-3 hover:text-yellow-200"><LuArrowLeftCircle></LuArrowLeftCircle>CHEVROLET</button></Link>
                        </div>
                    </div>
                    <div>
                        <img className="border-r-2 border-t-2  rounded-tr-3xl border-black pt-4 px-4" src="https://i.ibb.co/Z1wTtR3/logo3.png" />
                        <div>
                            <Link to="/ford"><button className="w-full py-4 px-5 rounded-bl-full  bg-black font-bold text-white text-3xl flex justify-end items-center gap-3 hover:text-red-400"><LuArrowLeftCircle></LuArrowLeftCircle>FORD</button></Link>
                        </div>
                    </div>
                    <div>
                        <img className="border-r-2 border-t-2  rounded-tr-3xl border-black pt-4 px-4" src="https://i.ibb.co/kHFvC32/logo6.png" />
                        <div>
                            <Link to='/audi'>  <button className="w-full py-4 px-5 rounded-bl-full  bg-black font-bold text-white text-3xl flex justify-end items-center gap-3 hover:text-lime-300"><LuArrowLeftCircle></LuArrowLeftCircle>AUDI</button></Link>
                        </div>
                    </div>


                </div>
            </div>
            <img src="https://i.ibb.co/CJnCnTQ/accessiories.png" />
        </div>
    );
};

export default Accessories;