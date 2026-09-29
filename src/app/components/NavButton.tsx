'use client'
import Link from 'next/link';
import { MuscleContext } from '../context/MuclesContext';
import { useContext } from 'react';
import { MuscleContextType } from '@/types/muscleContext.type';

const NavButton = () => {
    const { todaysPlan, saveLetter } = useContext(MuscleContext) as MuscleContextType;
    return (
        <div className="hidden md:flex navbar-end gap-3">
            <Link href={`/listedcard`} className='text-sm font-bold flex justify-center items-center gap-2'> Plan  <span className="w-6 h-6 rounded-full bg-[#C6F602] text-black items-center flex text-center justify-center">{`${todaysPlan.length}`}</span></Link>
            <Link href={`/listedcard`} className='text-sm font-bold flex justify-center items-center gap-2'> Saved <span className="w-6 h-6 rounded-full text-white border flex justify-center items-center border-gray-400">{`${saveLetter.length}`}</span></Link>
        </div>
    );
};

export default NavButton;