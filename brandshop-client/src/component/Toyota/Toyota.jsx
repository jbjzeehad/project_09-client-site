import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import Marquee from "react-fast-marquee";

const Toyota = () => {

    const loadedProducts = useLoaderData([]);

    return (
        <div>
            <div className="grid justify-items-center p-5">
                <img className="w-24" src="https://i.ibb.co/3yjSMNs/logo2.png" />
                <p className="text-xl font-bold">TOYOTA</p>
            </div>
            <Marquee pauseOnHover={true}>
                <div className=" p-5 flex gap-10">

                    <div className=" relative shadow-md shadow-black">
                        <img src="https://i.ibb.co/rHTkmkz/toyota4runner.png" />
                        <p className="absolute top-0 left-0 text-2xl p-5 font-semibold text-black">Toyota 4Runner</p>
                        <img className="absolute bottom-0 right-0 w-1/4 px-5" src="https://i.ibb.co/2tbH99X/logo.png" />
                    </div>
                    <div className=" relative shadow-md shadow-black">
                        <img src="https://i.ibb.co/L9SJB0L/toyotachr.png" />
                        <p className="absolute top-0 left-0 text-2xl p-5 font-semibold text-black">Toyota CHR</p>
                        <img className="absolute bottom-0 right-0 w-1/4 px-5" src="https://i.ibb.co/2tbH99X/logo.png" />
                    </div>
                    <div className=" relative shadow-md shadow-black">
                        <img src="https://i.ibb.co/PTDD9JZ/toyotacamry.png" />
                        <p className="absolute top-0 left-0 text-2xl p-5 font-semibold text-white">Toyota Camry</p>
                        <img className="absolute bottom-0 right-0 w-1/4 px-5" src="https://i.ibb.co/2tbH99X/logo.png" />
                    </div>

                </div>
            </Marquee>
            <div className="grid grid-cols-3 gap-5 p-5">

                {
                    loadedProducts.filter(nissanCar => nissanCar.brand === "TOYOTA").map(car => <ProductCard key={car._id} card={car}></ProductCard>)
                }

            </div>

        </div>
    );
};

export default Toyota;