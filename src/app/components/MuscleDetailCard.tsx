
import { MuscleType } from "@/types/muscle.type";
import Image from "next/image";
import { HiBookmark } from "react-icons/hi";
import TodaysPlanButton from "../MuscleDetailButtons/TodaysPlanButton";
import SaveLetter from "../MuscleDetailButtons/SavedLetter";

interface MuscleDetailProps {
    muscle: MuscleType
}
const MuscleDetailCard = ({ muscle }: MuscleDetailProps) => {
    console.log(muscle, 'clicked muscled ');
    const { muscleGroups, equipment, difficulty, reps, duration, caloriesBurned, rating, sets, instructions } = muscle;
    return (
        <div className="container mx-auto mt-5 md:mt10 lg:mt-12">
            <div className="flex flex-col-reverse justify-center gap-6 py-5 lg:flex-row">

                <Image
                    src={muscle.image}
                    width={400}
                    height={500}
                    alt={muscle.name}
                    className="w-6/12 mx-auto rounded-2xl"
                >
                </Image>

                <div className="space-y-3 mx-auto w-10/12 max-w-full">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">{muscle.name}</h2>
                    <p className="sm:text-lg text-gray-400" >{muscle.description}</p>
                    <ul className="flex gap-3 mt-3 mb-3">
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

                        <p className="flex items-center text-sm md:text-lg justify-between border-b border-gray-800 px-6 py-1 md:py-3">
                            <span className="text-sm md:font-semibold uppercase text-gray-400">
                                Equipment
                            </span>
                            <span className="text-gray-200">
                                {equipment}
                            </span>
                        </p>

                        <p className="flex items-center text-sm md:text-lg justify-between border-b border-gray-800 px-6 py-1 md:py-3">
                            <span className="text-sm md:font-semibold uppercase text-gray-400">
                                Difficulty
                            </span>
                            <span className="text-gray-200">
                                {difficulty}
                            </span>
                        </p>

                        <p className="flex items-center text-sm md:text-lg justify-between border-b border-gray-800 px-6 py-1 md:py-3">
                            <span className="text-sm md:font-semibold uppercase text-gray-400">
                                Sets
                            </span>
                            <span className="text-gray-200">
                                {sets}
                            </span>
                        </p>

                        <p className="flex items-center text-sm md:text-lg justify-between border-b border-gray-800 px-6 py-1 md:py-3">
                            <span className="text-sm md:font-semibold uppercase text-gray-400">
                                Reps
                            </span>
                            <span className="text-gray-200">
                                {reps}
                            </span>
                        </p>

                        <p className="flex items-center text-sm md:text-lg justify-between border-b border-gray-800 px-6 py-1 md:py-3">
                            <span className="text-sm md:font-semibold uppercase text-gray-400">
                                Duration
                            </span>
                            <span className="text-gray-200">
                                {duration}
                            </span>
                        </p>

                        <p className="flex items-center text-sm md:text-lg justify-between border-b border-gray-800  px-6 py-1 md:py-3">
                            <span className="text-sm md:font-semibold uppercase text-gray-400">
                                Calories
                            </span>
                            <span className="text-gray-200">
                                {caloriesBurned}
                            </span>
                        </p>

                        <p className="flex items-center text-sm md:text-lg  justify-between px-6 py-1 md:py-3">
                            <span className="text-sm md:font-semibold uppercase text-gray-400">
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
                            instructions.map((instruction, idx) => <li className="text-sm md:text-lg text-gray-400" key={idx}> <span>{idx + 1}.{instruction}</span></li>)
                        }
                    </ul>
                    <div className=" flex flex-col mx-auto md:flex-row justify-start gap-4 items-center">
                        <TodaysPlanButton muscle={muscle}></TodaysPlanButton>
                        <SaveLetter muscle={muscle}></SaveLetter>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MuscleDetailCard;