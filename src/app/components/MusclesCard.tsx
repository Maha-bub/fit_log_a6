import { MuscleType } from '@/types/muscle.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosStarOutline } from 'react-icons/io';
import { MdOutlineWatchLater } from 'react-icons/md';
import { PiBowlFoodLight } from 'react-icons/pi';

interface MuscleTypeProps {
    muscle: MuscleType;
}
const MusclesCard = ({ muscle }: MuscleTypeProps) => {
    const { image, name, muscleGroups, equipment, duration, caloriesBurned, rating } = muscle;
    return (
        <div className='p-2'>
            <Link href={`/`}>
                <Image
                    src={image}
                    width={400}
                    height={300}
                    alt={name}
                    // unoptimized
                    className="w-full h-60 object-cover rounded-t-xl"
                />

                <ul className="flex gap-3 mt-5 mb-3">
                    {muscleGroups.map((muscle) => (
                        <li
                            key={muscle}
                            className="text-[16px] bg-[#C6F602] py-0.5 px-4 font-semibold rounded-full text-black"
                        >
                            {muscle}
                        </li>
                    ))}
                </ul>
                <span className='text-md font-semibold my-2'>
                    {equipment.split(',')}
                </span>


                <h2 className='text-2xl font-bold py-3 border-b border-slate-600'>{name}</h2>

                <div className='flex justify-items-start space-x-6 py-3'>
                    <span className='flex gap-1 justify-between items-center text-md font-semibold'><MdOutlineWatchLater />{duration}</span>
                    <span className='flex gap-1 justify-between items-center text-md font-semibold'><PiBowlFoodLight />{caloriesBurned}</span>
                    <span className='flex gap-1 justify-between items-center text-md font-semibold'><IoIosStarOutline />{rating}</span>
                </div>
            </Link>

        </div>
    );
};

export default MusclesCard;