import { MuscleType } from "@/types/muscle.type";
import Image from "next/image";

interface MuscleDetailProps {
    muscle: MuscleType
}
const MuscleDetailCard = ({ muscle }: MuscleDetailProps) => {
    console.log(muscle, 'clicked muscled ');
    const { muscleGroups, equipment, difficulty, reps, duration, caloriesBurned, rating, sets } = muscle;
    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center">
                <Image
                    src={muscle.image}
                    width={500}
                    height={500}
                    alt={muscle.name}>
                </Image>
                <div>
                    <h2>{muscle.name}</h2>
                    <p>{muscle.description}</p>
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

                </div>
            </div>


        </div>
    );
};

export default MuscleDetailCard;