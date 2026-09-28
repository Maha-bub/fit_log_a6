import { MuscleType } from "@/types/muscle.type";
import Image from "next/image";
import { HiBookmark } from "react-icons/hi";
import { LuNotepadText } from "react-icons/lu";
import { MdToday } from "react-icons/md";

interface MuscleDetailProps {
    muscle: MuscleType
}
const MuscleDetailCard = ({ muscle }: MuscleDetailProps) => {
    console.log(muscle, 'clicked muscled ');
    const { muscleGroups, equipment, difficulty, reps, duration, caloriesBurned, rating, sets, instructions } = muscle;
    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center gap-6">
                <Image
                    src={muscle.image}
                    width={500}
                    height={500}
                    alt={muscle.name}
                    className="w-6/12 rounded-2xl"
                >
                </Image>
                <div>
                    <h2 className="text-4xl font-bold">{muscle.name}</h2>
                    <p className="text-lg text-gray-400" >{muscle.description}</p>
                    <ul className="flex gap-3 mt-5 mb-3">
                        {muscleGroups.map((batch) => (
                            <li
                                key={batch}
                                className="text-[16px] bg-[#C6F602] py-0.5 px-4 rounded-full text-black"
                            >
                                {batch}
                            </li>
                        ))}
                    </ul>
                    <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#15171D]">

                        <p className="flex items-center justify-between border-b border-gray-800 px-6 py-5">
                            <span className="text-sm font-semibold uppercase text-gray-400">
                                Equipment
                            </span>
                            <span className="text-gray-200">
                                {equipment}
                            </span>
                        </p>

                        <p className="flex items-center justify-between border-b border-gray-800 px-6 py-5">
                            <span className="text-sm font-semibold uppercase text-gray-400">
                                Difficulty
                            </span>
                            <span className="text-gray-200">
                                {difficulty}
                            </span>
                        </p>

                        <p className="flex items-center justify-between border-b border-gray-800 px-6 py-5">
                            <span className="text-sm font-semibold uppercase text-gray-400">
                                Sets
                            </span>
                            <span className="text-gray-200">
                                {sets}
                            </span>
                        </p>

                        <p className="flex items-center justify-between border-b border-gray-800 px-6 py-5">
                            <span className="text-sm font-semibold uppercase text-gray-400">
                                Reps
                            </span>
                            <span className="text-gray-200">
                                {reps}
                            </span>
                        </p>

                        <p className="flex items-center justify-between border-b border-gray-800 px-6 py-5">
                            <span className="text-sm font-semibold uppercase text-gray-400">
                                Duration
                            </span>
                            <span className="text-gray-200">
                                {duration}
                            </span>
                        </p>

                        <p className="flex items-center justify-between border-b border-gray-800 px-6 py-5">
                            <span className="text-sm font-semibold uppercase text-gray-400">
                                Calories
                            </span>
                            <span className="text-gray-200">
                                {caloriesBurned}
                            </span>
                        </p>

                        <p className="flex items-center justify-between px-6 py-5">
                            <span className="text-sm font-semibold uppercase text-gray-400">
                                Rating
                            </span>
                            <span className="text-gray-200">
                                {rating}
                            </span>
                        </p>

                    </div>
                    <h3 className="text-3xl font-semibold">Instructions</h3>
                    <ul>
                        {
                            instructions.map((instruction, idx) => <li className="text-lg text-gray-400" key={idx}> <span>{idx + 1}.{instruction}</span></li>)
                        }
                    </ul>
                    <div className="flex justify-start gap-4 items-center">
                        <button className='btn bg-[#C6F602] text-lg border rounded-xl text-black font-semibold'>
                            <MdToday /> Add to today&apos;s plan
                        </button>
                        <button className='btn btn-outline text-lg border rounded-xl border-slate-500 font-semibold'>
                            <HiBookmark className="" /> Save for letter
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MuscleDetailCard;