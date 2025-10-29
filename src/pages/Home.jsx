import React from 'react';
// import './app.css''
import '/src/style.css'
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../components/Categories';
import Banner from '../components/Banner';



const Home = () => {
    document.title = 'Gadget Heaven'
    const categoryList = useLoaderData()

    return (
        <div className='pb-36'>
            <Banner></Banner>


            {/* all home page data */}
            <div className='flex flex-col items-center px-4'>
                <div className='flex flex-col lg:flex-row gap-5 w-full max-w-7xl'>
                    <div className='w-full lg:w-auto'>
                        <aside className='flex flex-col p-4 sm:p-6 rounded-3xl bg-[#f1efef86]'>
                            <Categories categoryList={categoryList}></Categories>
                        </aside>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;