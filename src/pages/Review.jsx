import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

const Review = () => {
    document.title = 'Gadget Heaven | review'
    return (
        <div className=''>
            <div className="bg-purple-600 text-center py-7">
                <p className="text-3xl text-white">User Review</p>
                <p className="text-white opacity-75 my-3">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            <div className='container mx-auto px-14 my-12'>
                <p className='text-2xl font-bold'>What do our user say?</p>
                <div className='mt-10'>

                {/* card one */}
                    <div className="flex gap-5 border rounded-3xl p-4 bg-[#e7e1e1]">
                        <div >
                            <div className='w-32 h-32'>
                                <img src="/person1.jpg" className='w-full h-full object-cover rounded-full' alt="" /></div>
                        </div>
                        <div>
                            <p className='text-blue-500 font-bold text-2xl'>Harry potter</p>
                            <p className='mb-2 italic'>developer</p>
                            <div className='flex gap-[1px] mb-1'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <p className='text-sm my-2'>সেলুলার নেটওয়ার্ক অনেক দুর্বল,ওয়াইফাই নেটওয়ার্ক ফাস্ট, এক চার্জে একটানা তিন থেকে পাঁচ ঘণ্টা চলে এবং না চালাইলে এক চার্জে দেড় থেকে দুই দিন চলে। তবে চার্জার পাঁচ দিনের মধ্যে নষ্ট হয়ে গেছে। ওটিজি নট সাপোর্টটেট। অন্যান্য সবকিছু ঠিক আছে।</p>
                        </div>
                    </div>

                {/* card two */}
                    <div className="flex gap-5 mt-6 border rounded-3xl p-4 bg-[#e7e1e1]">
                        <div >
                            <div className='w-32 h-32'>
                                <img src="/person2.jpg" className='w-full h-full object-cover rounded-full' alt="" /></div>
                        </div>
                        <div>
                            <p className='text-blue-500 font-bold text-2xl'>Juliyet</p>
                            <p className='mb-2 italic'>designer</p>
                            <div className='flex gap-[1px] mb-1'>
                                <FaStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <p className='text-sm my-2'>এই মোবাইল টি মোটেও  ভালো নয় যদি আমি ব্যাবহার না করতাম তাহলে বুঝতে পারতাম না মোবাইলের অবস্থা। এই মোবাইলটি বাহিরে যতটা সুন্দর দেখায় ভিতরে তার চেয়ে অনেক অনেক বাজে। যা লিখে বুঝানোর মতো না দরে নিতে পারেন সেই মোবাইল ফোনটা মাকাল ফলের মতো। দয়া করে এই মোবাইলটি ক্রয় করে নিজেকে বিরক্তি মধ্যে পরবেন না।</p>
                        </div>
                    </div>

                    {/* card three */}
                    <div className="flex mt-6 gap-5 border rounded-3xl p-4 bg-[#e7e1e1]">
                        <div >
                            <div className='w-32 h-32'>
                                <img src="/person3.jpg" className='w-full h-full object-cover rounded-full' alt="" /></div>
                        </div>
                        <div>
                            <p className='text-blue-500 font-bold text-2xl'>Abdul kalam</p>
                            <p className='mb-2 italic'>cokidar</p>
                            <div className='flex gap-[1px] mb-1'>
                                <FaStar />
                                <FaStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <p className='text-sm my-2'>ও এত অল্প দামের ভিতরে খুবই ভালো laptop ধন্যবাদ সেলার ভাইকে</p>
                        </div>
                    </div>

                    {/* card four */}
                    <div className="flex mt-6 gap-5 border rounded-3xl p-4 bg-[#e7e1e1]">
                        <div >
                            <div className='w-32 h-32'>
                                <img src="/person4.jpg" className='w-full h-full object-cover rounded-full' alt="" /></div>
                        </div>
                        <div>
                            <p className='text-blue-500 font-bold text-2xl'>Harry potter</p>
                            <p className='mb-2 italic'>developer</p>
                            <div className='flex gap-[1px] mb-1'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <p className='text-sm my-2'>সেলুলার নেটওয়ার্ক অনেক দুর্বল,ওয়াইফাই নেটওয়ার্ক ফাস্ট, এক চার্জে একটানা তিন থেকে পাঁচ ঘণ্টা চলে এবং না চালাইলে এক চার্জে দেড় থেকে দুই দিন চলে। তবে চার্জার পাঁচ দিনের মধ্যে নষ্ট হয়ে গেছে। ওটিজি নট সাপোর্টটেট। অন্যান্য সবকিছু ঠিক আছে।</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;