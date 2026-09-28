import MusclesCard from "../components/MusclesCard";

const getMuscles = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    return await res.json()
}

const Muscles = async () => {
    const musclesData = await getMuscles();
    // console.log(musclesData)
    return (
        <div>
            <div className="grid-cols-1 w-10/12 sm:w-11/12 lg:w-full lg:grid lg:grid-cols-3 grid-rows-4 gap-4 container mx-auto">
                {
                    musclesData.map((muscle, idx) => <MusclesCard key={idx} muscle={muscle}></MusclesCard>)
                }
            </div>

        </div>
    );
};

export default Muscles;