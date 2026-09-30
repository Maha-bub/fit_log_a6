'use client';

import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

const MarksAsDone = () => {
    const [isActive, setIsActive] = useState(false);

    const handleMarksAsDone = () => {
        setIsActive(true);
        toast.success('marks a done')
    };

    return (
        <button
            onClick={handleMarksAsDone}
            disabled={isActive}
            className={`btn text-sm md:text-lg md:border rounded-full py-1 md:py-3 md:font-semibold ${isActive
                ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                : 'bg-[#C6F602] text-black'
                }`}
        >
            {isActive ? (
                <>
                    <FaCheck className='' />
                    Done
                </>
            ) : (
                'Marks as done'
            )}
        </button>

    );
};

export default MarksAsDone;