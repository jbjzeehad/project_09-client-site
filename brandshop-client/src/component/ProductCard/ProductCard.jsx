

const ProductCard = ({ card }) => {
    const { _id, name, brand, type, rating, price, image } = card;
    return (
        <div>
            <div className="border">
                <div>
                    <img className="rounded-lg" src={image} />
                </div>
                <p className="font-bold text-black text-3xl py-3">{name}</p>
                <div className="flex text-lg gap-10 items-center pb-3">
                    <p className="flex items-center gap-2">{type}</p>
                    <p className="flex items-center gap-2">{price}</p>
                </div>
                <div className="flex gap-6 items-center">
                    <button className="text-white text-lg font-bold border-2 bg-[#001220] rounded-lg py-1 px-3" >View Details</button>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;