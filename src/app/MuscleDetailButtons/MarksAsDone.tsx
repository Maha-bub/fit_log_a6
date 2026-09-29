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
            className={`btn text-lg border rounded-full py-3 font-semibold ${isActive
                ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                : 'bg-[#C6F602] text-black'
                }`}
        >
            {isActive ? (
                <>
                    <FaCheck />
                    Done
                </>
            ) : (
                'Marks as done'
            )}
        </button>

    );
};

export default MarksAsDone;