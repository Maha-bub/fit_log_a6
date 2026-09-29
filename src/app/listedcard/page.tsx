'use client'
import { useContext, useState } from 'react';
import { MuscleContext } from '../context/MuclesContext';
import { MuscleType } from '@/types/muscle.type';

import Link from 'next/link';
import ListedCard from '../components/ListedCard';

const ListedDetailsPage = () => {

    const [isActive, setIsActive] = useState(true);

    const handleTabBtn = (result: boolean) => {
        return setIsActive(result);

    }


    const { todaysPlan, saveLetter } = useContext(MuscleContext);

    const totalDuration = todaysPlan.reduce((accumulator: number, currentMunites: MuscleType) => {
        return accumulator + currentMunites.duration;
    }, 0);
    const totalCalories = todaysPlan.reduce((calories: number, currentItem: MuscleType) => {
        return calories + currentItem.caloriesBurned;
    }, 0);

    const savedTotalDuration = saveLetter.reduce((accumulator: number, currentMunites: MuscleType) => {
        return accumulator + currentMunites.duration;
    }, 0);
    const savedTotalCalories = saveLetter.reduce((calories: number, currentItem: MuscleType) => {
        return calories + currentItem.caloriesBurned;
    }, 0);


    return (
        <div className="container mx-auto space-y-5 mt-12 px-4">
            <div>
                <h2 className="text-3xl font-bold uppercase ">The Library</h2>
                <p className="text-lg font-sans text-gray-400">Twelve lifts covering every major muscle group.</p>
            </div>

            {isActive ? <div className="lg:flex justify-between mx-auto items-center bg-[#13161D] rounded-2xl px-4 py-5">
                <div>
                    <h2 className='text-lg text-gray-400 font-semibold'>Exercises</h2>
                    <p className='text-4xl font-bold text-[#C6F602]'>{todaysPlan.length}</p>
                </div>
                <div>
                    <h2 className='text-lg text-gray-400 font-semibold'>Minutes</h2>
                    <p className='text-4xl font-bold '>{totalDuration > 0 ? totalDuration : 0}</p>
                </div>
                <div>
                    <div className='mr-6'>
                        <h2 className='text-lg text-gray-400 font-semibold'>Calories</h2>
                        <p className='text-4xl font-bold'>{totalCalories > 0 ? totalCalories : 0}</p>
                    </div>
                </div>



            </div> :
                <div className="lg:flex justify-between mx-auto items-center bg-[#13161D] rounded-2xl px-4 py-5">
                    <div>
                        <h2 className='text-lg text-gray-400 font-semibold'>Exercises</h2>
                        <p className='text-4xl font-bold text-[#C6F602]'>{saveLetter.length}</p>
                    </div>
                    <div>
                        <h2 className='text-lg text-gray-400 font-semibold'>Minutes</h2>
                        <p className='text-4xl font-bold '>{savedTotalDuration > 0 ? savedTotalDuration : 0}</p>
                    </div>
                    <div>
                        <div className='mr-6'>
                            <h2 className='text-lg text-gray-400 font-semibold'>Calories</h2>
                            <p className='text-4xl font-bold'>{savedTotalCalories > 0 ? savedTotalCalories : 0}</p>
                        </div>
                    </div>



                </div>}



            <div className=" border rounded-lg border-slate-600 py-3 px-4">
                <div className='flex justify-between items-center w-full'>

                    <div className='flex  bg-[#1a1f23] justify-between rounded-lg p-2 border border-gray-500'>

                        <button
                            onClick={() => handleTabBtn(true)}
                            className={`btn bg-[#252930] py-1 px-2 rounded-md ${isActive ? 'bg-[#252930] text-white'
                                : 'bg-transparent text-gray-500 font-extralight'}`}
                        >
                            Today&apos;s Plan
                        </button>
                        <button
                            onClick={() => handleTabBtn(false)}
                            className={`btn bg-[#252930]  py-1 px-2 rounded-md ${!isActive ? 'bg-[#252930] text-white'
                                : 'bg-transparent text-gray-500 font-extralight'}`} >
                            Saved Letter
                        </button>



                    </div>
                    <select defaultValue="Pick a Runtime" className="select select-success">
                        <option disabled={true}>Select</option>
                        <option>Durations</option>
                        <option>Calories</option>
                        <option>Rating</option>
                    </select>



                </div>
                {todaysPlan.length > 0 ?

                    <div className='container grid grid-cols-1 gap-2'>
                        {
                            todaysPlan.map((card) => <ListedCard card={card} key={card.id}></ListedCard>)
                        }


                    </div> :
                    <div className='container mx-auto max-h-80 text-center items-center bg-[#13161D] rounded-lg py-14 space-y-2'>
                        <h2 className='text-3xl font-bold '>Noting added Yet.</h2>
                        <p className='text-lg text-gray-400'>Browse the library and add a lift to get today moving.</p>
                        <Link href={`/`}>
                            <button className='btn bg-[#C6F602] text-lg border rounded-full py-3 text-black font-semibold'>
                                Browse workouts
                            </button>
                        </Link>
                    </div>}

            </div>

        </div >
    );
};

export default ListedDetailsPage;