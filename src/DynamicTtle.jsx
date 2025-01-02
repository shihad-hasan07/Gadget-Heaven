import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export const DynamicTtlelists = [
    { path: '/', title: 'Home Page' },
    { path: '/statictics', title: 'Statistics' },
    { path: '/dashboard', title: 'Dashboard' },
    { path: '/dashboard/cart', title: 'Your Cart' },
    { path: '/dashboard/favourite', title: 'Your Favorites' },
    { path: '/product/:id', title: 'Product Details' },
  ];

const DynamicTtle = ({allRoutes}) => {
    const location=useLocation()

    useEffect(()=>{
        const isRoute=DynamicTtle.find(route=>
            location.pathname.
        )

    },[location])

    return (
        <div>
            
        </div>
    );
};

export default DynamicTtle;