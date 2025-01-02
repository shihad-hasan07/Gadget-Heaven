import React from 'react';

const Statistics = () => {
    document.title = 'Gadget Heaven | statistics'
    return (
        <div className=''>
            <div className="bg-purple-600 text-center py-7">
                <p className="text-3xl text-white">Statistics</p>
                <p className="text-white opacity-75 my-3">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className='container mx-auto px-14 my-12'>
                <p className='text-2xl font-bold'>Statistics</p>
                <div className="flex justify-center gap-4">
                    <img src="/statstics.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Statistics;