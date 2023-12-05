import { LuArrowRightCircle } from "react-icons/lu";

const Banner = () => {
    return (
        <div className="relative ">
            <img src="bannerimg.jpg" alt="" />
            <div className=" absolute text-white top-1/4 left-20 p-5 ">
                <p className="font-medium text-4xl mb-3">Powerful, Fun and</p>
                <p className="font-extrabold text-7xl mb-3">FIERCE TO<br /><span className="text-red-600">DRIVE</span></p>
                <p className="mb-5 text-xl">Real Poise, Real Power, Real Performance.</p>
                <button className="bg-red-600 text-2xl font-bold rounded-full p-4 flex items-center gap-2">BOOK A TEST RIDE <LuArrowRightCircle></LuArrowRightCircle></button>
            </div>
            <div className="bg-slate-900 opacity-60 absolute top-0 right-0 w-1/2 h-full"></div>
        </div>
    );
};

export default Banner;