import { Result } from "postcss";
import { createContext, useState } from "react";

export const allContext = createContext()

const Contexts = ({ allroutes }) => {
    const [cartData,setCartData]=useState([])

    const addToCart = (id,img, description, title, price) => {
        const datas = { id,title, description, img, price }
        setCartData([...cartData,datas])
    }

    const addToFavourite = () => {

    }


    const contextlists = {
        addToCart,
        addToFavourite,
        cartData,
        setCartData
    }

    return (
        <div>
            <allContext.Provider value={contextlists}>{allroutes}</allContext.Provider>
        </div>
    );
};

export default Contexts;