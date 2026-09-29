import { MuscleType } from '@/types/muscle.type';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosStarOutline } from 'react-icons/io';
import { MdOutlineWatchLater } from 'react-icons/md';
import { PiBowlFoodLight } from 'react-icons/pi';

interface MuscleTypeProps {
    muscle: MuscleType;
}
const MusclesCard = ({ muscle }: MuscleTypeProps) => {
    const { image, name, muscleGroups, equipment, duration, caloriesBurned, rating } = muscle;
    return (
        <div className='mb-4 hover:border hover:border-amber-200 hover:rounded-xl'>
            <Link href={`muscles/${muscle.id}`}>
                <Image
                    src={image}
                    width={400}
                    height={300}
                    alt={name}
                    className="w-full text-center h-40 md:h-60 object-cover rounded-t-xl"
                />

                <div className='px-3 bg-gray-800 border border-gray-600 rounded-b-2xl'>
                    <ul className="flex gap-3 mt-5 mb-3">
                        {muscleGroups.map((muscle) => (
                            <li
                                key={muscle}
                                className="text-[16px] bg-[#C6F602] sm:py-0.5 px-2 md:px-4 rounded-full text-black"
                            >
                                {muscle}
                            </li>
                        ))}
                    </ul>


                    <h2 className='text-xl md:text-2xl font-bold '>{name}</h2>
                    <div className='text-sm md:text-md mb-1 pb-4 border-b border-slate-600'>
                        {equipment.split(',')}
                    </div>

                    <div className='flex justify-items-start space-x-6 py-3'>
                        <span className='flex gap-2 justify-between items-center text-md '><MdOutlineWatchLater />{duration}</span>
                        <span className='flex gap-2 justify-between items-center text-md '><PiBowlFoodLight />{caloriesBurned}</span>
                        <span className='flex gap-2 justify-between items-center text-md '><IoIosStarOutline />{rating}</span>
                    </div>

                </div>
            </Link>

        </div>
    );
};

export default MusclesCard;