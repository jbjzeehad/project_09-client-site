import { useLoaderData } from "react-router-dom";


const MyCart = () => {

    const loadMyCart = useLoaderData([]);

    return (
        <div>
            <h3>Cart Items : {loadMyCart.length} </h3>

            <div>
                {

                }
            </div>
        </div>
    );
};

export default MyCart;