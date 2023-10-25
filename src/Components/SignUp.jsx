import { NavLink } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "./firebase/firebase.config";


const SignUp = () => {

    const auth = getAuth(app);

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.log('error', error.message)
        })
    }


    const {createUser} = useContext(AuthContext);

    const handleSignup = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const phone = form.get('phone');
        const gender = form.get('gender');
        const password = form.get('password');
        console.log(name, email, phone, gender, password);

        createUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
 
    }

    const links = <>
    <a className="text-blue-500 font-medium"><NavLink to="/login" >Go to login</NavLink></a>
</>
    
    return (
        <div>
            <div className="max-w-7xl mx-auto mt-10 mb-10">
            <div className="hero min-h-screen bg-blue-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-red-500 font-bold">Sign In now!</h1>
                        <p className="py-6 text-xl">If you dont have any account, then you can easily sign up here. <br /> and then you can easily log in anytime.</p>
                        <button onClick={handleGoogleSignIn} className="btn border border-blue-500 bg-blue-500 text-white">
                                <FaGoogle></FaGoogle>
                                 Login With Google
                        </button>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignup} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone No.</span>
                                </label>
                                <input type="number" name="phone" placeholder="phone no" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Gender</span>
                                </label>
                                <div >
                                    <input type="radio" value="Male" name="gender" /> Male  <br />
                                    <input type="radio" value="Female" name="gender" /> Female <br />
                                    <input type="radio" value="Other" name="gender" /> Other
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p>Al ready have an account. Then {links}</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SignUp;