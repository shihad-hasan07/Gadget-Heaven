import React, { useContext, useEffect, useState } from 'react';
import { allContext } from '../Contexts';
import { ImCancelCircle } from 'react-icons/im';
// import SingleCartData from './singleCartData';

const AllCart = () => {
    const { cartData,setCartData } = useContext(allContext)
    const [cardsssData, setCardsssData] = useState(cartData)

    const deleteCartItem = (id) => {
        const result = cardsssData.filter(p => p.id !== id)
        setCardsssData(result)
        setCartData(result)
    }

    return (
        <div className='container  mx-auto mt-5'>
            <div className='flex justify-between items-center'>
                <p className='text-2xl font-bold'>Cart</p>
                <div className='flex gap-2 items-center'>
                    <p>Total Cost</p>
                    <button className='border px-4 py-2 rounded-3xl font-semibold'>Sort by price</button>
                    <button className='rounded-3xl bg-purple-500 py-2 px-4 text-white font-semibold'>Purchase</button>
                </div>
            </div>

            {/* all cart data will be stored here */}
            <div>
                {
                    cardsssData.map(data => {
                        return <div className='w-[1280px] flex gap-8 p-7 my-6 border mx-auto bg-[#f6f6f6] rounded-2xl'>
                            <div className='w-[200px] h-[124px]'>
                                <img src={data.img} className='w-full h-full rounded-xl object-cover' />
                            </div>

                            <div className='w-[1180px] flex flex-col justify-between'>
                                <p className='text-2xl font-semibold'>{data.title}</p>
                                <p className='text-base opacity-70'>{data.description}</p>
                                <p className='font-medium'>Price : {data.price}</p>
                            </div>
                            <div>
                                <button onClick={() => deleteCartItem(data.id)}><ImCancelCircle size='26' /></button>
                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    );
};

export default AllCart;