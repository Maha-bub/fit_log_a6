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
                    <div className=" ">
                        <p className="flex justify-between"><span className="text-sm font-semibold uppercase ">Equipment</span> <span>{equipment}</span></p>
                        <p className="flex justify-between"><span className="text-sm font-semibold uppercase ">Difficulty</span> <span>{difficulty}</span></p>
                        <p className="flex justify-between"><span className="text-sm font-semibold uppercase ">Sets</span> <span>{sets}</span></p>
                        <p className="flex justify-between"><span className="text-sm font-semibold uppercase ">Reps</span> <span>{reps}</span></p>
                        <p className="flex justify-between"><span className="text-sm font-semibold uppercase ">Duration</span> <span>{duration}</span></p>
                        <p className="flex justify-between"><span className="text-sm font-semibold uppercase ">Calories</span> <span>{caloriesBurned}</span></p>
                        <p className="flex justify-between"><span className="text-sm font-semibold uppercase ">Rating</span> <span>{rating}</span></p>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default MuscleDetailCard;