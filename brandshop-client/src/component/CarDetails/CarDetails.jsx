import { FaDollarSign } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";
import { TbShoppingCartStar } from "react-icons/tb";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const CarDetails = () => {

    const shopCarDetails = useLoaderData();

    const { id } = useParams();

    const details = shopCarDetails.find(carDescription => carDescription._id === id);

    // ///////////////////////////////////////
    const handleAddtoCart = () => {
        const name = details.name;
        const brand = details.brand;
        const type = details.type;
        const rating = details.rating;
        const price = details.price;
        const image = details.image;
        const myCartDetails = { name, brand, type, rating, price, image };
        console.log(myCartDetails);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myCartDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log('sending to user db');
                if (data.insertedId) {
                    toast('Added to Cart');
                }
            })
    }




    return (
        <div className="p-5">
            <div className="rounded-lg p-2 shadow-sm shadow-black flex gap-5">
                <img className="rounded-l-lg" src={details.image} />
                <div className="grid">
                    <div className="flex items-center font-bold text-4xl gap-3">
                        <IoCarSportSharp></IoCarSportSharp><h3 className="">{details.name}</h3>
                    </div>
                    <p className="text-sm font-bold">{details.type}</p>
                    <p className="text-slate-700 font-medium text-lg">{details.description}</p>
                    <div className="flex justify-between self-end">
                        <button onClick={handleAddtoCart} className="border-b-2 border-red-700  hover:border-2 hover:text-red-700 p-3 flex gap-3 items-center rounded-lg text-lg font-semibold"><TbShoppingCartStar></TbShoppingCartStar>Add to Cart</button>
                        <p className="flex px-2 gap-3 items-center text-3xl font-extrabold text-red-700"><FaDollarSign></FaDollarSign>{details.price}</p>
                    </div>
                </div>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default CarDetails;