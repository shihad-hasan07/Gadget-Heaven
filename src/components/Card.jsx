import { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";


const Card = () => {
    const { categoryName } = useParams()
    const cardData = useLoaderData()
    const [products, setProducts] = useState([])



    useEffect(() => {
        if (categoryName) {
            if (categoryName === 'All Data') {
                setProducts(cardData)

            }
            else {
                const filteredByCategory = [...cardData].filter(
                    product => product.category === categoryName)
                setProducts(filteredByCategory)
            }
        }
        else {
            setProducts(cardData.slice(0, 6))
        }
    }, [cardData, categoryName])


    return (
        <>
            {
                products.map(data =>
                    <div className='bg-[#f1efef86] p-6 rounded-2xl'>
                        <div className="w-72 h-44 ">
                            <img src={data.product_image}
                                className='object-cover w-full h-full rounded-xl' alt="img not found" />
                        </div>
                        <h3 className="w-72 mt-5 text-2xl font-semibold">{data.product_title}</h3>
                        <p className="text-xl my-3 opacity-60">Price : <span>{data.price}</span> $</p>

                        <Link to={`/product/${data.product_id}`} ><button className="font-semibold text-blue-700 px-5 py-2 border-2 border-blue-600 rounded-3xl">View Details</button></Link>
                    </div>
                )
            }
        </>
    );
}

export default Card;