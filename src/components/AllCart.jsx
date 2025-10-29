import React, { useContext, useEffect, useState } from 'react';
import { allContext } from '../Contexts';
import { ImCancelCircle } from 'react-icons/im';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import SingleCartData from './singleCartData';

const AllCart = () => {
    const navigate = useNavigate()
    document.title = 'Gadget Heaven | cart'
    const { cartData, setCartData } = useContext(allContext)
    const [cardsssData, setCardsssData] = useState(cartData)
    const [totalPrice, setTotalPrice] = useState(0)

    const deleteCartItem = (id) => {
        const result = cardsssData.filter(p => p.id !== id)
        setCardsssData(result)
        setCartData(result)
    }
    const sortByPrice = () => {
        const sortedData = [...cardsssData].sort((a, b) => b.price - a.price);
        setCardsssData(sortedData);
    };

    const handlePurchase = () => {
        document.getElementById('my_modal_1').showModal()
        setCardsssData([])
        setCartData([])
    }
    const closeModalAndDoPurchase = () => {
        navigate('/')
    }

    useEffect(() => {
        let total = 0;
        for (let i = 0; i < cardsssData.length; i++) {
            total = total + cardsssData[i].price
        }
        setTotalPrice(total.toFixed(2))
    }, [cardsssData])

    return (
        <div className='container pb-14 mx-auto mt-6 px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
                <p className='text-xl sm:text-2xl font-bold'>Cart</p>
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-2 items-stretch sm:items-center w-full sm:w-auto'>
                    <p className='text-sm sm:text-base font-medium'>Total Cost: ${totalPrice}</p>
                    <button className='border px-3 sm:px-4 py-2 rounded-3xl font-semibold text-sm sm:text-base' onClick={() => sortByPrice()}>Sort by price</button>
                    <button onClick={handlePurchase} className='rounded-3xl bg-purple-500 py-2 px-3 sm:px-4 text-white font-semibold text-sm sm:text-base' disabled={cardsssData.length === 0 ? true : false}>Purchase</button>
                </div>
            </div>

            {/* all cart data will be stored here */}
            {
                cardsssData.length === 0 ?
                    <div className='ml-4 sm:ml-10 mt-10 text-2xl sm:text-3xl md:text-4xl'>
                        You haven't added anything in your cart . . .
                        <div>
                            <button className='px-4 py-2 bg-blue-500 rounded-3xl text-sm sm:text-base text-white mt-10'>
                                <Link to='/'>Add something</Link>
                            </button>
                        </div>
                    </div>
                    : ''
            }
            <div>
                {
                    cardsssData.map(data => {

                        return <div className='max-w-[1280px] w-full flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 p-4 sm:p-5 md:p-7 my-4 sm:my-6 border mx-auto bg-[#f6f6f6] rounded-2xl'>
                            <div className='w-full sm:w-[150px] md:w-[200px] h-48 sm:h-[100px] md:h-[124px] flex-shrink-0'>
                                <img src={data.img} className='w-full h-full rounded-xl object-cover' />
                            </div>

                            <div className='flex-1 flex flex-col justify-between gap-2'>
                                <p className='text-lg sm:text-xl md:text-2xl font-semibold'>{data.title}</p>
                                <p className='text-sm sm:text-base opacity-70 line-clamp-2'>{data.description}</p>
                                <p className='font-medium text-sm sm:text-base'>Price: ${data.price}</p>
                            </div>
                            <div className='flex justify-end sm:justify-start'>
                                <button onClick={() => deleteCartItem(data.id)}>
                                    <ImCancelCircle size='24' className='sm:w-6 sm:h-6' />
                                </button>
                            </div>
                        </div>
                    })
                }
            </div>

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box flex flex-col items-center gap-2 mx-4">
                    <div>
                        <img src="/Group.png" alt="" className='w-16 sm:w-20 md:w-auto' />
                    </div>
                    <p className='text-xl sm:text-2xl font-semibold text-center'>Payment Successfully</p>
                    <hr className='w-full' />
                    <p className='mb-2 text-sm sm:text-base'>Thanks for purchasing</p>
                    <form method="dialog">
                        <button onClick={closeModalAndDoPurchase} className="btn text-sm sm:text-base">Close</button>
                    </form>
                </div>
            </dialog>

        </div>
    );
};

export default AllCart;