import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { IoCartOutline, IoHeartOutline, IoStar } from "react-icons/io5";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";
import { allContext } from "../Contexts";

const CardDetails = () => {
    const cardDetail = useLoaderData()
    const { addToCart, addToFavourite } = useContext(allContext)

    const [cardData, setCardData] = useState([])
    const { id } = useParams()


    useEffect(() => {
        const item = cardDetail.find(item => item.product_id === id)
        setCardData(item)
    }, [])


    const { product_id, product_image, description, product_title, Specification, rating, availability, price } = cardData
    return (
        <div className="bg-[#f6f6f6] h-[800px]">

            <div className="bg-purple-600 min-h-[300px] text-center text-white">
                <p className="text-3xl font-semibold pt-5">Product Details</p>
                <p className="text-base opacity-80 my-2">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />
                    the coolest accessories, we have it all!</p>
            </div>

            <div className="flex gap-8 -mt-[170px] mx-auto p-8 rounded-3xl bg-white w-[1300px] min-h-[520px]">
                <div className="w-[420px] h-full  rounded-2xl ">
                    {/* shadow-xl shadow-blue-400/55 */}
                    <img src={product_image}
                        className="w-full h-full rounded-2xl object-contain" alt="img not found" />
                </div>
                <div className="w-[780px]">
                    <p className="mb-2 text-3xl font-semibold text-black">{product_title}</p>
                    <p className="text-xl font-semibold">Price:${price}</p>
                    <button className="bg-green-300 my-2 px-4 py-1 rounded-3xl text-base font-medium border">{availability ? 'instock' : 'out of stock'}</button>
                    <p className="text-base opacity-70">{description}</p>
                    <p className="my-2 font-bold text-xl">Specification :</p>
                    <ul className="list-decimal list-inside">
                        {
                            Specification?.map((spec, index) => <li
                                className="text-base opacity-70" key={index}>{spec}</li>)
                        }
                    </ul>


                    <p className="my-2 text-xl font-bold">Rating :</p>
                    <div className="flex items-center">
                        <Rating
                            initialRating={rating}
                            readonly
                            emptySymbol={<BsStar color="rgb(180, 212, 00)" size="22" className='mr-1' />}
                            fullSymbol={<BsStarFill color="rgb(180, 212, 63)" size="22" />}
                        />
                        <span className="bg-slate-200 px-3 ml-3 rounded-xl">{rating}</span>
                    </div>

                    <div className="flex items-center gap-4 mt-2">
                        <button
                            onClick={() => addToCart(product_id,product_image, description, product_title, price)} className="flex items-center justify-center px-4 bg-blue-700 py-2 rounded-2xl text-white font-semibold gap-2">Add to card <IoCartOutline size='19' /></button>

                        <button onClick={() => addToFavourite()} className="border p-2 rounded-full"><IoHeartOutline size='25' /></button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CardDetails;