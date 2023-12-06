import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="bg-white text-black grid grid-cols-4 items-center">
            <div className='ml-14 w-1/3'>
                <Link to='/'><img className=" w-full" src="https://i.ibb.co/2tbH99X/logo.png" /></Link>
            </div>
            <div className=" col-span-3 flex justify-end gap-8 mr-14">
                <Link to='/'><button className="border-4 border-transparent focus:border-b-red-700 font-bold text-xl py-1 hover:text-red-700 ">Home</button></Link>

                <Link to='/allshop'><button className="border-4 border-transparent focus:border-b-red-700 font-bold text-xl py-1 hover:text-red-700 ">Shop</button></Link>
                <Link to='/addproduct'><button className="border-4 border-transparent focus:border-b-red-700 font-bold text-xl py-1 hover:text-red-700 ">Trade/Sell</button></Link>
                <Link to='/mycart'><button className="border-4 border-transparent focus:border-b-red-700 font-bold text-xl py-1 hover:text-red-700 ">My Shop</button></Link>

                <Link to='/signin'><button className="border-4 border-transparent focus:border-b-red-700 font-bold text-xl py-1 hover:text-red-700 ">Sign In</button></Link>
                <Link to='/signup'><button className="border-4 border-transparent focus:border-b-red-700 font-bold text-xl py-1 hover:text-red-700 ">Sign Up</button></Link>
            </div>

        </div>
    );
};

export default Header;