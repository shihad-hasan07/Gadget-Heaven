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
            <div className='flex flex-col items-center'>
                <div className='flex gap-5'>
                    <div>
                        <aside className='flex flex-col p-6 rounded-3xl bg-[#f1efef86]'>
                            <Categories categoryList={categoryList}></Categories>
                        </aside>
                    </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;