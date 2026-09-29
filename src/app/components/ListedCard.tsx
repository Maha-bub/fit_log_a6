import { MuscleType } from "@/types/muscle.type";
import Image from "next/image";
import { IoIosStarOutline } from "react-icons/io";
import { IoTrashBin } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { PiBowlFoodLight } from "react-icons/pi";

const ListedCard = ({ card }: { card: MuscleType }) => {
    const { image, name, equipment, rating, caloriesBurned, duration } = card;
    return (
        <div className="flex justify-between items-center bg-[#13161D] border border-gray-400 rounded-2xl p-3 mt-5">

            <div className="flex justify-between gap-4 items-center rounded-2xl">

                <Image
                    src={image}
                    width={150}
                    height={100}
                    alt={name}
                    className="rounded-xl h-24 w-42"
                ></Image>
                <div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">{name}</h2>
                    <p className="text-lg text-gray-400">{equipment}</p>
                    <div className='flex justify-items-start space-x-6 py-3'>
                        <span className='flex gap-2 justify-between items-center text-md '><MdOutlineWatchLater className=" text-[#C6F602]" />{duration}</span>
                        <span className='flex gap-2 justify-between items-center text-md '><PiBowlFoodLight className=" text-[#C6F602]" />{caloriesBurned}</span>
                        <span className='flex gap-2 justify-between items-center text-md '><IoIosStarOutline className=" text-[#C6F602]" />{rating}</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 px-5">
                <button className="btn btn-outline text-lg border rounded-full py-3 font-semibold">Viwe Details</button>
                <button className='btn bg-[#C6F602] text-lg border rounded-full py-3 text-black font-semibold'>Marks as done</button>
                <button> <IoTrashBin /></button>
            </div>



        </div>
    );
};

export default ListedCard;