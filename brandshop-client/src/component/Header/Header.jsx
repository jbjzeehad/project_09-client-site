import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthCon } from "../Providers/AuthProviders";


const Header = () => {

    const { user, signOutUser } = useContext(AuthCon);

    const handleSignOut = (e) => {
        e.preventDefault();
        signOutUser()
            .then(() => console.log("logged out"))
            .catch(error => console.error(error.message))
    }

    return (
        <div className="bg-white text-black grid grid-cols-4  items-center">
            <div className='ml-14 w-1/3'>
                <Link to='/'><img className=" w-full" src="https://i.ibb.co/2tbH99X/logo.png" /></Link>
            </div>
            <div className=" col-span-3 flex justify-end gap-8 mr-14">
                {
                    user ? <>
                        <Link to='/'><button className="border-4 border-transparent focus:border-b-red-700 font-bold text-xl py-1 hover:text-red-700 ">Home</button></Link>
                        <Link to='/allshop'><button className="border-4 border-transparent focus:border-b-red-700 font-bold text-xl py-1 hover:text-red-700 ">Shop</button></Link>
                        <Link to='/addproduct'><button className="border-4 border-transparent focus:border-b-red-700 font-bold text-xl py-1 hover:text-red-700 ">Trade/Sell</button></Link>
                        <Link to='/mycart'><button className="border-4 border-transparent focus:border-b-red-700 font-bold text-xl py-1 hover:text-red-700 ">My Shop</button></Link>

                    </> : <>
                        <Link to='/'><button className="border-4 border-transparent focus:border-b-red-700 font-bold text-xl py-1 hover:text-red-700 ">Home</button></Link>
                        <Link to='/allshop'><button className="border-4 border-transparent focus:border-b-red-700 font-bold text-xl py-1 hover:text-red-700 ">Shop</button></Link>
                    </>
                }
                <div className="flex justify-end gap-8">
                    {
                        user ?
                            <>
                                <div className=" flex items-center gap-3 shadow-sm shadow-slate-700 rounded-full px-2 border-red-700">
                                    <img className="rounded-full w-8" src={user.photoURL} />
                                    <span className="font-bold text-base hover:text-red-700 py-1">{user.displayName}</span>
                                </div>

                                <Link to='/'><button className="border-4 border-transparent focus:border-b-red-700 font-bold text-xl py-1 hover:text-red-700 " onClick={handleSignOut}>Sign Out</button></Link>

                            </> : <>

                                <Link to='/signin'><button className="border-4 border-transparent focus:border-b-red-700 font-bold text-xl py-1 hover:text-red-700 ">Sign In</button></Link>
                                <Link to='/signup'><button className="border-4 border-transparent focus:border-b-red-700 font-bold text-xl py-1 hover:text-red-700 ">Sign Up</button></Link>
                            </>
                    }
                </div>
            </div>

        </div>
    );
};

export default Header;