import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


const SignIn = () => {
    return (
        <div className="relative">
            <img className="w-full" src="https://i.ibb.co/TvjpmBV/signinbg.png" />
            <div className="absolute top-10 right-64 items-center">
                <div className=" w-full my-10 mx-16 p-5 ">
                    <form>

                        <div className="grid pb-3">
                            <span className="text-xl pb-3 font-bold ">Email</span>
                            <input type="email" name="email" placeholder="email" className="p-2 border-b-2 bg-transparent  outline-none focus:border-b-red-700" required />
                        </div>
                        <div className="grid pb-3">
                            <span className="text-xl pb-3 font-bold ">Password</span>
                            <input type="password" name="password" placeholder="password" className="p-2 border-b-2 bg-transparent  outline-none focus:border-b-red-700" required />
                        </div>

                        <div className=" mt-7 flex items-center gap-6">
                            <button className="border-red-700 border-2 w-2/5 text-center text-xl  font-bold p-3 rounded-lg">SIGN IN</button>
                            <p className="text-lg">Not <Link className="text-red-700 font-bold animate-pulse" to='/signup'>Register</Link> Yet !</p>
                        </div>

                    </form>
                    <div className=' mt-5'>
                        <button className='border text-xl  rounded-lg py-1 w-full flex items-center justify-center gap-2'><FcGoogle></FcGoogle>SignIn</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;