import { IoCarSportSharp } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { TbShoppingCartStar } from "react-icons/tb";
import { FaDollarSign } from "react-icons/fa";
import Swal from 'sweetalert2'

const MycartCard = ({ myCard, mycarCart, setmyCart }) => {
    const { _id, image, name, brand, type, rating, price } = myCard;

    const handleDelete = productId => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://ph-brandshop-server-q6jpmf89v-jubayers-projects.vercel.app/${productId}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const intproductId = parseInt(productId);
                            const remaining = mycarCart.filter(car => car._id !== intproductId);
                            setmyCart(remaining);

                        }
                    });
            }
        })
    }
    return (

        <div className="p-2 shadow-md rounded-lg ">
            <div>
                <img className=" rounded-t-lg" src={image} />
            </div>
            <div className=" px-2 pt-3">
                <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-bold">{name}</h3>
                    <p>{brand}</p>
                </div>
                <p className="flex items-center gap-3"><IoCarSportSharp></IoCarSportSharp>{type}</p>
                <p className=" flex items-center gap-3 text-lg"><TbShoppingCartStar></TbShoppingCartStar>{rating}</p>
                <p className="flex items-center gap-3 text-lg mb-2"><FaDollarSign></FaDollarSign> {price}</p>
                <button onClick={() => handleDelete(_id)} className=" self-end p-1 flex justify-center w-full  text-2xl hover:text-red-700 hover:border-red-700 
                    hover:border rounded-lg"><MdDeleteForever></MdDeleteForever></button>
            </div>


        </div>


    );
};

export default MycartCard;