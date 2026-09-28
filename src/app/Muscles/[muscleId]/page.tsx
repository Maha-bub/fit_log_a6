import { MuscleType } from '@/types/muscle.type';
import React from 'react';
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

    console.log('Params id', muscle);


    return (
        <div>
            muscle detail!
        </div>
    );
};

export default MuscleDetailPage;