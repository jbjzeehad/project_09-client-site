import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { updateProfile } from "firebase/auth";
import { AuthCon } from "../Providers/AuthProviders";

const SignUp = () => {

    const [supError, setSupError] = useState('');
    const [success, setSucess] = useState('');
    const { createUser } = useContext(AuthCon);

    const userSignUp = () => {
        toast('Created Successfully');
    }

    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photourl = e.target.photourl.value;

        if (password.length < 6) {
            setSupError("At least 6 character");
            return;
        } else if (!/[A-Z]/.test(password)) {
            setSupError("At least an UpperCase");
            return;
        }
        else if (!/[!@#$%^&*]/.test(password)) {
            setSupError("At least a Special Character");
            return;
        }

        setSucess('');
        setSupError('');

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                setSucess('Supervb!');
                userSignUp();
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photourl,
                })
                    .then(() => console.log('done'))
                    .catch(() => console.kog('error'))
            })
            .catch(error => {
                console.error(error);
                setSupError("Already in Use");
            })
    }

    return (
        <div className="relative">
            <img className="w-full" src="https://i.ibb.co/R4MSLQ4/signupbg.png" />
            <div className="absolute top-0 left-44 items-center">
                <div className=" w-full my-10 mx-16 p-5 ">
                    <form onSubmit={handleSignUp}>
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

                        {
                            supError && <p className="text-sm text-red-500">{supError}</p>
                        }
                        {
                            success && <p className="text-sm text-lime-500">{success}</p>
                        }

                        <div className=" mt-7 flex items-center gap-6">
                            <button className="border-red-700 border-2 w-2/5 text-center text-xl hover:border-slate-900 font-bold p-3 rounded-lg">SIGN UP</button>
                            <p className="text-lg">Have an <Link className="text-red-700 font-bold animate-pulse" to='/signin'>Account</Link> ?</p>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};
export default SignUp;