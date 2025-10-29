import { Link, NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="relative text-center font-bold bg-purple-600 pb-[110px] sm:pb-[170px] md:pb-[210px] xl:pb-[240px] mb-32 sm:mb-40 md:mb-48 lg:mb-[260px] pt-10 rounded-b-xl mx-4 sm:mx-6 md:mx-8 lg:mx-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 mx-4 sm:mx-10 md:mx-16 lg:mx-28 text-white">Upgrade Your Tech Accessories with Gadget Heaven Accessories</h1>
                <p className="mx-4 sm:mx-10 md:mx-20 lg:mx-40 text-sm sm:text-base text-white">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <Link to="/dashboard/cart"><button className="bg-purple-400 font-medium rounded-full px-5 py-2 mt-6">
                    Shop Now
                </button></Link>


                {/* Ensure the absolute div is within a relative container */}
                <div className="relative mt-5">
                    <div className="absolute inset-0 left-[9%] sm:left-[13%] md:left-[15%] lg:left-[14%]">
                        <div className="bg-white bg-opacity-50 backdrop-blur-md p-2 sm:p-3 rounded-xl border-2 w-[90%] sm:w-[84%] md:w-[80%] lg:w-10/12">
                            <img className="rounded-xl h-[200px] sm:h-[300px] md:h-[320px] lg:h-[380px] xl:h-[420px] w-full object-cover" src="/banner.jpg" alt="Banner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;