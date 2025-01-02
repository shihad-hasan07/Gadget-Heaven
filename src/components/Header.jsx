import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation()
    const isLocation = location.pathname === '/'
    const favourite = location.pathname === '/dashboard/favourite'

    const alldata = location.pathname === "/category/All%20Data"
    const laptop = location.pathname === "/category/Laptops"
    const phones = location.pathname === "/category/Phones"
    const accessories = location.pathname === "/category/Accessories"
    const smart_watches = location.pathname === "/category/Smart%20Watches"

    const isHomeActive = (isLocation || alldata || laptop || phones || accessories || smart_watches)

    return (
        <div className={`mt-5 p-5 mx-10 rounded-t-xl ${isHomeActive ? "bg-purple-600 text-white" : "bg-none text-black"}`}>
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-xl"><Link to='/'>Gadget Heaven</Link></h3>
                <ul className="flex gap-5">
                    <li><NavLink to="/"
                        className={isHomeActive ? "active" : ''}>Home</NavLink></li>
                    <li><NavLink to="/statictics">Statictics</NavLink></li>
                    <li><NavLink to="/user-review">Review</NavLink></li>
                    <li><NavLink className={favourite ? 'active' : ''} to="/dashboard">Dashboard</NavLink></li>
                </ul>
                <div className="flex gap-5">
                    <Link to="/dashboard/cart"><button className="bg-white p-2 text-black rounded-full border-2"><IoCartOutline /></button ></Link>
                    <Link to="/dashboard/favourite"><button className="bg-white p-2 text-black rounded-full border-2"> <FaRegHeart /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;