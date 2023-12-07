import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";


const Audi = () => {

    const loadedProducts = useLoaderData([]);

    return (
        <div>
            <div className="grid justify-items-center p-5">
                <img className="w-40" src="https://i.ibb.co/kHFvC32/logo6.png" />
            </div>
            <Marquee pauseOnHover={true}>
                <div className=" p-5 flex gap-10">

                    <div className=" relative shadow-md shadow-black">
                        <img className="" src="https://i.ibb.co/26bg2ZZ/audia5.png" />
                        <p className="absolute top-0 left-0 text-2xl p-5 font-semibold text-white">Audi A5</p>
                        <img className="absolute bottom-0 right-0 w-1/4 px-5" src="https://i.ibb.co/2tbH99X/logo.png" />
                    </div>
                    <div className=" relative shadow-md shadow-black">
                        <img className="" src="https://i.ibb.co/sJtT9zL/nissan-Rogue.jpg" />
                        <p className="absolute top-0 left-0 text-2xl p-5 font-semibold text-white">Nissan Rogue</p>
                        <img className="absolute bottom-0 right-0 w-1/4 px-5" src="https://i.ibb.co/2tbH99X/logo.png" />
                    </div>
                    <div className=" relative shadow-md shadow-black">
                        <img className="" src="https://i.ibb.co/sJtT9zL/nissan-Rogue.jpg" />
                        <p className="absolute top-0 left-0 text-2xl p-5 font-semibold text-white">Nissan Rogue</p>
                        <img className="absolute bottom-0 right-0 w-1/4 px-5" src="https://i.ibb.co/2tbH99X/logo.png" />
                    </div>
                </div>
            </Marquee>
            <div className="grid grid-cols-3 gap-5 p-5">

                {
                    loadedProducts.filter(nissanCar => nissanCar.brand === "AUDI").map(car => <ProductCard key={car._id} card={car}></ProductCard>)
                }

            </div>

        </div>
    );
};

export default Audi;