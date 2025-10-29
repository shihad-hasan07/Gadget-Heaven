import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
    document.title='Gadget Heaven | dashboard'

    const location=useLocation()
    return (
        <div className="">
            <div className="bg-purple-600 text-center py-7 px-4 sm:px-6 lg:px-8">
                <p className="text-2xl sm:text-3xl md:text-4xl text-white font-bold">Dashboard</p>
                <p className="text-white opacity-75 my-3 text-sm sm:text-base max-w-3xl mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="flex justify-center gap-3 sm:gap-4 mt-6">
                    <Link to='/dashboard/cart'
                        className={location.pathname==='/dashboard/cart'?'isActive':'notactive'}>Cart</Link>

                    <Link to='/dashboard/favourite'
                        className={location.pathname==='/dashboard/favourite'?'isActive':'notactive'}>Wishlist</Link>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;