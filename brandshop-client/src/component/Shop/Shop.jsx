import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";


const Shop = () => {
    const loadedProducts = useLoaderData([]);
    const [seeProducts, setProducts] = useState(loadedProducts);
    return (
        <div>
            <h3>Total products: {seeProducts.length}</h3>
            <div className="grid grid-cols-3 gap-5 p-10">
                {
                    seeProducts.map(products =>
                        <ProductCard key={products._id} card={products}>
                        </ProductCard>
                    )
                }
            </div>
        </div>
    );
};

export default Shop;