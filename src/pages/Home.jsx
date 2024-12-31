import React from 'react';
// import './app.css''
import '/src/style.css'
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../components/Categories';
import Banner from '../components/Banner';



const Home = () => {
    const categoryList = useLoaderData()

    return (
        <div className=''>
            <Banner></Banner>


            {/* all home page data */}
            <div className='flex flex-col items-center'>
                <div className='flex gap-5'>
                    <aside className='flex flex-col'>
                        <Categories categoryList={categoryList}></Categories>
                    </aside>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;