import Image from 'next/image';
import React from 'react';
import { IoIosStarOutline, IoMdTimer } from 'react-icons/io';
import { PiBowlFoodLight } from 'react-icons/pi';

const MusclesCard = ({ muscle }) => {
    const { id, image, name, muscleGroups, equipment, difficulty, duration, caloriesBurned, sets, rating } = muscle;
    return (
        <div className='p-2'>
            <div>
                <Image
                    src={image}
                    width={400}
                    height={300}
                    alt={name}
                    unoptimized
                    className="w-full h-60 object-cover rounded-xl"
                />

                {/* <ul className='flex gap-3 bg-[C6F602]'>
                    {muscleGroups.map(muscle => (

                        <li className='text-[16px] font-semibold rounded-full' >{muscle}</li>
                    ))}
                </ul> */}

                <ul className="flex gap-3 my-5">
                    {muscleGroups.map((muscle) => (
                        <li
                            key={muscle}
                            className="text-[16px] bg-[#C6F602] py-0.5 px-4 font-semibold rounded-full text-black"
                        >
                            {muscle}
                        </li>
                    ))}
                </ul>
                <span className='text-md font-semibold'>
                    {equipment.split(',')}
                </span>


                <h2 className='text-2xl font-bold py-3 border-b border-slate-600'>{name}</h2>
            
                <div className='flex justify-start gap-4 py-3'>
                    <span className='flex justify-between items-center text-md font-semibold'><IoMdTimer />{duration}</span>
                    <span className='flex justify-between items-center text-md font-semibold'><PiBowlFoodLight />{caloriesBurned}</span>
                    <span className='flex justify-between items-center text-md font-semibold'><IoIosStarOutline />{rating}</span>
                </div>
            </div>

        </div>
    );
};

export default MusclesCard;