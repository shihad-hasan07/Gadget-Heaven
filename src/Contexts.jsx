import { Result } from "postcss";
import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export const allContext = createContext()

const Contexts = ({ allroutes }) => {
    const [cartData, setCartData] = useState([])
    const [favouriteData, setFavouriteData] = useState([])
    const [disableFavBtn,setdisableFavBtn]=useState(false)

    const addToCart = (id, img, description, title, price) => {
        const datas = { id, title, description, img, price }

        const isExist = cartData.find(d => d.id == id)
        if (isExist == undefined) {
            setCartData([...cartData, datas])
            toast.success('Added to cart')
        }
        else {
            toast.error('Already exist')
        }
    }

    const addToFavourite = (id, img, description, title, price) => {
        const wishlistsss = { id, img, description, title, price }
        const isexist = favouriteData.find(d => d.id == id)
        console.log(isexist);


        if (isexist == undefined) {
            setFavouriteData([...favouriteData, wishlistsss])
            toast.success('Added to wishlist')
        }
        else {
            toast.error('Already exist')
        }
        setdisableFavBtn(true)
    }

    const contextlists = {
        addToCart, addToFavourite,
        cartData, setCartData,
        favouriteData, setFavouriteData,
        disableFavBtn,setdisableFavBtn
    }

    return (
        <div>
            <allContext.Provider value={contextlists}>{allroutes}</allContext.Provider>
        </div>
    );
};

export default Contexts;