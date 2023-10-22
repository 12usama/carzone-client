import { NavLink } from "react-router-dom";


const Nav = () => {

    const links = <>
    <li className="text-xl text-black lg:text-white"><NavLink to="/" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-blue-200  font-bold" : ""
    } >Home</NavLink></li>
    <li className="text-xl text-black lg:text-white"><NavLink to="/addCars" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-blue-200  font-bold" : ""
    } >Add Cars</NavLink></li>
    <li className="text-xl text-black lg:text-white"><NavLink to="/myCart" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-blue-200  font-bold" : ""
    } >My Cart</NavLink></li>

</>
    return (
        <div className="px-5 mx-auto bg-black/90">
        <div className="navbar ">
            <div className="navbar-start">
                <img className="w-[80px] lg:w-[120px]" src="https://i.ibb.co/C1FzD7N/czz.jpg" alt="" />
            </div>
            <div className="flex-none navbar-center">
                <ul className="hidden lg:flex justify-around items-center gap-8 text-lg">
                    {links}
                </ul>
            </div>
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className=" dropdown-content p-2 z-[1] shadow bg-base-100 rounded-box">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
               
                {/* {
                    user ?
                        <button onClick={handleSignOut} className="btn bg-blue-500 text-white font-semibold p-4">Sign Out</button>
                        :
                        <Link to="/login">
                            <button className="btn bg-blue-500 text-white font-semibold p-4">Login</button>
                        </Link>

                } */}


            </div>
        </div>
    </div>
    );
};

export default Nav;