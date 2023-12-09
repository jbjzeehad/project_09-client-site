import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const Update = () => {
    const loadedProduct = useLoaderData();

    const handleUpdate = (evnt) => {

        evnt.preventDefault();

        const form = evnt.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const image = form.image.value;
        const productsDetails = { name, brand, type, rating, price, image };
        console.log(productsDetails);
        fetch(`http://localhost:5000/allproduct/${loadedProduct._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productsDetails)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast("Updated Successfully");
                }
            })

    }


    return (
        <div>
            <form onSubmit={handleUpdate}>
                <div className="grid grid-cols-2 gap-10">
                    <div className="py-10 pl-10">
                        <div className="grid pb-3">
                            <span className="text-xl pb-3 font-bold ">Name</span>
                            <input type="text" name="name" defaultValue={loadedProduct?.name} className="p-2 border-b-2 bg-transparent  outline-none focus:border-b-red-700" required />
                        </div>
                        <div className="grid pb-3">
                            <span className="text-xl pb-3 font-bold ">Brand</span>
                            <input type="text" name="brand" defaultValue={loadedProduct?.brand} className="p-2 border-b-2 bg-transparent  outline-none focus:border-b-red-700" required />
                        </div>
                        <div className="grid pb-3">
                            <span className="text-xl pb-3 font-bold ">Type</span>
                            <input type="text" name="type" defaultValue={loadedProduct?.type} className="p-2 border-b-2 bg-transparent  outline-none focus:border-b-red-700" required />
                        </div>

                    </div>

                    <div className="py-10 pr-10">
                        <div className="grid pb-3">
                            <span className="text-xl pb-3 font-bold ">Rating</span>
                            <input type="text" name="rating" defaultValue={loadedProduct?.rating} className="p-2 border-b-2 bg-transparent  outline-none focus:border-b-red-700" required />
                        </div>
                        <div className="grid pb-3">
                            <span className="text-xl pb-3 font-bold ">Price</span>
                            <input type="text" name="price" defaultValue={loadedProduct?.price} className="p-2 border-b-2 bg-transparent  outline-none focus:border-b-red-700" required />
                        </div>
                        <div className="grid pb-3">
                            <span className="text-xl pb-3 font-bold ">Image</span>
                            <input type="text" name="image" defaultValue={loadedProduct?.image} className="p-2 border-b-2 bg-transparent  outline-none focus:border-b-red-700" required />
                        </div>

                    </div>
                </div>
                <div className="pb-5 px-8 flex items-center gap-6">
                    <button className="border-red-700 border-2 w-full text-center text-xl  font-bold p-3 hover:border-black hover:text-red-700 rounded-lg">UPDATE</button>

                </div>
            </form>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Update;