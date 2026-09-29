import Link from 'next/link';
const NoDataSelected = () => {
    return (
        <div>
            <div className='container mx-auto max-h-80 text-center items-center bg-[#13161D] rounded-lg py-5 mt-3 md:py-14 space-y-2'>
                <h2 className='text-xl md:text-3xl font-bold '>Noting added Yet.</h2>
                <p className='text-sm font-semibold px-3 md:text-lg text-gray-400'>Browse the library and add a lift to get today moving.</p>
                <Link href={`/`}>
                    <button className='btn bg-[#C6F602] text-sm md:text-lg border rounded-full py-1 md:py-3 text-black font-semibold'>
                        Browse workouts
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NoDataSelected;