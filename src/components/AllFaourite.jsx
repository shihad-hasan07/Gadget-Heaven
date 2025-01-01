import React, { useContext, useState } from 'react';
import { allContext } from '../Contexts';
import { ImCancelCircle } from 'react-icons/im';
import { Link } from 'react-router-dom';

const AllFaourite = () => {
    const { addToCart, favouriteData, setFavouriteData } = useContext(allContext)
    const [wishlist, setWishlist] = useState(favouriteData)

    console.log('wishlit', wishlist);

    const deleteWishlistItem = (id) => {
        const updatedWishlist = wishlist.filter(p => p.id !== id)
        setWishlist(updatedWishlist)
        setFavouriteData(updatedWishlist)
    }

    return (
        <div className='container mx-auto mt-6'>
            <p className='text-2xl font-bold'>Wishlist</p>
            {
                wishlist.length === 0 ?
                    <div className='ml-10 mt-10 text-4xl'>You haven't added anything in your wishlist . . .
                        <div><button className='px-4 py-2 bg-blue-500 rounded-3xl text-base text-white mt-10'><Link to='/'>Add something</Link></button></div>
                    </div>
                    : ''
            }
            <div>
                {
                    wishlist.map(data => {
                        console.log(data)

                        return <div className='w-[1280px] flex gap-8 p-7 my-6 border mx-auto bg-[#f6f6f6] rounded-2xl'>
                            <div className='w-[200px] h-[124px]'>
                                <img src={data.img} className='w-full h-full rounded-xl object-cover' />
                            </div>

                            <div className='w-[1180px] flex flex-col justify-between'>
                                <p className='text-2xl font-semibold'>{data.title}</p>
                                <p className='text-base opacity-70'>{data.description}</p>
                                <p className='font-medium'>Price : {data.price}</p>
                                <div><button onClick={() => addToCart(data.id, data.img, data.description,data.title, data.price)} className='bg-blue-600 text-white px-4 py-1 rounded-2xl'>Add to cart</button></div>
                            </div>
                            <div>
                                <button onClick={() => deleteWishlistItem(data.id)} ><ImCancelCircle size='26' /></button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default AllFaourite;