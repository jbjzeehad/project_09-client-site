import { useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";
import ProductCard from "../ProductCard/ProductCard";

const BmwCar = () => {

    const loadedProducts = useLoaderData([]);

    return (
        <div>
            <div className="grid justify-items-center p-5">
                <img className="w-20" src="https://i.ibb.co/GpbPF4S/logo4.png" />
                <p className="text-xl font-bold pt-2">BMW</p>
            </div>
            <Marquee pauseOnHover={true}>
                <div className=" p-5 flex gap-10">

                    <div className=" relative shadow-md shadow-black">
                        <img src="https://i.ibb.co/r6d2fNt/nissangtr.png" />
                        <p className="absolute top-0 left-0 text-2xl p-5 font-semibold text-white">Nissan GTR</p>
                        <img className="absolute bottom-0 right-0 w-1/4 px-5" src="https://i.ibb.co/2tbH99X/logo.png" />
                    </div>
                    <div className=" relative shadow-md shadow-black">
                        <img src="https://i.ibb.co/KLmb41s/nissan-maxima.png" />
                        <p className="absolute top-0 left-0 text-2xl p-5 font-semibold text-white">Nissan Maxima</p>
                        <img className="absolute bottom-0 right-0 w-1/4 px-5" src="https://i.ibb.co/2tbH99X/logo.png" />
                    </div>
                    <div className=" relative shadow-md shadow-black">
                        <img src="https://i.ibb.co/Q95vMBc/nissan-z.png" />
                        <p className="absolute top-0 left-0 text-2xl p-5 font-semibold text-white">Nissan Z</p>
                        <img className="absolute bottom-0 right-0 w-1/4 px-5" src="https://i.ibb.co/2tbH99X/logo.png" />
                    </div>

                </div>
            </Marquee>
            <div className="grid grid-cols-3 gap-5 p-5">

                {
                    loadedProducts.filter(nissanCar => nissanCar.brand === "BMW").map(car => <ProductCard key={car._id} card={car}></ProductCard>)
                }

            </div>

        </div>
    );
};

export default BmwCar;