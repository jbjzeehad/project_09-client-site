import { LuArrowRightCircle } from "react-icons/lu";

const Dealer = () => {
    return (
        <div className=" grid grid-cols-2">
            <div className=" text-center ">
                <h3 className=" pt-10  text-red-700 text-3xl text-center">FIND DEALER</h3>
                <p className=" p-10 font-bold text-6xl">Visit a CarShop<br />near you<span className="text-red-700">.</span></p>
                <div className=" py-10 flex justify-center gap-5">
                    <button className="border border-red-600 text-2xl font-bold rounded-full py-2 px-4 flex items-center gap-2">Find a Store</button>
                    <button className="bg-red-600 text-white text-2xl font-bold rounded-full py-2 px-4 flex items-center gap-2">Buy Online<LuArrowRightCircle></LuArrowRightCircle></button>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/Fsvrj0j/sideimg.png" />
            </div>
        </div>
    );
};

export default Dealer;