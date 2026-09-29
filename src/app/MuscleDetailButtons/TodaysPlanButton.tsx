'use client';
import React, { useContext } from 'react';
import { MdToday } from 'react-icons/md';
import { MuscleContext } from '../context/MuclesContext';
import { MuscleType } from '@/types/muscle.type';
import { toast } from 'react-toastify';


const TodaysPlanButton = ({ muscle }: { muscle: MuscleType }) => {
    const { todaysPlan, setTodaysPlan } = useContext(MuscleContext) as {
        todaysPlan: MuscleType[];
        setTodaysPlan: React.Dispatch<React.SetStateAction<MuscleType[]>>;
    };

    const handleTodaysPlan = () => {

        if (todaysPlan.some(plan => plan.id === muscle.id)) {
            toast.warning('Already added !')
            return
        }

        setTodaysPlan([...todaysPlan, muscle])
        toast.success(`${muscle.name} saved for letter successfully!`)

        // console.log(todaysPlan)
    }
    return (
        <button className='btn bg-[#C6F602] text-lg border rounded-xl text-black font-semibold'
            onClick={handleTodaysPlan}>
            <MdToday /> Add to today&apos;s plan
        </button>
    );
};

export default TodaysPlanButton;