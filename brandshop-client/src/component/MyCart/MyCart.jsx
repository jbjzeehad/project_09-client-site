import { useLoaderData } from "react-router-dom";
import MycartCard from "../MycartCard/MycartCard";
import { BsCart4 } from "react-icons/bs";
import { useState } from "react";


const MyCart = () => {

    const loadMyCart = useLoaderData([]);
    const [mycarCart, setmyCart] = useState(loadMyCart);


    return (
        <div className="p-10">
            <h3 className="text-5xl"><BsCart4></BsCart4></h3>
            <div className="pt-3 gap-5 grid lg:grid-cols-3 grid-cols-1">
                {
                    loadMyCart.map(car => <MycartCard key={car._id} myCard={car} mycarCart={mycarCart} setmyCart={setmyCart}></MycartCard>)
                }
            </div>
        </div>
    );
};

export default MyCart;