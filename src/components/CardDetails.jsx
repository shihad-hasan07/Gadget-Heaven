import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { IoStar } from "react-icons/io5";

const CardDetails = () => {
    const cardDetail = useLoaderData()
    const [cardData, setCardData] = useState([])
    const { id } = useParams()

    console.log('carddetail', cardDetail);

    useEffect(() => {
        const item = cardDetail.find(item => item.product_id === id)
        setCardData(item)
    }, [])


    const { product_id, product_image, description, product_title, Specification, rating, availability, price } = cardData
    return (
        <div>
            <div>
                <p>Product Details</p>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />
                    the coolest accessories, we have it all!</p>
            </div>
            <div className="flex">
                <div className="w-[420px] h-[500px] border">
                    <img src={product_image} className="w-full h-full object-contain" alt="img not found" />
                </div>
                <div>
                    <p className="text-3xl font-semibold">{product_title}</p>
                    <p className="text-xl my-4 font-semibold">Price:${price}</p>
                    <button className="bg-green-300 px-4 py-2 rounded-3xl text-base font-medium border border-g">{availability ? 'instock' : 'out of stock'}</button>
                    <p className="my-4 text-xl opacity-70">{description}</p>
                    <p className="text-xl font-bold">Specification :</p>
                    <ul className="list-decimal list-inside">
                        {
                            Specification?.map((spec, index) => <li className="text-xl opacity-70" key={index}>{spec}</li>)
                        }
                    </ul>


                    <p className="text-xl font-bold">Rating{rating}</p>
                   
                </div>
            </div>
        </div>
    );
};

export default CardDetails;