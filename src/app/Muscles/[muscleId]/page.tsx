import MuscleDetailCard from '@/app/components/MuscleDetailCard';
import { MuscleType } from '@/types/muscle.type';

interface MuscleParamsProps {
    params: Promise<{
        muscleId: number;
    }>
}
const getMuscles = async (): Promise<MuscleType[]> => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    return await res.json()
}
const MuscleDetailPage = async ({ params }: MuscleParamsProps) => {
    const { muscleId } = await params;
    const muscledData = await getMuscles();
    const muscle = muscledData.find((muscle: MuscleType) => Number(muscle.id) === Number(muscleId))

    // console.log('Params id', muscle);
    if (!muscle) {
        return <h2>Data Not Found!</h2>
    }

    return (
        <div>
            <MuscleDetailCard key={muscle.id} muscle={muscle}></MuscleDetailCard>
        </div>
    );
};

export default MuscleDetailPage;