'use client'
import { useContext, useState } from 'react';
import { MuscleContext } from '../context/MuclesContext';
import { MuscleType } from '@/types/muscle.type';
import ListedCard from '../components/ListedCard';
import NoDataSelected from '../components/NoDataSelected';
import { MuscleContextType } from '@/types/muscleContext.type';

const ListedDetailsPage = () => {

    const [isActive, setIsActive] = useState(true);

    const handleTabBtn = (result: boolean) => {
        return setIsActive(result);

    }


    const { todaysPlan, saveLetter } = useContext(MuscleContext) as MuscleContextType;;

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


    const [sortBy, setSortBy] = useState<"rating" | "calories" | "duration">("rating")
    // console.log(sortBy, 'sortby')

    const handleSortList = ((muscle: MuscleType[]) => {

        const sortedMuscles = [...muscle]
        if (sortBy === "rating") {
            sortedMuscles.sort((a, b) => b.rating - a.rating)
        } else if (sortBy === "calories") {
            sortedMuscles.sort((a, b) => a.caloriesBurned - b.caloriesBurned)
        } else if (sortBy === "duration") { sortedMuscles.sort((a, b) => a.duration - b.duration) }
        return sortedMuscles;

    });
    const sortedTodaysPlan = handleSortList(todaysPlan);
    const sortedSaveLetter = handleSortList(saveLetter);

    return (
        <div className="container mx-auto space-y-5 mt-12 px-4">
            <div>
                <h2 className="text-xl sm:2xl md:text-3xl font-bold uppercase ">The Plan</h2>
                <p className="text-sm sm:text-xl font-sans text-gray-400">Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            {isActive ?
                <div className="flex justify-center gap-3 md:justify-between items-center mx-auto bg-[#13161D] rounded-2xl py-2 md:px-4 md:py-5">
                    <div>
                        <h2 className='text-sm md:text-lg text-gray-400 font-semibold'>Exercises</h2>
                        <p className='text-2xl md:text-4xl font-bold text-[#C6F602]'>{todaysPlan.length}</p>
                    </div>
                    <div>
                        <h2 className='text-sm md:text-lg text-gray-400 font-semibold'>Minutes</h2>
                        <p className='text-2xl md:text-4xl font-bold '>{totalDuration > 0 ? totalDuration : 0}</p>
                    </div>
                    <div>
                        <div className='mr-6'>
                            <h2 className=' text-sm md:text-lg text-gray-400 font-semibold'>Calories</h2>
                            <p className='text-2xl md:text-4xl font-bold'>{totalCalories > 0 ? totalCalories : 0}</p>
                        </div>
                    </div>
                </div> :
                <div className="flex justify-center gap-3 md:justify-between items-center mx-auto bg-[#13161D] rounded-2xl py-2 md:px-4 md:py-5">
                    <div>
                        <h2 className='text-sm md:text-lg text-gray-400 font-semibold'>Exercises</h2>
                        <p className='text-2xl md:text-4xl font-bold text-[#C6F602]'>{saveLetter.length}</p>
                    </div>
                    <div>
                        <h2 className='text-sm md:text-lg text-gray-400 font-semibold'>Minutes</h2>
                        <p className='text-2xl md:text-4xl font-bold'>{savedTotalDuration > 0 ? savedTotalDuration : 0}</p>
                    </div>
                    <div>
                        <div className='mr-6'>
                            <h2 className='text-sm md:text-lg text-gray-400 font-semibold'>Calories</h2>
                            <p className='text-2xl md:text-4xl font-bold'>{savedTotalCalories > 0 ? savedTotalCalories : 0}</p>
                        </div>
                    </div>



                </div>}



            <div className=" border rounded-lg border-slate-600 py-3 px-4">
                <div className='flex-col space-y-2 md:flex md:flex-row justify-between items-center w-full'>

                    <div className='flex bg-[#1a1f23] justify-between rounded-lg p-1 sm:p-2 border border-gray-500'>

                        <button
                            onClick={() => handleTabBtn(true)}
                            className={`btn bg-[#252930] sm:py-1 px-2 rounded-md ${isActive ? 'bg-[#252930] text-white'
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


                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as "rating" | "calories" | "duration")}
                        defaultValue="Pick a Runtime"
                        className="select select-success"
                    >
                        <option disabled={true}>Sort By</option>
                        <option value={"rating"}>Rating</option>
                        <option value={"calories"}>Calories</option>
                        <option value={"duration"}>Durations</option>
                    </select>



                </div>
                {isActive ? (
                    sortedTodaysPlan.length > 0 ?

                        <div className='container grid grid-cols-1 gap-2'>
                            {
                                sortedTodaysPlan.map((card: MuscleType) => <ListedCard card={card} type="todaysplan" key={card.id}></ListedCard>)
                            }


                        </div> : <NoDataSelected></NoDataSelected>
                ) :
                    (sortedSaveLetter.length > 0 ?

                        <div className='container grid grid-cols-1 gap-2'>
                            {
                                sortedSaveLetter.map((card: MuscleType) => <ListedCard card={card} type="saveLetter" key={card.id}></ListedCard>)
                            }


                        </div> : <NoDataSelected></NoDataSelected>
                    )

                }

            </div>

        </div >
    );
};

export default ListedDetailsPage;