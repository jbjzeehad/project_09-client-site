import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div className="relative">
            <img className="w-full" src="signupbg.png" />
            <div className="absolute top-0 left-44 items-center">
                <div className=" w-full my-10 mx-16 p-5 ">
                    <form>
                        <div className="grid pb-3">
                            <span className="text-xl pb-3 font-bold ">Name</span>
                            <input type="text" name="name" placeholder="username" className="p-2 border-b-2 bg-transparent  outline-none focus:border-b-red-700" required />
                        </div>
                        <div className="grid pb-3">
                            <span className="text-xl pb-3 font-bold ">Email</span>
                            <input type="email" name="email" placeholder="email" className="p-2 border-b-2 bg-transparent  outline-none focus:border-b-red-700" required />
                        </div>
                        <div className="grid pb-3">
                            <span className="text-xl pb-3 font-bold ">Password</span>
                            <input type="password" name="password" placeholder="password" className="p-2 border-b-2 bg-transparent  outline-none focus:border-b-red-700" required />
                        </div>
                        <div className="grid pb-3">
                            <span className="text-xl pb-3 font-bold ">Photo</span>
                            <input type="text" name="photourl" placeholder="photo url" className="p-2 border-b-2 bg-transparent  outline-none focus:border-b-red-700" required />
                        </div>
                        <div className=" mt-7 flex items-center gap-6">
                            <button className="border-red-700 border-2 w-2/5 text-center text-xl  font-bold p-3 rounded-lg">SIGN UP</button>
                            <p className="text-lg">Have an <Link className="text-red-700 font-bold animate-pulse" to='/signin'>Account</Link> ?</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;