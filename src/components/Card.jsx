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
            setProducts(cardData.slice(0, 9))
        }
    }, [cardData, categoryName])


    return (
        <>
            {
                products.map(data => (<div className='border p-4 rounded-2xl'>
                    <div className="w-70 h-44 ">
                        <img src={data.product_image}
                            className='object-contain w-full h-full rounded-xl' alt="img not found" />
                    </div>
                    <h3>{data.product_title}</h3>
                    <p>Price : <span>{data.price}</span> $</p>

                    <Link to={`/product/${data.product_id}`} ><button className="btn">View Details</button></Link>
                    {/* <div>Cardname : {categoryName}</div> */}
                </div>))
            }
        </>
    );
}

export default Card;