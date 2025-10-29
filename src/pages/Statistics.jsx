import React from 'react';

const Statistics = () => {
    document.title = 'Gadget Heaven | statistics'
    return (
        <div className=''>
            <div className="bg-purple-600 text-center py-6 md:py-7 px-4">
                <p className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold">Statistics</p>
                <p className="text-white opacity-75 my-2 md:my-3 text-sm md:text-base max-w-3xl mx-auto px-2">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className='container mx-auto px-4 sm:px-6 md:px-10 lg:px-14 my-8 md:my-12'>
                <p className='text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-center md:text-left'>Statistics</p>
                <div className="flex justify-center items-center">
                    <div className="w-full max-w-full overflow-hidden">
                        <img 
                            src="/statstics.png" 
                            alt="Statistics Chart" 
                            className="w-full h-auto object-contain max-w-6xl mx-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;