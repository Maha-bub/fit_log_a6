import { MuscleType } from "./muscle.type";

export type MuscleContextType = {
    todaysPlan: MuscleType[];
    saveLetter: MuscleType[];
    setTodaysPlan: React.Dispatch<React.SetStateAction<MuscleType[]>>;
    setSaveLetter: React.Dispatch<React.SetStateAction<MuscleType[]>>;
};