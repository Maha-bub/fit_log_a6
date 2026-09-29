import { MuscleType } from "@/types/muscle.type";
import MusclesCard from "./MusclesCard";

const getMuscles = async (): Promise<MuscleType[]> => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    return await res.json()
}

const Muscles = async () => {
    const musclesData = await getMuscles();
    // console.log(musclesData)
    return (
        <div className="container mx-auto space-y-3 px-4">
            <h2 className="text-3xl font-semibold uppercase ">The Library</h2>
            <p className="text-lg font-sans">Twelve lifts covering every major muscle group.</p>
            <div className="grid-cols-1 w-11/12 md:w-11/12 lg:w-full lg:grid lg:grid-cols-3 grid-rows-4 gap-4 ">
                {
                    musclesData.map((muscle: MuscleType) => <MusclesCard key={muscle.id} muscle={muscle}></MusclesCard>)
                }
            </div>

        </div>
    );
};

export default Muscles;