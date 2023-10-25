import { NavLink } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";


const Login = () => {

    const {signIn} = useContext(AuthContext)

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signIn(email, password)
        .then(result => {
            console.log(result.user);
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
                            <button className="btn border border-blue-500 bg-blue-500 text-white mb-3">
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