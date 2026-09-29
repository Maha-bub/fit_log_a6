'use client'
import React, { useContext } from 'react';
import { MuscleContext } from '../context/MuclesContext';
import { MuscleType } from '@/types/muscle.type';

const ListedDetailsPage = () => {
    const { todaysPlan, saveLetter } = useContext(MuscleContext);
    const totalDuration = todaysPlan.reduce((accumulator: number, currentMunites: MuscleType) => {
        return accumulator + currentMunites.duration;
    }, 0);
    const totalCalories = todaysPlan.reduce((calories: number, currentItem: MuscleType) => {
        return calories + currentItem.caloriesBurned;
    }, 0);
    return (
        <div className="container mx-auto space-y-5 mt-12 px-4">
            <div>
                <h2 className="text-3xl font-bold uppercase ">The Library</h2>
                <p className="text-lg font-sans text-gray-400">Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="lg:flex justify-between mx-auto items-center bg-[#13161D] rounded-2xl px-4 py-5">
                <div>
                    <h2 className='text-lg text-gray-400 font-semibold'>Exercises</h2>
                    <p className='text-4xl font-bold text-[#C6F602]'>{todaysPlan.length}</p>
                </div>
                <div>
                    <h2 className='text-lg text-gray-400 font-semibold'>Minutes</h2>
                    <p className='text-4xl font-bold text-[#C6F602]'>{totalDuration > 0 ? totalDuration : 0}</p>
                </div>
                <div>
                    <div className='mr-6'>
                        <h2 className='text-lg text-gray-400 font-semibold'>Calories</h2>
                        <p className='text-4xl font-bold text-[#C6F602]'>{totalCalories > 0 ? totalCalories : 0}</p>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default ListedDetailsPage;