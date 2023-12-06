


const AddProduct = () => {


    const handleAddproduct = (evnt) => {
        evnt.preventDefault();
        const form = evnt.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const image = form.image.value;
        const description = form.description.value;
        const productsDetails = { name, brand, type, rating, price, image, description };
        console.log(productsDetails);

        fetch('http://localhost:5000/allproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productsDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Sending to server", data);
                if (data.insertedId) {
                    alert("Add to server");
                }
                form.reset();
            })

    }




    return (
        <div>
            <form onSubmit={handleAddproduct} className="grid grid-cols-2 gap-10">

                <div className="py-10 pl-10">
                    <div className="grid pb-3">
                        <span className="text-xl pb-3 font-bold ">Name</span>
                        <input type="text" name="name" placeholder="model name" className="p-2 border-b-2 bg-transparent  outline-none focus:border-b-red-700" required />
                    </div>
                    <div className="grid pb-3">
                        <span className="text-xl pb-3 font-bold ">Brand</span>
                        <input type="text" name="brand" placeholder="brand name" className="p-2 border-b-2 bg-transparent  outline-none focus:border-b-red-700" required />
                    </div>
                    <div className="grid pb-3">
                        <span className="text-xl pb-3 font-bold ">Type</span>
                        <input type="text" name="type" placeholder="car truck accessories" className="p-2 border-b-2 bg-transparent  outline-none focus:border-b-red-700" required />
                    </div>
                    <div className="grid pb-3">
                        <span className="text-xl pb-3 font-bold ">Rating</span>
                        <input type="text" name="rating" placeholder="10/10" className="p-2 border-b-2 bg-transparent  outline-none focus:border-b-red-700" required />
                    </div>
                </div>
                <div className="py-10 pr-10">
                    <div className="grid pb-3">
                        <span className="text-xl pb-3 font-bold ">Price</span>
                        <input type="text" name="price" placeholder="$30,000" className="p-2 border-b-2 bg-transparent  outline-none focus:border-b-red-700" required />
                    </div>
                    <div className="grid pb-3">
                        <span className="text-xl pb-3 font-bold ">Image</span>
                        <input type="text" name="image" placeholder="image url" className="p-2 border-b-2 bg-transparent  outline-none focus:border-b-red-700" required />
                    </div>
                    <div className="grid pb-3">
                        <span className="text-xl pb-3 font-bold ">Description</span>
                        <input type="text" name="description" placeholder="about your products" className="p-2 border-b-2 bg-transparent  outline-none focus:border-b-red-700" required />
                    </div>


                    <div className=" mt-7 flex items-center gap-6 border">
                        <button className="border-red-700 border-2 w-full text-center text-xl  font-bold p-3 rounded-lg">ADD-SHOP</button>

                    </div>
                </div>
            </form>


        </div>
    );
};

export default AddProduct;