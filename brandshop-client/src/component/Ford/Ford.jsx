import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import Marquee from "react-fast-marquee";


const Ford = () => {

    const loadedProducts = useLoaderData([]);

    return (
        <div>
            <div className="grid justify-items-center">
                <img className="w-40" src="https://i.ibb.co/Z1wTtR3/logo3.png" />
            </div>
            <Marquee pauseOnHover={true}>
                <div className=" p-5 flex gap-10">

                    <div className=" relative shadow-md shadow-black">
                        <img src="https://i.ibb.co/fHcn9Vm/fordexpedition.png" />
                        <p className="absolute top-0 left-0 text-2xl p-5 font-semibold text-black">Ford Expedition</p>
                        <img className="absolute bottom-0 right-0 w-1/4 px-5" src="https://i.ibb.co/2tbH99X/logo.png" />
                    </div>
                    <div className=" relative shadow-md shadow-black">
                        <img src="https://i.ibb.co/tZBJpJg/fordmustang.png" />
                        <p className="absolute top-0 left-0 text-2xl p-5 font-semibold text-black">Ford Mustang</p>
                        <img className="absolute bottom-0 right-0 w-1/4 px-5" src="https://i.ibb.co/2tbH99X/logo.png" />
                    </div>
                    <div className=" relative shadow-md shadow-black">
                        <img src="https://i.ibb.co/x1jVsW3/ford-Explorer.png" />
                        <p className="absolute top-0 left-0 text-2xl p-5 font-semibold text-black">Ford Explorer</p>
                        <img className="absolute bottom-0 right-0 w-1/4 px-5" src="https://i.ibb.co/2tbH99X/logo.png" />
                    </div>

                </div>
            </Marquee>
            <div className="grid grid-cols-3 gap-5 p-5">

                {
                    loadedProducts.filter(nissanCar => nissanCar.brand === "FORD").map(car => <ProductCard key={car._id} card={car}></ProductCard>)
                }

            </div>

        </div>
    );
};

export default Ford;