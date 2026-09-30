import { MuscleType } from "@/types/muscle.type";
import Image from "next/image";
import { IoIosStarOutline } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { PiBowlFoodLight } from "react-icons/pi";
import RemoveCard from "./RemoveCard";
import Link from "next/link";
import MarksAsDone from "../MuscleDetailButtons/MarksAsDone";
import { FcViewDetails } from "react-icons/fc";


const ListedCard = ({ card }: { card: MuscleType }) => {
    const { image, name, equipment, rating, caloriesBurned, duration } = card;
    return (
        <div className="flex justify-between items-center bg-[#13161D] border border-gray-400 rounded-2xl p-3 mt-5">

            <div className="flex justify-between gap-4 items-center rounded-2xl">

                <Image
                    src={image}
                    width={0}
                    height={0}
                    alt={name}
                    className="w-16 h-16 md:h-25 rounded-xl md:w-40"
                ></Image>
                <div>
                    <h2 className="text-lg md:text-2xl lg:text-3xl font-bold">{name}</h2>
                    <p className="text-sm md:text-lg text-gray-400">{equipment}</p>
                    <div className='flex justify-items-start space-x-1 md:space-x-6 py-1 md:py-3'>
                        <span className='flex gap-0.5 md:gap-2 justify-between items-center text-md '><MdOutlineWatchLater className=" text-[#C6F602]" />{duration}</span>
                        <span className='flex gap-0.5 md:gap-2 justify-between items-center text-md '><PiBowlFoodLight className=" text-[#C6F602]" />{caloriesBurned}</span>
                        <span className='flex gap-0.5 md:gap-2 justify-between items-center text-md '><IoIosStarOutline className=" text-[#C6F602]" />{rating}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-5">
                <Link href={`muscles/${card.id}`}>
                    <button className="btn md:btn-outline text-sm border rounded-full py-1 md:py-3 flex items-center justify-center gap-2"><span className="hidden md:inline">Viwe Details</span>
                    <FcViewDetails className="inline md:hidden w-5 h-5" /></button>
                </Link>

                <MarksAsDone></MarksAsDone>
                <RemoveCard key={card.id} card={card}></RemoveCard>
            </div>



        </div>
    );
};

export default ListedCard;