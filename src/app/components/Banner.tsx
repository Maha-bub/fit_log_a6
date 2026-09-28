import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/banner.png'

const Banner = () => {
    return (
        <div className='container mx-auto flex flex-col lg:flex-row justify-center items-center bg-[#15171D] my-12 rounded-2xl py-12 px-6 '>
            <div className='space-y-2 mb-4 md:space-y-3'>
                <h2 className='font-semibold text-[#C6F602] uppercase text-sm'>Workout Library</h2>
                <h1 className='text-4xl md:text-6xl font-bold uppercase'>Train with intent.Log <br /> every set.</h1>
                <p className='text-[16px] text-[#949BA7] font-semibold'>FitLog is a dark,no-nonsense gym companion:pick a lift lock it inot today&apos;s plan, and watch the week&apos;s add up.</p>                <button className='btn bg-[#C6F602] uppercase text-black font-bold'>
                    Browse workouts
                </button>
            </div>
            <div className="mx-auto w-full max-w-2xl px-4 text-center">
                <Image
                    src={bannerImg}
                    alt='Banner Image'
                    width={400}
                    className=' mt-3'
                ></Image>
            </div>

        </div>
    );
};

export default Banner;