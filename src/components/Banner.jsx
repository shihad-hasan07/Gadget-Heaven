import { Link, NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="relative text-center font-bold bg-purple-600 pb-48 mb-72 pt-10 rounded-b-xl mx-10">
                <h1 className="text-5xl mb-4 mx-28 text-white">Upgrade Your Tech Accessories with Gadget Heaven Accessories</h1>
                <p className="mx-40 text-white">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <Link to="/dashboard/cart"><button className="bg-purple-400 font-medium  rounded-full px-5 py-2 mt-6">
                    Shop Now
                </button></Link>


                {/* Ensure the absolute div is within a relative container */}
                <div className="relative mt-5">
                    <div className="absolute inset-0 left-[14%]">
                        <div className="bg-white bg-opacity-50 backdrop-blur-md p-3 rounded-xl border-2 w-10/12">
                            <img className="rounded-xl h-[400px] w-full object-cover" src="/banner.jpg" alt="Banner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;