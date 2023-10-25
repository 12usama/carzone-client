import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "./firebase/firebase.config";


const Login = () => {
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

    const {signIn} = useContext(AuthContext)
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signIn(email, password)
        .then(result => {
            console.log(result.user);

            navigate(location?. state ? location.state : '/');
        })
        .catch(error =>{
            console.error(error);
        })
    }

    const links = <>
    <a className="text-blue-500 font-medium"><NavLink to="/signup" >Create an account</NavLink></a>
    </>

    return (
        <div className="hero min-h-screen  bg-black/90 bg-[url('https://i.ibb.co/Xsh879p/about-us.jpg')] ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary mb-3">Login</button>
                            <button onClick={handleGoogleSignIn} className="btn border border-blue-500 bg-blue-500 text-white mb-3">
                                    <FaGoogle></FaGoogle>
                                    Login With Google
                                </button>
                            <p>Dont have id then {links} </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;