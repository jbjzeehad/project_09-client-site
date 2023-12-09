import { TbShoppingCartStar } from "react-icons/tb";
import { IoCarSportSharp } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductCard = ({ card }) => {
    const { _id, image, name, brand, type, rating, price } = card;
    return (
        <div>
            <div className="rounded-xl p-3 shadow-lg ">
                <div>
                    <img className="rounded-t-xl" src={image} />
                </div>
                <div className="flex items-center justify-between">
                    <p className="font-bold text-slate-950 text-3xl py-3">{name}</p>
                    <p className="border border-red-700 rounded-bl-xl py-1 px-2 ">{brand}</p>

                </div>
                <div className="flex gap-10 items-center pb-3 text-xl font-medium text-slate-950">
                    <p className="flex items-center gap-2 text-2xl"><IoCarSportSharp></IoCarSportSharp>{type}</p>
                    <p className="flex items-center gap-2 "><TbShoppingCartStar></TbShoppingCartStar>{rating}</p>
                    <p className="flex items-center"><FaDollarSign></FaDollarSign>{price}</p>
                </div>
                <div className="flex gap-6 items-center justify-between">
                    <Link to={`/cardetails/${_id}`}>  <button className="text-white text-lg font-bold border-2 bg-slate-950 rounded-xl py-2 px-3 hover:border-red-700 hover:bg-white hover:text-black" >More Details</button></Link>
                    <Link to={`/update/${_id}`}><button className="text-2xl rounded-full border-2 p-2 mx-2 hover:text-lime-700 hover:border-red-700 "><IoSettingsOutline></IoSettingsOutline></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;