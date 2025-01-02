import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-black text-center mt-56 bg-[#ffffff]'>
            <p className='tracking-wide text-rose-500 text-9xl'>404</p>
            <p className='tracking-wide font-roboto font-light text-2xl my-4'>OOPS! NOTHING WAS FOUND</p>
            <p className='leading-loose tracking-wide font-roboto font-extralight text-xl'>The page you are looking for might have been
                removed had its name changed or is temporarily
                <br />
                unavailable.
            <Link to='/' className='ml-3 font-medium text-rose-500'>Return to homepage</Link>
            </p>
        </div>
    );
};

export default ErrorPage;