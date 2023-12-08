import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthCon } from "../Providers/AuthProviders";


const SignIn = () => {

    const [signError, setSignError] = useState('');
    const [success, setSucess] = useState('');
    const userSignIn = () => {
        toast('welcome Back');
    }

    const { signInUser, signwithGoogle } = useContext(AuthCon);

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setSucess('');
        setSignError('');

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                setSucess('Welcome!');
                userSignIn();

            })
            .catch(error => {
                console.error(error.message);
                setSignError("Doesn't Match");
            })
    }
    const handleGoogleSignIn = e => {
        e.preventDefault();
        setSucess('');
        setSignError('');
        signwithGoogle()
            .then(result => {
                console.log(result.user);

                setSucess('Welcome!');
                userSignIn();

            })
            .catch(error => {
                console.error(error);
                setSignError("Not Registred");
            })
    }



    return (
        <div className="relative">
            <img className="w-full" src="https://i.ibb.co/TvjpmBV/signinbg.png" />
            <div className="absolute top-10 right-64 items-center">
                <div className=" w-full my-10 mx-16 p-5 ">
                    <form onSubmit={handleSignIn}>

                        <div className="grid pb-3">
                            <span className="text-xl pb-3 font-bold ">Email</span>
                            <input type="email" name="email" placeholder="email" className="p-2 border-b-2 bg-transparent  outline-none focus:border-b-red-700" required />
                        </div>
                        <div className="grid pb-3">
                            <span className="text-xl pb-3 font-bold ">Password</span>
                            <input type="password" name="password" placeholder="password" className="p-2 border-b-2 bg-transparent  outline-none focus:border-b-red-700" required />
                        </div>
                        {
                            signError && <p className="text-sm text-red-500">{signError}</p>
                        }
                        {
                            success && <p className="text-sm text-lime-500">{success}</p>
                        }





                        <div className=" mt-7 flex items-center gap-6">
                            <button className="border-red-700 border-2 w-2/5 text-center text-xl hover:border-slate-900 font-bold p-3 rounded-lg">SIGN IN</button>
                            <p className="text-lg">Not <Link className="text-red-700 font-bold animate-pulse" to='/signup'>Register</Link> Yet !</p>
                        </div>

                    </form>
                    <div className=' mt-5'>
                        <button className='border text-xl  rounded-lg py-1 w-full flex items-center justify-center gap-2 hover:border-slate-900' onClick={handleGoogleSignIn}><FcGoogle></FcGoogle>SignIn</button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignIn;