'use client';
import React, { useContext } from 'react';
import { MuscleContext } from '../context/MuclesContext';
import { MuscleType } from '@/types/muscle.type';
import { toast } from 'react-toastify';
import { HiBookmark } from 'react-icons/hi';


const SaveLetter = ({ muscle }: { muscle: MuscleType }) => {
    const { saveLetter, setSaveLetter } = useContext(MuscleContext) as {
        saveLetter: MuscleType[];
        setSaveLetter: React.Dispatch<React.SetStateAction<MuscleType[]>>;
    };

    const handleSavedLetter = () => {

        if (saveLetter.some(saveLetter => saveLetter.id === muscle.id)) {
            toast.warning('Already added !')
            return;
        }


        setSaveLetter([...saveLetter, muscle])
        toast.success('Card added successfully!')
        console.log(saveLetter)
    }
    return (
        <button className='btn btn-outline text-lg border rounded-xl border-slate-500 font-semibold'
            onClick={handleSavedLetter}>
            <HiBookmark className="" /> Save for letter
        </button>
    );
};

export default SaveLetter;