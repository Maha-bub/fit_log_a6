'use client'
import { MuscleContextType } from "@/types/muscleContext.type";
import { useContext } from "react";
import { IoTrashBin } from "react-icons/io5";
import { MuscleContext } from "../context/MuclesContext";
import { toast } from "react-toastify";
import { MuscleType } from "@/types/muscle.type";

const RemoveCard = ({ card }: { card: MuscleType }) => {
    const { todaysPlan, setTodaysPlan, saveLetter, setSaveLetter } = useContext(MuscleContext) as MuscleContextType;
    const handleRemoveCard = (card: MuscleType) => {
        const remainingCards = todaysPlan.filter(selectedCard => selectedCard.id !== card.id);
        setTodaysPlan(remainingCards);
        
        const remainingSaveCards = saveLetter.filter(selectedCard => selectedCard.id !== card.id);
        setSaveLetter(remainingSaveCards);
        // toast.warning(`${card.name} Card Remove Successfully!`)
        toast.warning(`${card.name} Card Remove Successfully!`)

    }
    return <button onClick={() => handleRemoveCard(card)}> <IoTrashBin /></button>


};

export default RemoveCard;