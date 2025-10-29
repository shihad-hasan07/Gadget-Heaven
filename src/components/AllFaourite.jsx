import React, { useContext, useState } from 'react';
import { allContext } from '../Contexts';
import { ImCancelCircle } from 'react-icons/im';
import { Link } from 'react-router-dom';

const AllFaourite = () => {
     document.title='Gadget Heaven | wishlist'
    const { addToCart, favouriteData, setFavouriteData } = useContext(allContext)
    const [wishlist, setWishlist] = useState(favouriteData)


    const deleteWishlistItem = (id) => {
        const updatedWishlist = wishlist.filter(p => p.id !== id)
        setWishlist(updatedWishlist)
        setFavouriteData(updatedWishlist)
    }

    return (
        <div className='container mx-auto pb-14 mt-6 px-4 sm:px-6 lg:px-8'>
            <p className='text-xl sm:text-2xl font-bold'>Wishlist</p>
            {
                wishlist.length === 0 ?
                    <div className='ml-4 sm:ml-10 mt-10 text-2xl sm:text-3xl md:text-4xl'>
                        You haven't added anything in your wishlist . . .
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
                    wishlist.map(data => {
                        console.log(data)

                        return <div className='max-w-[1280px] w-full flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 p-4 sm:p-5 md:p-7 my-4 sm:my-6 border mx-auto bg-[#f6f6f6] rounded-2xl'>
                            <div className='w-full sm:w-[150px] md:w-[200px] h-48 sm:h-[100px] md:h-[124px] flex-shrink-0'>
                                <img src={data.img} className='w-full h-full rounded-xl object-cover' />
                            </div>

                            <div className='flex-1 flex flex-col justify-between gap-2'>
                                <p className='text-lg sm:text-xl md:text-2xl font-semibold'>{data.title}</p>
                                <p className='text-sm sm:text-base opacity-70 line-clamp-2'>{data.description}</p>
                                <p className='font-medium text-sm sm:text-base'>Price : {data.price}</p>
                                <div><button onClick={() => addToCart(data.id, data.img, data.description,data.title, data.price)} className='bg-blue-600 text-white px-4 py-1 rounded-2xl text-sm sm:text-base'>Add to cart</button></div>
                            </div>
                            <div className='flex justify-end sm:justify-start'>
                                <button onClick={() => deleteWishlistItem(data.id)} ><ImCancelCircle size='24' className='sm:w-6 sm:h-6' /></button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default AllFaourite;