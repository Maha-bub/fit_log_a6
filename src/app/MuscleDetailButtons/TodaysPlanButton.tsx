'use client';
import React, { useContext } from 'react';
import { MdToday } from 'react-icons/md';
import { MuscleContext } from '../context/MuclesContext';
import { MuscleType } from '@/types/muscle.type';

const TodaysPlanButton = ({muscle}:{muscle:MuscleType}) => {
    const { todaysPlan, setTodaysPlan } = useContext(MuscleContext) as {
        todaysPlan: MuscleType[];
        setTodaysPlan: React.Dispatch<React.SetStateAction<MuscleType[]>>;
    };
    
    // console.log(muscle)
    // const {todaysPlan}=contextData;
    const handleTodaysPlan=()=>{
        // console.log('Todays btn clicked ')
        setTodaysPlan([...todaysPlan,muscle])
        console.log(todaysPlan)
    }
    return (
        <button className='btn bg-[#C6F602] text-lg border rounded-xl text-black font-semibold'
        onClick={handleTodaysPlan}>
            <MdToday /> Add to today&apos;s plan
        </button>
    );
};

export default TodaysPlanButton;