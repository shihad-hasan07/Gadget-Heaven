import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { IoCartOutline, IoHeartOutline, IoStar } from "react-icons/io5";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";
import { allContext } from "../Contexts";

const CardDetails = () => {
     document.title='Gadget Heaven | details'
    const cardDetail = useLoaderData()
    const { addToCart,addToFavourite,disableFavBtn,setdisableFavBtn,favouriteData } = useContext(allContext)

    const [cardData, setCardData] = useState([])
    const { id } = useParams()


    useEffect(() => {
        const item = cardDetail.find(item => item.product_id === id)
        setCardData(item)
    }, [])
    
    useEffect(()=>{
        const isFavExist=favouriteData.find(item=>item.id===id)
        if(isFavExist){
            setdisableFavBtn(true)
        }
        else{
            setdisableFavBtn(false)
        }
    },[])


    const { product_id, product_image, description, product_title, Specification, rating, availability, price } = cardData
    return (
        <div className="bg-[#f6f6f6] min-h-screen pb-10">

            <div className="bg-purple-600 min-h-[200px] sm:min-h-[250px] md:min-h-[300px] text-center text-white px-4">
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold pt-5">Product Details</p>
                <p className="text-sm sm:text-base opacity-80 my-2 max-w-3xl mx-auto">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to 
                    the coolest accessories, we have it all!
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 -mt-[100px] sm:-mt-[130px] md:-mt-[150px] lg:-mt-[170px] mx-4 sm:mx-6 md:mx-10 lg:mx-auto p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white max-w-[1300px] min-h-[520px]">
                <div className="w-full lg:w-[420px] h-64 sm:h-80 md:h-96 lg:h-full rounded-xl sm:rounded-2xl overflow-hidden">
                    <img src={product_image}
                        className="w-full h-full rounded-xl sm:rounded-2xl object-contain" alt="img not found" />
                </div>
                <div className="w-full lg:w-[780px]">
                    <p className="mb-2 text-xl sm:text-2xl md:text-3xl font-semibold text-black">{product_title}</p>
                    <p className="text-lg sm:text-xl font-semibold">Price: ${price}</p>
                    <button className="bg-green-300 my-2 px-3 sm:px-4 py-1 rounded-3xl text-sm sm:text-base font-medium border">
                        {availability ? 'In Stock' : 'Out of Stock'}
                    </button>
                    <p className="text-sm sm:text-base opacity-70">{description}</p>
                    <p className="my-2 font-bold text-lg sm:text-xl">Specification:</p>
                    <ul className="list-decimal list-inside space-y-1">
                        {
                            Specification?.map((spec, index) => <li
                                className="text-sm sm:text-base opacity-70" key={index}>{spec}</li>)
                        }
                    </ul>


                    <p className="my-2 text-lg sm:text-xl font-bold">Rating:</p>
                    <div className="flex items-center flex-wrap gap-2">
                        <Rating
                            initialRating={rating}
                            readonly
                            emptySymbol={<BsStar color="rgb(180, 212, 00)" size="20" className='mr-1' />}
                            fullSymbol={<BsStarFill color="rgb(180, 212, 63)" size="20" />}
                        />
                        <span className="bg-slate-200 px-3 py-1 rounded-xl text-sm sm:text-base">{rating}</span>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4 mt-4">
                        <button
                            onClick={() => addToCart(product_id,product_image, description, product_title, price)} 
                            className="flex items-center justify-center px-3 sm:px-4 bg-blue-700 py-2 rounded-2xl text-white font-semibold gap-2 text-sm sm:text-base">
                            Add to Cart <IoCartOutline size='19' />
                        </button>

                        <button 
                            disabled={disableFavBtn} 
                            onClick={() => addToFavourite(product_id,product_image, description, product_title, price)} 
                            className="disabled:bg-gray-200 border p-2 rounded-full">
                            <IoHeartOutline size='25' />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CardDetails;