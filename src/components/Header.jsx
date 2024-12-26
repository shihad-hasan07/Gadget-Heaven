import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation()
    const isLocation = location.pathname === '/'

    return (
        <div className={`mt-5 p-5 mx-10 rounded-t-xl ${isLocation ? "bg-purple-600 text-white" : "bg-none text-black"}`}>
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-xl">Gadget Heaven</h3>
                <ul className="flex gap-5">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/statictics">statictics</NavLink></li>
                    <li><NavLink to="/dashboard">dashboard</NavLink></li>
                </ul>
                <div className="flex gap-5">
                    <NavLink to="/dashboard/cart"><button className="bg-white p-2 text-black rounded-full border-2"><IoCartOutline /></button ></NavLink>
                    <NavLink to="/dashboard/wishlist"><button className="bg-white p-2 text-black rounded-full border-2"> <FaRegHeart /></button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;